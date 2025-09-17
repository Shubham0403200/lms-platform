import { Metadata } from "next";
import Script from "next/script";
import SingleEvent from "../_components/single-event";
import { eventData } from "@/data/temp"; 
import { ITempEvent } from "@/data/temp-modal"; // use your temp interface

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const event = eventData.find((e: any) => e.slug === params.slug);

  if (!event) return { title: "Event Not Found | IELTS Strategies 101 Media" };

  return {
    title: event.name,
    description: event.description?.slice(0, 160),
    keywords: "event, ielts event, online event, offline event, mixed event",
    openGraph: {
      title: event.name,
      description: event.description?.slice(0, 160),
      images: event.thumbnail?.secure_url ? [event.thumbnail.secure_url] : [],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/events/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: event.name,
      description: event.description?.slice(0, 160),
      images: event.thumbnail?.secure_url ? [event.thumbnail.secure_url] : [],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const event = eventData.find((e: any) => e.slug === params.slug) as ITempEvent | undefined;

  if (!event) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-xl font-semibold">
        Event not found.
      </div>
    );
  }

  const eventUrl = `${process.env.NEXT_PUBLIC_APP_URL}/events/${params.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    image: event.thumbnail?.secure_url || "",
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode:
      event.mode === "online"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : event.mode === "offline"
        ? "https://schema.org/OfflineEventAttendanceMode"
        : "https://schema.org/MixedEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
    },
    description: event.description,
    offers: {
      "@type": "Offer",
      price: event.price,
      priceCurrency: "INR",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": eventUrl,
    },
    organizer: {
      "@type": "Organization",
      name: "IELTS Strategies 101",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`,
      },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Events",
        item: `${process.env.NEXT_PUBLIC_APP_URL}/events`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: event.name,
        item: eventUrl,
      },
    ],
  };

  return (
    <>
      <Script
        id="event-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <SingleEvent event={event} />
    </>
  );
}
