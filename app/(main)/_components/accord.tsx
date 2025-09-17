"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios'; // Make sure to import axios
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { FAQ } from "@/backend/models/FAQ";
import Image from "next/image";

const Accord = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  const getTerms = async () => {
    try {
      const response = await axios.get("/api/admin/addFaq");
      if (response.data.success) {
        setFaqs(response.data.contacts);
      }
    } catch (error) {
      console.log("get FAQS error: ", error);
    }
  };

  useEffect(() => {
    getTerms();
  }, []);

  return (
    <Card className="p-4">
      <h4 className="font-bold text-center text-slate-950 text-h3-clamp">
        Frequently Asked 
        <span className="text-blue-600"> Questions?</span>
      </h4>
      <p className="text-center text-muted-foreground text-h6-clamp mb-4">
        Have questions? We have answers! Explore our FAQs to find quick solutions.
      </p>
      <Accordion type="single" collapsible>
        {faqs.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-h6-clamp'>{index + 1}. {item.question}</AccordionTrigger>
            <AccordionContent className='text-h7-clamp'>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
        {faqs.length === 0 && (
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
