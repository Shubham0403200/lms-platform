"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public/logo.png";
import Boy from "@/public/c.png";

interface Feedback {
  id: number;
  name: string;
  feedback: string;
}

const StudentFeedbacks: React.FC = () => {

  const feedbacks: Feedback[] = [
    {
      id: 1,
      name: "Shubham Awasthi",
      feedback:
        "Take up one idea. Make that one idea your life – think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    },
    {
      id: 2,
      name: "Krisha Dagli",
      feedback:
        "Ignore those who tell you which way to go without first understanding where you are",
    },
    {
      id: 3,
      name: "Ayesha Awasthi",
      feedback:
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    },
    {
      id: 4,
      name: "Sumedh Mudgalkar",
      feedback:
        "There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.",
    },
    {
      id: 5,
      name: "Yo yo Honey Singh",
      feedback:
        "If you want to be average, focus on the performance. If you want to be the best, focus on making practice harder than performance",
    },

  ];

  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedbackIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const currentFeedback = feedbacks[currentFeedbackIndex];

  return (
    <div className=" w-full bg-slate-900 rounded-md flex items-center justify-center p-3">
      <div className="flex bg-white w-full max-h-2xl rounded-xl flex-col gap-y-3 px-5  py-3 feedbackFades">
        <div>
          <Image src={Logo} width={70} height={70} alt="Logo" className="" />
          <h4 className="text-h6-clamp font-medium text-justify mt-2">
            {currentFeedback.feedback}
          </h4>
        </div>
        <div className="flex gap-2 items-center ">
          <Image src={Boy} width={40} height={40} alt="Logo" />
          <h6 className="text-h6-clamp font-semibold "> {currentFeedback.name} </h6>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedbacks;
