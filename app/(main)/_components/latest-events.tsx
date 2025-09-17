"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, LocateFixed } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ITempEvent } from "@/data/temp-modal";

interface LatestEventsProps {
  events: ITempEvent[];
  loading: boolean; 
}

const formatDateTime = (date: string | Date, time: string) => {
  const d = new Date(date); // Always convert to Date
  const formattedDate = d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return `${formattedDate} • ${time}`;
};

const LatestEvents:React.FC<LatestEventsProps> = ({ events, loading }) => {

  return (
    <section className="w-full bg-gradient-to-br from-[#f9fbfd] via-white to-[#edf4ff] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-h1-clamp font-extrabold text-slate-800 mb-2">
            Upcoming <span className="text-blue-600">Live Events</span>
          </h2>
          <p className="text-h5-clamp text-muted-foreground max-w-2xl mx-auto">
            Join our expert-led sessions and power up your English skills — one live event at a time.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-sm border">
                  <Skeleton className="h-[180px] w-full" />
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-3 w-2/3" />
                    <Skeleton className="h-3 w-1/3" />
                  </div>
                </div>
              ))
            : events.slice(0, 3).map((event, i) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/events/${event.slug}`}>
                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition h-full">
                      <div className="h-[180px] md:h-[220px] overflow-hidden relative">
                        <img
                          src={(event as any)?.thumbnail?.secure_url || "/images/events/fallback.jpg"}
                          alt={event.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-4 left-4 bg-blue-700/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                          {formatDateTime(event.startDate, event.startTime)}
                        </span>
                      </div>
                      <div className="p-3 md:p-4 space-y-2">
                        <h3 className="text-h5-clamp font-bold text-slate-800 line-clamp-2">
                          {event.name}
                        </h3>
                        <p className="text-h7-clamp text-muted-foreground line-clamp-2">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-2 text-h7-clamp text-blue-600 font-medium mt-2">
                          <LocateFixed className="h-4 w-4" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-10">
          <Link href="/events">
            <Button 
              size='sm'
              className="rounded-full px-6 text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-xs md:text-sm group" 
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;
