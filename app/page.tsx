"use client";

import { useEffect } from "react";
import { useMotionValue } from "framer-motion";
import PageWrapper from "@/components/Container/PageWrapper";
import { AccordionComponent } from "@/components/LandingPage/AccordionComponent";
import BlogSample from "@/components/LandingPage/BlogSamples";
import Footer from "@/components/LandingPage/Footer";
import HeroSection from "@/components/LandingPage/HeroSection";
import MarketingCards from "@/components/LandingPage/MarketingCards";
import PricingPage from "@/components/LandingPage/Pricing";
import { GoogleGeminiEffect } from "@/components/LandingPage/google-gemini-effect";

export default function Home() {
  const pathLengths = [
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
  ];

  useEffect(() => {
    pathLengths.forEach((mv, index) => {
      setTimeout(() => {
        mv.set(1); // animate to full length over time
      }, 1000 * index);
    });
  }, [pathLengths]);

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
      <div className="flex justify-center items-center w-full mt-[5rem] mb-[9rem]">
        <GoogleGeminiEffect pathLengths={pathLengths} />
      </div>
      {/* <div className="w-full">
        <Footer />
      </div> */}
    </PageWrapper>
  );
}