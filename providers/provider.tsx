import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/tooltip";
import dynamic from "next/dynamic";
import React from "react";

const ScrollToTop = dynamic(() =>
    import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop),
  );

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <TooltipProvider>
        <main className="flex-1">
          {children}
          <ScrollToTop />
        </main>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default Provider;
