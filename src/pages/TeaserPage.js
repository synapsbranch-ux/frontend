import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Iridescence from '../components/Iridescence'; // Le chemin d'importation est maintenant correct

// --- Animated Logo Component ---
const AnimatedLogo = () => (
    <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
    >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
                d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0Z"
                fill="url(#logo-gradient)"
            />
            <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7A9BEE"/>
                    <stop offset="1" stopColor="#3D48C1"/>
                </linearGradient>
            </defs>
        </svg>
    </motion.div>
);

// --- Teaser Questions Component ---
const TeaserQuestions = () => {
    const questions = [
        "Tired of linear thinking?",
        "What if your research built its own knowledge map?",
        "Struggling to connect scattered ideas?",
        "Ready to unlock a new dimension of thought?",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % questions.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [questions.length]);

    return (
        <div className="h-16 text-center">
            <AnimatePresence mode="wait">
                <motion.h2
                    key={index}
                    className="text-2xl md:text-4xl font-medium text-white/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                >
                    {questions[index]}
                </motion.h2>
            </AnimatePresence>
        </div>
    );
};

// --- Countdown Timer Component ---
const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2025-12-20T00:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) return null;
        
        return (
            <div key={interval} className="text-center p-4">
                <AnimatePresence mode="wait">
                    <motion.span 
                        key={timeLeft[interval]}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="text-5xl md:text-8xl font-bold text-white tracking-tighter"
                    >
                        {String(timeLeft[interval]).padStart(2, '0')}
                    </motion.span>
                </AnimatePresence>
                <div className="text-sm md:text-lg uppercase text-white/50 tracking-widest mt-2">{interval}</div>
            </div>
        );
    });

    return (
        <div className="flex flex-wrap justify-center items-start my-12">
            {timerComponents.length ? timerComponents : <span>Launch Day!</span>}
        </div>
    );
};

export default function TeaserPage() {
    return (
        <main className="relative min-h-screen bg-black flex flex-col items-center justify-center font-['Inter',_sans-serif] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Iridescence />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center w-full max-w-5xl mx-auto">
                <div 
                    className="w-full rounded-3xl p-8 md:p-12"
                    style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                >
                    <div className="mb-8">
                        <AnimatedLogo />
                    </div>
                    <TeaserQuestions />
                    <Countdown />
                    <motion.p 
                        className="text-xl md:text-2xl font-light text-white/90 tracking-wider"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                    >
                        Coming soon with an amazing solution.
                    </motion.p>
                </div>
            </div>
        </main>
    );
}

