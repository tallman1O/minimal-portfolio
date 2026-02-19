"use client";
import { DitherShader } from "@/components/ui/dither-shader";
import { cn } from "@/lib/utils";

export function Banner() {
  return (
    <div className={cn(
      "flex flex-col items-center gap-8 p-8",
      "creen-line-before screen-line-after before:-top-px after:-bottom-px"
    )}>
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <DitherShader
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop"
          gridSize={2}
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
