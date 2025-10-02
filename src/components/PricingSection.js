import React, { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { pricingPlansData } from "../data/pricingData"; // Renamed import
import { motion, AnimatePresence } from "framer-motion";

// --- Billing Toggle Component ---
const BillingToggle = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="relative w-fit mx-auto p-1 rounded-full bg-gray-200/50 backdrop-blur-sm border border-white/30">
      <div className="flex items-center">
        <button 
          onClick={() => setBillingCycle('monthly')}
          className={`w-36 px-6 py-2 text-sm font-semibold rounded-full relative z-10 transition-colors duration-300 ${
            billingCycle === 'monthly' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Monthly
        </button>
        <button 
          onClick={() => setBillingCycle('annually')}
          className={`w-36 px-6 py-2 text-sm font-semibold rounded-full relative z-10 transition-colors duration-300 ${
            billingCycle === 'annually' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Annually <span className="ml-1 px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs">Save 40%</span>
        </button>
      </div>
      <motion.div
        className="absolute top-1 left-1 h-[calc(100%-8px)] z-0"
        animate={{ x: billingCycle === 'monthly' ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="w-36 h-full bg-white rounded-full shadow-md" />
      </motion.div>
    </div>
  );
};


const PricingCard = ({ plan, billingCycle, onSelectPlan }) => {
  const price = plan.price[billingCycle];
  const isCustomPrice = price === null;

  return (
    <motion.div 
      className={`relative p-8 rounded-3xl transition-all duration-500 flex flex-col`}
      style={{
        background: plan.popular ? 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(245, 248, 255, 1) 100%)' : 'rgba(255, 255, 255, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: plan.popular ? '0 20px 60px -10px rgba(122, 155, 238, 0.4)' : '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      }}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)' }}>
          Most Popular
        </div>
      )}

      <div className="text-left mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{plan.subtitle}</p>
      </div>

      <div className="mb-6 flex items-baseline">
        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle + plan.name}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-baseline"
          >
            {isCustomPrice ? (
              <span className="text-4xl font-bold text-gray-800">Custom</span>
            ) : (
              <>
                <span className="text-5xl font-bold text-gray-800">${price}</span>
                <span className="text-lg text-gray-500 ml-1.5">/ month</span>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-sm text-gray-600 mb-8 min-h-[60px]">{plan.description}</p>
      
      <div className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: feature }}></p>
          </div>
        ))}
      </div>

      <Button
        onClick={() => onSelectPlan(plan)}
        className="w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300"
        style={{
          background: plan.popular ? 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)' : '#FFFFFF',
          color: plan.popular ? 'white' : '#3D48C1',
          border: plan.popular ? 'none' : '2px solid #D1D9F5',
        }}
      >
        {plan.ctaText}
      </Button>
    </motion.div>
  );
};


const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handlePlanSelection = (plan) => {
    alert(`Thanks for choosing the ${plan.name} plan!`);
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-gray-800">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Choose the perfect plan for your needs.
          </p>
        </motion.div>

        <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
          <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {pricingPlansData.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
              onSelectPlan={handlePlanSelection}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;