'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import VideoModal from '@/components/main/video-modal';
import BookSession from './book-session';

export default function HeroSection() {

  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden py-8 sm:py-24 px-4 md:px-6">
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none z-0" />
      <div className="w-full mx-auto relative z-10 flex flex-col-reverse lg:grid lg:grid-cols-12 items-center gap-8 md:gap-12">

        <div className="col-span-7  space-y-4 md:space-y-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-h-clamp font-bold leading-tight tracking-tight text-slate-900"
          >
            IELTS Strategies 101
            <br />
            <span className="text-blue-600 font-bold text-h1-clamp">Smarter Prep, Higher Bands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-h5-clamp text-muted-foreground max-w-xl mx-auto lg:mx-0"
          >
            Master IELTS with tested strategies that helped 100K+ students achieve Band 7–9. Personalized, practical, and powerful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button size="sm" variant='default' className="rounded-full px-6 text-xs">
              📘 Start Course
            </Button>
            <BookSession />
          </motion.div>

          <div className="text-h7-clamp text-slate-500 pt-4 flex justify-center lg:justify-start gap-4">
            <span>⭐ 4.9/5 Rating</span>
            <span>🎓 100K+ Learners</span>
            <span>🧑‍🏫 8+ Years Teaching</span>
          </div>
        </div>

        {/* RIGHT: Image / Video Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="col-span-5 w-full flex justify-center"
        >
          <div className="relative rounded-2xl shadow-xl overflow-hidden w-full max-w-md aspect-video border border-slate-200 bg-white/60 backdrop-blur-md">
            <Image
              src="/girl.png"
              alt="IELTS Demo Video"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                className="bg-white text-black p-4 rounded-full text-xl shadow-md"
                onClick={() => setVideoOpen(true)}
              >
                ▶
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <VideoModal isOpen={isVideoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
