import { Preview } from "@/components/context/preview";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import {AlarmClock,BookIcon,ClockIcon,BookAIcon,MessageSquareDiffIcon,Brain,Check,ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { ITempCourse } from "@/data/temp-modal";

interface SingleCourseProps {
  course: ITempCourse;
}

export const ChapterTitles = [
      { chapterTitle: "Greetings & Introductions" },
      { chapterTitle: "Ordering Food" },
      { chapterTitle: "Travel English" },
      { chapterTitle: "Workplace English" },
];

export const details = ["Role Play Sessions", "Conversation Practice", "Audio Lessons"]

export const resources = ["https://eslfast.com", "https://talkenglish.com"]

const SingleCourse = ({ course }: SingleCourseProps) => {

  const calculateFakeMRP = (price: number) =>
    course.price === 0 ? 3000 : Math.ceil(price * 1.4 / 1000) * 1000;

  return (
    <section className="w-full max-w-6xl mx-auto p-4 space-y-8">
      {/* Title and Thumbnail */}
      <div className="grid md:grid-cols-5 gap-6">
        <div className="col-span-1 md:col-span-3 space-y-4">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-sm">
            <Image
              src={course.thumbnail || "/default-thumbnail.jpg"}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-h3-clamp font-bold text-slate-900">{course.title}</h1>

          {/* Course Description */}
          <div>
            <h2 className="text-h5-clamp font-semibold text-slate-800 mb-2">
              What You&apos;ll Learn
            </h2>
            {course.description && <Preview value={course.description} />}
          </div>

          {/* Video Preview */}
            <div>
              <h2 className="text-h5-clamp font-semibold text-slate-800 mb-2">
                Free Preview
              </h2>
              <div className="aspect-video rounded-md overflow-hidden shadow-md">
                  <iframe
                    src={"https://www.youtube.com/embed/n_i8aAGlEII?si=lW6ZLgCQ9zntHwcC"}
                    className="w-full h-full"
                    allowFullScreen
                    title="Course Preview"
                  ></iframe>
              </div>
            </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          {/* Info Card */}
          <Card className="p-4 space-y-3">
            <h2 className="text-h5-clamp font-semibold mb-2">Course Overview</h2>
            {[
              {
                icon: BookIcon,
                label: "Category",
                value: course.category,
              },
              {
                icon: ClockIcon,
                label: "Duration",
                value: course.courseLength,
              },
              {
                icon: BookAIcon,
                label: "Chapters",
                value: `${course.chaptersLength} Chapters`,
              },
              {
                icon: MessageSquareDiffIcon,
                label: "Difficulty",
                value: course.difficulty,
              },
              {
                icon: Brain,
                label: "Quizzes",
                value: `45 Quizzes`,
              },
            ].map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-h6-clamp text-slate-700"
              >
                <span className="flex items-center gap-2">
                  <Icon size={16} />
                  {label}
                </span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </Card>

          {/* Price Section */}
          <Card className="p-4 space-y-2">
            <div className="flex items-center gap-3">
                <h4 className="text-h4-clamp font-bold text-red-600">
                {course.price === 0 ? "Free" : formatPrice(course.price)}
                </h4>
                <h5 className="text-h6-clamp font-medium line-through text-slate-400">
                {formatPrice(calculateFakeMRP(course.price))}
                </h5>
            </div>
            <p className="text-h7-clamp text-green-600 font-medium flex items-center gap-2">
                <AlarmClock size={16} />
                Limited Time Offer!
            </p>
            <Button
                className="w-full rounded-full mt-2"
                size="sm"
                variant="destructive"
            >
                <ShoppingCart className="mr-2 h-4 w-4" />
                {course.price === 0 ? "Buy Now" : "Add to Cart"}
            </Button>
        </Card>

          {/* Course Details */}
          {details?.length > 0 && (
            <Card className="p-4 space-y-2">
              <h5 className="text-h5-clamp font-semibold text-slate-800 mb-2">
                What’s Included
              </h5>
              <ul className="space-y-2 text-h6-clamp text-slate-700">
                {details.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Resources */}
          {resources?.length > 0 && (
            <Card className="p-4 space-y-2">
              <h5 className="text-h5-clamp font-semibold text-slate-800 mb-2">
                Course Resources
              </h5>
              <ul className="space-y-1 text-h6-clamp text-blue-700 underline">
                {resources.map((link, i) => (
                  <li key={i}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {i + 1}. {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Chapters */}
          {ChapterTitles.length > 0 && (
            <Card className="p-4 space-y-2">
              <h5 className="text-h5-clamp font-semibold text-slate-800 mb-2">
                Chapters
              </h5>
              <ul className="space-y-1 text-h6-clamp text-slate-700">
                {ChapterTitles.map((c, i) => (
                  <li key={i}>
                    Chapter {i + 1}: {c.chapterTitle}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleCourse;
