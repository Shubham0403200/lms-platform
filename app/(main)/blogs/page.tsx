import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import blog page (client-side rendering)
const BlogsPage = dynamic(() => import("./_components/blog-page"), { ssr: false });

export const metadata: Metadata = {
  title: "101 Blogs | IELTS Strategies 101",
  description:
    "Read expert blogs, tips, and insights to boost your IELTS preparation. Get ahead with strategies, writing samples, and speaking guides.",
  openGraph: {
    title: "101 Blogs | IELTS Strategies 101",
    description:
      "Explore valuable blogs to improve your IELTS band score. Learn writing techniques, speaking tips, vocabulary boosters, and more.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
    siteName: "IELTS Strategies 101",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-blogs.jpg`,
        width: 1200,
        height: 630,
        alt: "IELTS Strategies 101 Blogs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "101 Blogs | IELTS Strategies 101",
    description:
      "The best IELTS tips, tricks, and band 8+ strategies in blog format. Stay updated and stay ahead.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-blogs.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
  },
};

export default function Blogs() {
  return <BlogsPage />;
}
