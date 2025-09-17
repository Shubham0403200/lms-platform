"use client";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, Quote, UserCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { tempFeedbacks } from "@/data/temp";
import { TempFeedback } from "@/data/temp-modal";

const backgroundColors = [
  "bg-[#f0faff]",
  "bg-[#fef9f5]",
  "bg-[#f3f9f1]",
  "bg-[#f9f0f5]",
  "bg-[#f9f9f9]",
  "bg-[#f4f8ff]",
];

export const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState<TempFeedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFeedbacks(tempFeedbacks);
      setLoading(false);
    }, 1000); // simulate API delay
  }, []);

  const duplicatedFeedbacks = [...feedbacks, ...feedbacks]; // infinite scroll
  const showFallback = !loading && feedbacks.length === 0;

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#f8faff] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-h1-clamp font-extrabold text-slate-800">
            What Our <span className="text-blue-600">Learners Say</span>
          </h2>
          <p className="text-h5-clamp text-muted-foreground mt-2">
            Trusted by thousands worldwide — here’s why students love us.
          </p>
        </motion.div>

        {/* No Feedback Fallback */}
        {showFallback ? (
          <div className="text-center text-slate-500 py-12">
            <h3 className="text-h3-clamp font-semibold mb-2">No Feedback Yet</h3>
            <p className="text-h6-clamp">
              Be the first to leave a review after trying our services!
            </p>
          </div>
        ) : (
          // Scrolling Carousel
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 60,
                ease: "linear",
              }}
            >
              {(loading
                ? Array.from({ length: 6 }) // skeletons
                : duplicatedFeedbacks
              ).map((fb, index) => {
                const bgColor = backgroundColors[index % backgroundColors.length];

                // Show skeletons if loading
                if (loading || !fb) {
                  return (
                    <div
                      key={index}
                      className={`w-[25rem] ${bgColor} rounded-2xl border border-slate-200 shadow-md p-5 flex flex-col justify-between`}
                    >
                      <div className="space-y-3">
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <div className="flex gap-3 mt-4">
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <div className="space-y-2">
                            <Skeleton className="h-3 w-24" />
                            <Skeleton className="h-3 w-16" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                const feedback = fb as TempFeedback;

                return (
                  <div
                    key={index}
                    className={`w-[25rem] ${bgColor} rounded-2xl border border-slate-200 shadow-md p-5 flex flex-col justify-between`}
                  >
                    <div className="mb-4 relative">
                      <Quote className="text-blue-100 w-6 h-6 absolute right-0 top-0" />
                      <p className="text-h6-clamp text-slate-700 line-clamp-5 pr-6">
                        {feedback.feedback}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      {feedback.userImage ? (
                        <Image
                          src={feedback.userImage}
                          alt={feedback.username}
                          width={44}
                          height={44}
                          className="rounded-full object-cover w-11 h-11"
                        />
                      ) : (
                        <UserCircle2 className="w-11 h-11 text-slate-300" />
                      )}
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {feedback.username}
                        </p>
                        <p className="text-xs text-slate-500">{feedback.role}</p>
                        <div className="flex mt-1">
                          {Array.from({ length: feedback.stars }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
