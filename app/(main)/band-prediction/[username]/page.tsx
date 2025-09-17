'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { QuickTestData as questions } from '@/data';
import axios from 'axios';
import { Button } from '@/components/ui/button';

const QuickTestPage = () => {
    const { username } = useParams<{username: string}>();
    const { toast } = useToast();

    const [hasTakenTest, setHasTakenTest] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300); 
    const [responses, setResponses] = useState<{ [key: number]: string }>({}); 

    useEffect(() => {
        const checkIfUserHasTakenTest = async () => {
            try {
                const response = await axios.post('/api/bandPrediction/checkTest', { username });

                if (response.data.hasTakenTest) {
                    setHasTakenTest(true);
                    toast({
                        title: "Test Already Taken",
                        description: "You have already completed the Quick Test.",
                        variant: "destructive",
                    });
                } else {
                    setHasTakenTest(false);
                }
            } catch (error: any) {
                console.log("Error checking test status: ", error);
                toast({
                    title: "Quick Test Error!",
                    description: error.message,
                    variant: "destructive",
                });
            }
        };

        checkIfUserHasTakenTest();

        // Start the timer only if the test has not been taken
        let interval: NodeJS.Timeout | null = null;
        if (!hasTakenTest) {
            interval = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 0) {
                        clearInterval(interval as NodeJS.Timeout);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        // Alert on page navigation
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            event.returnValue = "Your answers will be unsaved if you leave this page.";
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [username, toast, hasTakenTest]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    const handleAnswerChange = (questionIndex: number, option: string) => {
        setResponses(prev => ({ ...prev, [questionIndex]: option }));
    };

    const handleSubmit = async () => {
        if (hasTakenTest) { 
            toast({
                title: "Test Already Taken",
                description: "You have already completed the Quick Test.",
                variant: "destructive",       
            })
            return;
        }
        try {
            const response = await axios.post('/api/bandPrediction/submitQuickTest', {
                username,
                responses
            });
            if (response.data.success) { 
                toast({
                    title: "Test Submitted",
                    description: response.data.message,
                });
                setHasTakenTest(true)
            } else { 
                toast({
                    title: "Test Submission Failed!",
                    description: response.data.message,
                    variant: "destructive"
                });
            }
        } catch (error: any) { 
            console.log("Error submitting test: ", error);
            toast({
                title: "Submission Error",
                description: error.message,
                variant: "destructive",
            });
        }
    };

    return (
        <div className="h-screen flex flex-col">
            <div className="flex justify-between p-4 border-b border-gray-300">
                <div className="text-h7-clamp font-bold">Quick Test</div>
                <div className="text-h7-clamp font-bold"> Time Left: {formatTime(timeLeft)}</div>
            </div>
            <div className="flex flex-grow overflow-hidden">
                <div className="flex flex-col md:flex-grow gap-4 md:flex-row overflow-hidden h-[80vh] ">
                    <div className="md:w-1/2 p-4 border-b-8 md:border-r overflow-y-auto no-scrollbar h-full">
                        <h2 className="text-h7-clamp font-semibold mb-4">Reading Passage</h2>
                        {questions.passage.paragraphs.map((para, index) => (
                            <p key={index} className="text-h6-clamp text-justify mb-4">{para}</p>
                        ))}
                    </div>
                    <div className="md:w-1/2 p-4 overflow-y-auto h-full no-scrollbar">
                        <div className="space-y-4">
                            <h6 className="text-h7-clamp font-bold"> Questions </h6>
                            <div className="space-y-6">
                                {questions.questions.map((q, index) => (
                                    <div key={index} className="mb-4">
                                        <p className="text-h5-clamp font-medium mb-1">{index + 1}. {q.question}</p>
                                        {q.options.map((option, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <input 
                                                    type="radio" 
                                                    id={`q${index}-o${idx}`} 
                                                    disabled={hasTakenTest}
                                                    name={`q${index}`} 
                                                    value={option}
                                                    checked={responses[index] === option}
                                                    onChange={() => handleAnswerChange(index, option)}
                                                    className="mr-2" 
                                                />
                                                <label htmlFor={`q${index}-o${idx}`} className="text-h6-clamp">{option}</label>
                                            </div>
                                        ))}
                                        {hasTakenTest && <p className="mt-2 text-h5-clamp text-gray-700">Explanation: {q.explanation}</p>}
                                    </div>
                                ))}
                            </div>
                            <Button type='submit' disabled={hasTakenTest} onClick={handleSubmit} >
                                Submit Test
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickTestPage
