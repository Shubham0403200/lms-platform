import type { Metadata } from "next";
import dynamic from "next/dynamic";

const EventsPage = dynamic(() => import("./_components/event-page-client"), { ssr: false });

export const metadata: Metadata = {
  title: "101 Events",
  description:
    "Explore upcoming IELTS workshops, webinars, and exclusive training events. Discover what IELTS Strategies 101 has in store for you.",
  openGraph: {
    title: "101 Events",
    description:
      "Stay updated on IELTS training events, live classes, and special offers. Join our upcoming sessions now.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/events`,
    siteName: "IELTS Strategies 101",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-events.jpg`,
        width: 1200,
        height: 630,
        alt: "101 Events - IELTS Strategies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "101 Events | IELTS Strategies 101",
    description:
      "Live workshops, strategy sessions, and coaching webinars to boost your IELTS score.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-events.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/events`,
  },
};

export default function Events() {
  return <EventsPage />;
}
