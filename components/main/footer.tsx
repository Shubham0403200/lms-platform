"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { footerCompany, footerLegal, footerLinks, footerServices } from "@/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Loader2 } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {

    if (!email) {
      toast({ title: "Enter an email", description: "We need your email to send updates." });
      return;
    }

    setIsSubmitting(true);
    try {
      toast({ title: "Email Submitted!", description: "You'll receive IELTS news and updates." });
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed!",
        description: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 w-full py-6 px-4 md:px-8">
      {/* Top: Newsletter CTA */}
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-2">
        <h2 className="text-h2-clamp font-extrabold text-slate-800">
          Let&apos;s Get Started with <span className="text-blue-600">Something Great</span>
        </h2>
        <p className="text-h5-clamp text-muted-foreground max-w-2xl">
          Join 10,000+ students already preparing with IELTS Strategies 101.
        </p>
        <div className="flex mt-4 items-center justify-center">
          <Input
            type="email"
            placeholder="example@gmail.com"
            className="w-full sm:w-[300px] h-10 border border-slate-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={handleSubscribe}
            disabled={isSubmitting}
            className="h-10 px-5 rounded-md text-xs"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Please Wait
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Brand Description */}
        <div className="md:col-span-2 text-slate-700 text-h6-clamp font-medium">
          At <strong>IELTS Strategies 101</strong>, we provide world-class learning tools, mock tests, AI tutors, and more to get you exam-ready — fast.
        </div>

        {/* Links Grid */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-h4-clamp font-bold mb-2 text-slate-800">Company</h4>
            <ul className="space-y-1">
              {footerCompany.map((item) => (
                <li key={item.name}>
                  <Link href={item.route} className="text-h6-clamp capitalize text-slate-700 hover:text-slate-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-h4-clamp font-bold mb-2 text-slate-800">Services</h4>
            <ul className="space-y-1">
              {footerServices.map((item) => (
                <li key={item.name}>
                  <Link href={item.route} className="text-h6-clamp capitalize text-slate-700 hover:text-slate-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-h4-clamp font-bold mb-2 text-slate-800">Legal</h4>
            <ul className="space-y-1">
              {footerLegal.map((item) => (
                <li key={item.name}>
                  <Link href={item.route} className="text-h6-clamp capitalize text-slate-700 hover:text-slate-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-slate-200 my-10" />

      {/* Bottom: Socials + Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-h6-clamp">
        <p className="text-slate-600 text-h7-clamp text-center md:text-left">
          Developed by Shubham Awasthi. &copy; {new Date().getFullYear()} IELTS Strategies 101. All rights reserved.
        </p>

        <div className="flex gap-4">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            return (
              <TooltipProvider key={link.link}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={link.link} target="_blank">
                      <Icon className="w-5 h-5 text-muted-foreground hover:text-blue-600 transition" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
