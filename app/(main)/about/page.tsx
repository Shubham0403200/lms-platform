import { Metadata } from 'next';
import React from 'react';
import { AboutPageComponent } from '../_components/about-page';

export const metadata: Metadata = {
  title: 'About IELTS Strategies 101 – Crack IELTS with Confidence',
  description:
    'Discover how IELTS Strategies 101 helps students ace the IELTS exam with expert-led techniques, mock tests, speaking feedback, and AI tools tailored for success.',
  keywords: [
    'what is ielts strategies 101',
    'about ielts strategies 101',
    'ielts strategies 101 team',
    'ielts strategies 101 mission',
    'ielts strategies 101',
    'ielts preparation',
    'ielts strategies',
    'ielts online course',
    'ielts speaking practice',
    'ielts band 9',
    'ielts writing tips',
    'ielts reading strategies',
    'ielts mock tests',
    'ielts coaching',
  ],
  openGraph: {
    title: 'About IELTS Strategies 101 – Ace Your IELTS Exam',
    description:
      'Meet the team and vision behind IELTS Strategies 101. Our mission is to help learners worldwide achieve their dream IELTS scores with smart, structured learning.',
    url: 'https://www.ieltsstrategies101.com/about',
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
    title: 'About IELTS Strategies 101 – Your IELTS Success Partner',
    description:
      'Explore how IELTS Strategies 101 empowers students with expert strategies, AI tools, and interactive lessons for top IELTS scores.',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
  },
};

const AboutPage = () => {
  return <AboutPageComponent />;
};

export default AboutPage;
