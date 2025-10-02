import React from "react";
import { Button } from "./ui/button";
import RotatingCube from "./RotatingCube";

const HeroSection = () => {
  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ 
                color: '#1E1E2F',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700 
              }}
            >
              Stop thinking in lines.{" "}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Start building in dimensions.
              </span>
            </h1>
            
            <p 
              className="text-xl leading-relaxed max-w-xl"
              style={{ 
                color: '#1E1E2F',
                opacity: 0.8,
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400
              }}
            >
              SYNAPS is the first conversational workspace designed for non-linear thought. 
              We turn your scattered research into a dynamic, queryable map of your knowledge.
            </p>

            <div className="space-y-4">
              <Button
                className="px-8 py-4 text-lg rounded-full text-white font-semibold transition-all duration-200 hover:brightness-110 transform hover:scale-105 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
                  border: 'none',
                }}
                onClick={scrollToCTA}
              >
                Start Your Free Trial →
              </Button>
              
              <p 
                className="text-sm opacity-60"
                style={{ color: '#1E1E2F' }}
              >
                No credit card required.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <RotatingCube />
              
              {/* Background decorative elements */}
              <div 
                className="absolute -top-8 -left-8 w-24 h-24 rounded-full opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
                }}
              />
              <div 
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-10"
                style={{
                  background: 'linear-gradient(135deg, #3D48C1 0%, #7A9BEE 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;