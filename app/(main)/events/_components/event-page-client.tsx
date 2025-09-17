"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";
import { formatEventDate } from "@/lib/formatDays";
import { motion } from "framer-motion";
import { eventData } from "@/data/temp";
import { ITempEvent } from "@/data/temp-modal";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EventComponent = () => {

  const [events, setEvents] = useState<ITempEvent[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    try {
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
  }, [])

 
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="w-full max-w-6xl mx-auto md:p-4 flex flex-col gap-4">
      {/* Header & Search */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-h3-clamp font-bold">
            101 <span className="text-blue-600">Events</span>
          </h1>
          <p className="text-h6-clamp text-muted-foreground">
            Explore workshops, webinars, and IELTS classes!
          </p>
        </div>
        <Input
          type="text"
          placeholder="Search Events..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full md:w-[400px]"
        />
      </motion.div>

      {/* Event Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="p-4 space-y-4">
                <Skeleton className="w-full h-48 rounded-md" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[60%]" />
                </div>
              </Card>
            ))
          : paginatedEvents.map((event) => (
              <Link key={event._id} href={`/events/${event.slug}`}>
                <Card className="hover:shadow-xl transition duration-300 overflow-hidden">
                  <CardHeader className="relative h-[180px]">
                    <div className="relative w-full h-full rounded-md overflow-hidden">
                      <Image
                        src={event.thumbnail?.secure_url}
                        alt={event.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 mt-2">
                    <CardTitle className="line-clamp-1 text-h5-clamp">{event.name}</CardTitle>
                    <div className="flex justify-between text-h7-clamp font-medium">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {event.mode}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {event.price === 0 ? "Free" : formatPrice(event.price)}
                      </span>
                    </div>
                    <CardDescription className="text-muted-foreground text-h7-clamp">
                      {formatEventDate(event.startDate, event.startTime)} -{" "}
                      {formatEventDate(event.endDate, event.endTime)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
      </motion.div>

      {/* No Events Exist */}
      {!loading && events.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 space-y-5 text-center">
          <Image
            src="/no-events.svg"
            alt="No events illustration"
            width={220}
            height={220}
            className="opacity-80"
          />
          <h3 className="text-h4-clamp font-semibold text-gray-800">
            No Events Available Right Now
          </h3>
          <p className="text-h6-clamp text-muted-foreground max-w-lg">
            We’re preparing something exciting for you. Check back soon or subscribe to get notified!
          </p>
          <Button asChild>
            <Link href="/newsletter">Subscribe for Updates</Link>
          </Button>
        </div>
      )}

      {/* No Search Results */}
      {!loading && events.length > 0 && filteredEvents.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
          <Image
            src="/search-empty.svg"
            alt="Nothing found"
            width={180}
            height={180}
            className="opacity-80"
          />
          <h4 className="text-h5-clamp font-medium text-gray-700">
            No Events Matched Your Search
          </h4>
          <p className="text-sm text-muted-foreground">
            Try using different keywords or clearing the search.
          </p>z
          <Button variant="outline" onClick={() => setSearchQuery("")}>
            Reset Search
          </Button>
        </div>
      )}

      {/* Pagination */}
      {!loading && filteredEvents.length > 0 && totalPages > 1 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="flex justify-between items-center mt-6"
        >
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            size="sm"
          >
            Previous
          </Button>
          <p className="text-h6-clamp">
            Page {currentPage} of {totalPages}
          </p>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            size="sm"
            variant="outline"
          >
            Next
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default EventComponent;
