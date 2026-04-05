"use client";
import { DitherShader } from "@/components/ui/dither-shader";
import { cn } from "@/lib/utils";

export function Banner() {
  return (
    <div className={cn(
      "flex flex-col items-center gap-8 p-8",
      "screen-line-before screen-line-after before:-top-px after:-bottom-px"
    )}>
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <DitherShader
          src="https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ditherMode="bayer"
          colorMode="original"
          invert={false}
          animated={false}
          animationSpeed={0.02}
          primaryColor="#000000"
          secondaryColor="#f5f5f5"
          threshold={0.5}
          className="h-80 w-[600px] sm:h-96 sm:w-3xl"
        />
      </div>
    </div>
  );
}
