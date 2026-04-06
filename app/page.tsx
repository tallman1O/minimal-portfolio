"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AppleHelloEnglishEffect } from "@/components/apple-hello-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import { NavbarLinks } from "@/lib/data";
import Home from "./(app)/(root)/page";

const Page = () => {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = showContent ? originalOverflow : "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showContent]);

  return (
    <div className="relative min-h-screen">
      {/* Mount Home on first paint so chunks, images, and data load under the overlay */}
      <motion.div
        className="relative w-full min-h-screen"
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: showContent ? 1 : 0,
          y: showContent ? 0 : 12,
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        aria-hidden={!showContent}
        style={{ pointerEvents: showContent ? "auto" : "none" }}
      >
        <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
          <Home />
        </div>
      </motion.div>

      <AnimatePresence>
        {!showContent && (
          <motion.div
            key="hello"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <AppleHelloEnglishEffect
              onAnimationComplete={handleAnimationComplete}
              className="h-32 md:h-40"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showContent ? (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex w-full items-center justify-center pb-4">
          <FloatingDock items={NavbarLinks} />
        </div>
      ) : null}
    </div>
  );
};

export default Page;