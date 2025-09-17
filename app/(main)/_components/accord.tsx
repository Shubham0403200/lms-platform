'use client';
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

// TEMP FAQ DATA MODEL
export interface TempFAQ {
  question: string;
  answer: string;
}

// TEMP FAQS
const tempFaqs: TempFAQ[] = [
  { question: "How do I enroll in a course?", answer: "You can enroll by clicking on the 'Enroll Now' button on the course page and following the instructions." },
  { question: "What payment methods are accepted?", answer: "We accept credit/debit cards, PayPal, and other popular online payment methods." },
  { question: "Can I get a refund?", answer: "Yes, you can request a refund within 7 days of purchase if you are not satisfied." },
  { question: "Do I get a certificate?", answer: "Yes, all completed courses provide a certificate of completion." },
];

const Accord = () => {
  const [faqs, setFaqs] = useState<TempFAQ[]>([]);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setFaqs(tempFaqs);
    }, 500);
  }, []);

  return (
    <Card className="p-4">
      <h4 className="font-bold text-center text-slate-950 text-h3-clamp">
        Frequently Asked <span className="text-blue-600">Questions?</span>
      </h4>
      <p className="text-center text-muted-foreground text-h6-clamp mb-4">
        Have questions? We have answers! Explore our FAQs to find quick solutions.
      </p>
      {faqs.length > 0 ? (
        <Accordion type="single" collapsible>
          {faqs.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='text-h6-clamp'>
                {index + 1}. {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-h7-clamp'>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-10 space-y-2">
          <Image src="/no-blogs.svg" width={200} height={200} alt="no courses" className="mx-auto" />
          <h4 className="text-h4-clamp font-bold mt-2">No FAQS Yet!</h4>
          <p className="text-h6-clamp text-muted-foreground italic">Be the first to ask us something.</p>
        </div>
      )}
    </Card>
  );
};

export default Accord;
