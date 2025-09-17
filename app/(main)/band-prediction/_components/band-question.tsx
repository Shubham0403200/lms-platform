import Image from "next/image";
import React from "react";

export const BandQuestion = () => {
  return (
    <div className="flex flex-col-reverse gap-4 md:gap-8 md:flex-row md:items-center lg:justify-between bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Text Section */}
      <div className="space-y-5 p-4 md:w-1/2">
        <h2 className="text-h2-clamp font-bold text-blue-600">
          Why Take the Band Predictor Test?
        </h2>
        <p className="text-h7-clamp text-gray-700 leading-relaxed text-justify">
          The Band Predictor Test isn&apos;t just another quiz—it&apos;s your
          chance to finally see where you stand. Imagine walking into the real
          IELTS test without knowing your weaknesses. Taking this test now could
          save you from under-performing later. Don&apos;t leave your future to
          chance—find out if you&apos;re ready today.
        </p>
        <ul className="space-y-2">
          {[
            "Identify your blind spots before it’s too late.",
            "Get a realistic view of your IELTS potential—right now.",
            "Direct your focus where it’s needed most.",
            "Boost your confidence by practicing in an exam-like setting.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-h7-clamp text-gray-700">
              <span className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="relative md:w-1/2 md:p-4">
        <Image
          src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Why Take the Band Predictor Test"
          width={700}
          height={400}
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
        {/* Gradient Overlay for Brand Consistency */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export const BandPredictionWork = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-center lg:justify-between bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative md:w-1/2 md:p-4">
        <Image
          src="https://images.pexels.com/photos/3808060/pexels-photo-3808060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="How Does the Band Predictor Work?"
          width={700}
          height={400}
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Text Section */}
      <div className="space-y-5 p-4 md:w-1/2">
        <h2 className="text-h2-clamp font-bold text-blue-600">
          How Does It Work?
        </h2>
        <p className="text-h7-clamp text-gray-700 leading-relaxed text-justify">
          The Band Predictor Test assesses your skills using real-world grammar
          and reading questions. This isn&apos;t a vague estimate—it&apos;s
          designed to mirror the challenge of the real exam. Your score
          isn&apos;t a guess; it&apos;s a precise snapshot of where you stand
          today. Not knowing your band score could mean walking into the IELTS
          exam unprepared, risking months of preparation. Don&apos;t gamble with
          your future—take the test now and discover your true potential before
          it&apos;s too late.
        </p>
        <p className="text-h7-clamp text-gray-700 leading-relaxed text-justify">
          Your results will show you exactly what needs work. Don&apos;t waste
          time guessing your abilities—this is your first step towards getting
          the band score you truly deserve.
        </p>
      </div>
    </div>
  );
};

export const BandMarksInfo = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-center lg:justify-between bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Text Section */}
      <div className="space-y-5 p-4 md:w-1/2">
        <h2 className="text-h2-clamp font-bold text-blue-600">
          Band Marks Used in IELTS Exam
        </h2>
        <p className="text-h7-clamp text-gray-700 leading-relaxed text-justify">
          The IELTS exam is scored on a nine-band scale, each band corresponding
          to a level of English proficiency. Here&apos;s a breakdown of what each
          band score represents:
        </p>
        <ul className="space-y-2">
          {[
            "5.0: Modest user",
            "6.0: Competent user",
            "6.5: Good user",
            "7.0: Good user",
            "7.5: Very good user",
            "8.0: Very good user",
            "8.5: Expert user",
            "9.0: Expert user",
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-h7-clamp text-gray-700"
            >
              <span className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="relative md:w-1/2 md:p-4">
        <Image
          src="https://ieltsliz.com/wp-content/uploads/2014/12/academic-reading-scores.jpg"
          alt="IELTS Band Marks"
          width={450}
          height={300}
          className="w-full h-auto object-contain rounded-md shadow-lg"
        />
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
