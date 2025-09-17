'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative w-full py-12 sm:py-20 bg-slate-50 overflow-hidden">
      <div className="absolute -top-32 -left-40 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-20 blur-[100px] z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full h-[250px] sm:h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white/60 backdrop-blur-md"
          >
            <Image
              src="/girl.png"
              alt="IELTS coaching"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>


          {/* Right: Image/Visual Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-h2-clamp font-bold text-gray-900 leading-tight">
              We don&apos;t just teach IELTS.
              <br />
              <span className="text-blue-600">We build strategies.</span>
            </h2>

            <p className="text-h6-clamp text-muted-foreground max-w-xl">
              IELTS Strategies 101 is a proven learning system trusted by over 100,000 students. We blend real IELTS exam techniques, deep experience, and personalized content to help you unlock Band 7, 8, or 9 — wherever you are in your journey.
            </p>

            <div className="w-full mt-8">
              <Link href="/about">
                <Button variant="outline" className="rounded-full text-sm px-6">
                  Learn More →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
