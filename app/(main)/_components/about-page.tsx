'use client'
import FeedbackForm from '../_components/feedback-form'
import Services from '../_components/services'
import ContactForm from '../_components/contact-form'
import Accord from '../_components/accord'
import { motion } from 'framer-motion'
import AboutHeader from '../_components/about-header'
import React from 'react';

export const AboutPageComponent = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
            <div className='w-full max-w-6xl mx-auto'>
              <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
                <AboutHeader />
              </motion.div>  
                <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
                    <Services />
                </motion.div>  
              <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
                <FeedbackForm />
              </motion.div>  
                <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
                  <ContactForm />
                </motion.div>  
                <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
                  <Accord />
                </motion.div>  
            </div>
    )
}