import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { HelpCircle, Cog, Users, CreditCard, LogIn, ArrowRight } from "lucide-react";

// 1. Importer l'image depuis le dossier src/assets
import logo from '../assets/logo.png'; // Assurez-vous que le chemin est correct !

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md shadow-lg' 
          : 'backdrop-blur-sm'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.8)' 
          : 'rgba(255, 255, 255, 0.6)',
        borderBottom: isScrolled 
          ? '1px solid rgba(255, 255, 255, 0.3)'
          : '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: isScrolled 
          ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
          : '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            // 2. Utiliser la variable importée ici
            src={logo} 
            alt="SYNAPS" 
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <h1 
            className="text-2xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-opacity duration-200"
            style={{ color: '#1E1E2F' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            SYNAPS
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('what-is-it')}
            className="flex items-center space-x-2 text-base font-medium hover:opacity-70 transition-all duration-200 hover:scale-105"
            style={{ color: '#1E1E2F' }}
          >
            <HelpCircle className="w-4 h-4" />
            <span>What is it?</span>
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="flex items-center space-x-2 text-base font-medium hover:opacity-70 transition-all duration-200 hover:scale-105"
            style={{ color: '#1E1E2F' }}
          >
            <Cog className="w-4 h-4" />
            <span>How it works?</span>
          </button>
          <button
            onClick={() => scrollToSection('use-cases')}
            className="flex items-center space-x-2 text-base font-medium hover:opacity-70 transition-all duration-200 hover:scale-105"
            style={{ color: '#1E1E2F' }}
          >
            <Users className="w-4 h-4" />
            <span>Use Cases</span>
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="flex items-center space-x-2 text-base font-medium hover:opacity-70 transition-all duration-200 hover:scale-105"
            style={{ color: '#1E1E2F' }}
          >
            <CreditCard className="w-4 h-4" />
            <span>Pricing</span>
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Link 
            to="/login"
            className="flex items-center space-x-2 text-base font-medium hover:opacity-70 transition-all duration-200 hover:scale-105"
            style={{ color: '#1E1E2F' }}
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
          <Button
            className="flex items-center space-x-2 px-6 py-2 rounded-full text-white font-medium transition-all duration-200 hover:brightness-110 transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
              border: 'none',
            }}
            onClick={() => scrollToSection('cta')}
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;