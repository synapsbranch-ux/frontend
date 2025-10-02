import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Send, Sparkles, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const [prompt, setPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();

  const handleStartChat = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsTyping(true);
    
    // Simulate typing animation then redirect to signup
    setTimeout(() => {
      setIsTyping(false);
      navigate('/signup', { state: { prompt: prompt.trim() } });
    }, 1500);
  };

  const examplePrompts = [
    "Help me research climate change solutions for my thesis",
    "Analyze market trends for my startup idea", 
    "Plan a content strategy for my brand",
    "Explore different architectural approaches for my app"
  ];

  const [currentExample, setCurrentExample] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % examplePrompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cta" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
          }}
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at 25% 25%, #7A9BEE 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, #3D48C1 0%, transparent 50%)`,
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ 
                color: '#1E1E2F',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Start{" "}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Thinking?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
              style={{ 
                color: '#1E1E2F',
                opacity: 0.8,
                fontFamily: 'Inter, sans-serif'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Enter a question or problem below and see how SYNAPS can transform your thinking process.
            </motion.p>

            {/* Animated Example Prompts */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p 
                className="text-sm opacity-60 mb-4"
                style={{ color: '#1E1E2F' }}
              >
                Try something like:
              </p>
              <motion.div
                key={currentExample}
                className="text-base italic opacity-70 h-6"
                style={{ color: '#1E1E2F' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.7, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                "{examplePrompts[currentExample]}"
              </motion.div>
            </motion.div>

            {/* Interactive Chat Prompt Box */}
            <motion.form 
              onSubmit={handleStartChat} 
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="relative">
                <div 
                  className="relative overflow-hidden rounded-3xl border-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(16px)',
                    borderColor: 'rgba(122, 155, 238, 0.3)',
                    boxShadow: '0 8px 32px rgba(122, 155, 238, 0.1)',
                  }}
                >
                  <div className="flex items-center p-2">
                    <div className="flex items-center px-4 py-2 space-x-2">
                      <MessageCircle className="w-5 h-5" style={{ color: '#7A9BEE' }} />
                      <span 
                        className="text-sm font-medium"
                        style={{ color: '#1E1E2F', opacity: 0.7 }}
                      >
                        Ask SYNAPS anything...
                      </span>
                    </div>
                    <div className="flex-1">
                      <Input
                        type="text"
                        placeholder={isTyping ? "Processing your question..." : "What would you like to explore today?"}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="border-0 bg-transparent text-lg py-4 px-4 focus:ring-0"
                        style={{ color: '#1E1E2F' }}
                        disabled={isTyping}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isTyping || !prompt.trim()}
                      className="mx-2 p-4 rounded-2xl text-white font-semibold transition-all duration-200 disabled:opacity-50"
                      style={{
                        background: prompt.trim() 
                          ? 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)'
                          : 'rgba(122, 155, 238, 0.3)',
                      }}
                      whileHover={{ scale: prompt.trim() ? 1.05 : 1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isTyping ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-6 h-6" />
                        </motion.div>
                      ) : (
                        <Send className="w-6 h-6" />
                      )}
                    </motion.button>
                  </div>
                  
                  {/* Progress bar when typing */}
                  {isTyping && (
                    <motion.div 
                      className="h-1"
                      style={{
                        background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5 }}
                    />
                  )}
                </div>
              </div>
            </motion.form>



          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;