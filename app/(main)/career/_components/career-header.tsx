'use client'
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

export const CareerHeader = () => {
    return (
        <div className="w-full h-full py-12 md:py-16 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center flex-col justify-center rounded-b-xl">
            <h1 className="text-white text-h1-clamp font-bold">Transform Education With Us</h1>
            <p className="text-slate-200 text-h5-clamp mt-2">Join IELTS STRATEGIES 101 and help shape the future of English learning worldwide.</p>
        </div>
    );
}

export const CareerOffer = () => {
  const offers = [
    {
      img: 'https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Flexible Work Environment',
      desc: 'Choose remote work or join us at our modern collaborative office.',
    },
    {
      img: 'https://images.pexels.com/photos/30004351/pexels-photo-30004351/free-photo-of-professional-team-in-modern-office-setting.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Competitive Compensation',
      desc: 'We offer industry-standard packages that reflect your value.',
    },
    {
      img: 'https://images.pexels.com/photos/277593/pexels-photo-277593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Growth-Focused Culture',
      desc: 'Access skill-building resources, mentorship, and new challenges.',
    },
  ];

  return (
    <section className="w-full px-4 md:px-6 py-12 bg-gradient-to-br from-[#f8fbff] via-white to-[#ecf2ff] text-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-h1-clamp font-extrabold mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Join <span className="text-blue-600">IELTS Strategies 101</span>?
        </motion.h2>

        <motion.p
          className="text-h6-clamp md:text-h5-clamp text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Empower your career with a team that thrives on creativity, collaboration, and meaningful impact.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-white/70 border border-slate-200 backdrop-blur-md shadow-sm hover:shadow-md transition-all p-5 flex flex-col items-start text-left h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-h5-clamp font-semibold text-blue-700">{item.title}</h3>
              <p className="text-h6-clamp text-muted-foreground mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
