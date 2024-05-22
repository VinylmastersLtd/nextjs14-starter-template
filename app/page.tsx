import PageWrapper from "@/components/Container/PageWrapper";
import { AccordionComponent } from "@/components/LandingPage/AccordionComponent";
import BlogSample from "@/components/LandingPage/BlogSamples";
import Footer from "@/components/LandingPage/Footer";
import HeroSection from "@/components/LandingPage/HeroSection";
import MarketingCards from "@/components/LandingPage/MarketingCards";
import PricingPage from "@/components/LandingPage/Pricing";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

"use client"

import React from "react";
export default function Home() {
  return (
    <PageWrapper>

      <div className="mt-[1rem] p-3">
        <HeroSection />
      </div>
      <div className="flex flex-col my-[8rem] p-2 w-full justify-center items-center">
        <MarketingCards />
      </div>
      <div className="max-w-[1200px] p-8">
        <BlogSample />
      </div>
      <div className="my-[8rem]">
        <PricingPage />
      </div>
      <div className="flex justify-center items-center w-full mt-[5rem] mb-[9rem]">
        <AccordionComponent />
      </div>
      {/* <div className="w-full">
        <Footer />
      </div> */}
    </PageWrapper>
  );
}


export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
