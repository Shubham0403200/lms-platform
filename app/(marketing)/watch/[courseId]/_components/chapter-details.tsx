'use client'
import { Chapter } from '@/backend/models/Courses';
import { Preview } from '@/components/context/preview';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

interface ChapterDetailsProps {
  chapter: Chapter | null;  
  userId: string | null; 
  courseId: string | null; 
  getChapterDetails: () => void;
}
  
const ChapterDetails: React.FC<ChapterDetailsProps> = ({ chapter, userId, courseId, getChapterDetails }) => {
  const [answers, setAnswers] = useState<{ questionId: string; questionType: string; answer: string[] }[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const { toast } = useToast();

  if (!chapter) {
    return <div>No chapter selected</div>;
  }

  const handleAnswerChange = (questionId: string, questionType: string, option: string) => {
    setAnswers((prevAnswers) => {
      const existingAnswer = prevAnswers.find((ans) => ans.questionId === questionId);
  
      if (questionType === 'checkbox') {
        if (existingAnswer) {
          const newAnswers = existingAnswer.answer.includes(option)
            ? existingAnswer.answer.filter((ans: string) => ans !== option) 
            : [...existingAnswer.answer, option]; 
  
          return prevAnswers.map((ans) =>
            ans.questionId === questionId ? { ...ans, answer: newAnswers } : ans
          );
        } else {
          return [...prevAnswers, { questionId, questionType, answer: [option] }];
        }
      } else if (questionType === 'radio') {
        if (existingAnswer) {
          return prevAnswers.map((ans) =>
            ans.questionId === questionId ? { ...ans, answer: [option] } : ans
          );
        } else {
          return [...prevAnswers, { questionId, questionType, answer: [option] }];
        }
      }
  
      return prevAnswers;
    });
  };
  
  const handleSubmitQuiz = async () => {
    setSubmitting(true);
    try {
      console.log("response: ", answers);
      const response = await axios.put(`/api/dashboard/myCourses/${userId}/${courseId}`, {
        chapterId: chapter._id,
        answers, 
      });
      if (response.data.success) { 
        toast({
            title: response.data.message, 
            description: response.data.scoreText, 
        })
        setAnswers([]);
      } else { 
        toast({
            title: 'Failed to Submit Quiz', 
            description: response.data.message, 
            variant: "destructive"
        })
      }
    } catch (error) {
      console.log('Error submitting quiz:', error);
    } finally {
      setSubmitting(false);
    }
  };

    const handleComplete = async () => {
    try {
      const response = await axios.put(`/api/dashboard/myCourses/${userId}/${courseId}/complete`, { 
        chapterId: chapter._id, 
      });
      if (response.data.success) { 
        toast({
            title: response.data.message, 
            description: response.data.scoreText, 
        })
        getChapterDetails();
      } else { 
        toast({
            title: 'Failed to complete Chapter', 
            description: response.data.message, 
            variant: "destructive"
        })
      }
    } catch (error) {
      console.log('Error submitting quiz:', error);
    } 
  };


  return (
    <div className='space-y-4 p-3 md:p-4'>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-x-2">
          <Link href='/dashboard/my-courses'>
            <ArrowLeft className='w-4 h-4 mr-2' />
          </Link>
          <span className="text-h5-clamp font-semibold capitalize">
            {chapter.chapterTitle}
          </span>
        </div>
        <Button size="sm" variant="outline" className='text-xs' onClick={handleComplete} >
            {chapter?.isWatched ? "Mark as Incomplete" : "Mark as Complete"}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <div className="aspect-video mt-2 rounded-lg">
            {chapter?.video?.youtube_link && (
              <iframe
                width="100%"
                height="100%"
                src={chapter.video.youtube_link}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className="rounded-md"
              ></iframe>
            )}
            {chapter?.video.secure_url && (
              <ReactPlayer
                width="100%"
                height="100%"
                className="rounded-lg"
                url={chapter.video.secure_url}
                controls
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                      disablePictureInPicture: true,
                    },
                  },
                }}
              />
            )}
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          {chapter.chapterResources.length > 0 && (
            <Card className="p-2 overflow-x-hidden">
              <h5 className="text-h5-clamp font-semibold capitalize text-slate-900 mb-3">
                Course Resources:
              </h5>
              <div className="space-y-3">
                {chapter.chapterResources.map((text, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 font-normal text-slate-800 text-h6-clamp hover:underline"
                  >
                    <a href={text} target="_blank" rel="noopener noreferrer" className='line-clamp-1'>
                      {index + 1}. {text}
                    </a>
                  </li>
                ))}
              </div>
            </Card>
          )}
          {chapter.chapterQuiz.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='destructive' size='sm' className='text-xs rounded-full w-full'>
                  Take a Quiz
                </Button>
              </DialogTrigger>
              <DialogContent className='p-2' >
                <DialogHeader>
                  <DialogTitle className='text-h5-clamp'>
                    {chapter.chapterTitle} Quiz
                  </DialogTitle>
                  <DialogDescription className='text-h6-clamp'>
                    Complete the Quiz to learn the course quickly!
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-2">
                  {chapter.chapterQuiz.map((chap, index) => (
                    <div key={String(chap._id)}>
                      <h5 className="text-h5-clamp font-semibold">
                        {index + 1}. {chap.question}
                      </h5>
                      {chap.options.map((option: any) => (
                        <div className="flex items-center" key={option}>
                          <Input
                            type={chap.questionType}
                            className={cn(
                              "w-4 h-4 mr-2",
                              chap.questionType === "text" && "w-full h-6 p-2 outline-1"
                            )}
                            checked={answers.find((ans) => ans.questionId === chap._id.toString())?.answer.includes(option) || false}
                            onChange={() => handleAnswerChange(chap._id.toString(), chap.questionType, option)}
                          />
                          <span className="text-h6-clamp font-normal">{option}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <DialogFooter>
                  <Button onClick={handleSubmitQuiz} disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
      <Preview value={chapter.description} />
    </div>
  );
}

export default ChapterDetails;