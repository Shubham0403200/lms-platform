"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
    
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f9fbff] via-[#ffffff] to-[#eef3ff] py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-24 w-[300px] h-[300px] bg-blue-100 rounded-full opacity-30 blur-[120px] z-0" />
      <div className="absolute -bottom-20 -right-24 w-[250px] h-[250px] bg-pink-100 rounded-full opacity-40 blur-[100px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-xl"
        >
          <h2 className="text-h1-clamp font-extrabold text-slate-800 leading-tight">
            Ready to <span className="text-blue-600">Level Up <br/> </span> Your English Journey?
          </h2>
          <p className="text-h6-clamp text-muted-foreground mt-4 max-w-xl">
            Whether it&apos;s IELTS, CELPIP or PTE — we have everything you need: video courses, live classes, AI tutors & mock tests.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <Link href="/courses">
              <Button className="rounded-full px-6 text-sm shadow-md bg-blue-600 hover:bg-blue-700 text-white transition">
                Start Learning
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="ghost" className="text-sm text-blue-600 hover:underline">
                Watch Demo Video →
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 shadow-lg rounded-3xl w-full max-w-md p-6 flex flex-col gap-4 backdrop-blur-sm"
        >
          <h3 className="text-h4-clamp font-bold text-slate-900">
            🎓 Upcoming Masterclass
          </h3>
          <p className="text-h6-clamp text-slate-600 leading-relaxed">
            &quot;Band 9 Hacks for IELTS Speaking&quot; — with our lead expert. Learn how to impress examiners every time.
          </p>
          <div className="text-h7-clamp text-slate-500">
            <strong className="text-slate-800">Date:</strong> 15 July, 6 PM IST <br />
            <strong className="text-slate-800">Platform:</strong> Zoom
          </div>
          <Link href="/events" className="w-fit">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-xs text-blue-600 border-blue-500 hover:bg-blue-50"
            >
              Reserve Your Seat
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
