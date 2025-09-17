'use client'
import { motion } from 'framer-motion'
import React from 'react';
import { CareerHeader, CareerOffer } from './career-header';
import CareerForm from './career-form';
import CareerTeam from './career-team';

const CareerComponent = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
            <div className='w-full max-w-6xl mx-auto'>
              <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
                <CareerHeader />
              </motion.div>  
              <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
                  <CareerForm />
              </motion.div>  
              <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
                <CareerOffer />
              </motion.div>  
              <motion.div initial='hidden' whileInView='visible' variants={fadeInUp} viewport={{ once: true, amount: 0.2 }} >
                <CareerTeam />
              </motion.div>  
            </div>
    )
}

export default CareerComponent;