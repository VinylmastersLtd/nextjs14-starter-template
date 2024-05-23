// components/LandingPage/SpotlightPreview.tsx
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="inset-0" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 text-base text-neutral-300 max-w-lg mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    </div>
  );
}