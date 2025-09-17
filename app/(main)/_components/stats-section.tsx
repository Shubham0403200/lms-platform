'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { GraduationCap, Star, Users, Clock } from 'lucide-react';
import { useState } from 'react';

const stats = [
  { id: 1, icon: <GraduationCap className="w-6 h-6 text-blue-600" />, label: 'Students Taught', value: 2000, suffix: '+' },
  { id: 2, icon: <Star className="w-6 h-6 text-yellow-500" />, label: 'Average Band Score', value: 7.5, suffix: '/9' },
  { id: 3, icon: <Users className="w-6 h-6 text-green-500" />, label: 'Countries Reached', value: 50, suffix: '+' },
  { id: 4, icon: <Clock className="w-6 h-6 text-purple-600" />, label: 'Years Teaching', value: 4, suffix: '+' },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12 border-t border-slate-100">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
  suffix,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const newValue = Math.floor(progress * value);
      setCount(value >= 10 ? newValue : parseFloat((progress * value).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="mb-3">{icon}</div>
      <div className="text-h2-clamp font-bold text-slate-900">
        {count}
        {suffix}
      </div>
      <p className="text-h6-clamp text-muted-foreground">{label}</p>
    </motion.div>
  );
}
