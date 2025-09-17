"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ITempCourse } from "@/data/temp-modal";
import { formatPrice } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CourseProps { 
  courses: ITempCourse[]; 
  loading: boolean;
}

const Course:React.FC<CourseProps> = ({ loading, courses }) => {

  return (
    <section className="w-full px-2 md:px-6 py-12 bg-gradient-to-br from-[#f7faff] via-white to-[#e9f1ff] text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-h1-clamp font-extrabold mb-3">
            <span className="text-blue-600">101</span> Courses
          </h2>
          <p className="text-h6-clamp md:text-h5-clamp text-muted-foreground max-w-2xl mx-auto">
            Choose from our growing library of smart, strategic IELTS prep courses. Learn at your pace, anytime, anywhere.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : courses?.map((course: any) => (
                <Link href={`/courses/${course?._id}`} key={course?.slug}>
                  <div className="group rounded-xl overflow-hidden bg-white/80 border border-slate-200 shadow-sm hover:shadow-lg transition-all h-full hover:-translate-y-1 backdrop-blur-md">
                    {/* Thumbnail */}
                    <div className="relative aspect-video w-full">
                      <Image
                        src={course?.thumbnail}
                        alt={course?.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 right-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow text-blue-600">
                        {course?.price === 0 ? "Free" : formatPrice(course?.price)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 space-y-1">
                      <h3 className="text-h5-clamp font-semibold line-clamp-2 text-slate-800">
                        {course?.title}
                      </h3>
                     <div className="flex items-center justify-between text-h7-clamp text-slate-500 pt-1">
                        <span>{course?.category}</span>
                        <span>{course.chaptersLength} Chapters</span>
                      </div>
                      <div className="flex items-center justify-between text-h7-clamp text-slate-500">
                        <span>{course?.difficulty}</span>
                        <span>{course?.courseLength}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>

        {/* No Courses Fallback */}
        {!loading && courses?.length === 0 && (
          <div className="text-center mt-16 space-y-3">
            <h3 className="text-h2-clamp font-semibold text-slate-800">
              No Courses Available Right Now
            </h3>
            <p className="text-h6-clamp text-muted-foreground">
              We&apos;re updating our content — check back soon!
            </p>
          </div>
        )}

        {/* Browse All CTA */}
        <div className="flex justify-center mt-8">
          <Link href="/courses">
            <Button
              size='sm'
              className="rounded-full px-6 text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-xs md:text-sm"
            >
              Browse All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// ⛓️ Loading Placeholder
const SkeletonCard = () => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 shadow-sm">
    <Skeleton className="w-full h-48 rounded-xl" />
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-5/6" />
    <Skeleton className="h-4 w-1/2" />
  </div>
);

export default Course;
