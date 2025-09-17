import { Metadata } from "next";
import React from "react";
import CareerComponent from "./_components/career-component";

export const metadata: Metadata = {
  title:
    "Careers at IELTS Strategies 101 – Join Our Mission to Empower Learners",
  description:
    "Looking to work in a fast-growing EdTech company? Explore career opportunities at IELTS Strategies 101 and become a part of our expert team shaping IELTS success stories worldwide.",
  keywords: [
    "ielts jobs",
    "ielts strategies 101 careers",
    "ielts tutor hiring",
    "ielts content writer jobs",
    "work at ielts strategies 101",
    "online teaching jobs",
    "ielts coaching jobs",
    "english language trainer jobs",
    "remote jobs for english teachers",
    "careers in edtech",
    "ielts trainer openings",
    "online ielts jobs",
    "teaching ielts online",
    "ielts preparation platform hiring",
  ],
  openGraph: {
    title: "Careers at IELTS Strategies 101 – Join Our Growing EdTech Team",
    description:
      "We’re hiring! Discover open roles for IELTS trainers, content creators, and education marketers at IELTS Strategies 101. Help students achieve their dream scores.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/careers`,
    siteName: "IELTS Strategies 101",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-careers.jpg`,
        width: 1200,
        height: 630,
        alt: "Careers at IELTS Strategies 101",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join IELTS Strategies 101 – We’re Hiring!",
    description:
      "Explore teaching, writing, and support roles at IELTS Strategies 101. Remote-friendly opportunities for passionate educators and creators.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-careers.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/careers`,
  },
};

const CareerPage = () => {
  return <CareerComponent />;
};
export default CareerPage;
