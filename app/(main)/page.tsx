"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LatestEvents from "./_components/latest-events";
import Hero from "./_components/hero";
import { FeedbackSection } from "./_components/feedback-section";
import InstructorForm from "./_components/instructor-form";
import Course from "./_components/course";
import AboutSection from "./_components/about";
import StatsSection from "./_components/stats-section";
import HowItWorks from "./_components/how-it-works";
import Blogs from "./_components/blog";
import { CTASection } from "./_components/cta-section";
import { blogData, courseData, eventData } from "@/data/temp";
import { ITempBlog, ITempCourse, ITempEvent } from "@/data/temp-modal";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage = () => {

  const [ events, setEvents ] = useState<ITempEvent[]>([]);
  const [ courses, setCourses ] = useState<ITempCourse[]>([]);
  const [ blogs, setBlogs ] = useState<ITempBlog[]>([]);
  const [ loading, setLoading ] = useState(true); 

  useEffect(() => {
    setCourses(courseData.slice(0, 4));
    setEvents(eventData.slice(0, 3));
    setBlogs(blogData.slice(0, 4));
    setLoading(false); // mark data loaded
  }, [])


  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} 
      >
        <Hero />
      </motion.div>
            <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} // Animation happens only once
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} 
      >
        <AboutSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} 
      >
        <StatsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} // Animation happens only once
      >
        <Course courses={courses} loading={loading} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} // Animation happens only once
      >
        <InstructorForm />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} // Animation happens only once
      >
        <LatestEvents events={events} loading={loading} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} // Animation happens only once
      >
        <FeedbackSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} 
      >
        <Blogs blogs={blogs} loading={loading} />
      </motion.div>


      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }} 
      >
        <CTASection />
      </motion.div>

    </div>
  );
};

export default HomePage;
