import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Github, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Chrome
} from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt with:', formData);
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    console.log('Google login requested');
  };

  const handleGithubLogin = () => {
    // TODO: Implement GitHub OAuth
    console.log('GitHub login requested');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{ backgroundColor: '#F8F8F8' }}
    >
      <div className="max-w-md w-full">
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
            Welcome back
          </h2>
          <p 
            className="opacity-70"
            style={{ color: '#1E1E2F' }}
          >
            Continue your non-linear thinking journey
          </p>
        </motion.div>

        {/* Login Form */}
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
          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <Button
              onClick={handleGoogleLogin}
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
              onClick={handleGithubLogin}
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
            <div 
              className="absolute inset-0 flex items-center"
            >
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
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleLogin} className="space-y-4">
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
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span style={{ color: '#1E1E2F', opacity: 0.7 }}>Remember me</span>
              </label>
              <a 
                href="#"
                className="hover:opacity-70 transition-opacity"
                style={{ color: '#7A9BEE' }}
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full py-4 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #7A9BEE 0%, #3D48C1 100%)',
              }}
            >
              Sign in to SYNAPS
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p 
              className="text-sm opacity-70"
              style={{ color: '#1E1E2F' }}
            >
              Don't have an account?{' '}
              <Link 
                to="/signup"
                className="font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#7A9BEE' }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;