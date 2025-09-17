"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { BandMarksInfo, BandPredictionWork, BandQuestion } from "./band-question";
import BandTest from "./band-test";

export const BandPredictionPage = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

   const bandTestRef = useRef<HTMLDivElement | null>(null);

  const scrollToBandTest = () => {
    if (bandTestRef.current) {
      bandTestRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full overflow-hidden rounded-b-xl"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 " />

            {/* Content */}
            <div className="relative container mx-auto px-6 py-12 text-center text-white">
            <h1 className="text-h1-clamp md:text-h-clamp font-bold leading-tight">
                IELTS Band Prediction
            </h1>
            <p className="text-h6-clamp max-w-2xl mx-auto opacity-90">
                Estimate your band score instantly with our quick and accurate
                tests.
            </p>

            {/* Optional CTA Button */}
            <div className="mt-3">
                <button onClick={scrollToBandTest} className="bg-white text-primary text-h7-clamp font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-200">
                Take the Test
                </button>
            </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        </motion.section>

      <main className="flex flex-col flex-grow mx-auto space-y-5 py-12">
        <motion.div initial="hidden" whileInView="visible" className='text-center' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }}>
            <p className="text-h5-clamp font-normal max-w-3xl mx-auto">
            Choose a test to get an estimate of your IELTS band score. The quick
            test is for a rapid assessment, while the proper test simulates a full
            exam experience.
            </p>
        </motion.div>
        <motion.div ref={bandTestRef} initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
            <BandTest />
        </motion.div>  
        <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
            <BandQuestion />
        </motion.div>  
        <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
            <BandPredictionWork />
        </motion.div>  
        <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
            <BandMarksInfo />
        </motion.div>  
      </main>
    </div>
  );
};
