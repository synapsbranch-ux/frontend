import React from "react";
import { Play } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ 
              color: '#1E1E2F',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600
            }}
          >
            See SYNAPS in Action
          </h2>
          
          <p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ 
              color: '#1E1E2F',
              opacity: 0.7,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Watch how SYNAPS transforms the way you think, research, and create with non-linear conversations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
              aspectRatio: '16/9'
            }}
          >
            {/* Mock Interface */}
            <div className="absolute inset-0 p-8">
              <div className="h-full flex flex-col">
                {/* Mock Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
                  </div>
                  <div 
                    className="text-sm font-medium opacity-60"
                    style={{ color: '#1E1E2F' }}
                  >
                    SYNAPS Workspace
                  </div>
                </div>

                {/* Mock Conversation Tree */}
                <div className="flex-1 grid grid-cols-3 gap-4">
                  {/* Main Conversation */}
                  <div className="space-y-3">
                    <div 
                      className="p-3 rounded-lg text-sm opacity-70"
                      style={{ 
                        background: 'rgba(122, 155, 238, 0.2)',
                        color: '#1E1E2F'
                      }}
                    >
                      How can AI improve user experience?
                    </div>
                    <div 
                      className="p-3 rounded-lg text-sm opacity-70"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.5)',
                        color: '#1E1E2F'
                      }}
                    >
                      AI can enhance UX through personalization...
                    </div>
                  </div>

                  {/* Branch 1 */}
                  <div className="space-y-3">
                    <div 
                      className="p-3 rounded-lg text-sm opacity-70"
                      style={{ 
                        background: 'rgba(61, 72, 193, 0.2)',
                        color: '#1E1E2F'
                      }}
                    >
                      What about accessibility?
                    </div>
                    <div 
                      className="p-3 rounded-lg text-sm opacity-70"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.5)',
                        color: '#1E1E2F'
                      }}
                    >
                      AI-powered accessibility features...
                    </div>
                  </div>

                  {/* Branch 2 */}
                  <div className="space-y-3">
                    <div 
                      className="p-3 rounded-lg text-sm opacity-70"
                      style={{ 
                        background: 'rgba(122, 155, 238, 0.3)',
                        color: '#1E1E2F'
                      }}
                    >
                      Performance considerations?
                    </div>
                    <div 
                      className="p-3 rounded-lg text-sm opacity-70"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.5)',
                        color: '#1E1E2F'
                      }}
                    >
                      Edge computing for real-time AI...
                    </div>
                  </div>
                </div>

                {/* Connecting Lines Animation */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full opacity-30">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7A9BEE" />
                        <stop offset="100%" stopColor="#3D48C1" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 200 200 Q 300 150 400 200" 
                      stroke="url(#lineGradient)" 
                      strokeWidth="2" 
                      fill="none"
                      className="animate-pulse"
                    />
                    <path 
                      d="M 200 250 Q 300 200 600 250" 
                      stroke="url(#lineGradient)" 
                      strokeWidth="2" 
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
                  boxShadow: '0 8px 32px 0 rgba(122, 155, 238, 0.4)',
                }}
              >
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>

            {/* Animated Pulse Effect */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(122, 155, 238, 0.1) 0%, rgba(61, 72, 193, 0.1) 100%)',
              }}
            />
          </div>

          <div className="text-center mt-8">
            <p 
              className="text-lg opacity-60"
              style={{ color: '#1E1E2F' }}
            >
              Click to see the full demo video
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;