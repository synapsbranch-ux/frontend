import React from "react";
// Importer X au lieu de Twitter
import { Github, X, Linkedin, Mail } from "lucide-react"; 

import logo from '../assets/logo.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="py-12 px-6 border-t"
      style={{ 
        backgroundColor: '#F8F8F8',
        borderColor: 'rgba(30, 30, 47, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Brand Section with Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="SYNAPS" 
              className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={scrollToTop}
            />
            <div>
              <h3 
                className="text-2xl font-bold cursor-pointer hover:opacity-70 transition-opacity"
                style={{ color: '#1E1E2F' }}
                onClick={scrollToTop}
              >
                SYNAPS
              </h3>
              <p 
                className="text-sm opacity-60"
                style={{ color: '#1E1E2F' }}
              >
                Non-linear thinking workspace
              </p>
            </div>
          </div>

          {/* Contact Email */}
          <div className="text-center">
            <a 
              href="mailto:hello@synaps.ai"
              className="inline-flex items-center space-x-2 text-lg font-medium hover:opacity-70 transition-all duration-200"
              style={{ color: '#1E1E2F' }}
            >
              <Mail className="w-5 h-5" />
              <span>hello@synaps.ai</span>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://twitter.com/synaps" // L'URL peut rester 'twitter.com' car X redirige
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <X className="w-5 h-5" style={{ color: '#1E1E2F' }} /> {/* Utilisation de l'icône X */}
            </a>
            
            <a 
              href="https://linkedin.com/company/synaps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Linkedin className="w-5 h-5" style={{ color: '#1E1E2F' }} />
            </a>
            
            <a 
              href="https://github.com/synaps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Github className="w-5 h-5" style={{ color: '#1E1E2F' }} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t" style={{ borderColor: 'rgba(30, 30, 47, 0.1)' }}>
          <p 
            className="text-sm opacity-60"
            style={{ color: '#1E1E2F' }}
          >
            © {currentYear} Synaps Branch XYZ LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;