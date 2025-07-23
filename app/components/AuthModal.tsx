
'use client';

import { useState, useEffect } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsLoading(false);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTabSwitch = (isLoginMode: boolean) => {
    setIsLogin(isLoginMode);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      username: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Enhanced Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Enhanced Modal with Animation */}
      <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 rounded-3xl p-8 max-w-lg w-full mx-4 border border-violet-500/30 backdrop-blur-xl shadow-2xl shadow-violet-500/20 transform transition-all duration-300 scale-100 animate-in">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-purple-600/20 to-pink-500/30 rounded-3xl"></div>
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-violet-500/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-500/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Stylized Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-800/50 hover:bg-red-500/80 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50"
        >
          <i className="ri-close-line text-xl"></i>
        </button>

        <div className="relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-8">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                <i className="ri-gamepad-line text-white text-3xl"></i>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {isLogin ? 'Welcome Back, Gamer!' : 'Join the Galaxy'}
            </h2>
            <p className="text-gray-400 text-lg">
              {isLogin ? 'Ready to continue your adventure?' : 'Create your ultimate gaming profile'}
            </p>
          </div>

          {/* Enhanced Toggle Buttons */}
          <div className="relative bg-gray-800/50 rounded-2xl p-2 mb-8 border border-violet-500/20">
            <div className="flex relative">
              <div 
                className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl shadow-lg transition-all duration-500 ease-out ${
                  isLogin ? 'left-1' : 'left-1/2'
                }`}
              ></div>
              <button
                onClick={() => handleTabSwitch(true)}
                className="flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 whitespace-nowrap"
              >
                <i className="ri-login-circle-line mr-2"></i>
                Sign In
              </button>
              <button
                onClick={() => handleTabSwitch(false)}
                className="flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 whitespace-nowrap"
              >
                <i className="ri-user-add-line mr-2"></i>
                Sign Up
              </button>
            </div>
          </div>

          {/* Enhanced Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field (Sign Up Only) */}
            {!isLogin && (
              <div className="transform transition-all duration-500 ease-out">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <i className="ri-user-line mr-2 text-violet-400"></i>
                  Username
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-violet-400 transition-colors duration-300">
                      <i className="ri-user-line text-lg"></i>
                    </div>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Choose your gaming username"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="transform transition-all duration-500 ease-out">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <i className="ri-mail-line mr-2 text-violet-400"></i>
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-violet-400 transition-colors duration-300">
                    <i className="ri-mail-line text-lg"></i>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="transform transition-all duration-500 ease-out">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <i className="ri-lock-line mr-2 text-violet-400"></i>
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-violet-400 transition-colors duration-300">
                    <i className="ri-lock-line text-lg"></i>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 bg-gray-800/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-violet-400 transition-colors duration-300"
                  >
                    <i className={`ri-${showPassword ? 'eye-off' : 'eye'}-line text-lg`}></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Confirm Password Field (Sign Up Only) */}
            {!isLogin && (
              <div className="transform transition-all duration-500 ease-out">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <i className="ri-lock-line mr-2 text-violet-400"></i>
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-violet-400 transition-colors duration-300">
                      <i className="ri-lock-line text-lg"></i>
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-4 bg-gray-800/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-violet-400 transition-colors duration-300"
                    >
                      <i className={`ri-${showConfirmPassword ? 'eye-off' : 'eye'}-line text-lg`}></i>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Login Options */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center group cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-violet-500 bg-gray-800/50 border-violet-500/30 rounded focus:ring-violet-500/20 focus:ring-2 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded blur-sm group-hover:blur-none transition-all duration-300"></div>
                  </div>
                  <span className="ml-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Remember me</span>
                </label>
                <a href="#" className="text-sm text-violet-400 hover:text-violet-300 transition-colors duration-300 hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Enhanced Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative overflow-hidden bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 py-4 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <i className={`ri-${isLogin ? 'login-circle' : 'user-add'}-line mr-2`}></i>
                  {isLogin ? 'Sign In to Game' : 'Create Gaming Account'}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </form>

          {/* Enhanced Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-800/50 text-gray-400 backdrop-blur-sm rounded-full">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="relative group flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-violet-500/30 rounded-xl text-white hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="ri-google-fill mr-2 text-red-400 text-lg relative z-10"></i>
                <span className="relative z-10">Google</span>
              </button>
              <button className="relative group flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-violet-500/30 rounded-xl text-white hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="ri-discord-fill mr-2 text-indigo-400 text-lg relative z-10"></i>
                <span className="relative z-10">Discord</span>
              </button>
            </div>
          </div>

          {/* Enhanced Terms */}
          {!isLogin && (
            <div className="mt-6 p-4 bg-violet-500/10 rounded-xl border border-violet-500/20">
              <p className="text-center text-xs text-gray-400 leading-relaxed">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors duration-300 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors duration-300 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
