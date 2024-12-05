// components/sections/Hero.tsx
"use client";

import Image from "next/image";

import { HeroProps } from "@/lib/types";
import HeroIllustration from "../illustrations/roothero";

import { AnimatedGrid } from "../ui/AnimatedGrid";
import { Button } from "@/packages/core/src";

const Hero = ({
  heading,
  paragraph,
  coverImage,
  ctaButtons: { button1, button2 }, // Destructure directly to button1 and button2
  brandLogos,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/50 bg-grid-pattern" />

      <div className="relative">
        {/* Main content section */}

        <div className="mx-auto px-4 lg:px-8  max-w-7xl">
          <div className="pt-20 pb-16 sm:pt-24 sm:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left mx-auto">
                <h1>
                  <span className="block  ">{heading.main}</span>
                  {heading.highlight && (
                    <span className="block  bg-gradient-to-r from-slate-600 via-gray-700  to-black dark:from-slate-400 dark:via-slate-300 dark:to-white bg-clip-text text-transparent ">
                      {heading.highlight}
                    </span>
                  )}
                </h1>

                {paragraph && (
                  <h5 className="mt-6 max-w-md    mx-auto lg:mx-0">
                    {paragraph}
                  </h5>
                )}

                {/* CTA Buttons */}
                <div className="mt-10 lg:px-0 flex flex-row  gap-2 sm:gap-4  justify-center lg:justify-start">
                  <Button href={button1.href} variant="glow" size="xl">
                    {button1.label}
                  </Button>

                  <span>
                    {button2 && (
                      <Button href={button2.href} size="xl" variant="framed">
                        {button2.label}
                      </Button>
                    )}
                  </span>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="hidden lg:block relative">
                <div className="relative z-10">
                  {coverImage.src.endsWith(".svg") ? (
                    <HeroIllustration />
                  ) : (
                    <Image
                      src={coverImage.src}
                      alt={coverImage.alt}
                      width={400}
                      height={400}
                      className="w-full h-auto"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {brandLogos && brandLogos.length > 0 && (
          <div className="relative bg-slate-50/60 dark:bg-gray-950/40 overflow-hidden border-b border-dashed dark:border-gray-800/60 border-slate-200/50">
            {/* Gradient Overlay */}
            <AnimatedGrid />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-white/50 to-white/80 dark:from-gray-950/30 dark:via-black/50 dark:to-black/80" />

            <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h6 className="bg-gradient-to-r from-gray-500  via-slate-500 to-gray-600  bg-clip-text text-transparent text-center font-light  mb-8 ">
                Cooked with the best ingredients
              </h6>
              {/* </p> */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {brandLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex justify-center  grayscale dark:invert opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 hover:grayscale-0 dark:hover:grayscale my-6 xl:my-10"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={200}
                      className=" h-full w-20 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
