"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/backend/hooks/use-outside-click";
import { Service } from "@/data/plans";

const Services = () => {

  const [active, setActive] = useState<(typeof Service)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="py-8 md:py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center ">
        <motion.h2
            className="text-h2-clamp font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-600">Services </span> We Provide
          </motion.h2>
          <motion.p
            className="text-h5-clamp mt-1 text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
             Explore the wide range of services designed to help you achieve your goals.
          </motion.p>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 z-[100] grid place-items-center bg-black/30">
            <motion.button
              className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-1.5 hover:bg-slate-100"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-[90vw] max-w-5xl flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border shadow-xl relative"
            >
              <motion.div className="w-full md:w-1/2 relative" layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={300}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-60 md:h-full object-cover object-center"
                />
              </motion.div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div className="bg-blue-50 px-5 py-4 flex flex-col md:flex-row md:justify-between items-start gap-2">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-h4-clamp font-semibold text-slate-800"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.name}-${id}`}
                      className="text-h6-clamp text-slate-600"
                    >
                      {active.name}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.link}
                    // target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm rounded-full px-4 py-2 font-semibold transition"
                  >
                    {active.name}
                  </motion.a>
                </div>

                <div className="px-5 pt-3 pb-6 overflow-y-auto text-justify text-h6-clamp text-slate-700">
                  {typeof active.content === "function" ? active.content() : active.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-3 md:gap-4">
        {Service.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="p-3 md:p-5 flex flex-col justify-between items-center rounded-2xl border bg-white group shadow-md hover:shadow-lg hover:border-blue-400 transition cursor-pointer relative overflow-hidden"
          >
            <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-100 to-white" />
            <div className="flex flex-col items-center gap-3">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.image}
                  alt={card.title}
                  className="h-14 w-14 md:h-16 md:w-16 rounded-xl object-cover object-top"
                />
              </motion.div>
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="text-h5-clamp font-semibold text-slate-800 text-center"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.name}-${id}`}
                className="text-h6-clamp text-muted-foreground text-center"
              >
                {card.name}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default Services;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
