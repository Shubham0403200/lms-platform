"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { partnerTypes } from "@/data";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerCards = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const InstructorForm = () => {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-h1-clamp font-extrabold text-slate-800 mb-2">
            Empowering <span className="text-blue-600">IELTS Success</span> Together
          </h1>
          <p className="text-h6-clamp md:text-h5-clamp text-muted-foreground max-w-2xl mx-auto">
            Join our global team of mentors or back our mission to reshape English education.
          </p>
        </motion.div>

        {/* Partner Cards with staggered animation */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
        >
          {partnerTypes.map((partner, i) => (
            <motion.div
              key={partner.id}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut", delay: i * 0.15 },
                },
              }}
              className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition p-4 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {partner.icon}
                  <h2 className="text-h3-clamp font-bold text-slate-800">{partner.title}</h2>
                </div>
                <p className="text-h5-clamp text-slate-600 mb-4">{partner.description}</p>
                <ul className="space-y-2 text-h7-clamp text-slate-700">
                  {partner.bullets.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`mr-2 ${partner.bulletColor}`}>✔</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={partner.button.href} className="mt-4">
                <Button className={`w-full text-xs md:text-sm rounded-full ${partner.button.color}`}>
                  {partner.button.label}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorForm;
