import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Code, 
  TrendingUp, 
  Palette,
  Check
} from "lucide-react";

// Use cases data with added image URLs for the showcase
const useCases = [
  {
    icon: BookOpen,
    title: "For Researchers",
    description: "Transform scattered research into interconnected knowledge maps. Explore multiple hypotheses simultaneously and track your thought evolution.",
    features: [
      "Multi-threaded literature reviews",
      "Hypothesis branching and testing",
      "Cross-reference discovery",
    ],
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c6f90415ad90?q=80&w=2940&auto=format&fit=crop"
  },
  {
    icon: Code,
    title: "For Developers",
    description: "Debug complex problems by exploring different solution paths. Document architectural decisions with branching conversations.",
    features: [
      "Problem decomposition trees",
      "Solution path exploration", 
      "Technical documentation threads",
    ],
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop"
  },
  {
    icon: TrendingUp,
    title: "For Strategists",
    description: "Model different scenarios and their implications. Build comprehensive strategy maps with interconnected decision points.",
    features: [
      "Scenario planning branches",
      "Risk assessment threads",
      "Decision tree visualization",
    ],
    imageUrl: "https://images.unsplash.com/photo-1634992693823-75b8a6a4b1e6?q=80&w=2832&auto=format&fit=crop"
  },
  {
    icon: Palette,
    title: "For Creators",
    description: "Develop ideas through multiple creative directions. Maintain inspiration threads and explore creative alternatives without losing flow.",
    features: [
      "Creative concept branching",
      "Inspiration thread management",
      "Alternative story path exploration",
    ],
    imageUrl: "https://images.unsplash.com/photo-1572044162444-24c95621ec3b?q=80&w=2824&auto=format&fit=crop"
  }
];

const AUTOPLAY_DURATION = 5000; // 5 seconds

const UseCasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSelectUseCase = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };
  
  const activeUseCase = useCases[activeIndex];

  return (
    <section id="use-cases" className="py-24 px-6 bg-gray-50/50"> {/* Subtle background color */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-4xl md:text-6xl font-semibold mb-8"
            style={{ color: '#1E1E2F' }}
          >
            Built for the{" "}
            <span 
              style={{
                background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Modern Thinker
            </span>
          </h2>
          <p 
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: '#1E1E2F', opacity: 0.7 }}
          >
            Discover how SYNAPS transforms the way different professionals approach complex thinking and problem-solving.
          </p>
        </motion.div>

        {/* --- New Split-Screen Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Left Column: Navigation */}
          <div className="md:col-span-1 flex flex-row md:flex-col gap-4 overflow-x-auto pb-4">
            {useCases.map((useCase, index) => (
              <motion.button
                key={index}
                onClick={() => handleSelectUseCase(index)}
                className={`relative w-full text-left p-5 rounded-2xl transition-all duration-300 min-w-[200px] md:min-w-full ${
                  activeIndex === index ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${activeIndex === index ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <useCase.icon className={`w-6 h-6 transition-colors ${activeIndex === index ? 'text-blue-600' : 'text-gray-500'}`} />
                  </div>
                  <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? 'text-gray-800' : 'text-gray-600'}`}>{useCase.title}</span>
                </div>
                {activeIndex === index && isAutoPlaying && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                    style={{ background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTOPLAY_DURATION / 1000, ease: 'linear' }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Column: Content Showcase */}
          <div className="md:col-span-2 relative min-h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background Image */}
                <img src={activeUseCase.imageUrl} alt={activeUseCase.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content */}
                <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">
                  <h3 className="text-4xl font-bold mb-4">{activeUseCase.title}</h3>
                  <p className="text-xl text-white/80 max-w-2xl mb-8">{activeUseCase.description}</p>
                  <div className="space-y-3">
                    {activeUseCase.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-blue-300 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;