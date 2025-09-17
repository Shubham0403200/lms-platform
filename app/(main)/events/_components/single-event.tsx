"use client";
import useUserStore from "@/app/store/authStore";
import { Preview } from "@/components/context/preview";
import AddComments from "@/components/main/add-comment";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { formatEventDate } from "@/lib/formatDays";
import { formatPrice } from "@/lib/utils";
import { CalendarCheck, CalendarIcon, LocateFixedIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ITempEvent } from "@/data/temp-modal";

interface SingleEventProps {
  event: ITempEvent | null;
}

const tags = ['event', 'ielts event', 'new ielts event', 'free event', 'paid event', 'online event', 'offline event'];

const SingleEvent: React.FC<SingleEventProps> = ({ event }) => {
  const [loading, setLoading] = useState(true);

  const { toast } = useToast();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timer);
  }, []);

  if (loading || !event) {
    return (
      <div className="space-y-6 p-6 max-w-7xl mx-auto">
        <Skeleton className="h-[50vh] w-full rounded-xl" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-72 w-full" />
      </div>
    );
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-1 md:px-6 py-10 space-y-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow">
          <Image
            src={event.thumbnail?.secure_url || "/default-thumbnail.jpg"}
            alt={event.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-h2-clamp font-bold text-gray-900">{event.name}</h1>

          <div className="flex flex-wrap gap-3 text-h6-clamp">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full capitalize font-medium">
              {event.mode}
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              {event.price === 0 ? "Free" : formatPrice(event.price)}
            </span>
            <span className="text-gray-600 text-xs">by IELTS Strategies 101</span>
          </div>

          <div className="flex gap-2 flex-wrap items-center text-gray-700 text-h6-clamp mt-2">
            <CalendarIcon className="w-4 h-4 text-red-500" />
            {formatEventDate(event.startDate, event.startTime)} —{" "}
            {formatEventDate(event.endDate, event.endTime)}
          </div>

          <div className="flex gap-2 flex-wrap items-center text-gray-700 text-h6-clamp">
            <CalendarCheck className="w-4 h-4 text-red-500" />
            Every Monday and Thursday
          </div>

          <div className="flex gap-2 flex-wrap items-center text-gray-700 text-h6-clamp">
            <LocateFixedIcon className="w-4 h-4 text-red-500" />
            {event.location}
          </div>

          <Button
            size="sm"
            variant="destructive"
            className="rounded-full text-sm mt-4"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {event.price === 0 ? "Register Now" : "Add to Cart"}
          </Button>
        </div>
      </div>

      {/* Event Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">What will you learn?</h2>
        <Preview value={event.description} />
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs md:text-sm border bg-blue-100 font-medium text-blue-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export default SingleEvent;
