import React from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, CalendarDays, ClipboardCheck, Brain, Bot, BarChart3 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Explore Courses",
    description: "Choose from strategy-packed video courses for IELTS, CELPIP, PTE & more — study at your own pace.",
    icon: <BookOpenCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Attend Live Events",
    description: "Join weekly masterclasses, doubt sessions, and live webinars from certified trainers.",
    icon: <CalendarDays className="w-6 h-6 text-purple-600" />,
  },
  {
    id: 3,
    title: "Practice with Mock Tests",
    description: "Simulate real exam conditions and get instant feedback on IELTS and CELPIP mocks.",
    icon: <ClipboardCheck className="w-6 h-6 text-green-600" />,
  },
  {
    id: 4,
    title: "Play Smart Quizzes",
    description: "Boost retention with gamified quizzes designed around exam patterns and weak areas.",
    icon: <Brain className="w-6 h-6 text-yellow-500" />,
  },
  {
    id: 5,
    title: "Chat with AI Agents",
    description: "Coming soon: Your 24/7 AI tutor to guide, explain, and test you — just like a human expert.",
    icon: <Bot className="w-6 h-6 text-pink-500" />,
    comingSoon: true,
  },
  {
    id: 6,
    title: "Track Your Progress",
    description: "Visual dashboards help you measure growth, set goals, and stay on track toward Band 9.",
    icon: <BarChart3 className="w-6 h-6 text-slate-600" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f9fafe] via-white to-[#edf3ff] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-5 md:mb-8"
        >
          <h2 className="text-h1-clamp font-extrabold text-slate-800 mb-2">
            How <span className="text-blue-600">IELTS Strategies 101</span> Works
          </h2>
          <p className="text-h5-clamp text-muted-foreground max-w-2xl mx-auto">
            One platform. All tools. Your complete roadmap to English exam mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                {step.icon}
                <h3 className="text-h4-clamp font-semibold text-slate-800 flex items-center gap-2 flex-wrap md:flex-nowrap">
                    {step.title}
                    {step.comingSoon && (
                        <span className="text-xs text-pink-500 bg-pink-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                        Coming Soon
                        </span>
                    )}
                </h3>
              </div>
              <p className="text-h7-clamp text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
