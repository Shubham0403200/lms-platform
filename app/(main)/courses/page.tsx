import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CoursePage = dynamic(() => import("./_components/course-page"), { ssr: false });

export const metadata: Metadata = {
  title: "101 Courses",
  description:
    "Explore upcoming IELTS workshops, webinars, and exclusive training Courses. Discover what IELTS Strategies 101 has in store for you.",
  keywords: ["ielts courses", 'ielts free courses', 'ielts strategies 101 courses', '101 courses', 'ielts course free', 'ielts full course free', 'english course', 'english free courses', 'english courses' ], 
  openGraph: {
    title: "101 Courses",
    description:
      "Stay updated on IELTS training Courses, live classes, and special offers. Join our upcoming sessions now.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses`,
    siteName: "IELTS Strategies 101",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-Courses.jpg`,
        width: 1200,
        height: 630,
        alt: "101 Courses - IELTS Strategies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "101 Courses | IELTS Strategies 101",
    description:
      "Live workshops, strategy sessions, and coaching webinars to boost your IELTS score.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-Courses.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/courses`,
  },
};

export default function Courses() {
  return <CoursePage />;
}
