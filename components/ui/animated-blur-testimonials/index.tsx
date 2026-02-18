"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  MotionProps,
} from "motion/react";
import React, { useEffect, useState } from "react";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import useMeasure from "react-use-measure";

const ani: MotionProps = {
  variants: {
    initial: (c: number) => ({
      transform: `translateX(${20 * c}px)`,
      filter: "blur(4px)",
      opacity: 0,
    }),
    animate: () => ({
      transform: "translateX(0px)",
      filter: "blur(0px)",
      opacity: 1,
    }),
    exit: (c: number) => ({
      transform: `translateX(${-20 * c}px)`,
      filter: "blur(4px)",
      opacity: 0,
    }),
  },
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export interface TestimonialInterface {
  message: React.ReactNode;
  avatar: { src?: string; fallback?: string };
  name: string;

}

interface Props {
  data: TestimonialInterface[];
  light?: boolean;
  delayDuration?: number;
  _duration?: number; //
}

function AnimatedBlurTestimonials({
  data,
  delayDuration = 8,
  _duration = 0.4,
}: Props) {
  const [count, setCount] = useState(0);
  const [dir, setDir] = useState(1);

  const [ref, bounds] = useMeasure();

  useEffect(() => {
    const int = setInterval(() => {
      setCount((count) => (count + 1) % data.length);
      setDir(1);
    }, delayDuration * 1000);
    return () => clearInterval(int);
  }, [count, data.length, delayDuration]);

  return (
    <MotionConfig
      transition={{ type: "spring", duration: _duration, bounce: 0 }}
    >
      <div className="grid gap-4 select-none">
        <div className="mb-2 flex -space-x-2">
          {data.map((i, idx) => (
            <motion.button
              onClick={() => setCount(idx)}
              key={idx}
              initial={false}
              animate={{
                scale: idx === count ? 1.3 : 1,
                zIndex: idx === count ? 1 : 0,
              }}
              aria-label={`Select testimonial ${idx + 1}`}
            >
              <Avatar src={i.avatar.src} fallback={i.avatar.fallback} />
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ height: bounds.height ? bounds.height : "auto" }}
          className={cn(
            "bg-d-bg border-d-border border",
            "relative z-10 overflow-hidden rounded-xl",
          )}
        >
          
          <div ref={ref} className="h-fit p-4 gap-2">
            <AnimatePresence mode="popLayout" custom={dir} initial={false}>
            <h3 className="text-d-fg/60 font-black text-lg">{data[count].name}</h3>
              <motion.p
                {...ani}
                custom={dir}
                key={count}
                className="text-d-fg/60 font-medium"
                aria-live="polite"
              >
                {data[count].message}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="grid grid-cols-[60%_1fr] px-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: data.length }).map((_, i) => (
              <motion.button
                key={`progress-${i}`}
                role="button"
                onClick={() => setCount(i)}
                initial={{ width: i === count ? 64 : 18 }}
                animate={{ width: i === count ? 64 : 18 }}
                className={cn(
                  "bg-d-fg/10 h-[6px] cursor-pointer overflow-hidden rounded-xl",
                )}
              >
                {count === i && (
                  <motion.div
                    className="bg-d-fg/40 float-right h-full rounded-xl"
                    transition={{ duration: delayDuration }}
                    initial={{ width: "100%" }}
                    animate={{ width: ["100%", "0%"] }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          <div className="text-d-fg/60 flex justify-end gap-2">
            <button
              onClick={() => {
                setCount((count) => (count - 1 + data.length) % data.length);
                setDir(-1);
              }}
              className="hover:bg-d-fg/5 flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors active:scale-[0.95]"
              aria-label="Previous testimonial"
            >
              <TbArrowNarrowLeft size={24} />
            </button>
            <button
              onClick={() => {
                setCount((count) => (count + 1) % data.length);
                setDir(1);
              }}
              className="hover:bg-d-fg/5 flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors active:scale-[0.95]"
              aria-label="Next testimonial"
            >
              <TbArrowNarrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

export default AnimatedBlurTestimonials;

interface AProps {
  src?: string;
  fallback?: string;
}
function Avatar({ src, fallback }: AProps) {
  return (
    <div className="ring-d-bg relative flex size-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/10 ring-2 backdrop-blur-xl">
      {src ? (
        <img
          src={src}
          draggable={false}
          alt="testimonial image"
          className="absolute inset-0"
        />
      ) : (
        fallback
      )}
    </div>
  );
}
