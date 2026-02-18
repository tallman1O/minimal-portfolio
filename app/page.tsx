"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AppleHelloEnglishEffect } from "@/components/apple-hello-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import { NavbarLinks } from "@/lib/data";
import Home from "./(app)/(root)/page";

const Page = () => {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setShowContent(true);
  }, [setShowContent]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        {showContent ? (
          <motion.div
            key="hello"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <AppleHelloEnglishEffect
              onAnimationComplete={handleAnimationComplete}
              className="h-32 md:h-40"
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full relative min-h-screen"
          >
              <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
                <Home />
              </div>
            <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-full pb-4 z-50">
              <FloatingDock items={NavbarLinks} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;