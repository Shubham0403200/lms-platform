"use client";
import React from "react";
import { motion } from "framer-motion";
import { features } from "@/data";

const AboutHeader = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#e6f0ff] to-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <motion.h1
            className="text-h1-clamp font-extrabold text-slate-800 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Welcome to <span className="text-blue-600">IELTS Strategies 101</span>
          </motion.h1>
          <motion.p
            className="text-h5-clamp text-slate-700 mt-2 max-w-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Helping 25,000+ students globally crack IELTS, TOEFL & PTE with confidence.
          </motion.p>
        </div>
      </section>

      {/* Achievements + Intro */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2-clamp leading-tight font-bold text-slate-800 mb-4">
              Trusted by Thousands.
            </h2>
            <p className="text-h6-clamp text-slate-600 leading-relaxed">
              With over <strong>15+ years of teaching experience</strong>, we’ve guided more than{" "}
              <strong>25,000 students</strong> to their dream IELTS band scores. Whether you&apos;re
              struggling with writing, nervous about speaking, or unsure how to approach reading—
              we’ve got you covered.
            </p>
            <p className="text-h6-clamp text-slate-600 mt-4">
              We combine mentorship, mock tests, and AI-powered strategies in a proven step-by-step
              format.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-50 border border-blue-300 rounded-xl p-4 md:p-6 shadow-sm text-center">
              <p className="text-h2-clamp font-extrabold text-blue-600">25,000+</p>
              <p className="text-h5-clamp font-medium text-slate-700 mt-1">Students Trained</p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow text-center">
                  <p className="text-h3-clamp font-bold text-purple-600">9.0 Band</p>
                  <p className="text-xs text-muted-foreground">Highest Score Achieved</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow text-center">
                  <p className="text-h3-clamp font-bold text-blue-600">96%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-[#f7faff] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            className="text-center text-h2-clamp font-bold leading-tight text-slate-800 mb-5 md:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why <span className="text-blue-600">Choose Us?</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feat, index) => (
              <motion.div
                key={feat.title}
                className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-h4-clamp font-semibold text-blue-600 mb-2">{feat.title}</h4>
                <p className="text-h6-clamp text-slate-600">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute -top-20 left-0 w-[250%] h-[250px] bg-white opacity-5 rotate-6 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
          <motion.h2
            className="text-h2-clamp font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Your Band 8+ Journey Begins Here.
          </motion.h2>
          <motion.p
            className="text-h5-clamp mt-4 text-blue-100"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Enroll now and start learning smarter. Results are not optional — they’re expected.
          </motion.p>
          <motion.button
            className="mt-6 bg-white text-blue-600 font-bold text-h6-clamp px-6 py-2 rounded-full shadow hover:bg-slate-100 transition"
            whileHover={{ scale: 1.05 }}
          >
            Start Learning Today
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutHeader;
