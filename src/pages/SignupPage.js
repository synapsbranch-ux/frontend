import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  Github, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Chrome,
  Sparkles,
  MessageCircle
} from "lucide-react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const location = useLocation();
  const userPrompt = location.state?.prompt;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log('Signup attempt with:', formData);
  };

  const handleGoogleSignup = () => {
    // TODO: Implement Google OAuth
    console.log('Google signup requested');
  };

  const handleGithubSignup = () => {
    // TODO: Implement GitHub OAuth
    console.log('GitHub signup requested');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{ backgroundColor: '#F8F8F8' }}
    >
      <div className="max-w-lg w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 mb-6 text-sm hover:opacity-70 transition-opacity"
            style={{ color: '#1E1E2F' }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/logo.svg" alt="SYNAPS" className="w-10 h-10" />
            <h1 
              className="text-3xl font-bold"
              style={{ color: '#1E1E2F' }}
            >
              SYNAPS
            </h1>
          </div>
          
          <h2 
            className="text-2xl font-semibold mb-2"
            style={{ color: '#1E1E2F' }}
          >
            Start thinking in{" "}
            <span 
              style={{
                background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              dimensions
            </span>
          </h2>
          <p 
            className="opacity-70"
            style={{ color: '#1E1E2F' }}
          >
            Join thousands of thinkers, researchers, and creators
          </p>
        </motion.div>

        {/* User's Prompt Display */}
        {userPrompt && (
          <motion.div
            className="mb-6 p-4 rounded-2xl"
            style={{
              background: 'rgba(122, 155, 238, 0.1)',
              border: '1px solid rgba(122, 155, 238, 0.2)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-5 h-5 mt-1" style={{ color: '#7A9BEE' }} />
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: '#1E1E2F' }}>
                  Your question is ready to explore:
                </p>
                <p 
                  className="text-sm italic opacity-80"
                  style={{ color: '#1E1E2F' }}
                >
                  "{userPrompt}"
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Signup Form */}
        <motion.div
          className="rounded-3xl p-8"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(122, 155, 238, 0.1)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Social Signup Buttons */}
          <div className="space-y-3 mb-6">
            <Button
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center space-x-3 py-4 rounded-2xl font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '2px solid rgba(66, 133, 244, 0.2)',
                color: '#1E1E2F'
              }}
            >
              <Chrome className="w-5 h-5" style={{ color: '#4285F4' }} />
              <span>Continue with Google</span>
            </Button>

            <Button
              onClick={handleGithubSignup}
              className="w-full flex items-center justify-center space-x-3 py-4 rounded-2xl font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: 'rgba(36, 41, 46, 0.9)',
                border: '2px solid rgba(36, 41, 46, 0.3)',
                color: 'white'
              }}
            >
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div 
                className="w-full border-t"
                style={{ borderColor: 'rgba(30, 30, 47, 0.1)' }}
              />
            </div>
            <div className="relative flex justify-center text-sm">
              <span 
                className="bg-white px-4 opacity-60"
                style={{ color: '#1E1E2F' }}
              >
                Or create an account
              </span>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-40" style={{ color: '#1E1E2F' }} />
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-12 py-4 rounded-2xl border-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#1E1E2F'
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-40" style={{ color: '#1E1E2F' }} />
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-12 py-4 rounded-2xl border-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#1E1E2F'
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-40" style={{ color: '#1E1E2F' }} />
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-12 pr-12 py-4 rounded-2xl border-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#1E1E2F'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? 
                    <EyeOff className="w-5 h-5 opacity-40" style={{ color: '#1E1E2F' }} /> :
                    <Eye className="w-5 h-5 opacity-40" style={{ color: '#1E1E2F' }} />
                  }
                </button>
              </div>
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-40" style={{ color: '#1E1E2F' }} />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pl-12 pr-12 py-4 rounded-2xl border-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#1E1E2F'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  {showConfirmPassword ? 
                    <EyeOff className="w-5 h-5 opacity-40" style={{ color: '#1E1E2F' }} /> :
                    <Eye className="w-5 h-5 opacity-40" style={{ color: '#1E1E2F' }} />
                  }
                </button>
              </div>
            </div>

            <div className="text-xs opacity-70" style={{ color: '#1E1E2F' }}>
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1 rounded" required />
                <span>
                  I agree to the <a href="#" className="underline hover:opacity-70">Terms of Service</a> and{' '}
                  <a href="#" className="underline hover:opacity-70">Privacy Policy</a>
                </span>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full py-4 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
              style={{
                background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
              }}
            >
              <Sparkles className="w-5 h-5" />
              <span>Create your SYNAPS account</span>
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p 
              className="text-sm opacity-70"
              style={{ color: '#1E1E2F' }}
            >
              Already have an account?{' '}
              <Link 
                to="/login"
                className="font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#7A9BEE' }}
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex justify-center space-x-8 text-xs opacity-60" style={{ color: '#1E1E2F' }}>
            <span>✨ Free forever plan</span>
            <span>🚀 Setup in 2 minutes</span>
            <span>🔒 Enterprise security</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;