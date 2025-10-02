import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhatIsItSection from "../components/WhatIsItSection";
import HowItWorksSection from "../components/HowItWorksSection";
import UseCasesSection from "../components/UseCasesSection";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F8F8' }}>
      <Header />
      <main>
        <HeroSection />
        <WhatIsItSection />
        <HowItWorksSection />
        <UseCasesSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;