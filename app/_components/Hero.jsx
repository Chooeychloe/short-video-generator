import { Button } from "@/components/ui/button";
import React from "react";

function Hero() {
  return (
    <div className="p-10 flex flex-col items-center justify-center mt-24
    md:px-20 lg:px-36 xl:px-48">
      <h2 className="font-extrabold text-6xl text-center">
        Short Video and Reels Generator
      </h2>
      <h4 className="font-semibold text-2xl text-center mt-4">
        Turn Ideas into Viral Content in Seconds
      </h4>
      <p className="text-center mt-4 text-gray-600">
        Create eye-catching short videos and social media reels with the power
        of AI. Whether you're a content creator, marketer, or small business
        owner, our tool helps you generate engaging videos using just text
        prompts or uploaded scripts.
      </p>
      <div className="mt-7 gap-8 flex">
        <Button size="lg" variant="secondary">
          Explore
        </Button>

        <Button size="lg" variant="outline">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Hero;
