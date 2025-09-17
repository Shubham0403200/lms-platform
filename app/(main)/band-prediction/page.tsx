import { Metadata } from 'next';
import React from 'react';
import {BandPredictionPage} from './_components/band-description';

export const metadata: Metadata = {
  title: 'Band Prediction',
  description:
    'Discover how IELTS Strategies 101 helps students ace the IELTS exam with expert-led techniques, mock tests, speaking feedback, and AI tools tailored for success.',
  keywords: [
    'check band prediction',
    'band prediction test',
    'ielts strategies 101',
    'ielts strategies 101 band prediction',
    'ielts online test',
    'ielts online test for band prediction',
    'ielts',
    'ielts mock tests',
    'ielts coaching',
  ],
  openGraph: {
    title: 'Band Prediction - IELTS Strategies 101',
    description: ' Check your IELTS band prediction with our comprehensive online test. Get personalized feedback and strategies to improve your score.',
    url: 'https://www.ieltsstrategies101.com/band-prediction',
    siteName: 'IELTS Strategies 101',
    images: [
      {
        url: 'https://www.ieltsstrategies101.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IELTS Strategies 101 – Best IELTS Learning Platform',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Band Prediction - IELTS Strategies 101',
    description: ' Check your IELTS band prediction with our comprehensive online test. Get personalized feedback and strategies to improve your score.',

    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/band-prediction`,
  },
};

const BandDescription = () => {
  return <BandPredictionPage />;
};

export default BandDescription;
