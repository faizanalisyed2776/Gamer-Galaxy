'use client';

import { useState } from 'react';
import Link from 'next/link';
import ShoppingCart from './ShoppingCart';
import AuthModal from './AuthModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="ri-gamepad-line text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Galaxy-Games
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#games" className="text-white hover:text-blue-400 transition-colors duration-300">
                Games
              </Link>
              <Link href="#hardware" className="text-white hover:text-blue-400 transition-colors duration-300">
                Hardware
              </Link>
              <Link href="#gear" className="text-white hover:text-blue-400 transition-colors duration-300">
                Gear
              </Link>
              <Link href="#community" className="text-white hover:text-blue-400 transition-colors duration-300">
                Community
              </Link>
              <Link href="#deals" className="text-white hover:text-blue-400 transition-colors duration-300">
                Deals
              </Link>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <button className="w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300">
                  <i className="ri-search-line text-xl"></i>
                </button>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300 relative"
                >
                  <i className="ri-shopping-cart-line text-xl"></i>
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
              
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 whitespace-nowrap"
              >
                Sign In
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-blue-500/20">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="#games" className="text-white hover:text-blue-400 transition-colors duration-300">
                  Games
                </Link>
                <Link href="#hardware" className="text-white hover:text-blue-400 transition-colors duration-300">
                  Hardware
                </Link>
                <Link href="#gear" className="text-white hover:text-blue-400 transition-colors duration-300">
                  Gear
                </Link>
                <Link href="#community" className="text-white hover:text-blue-400 transition-colors duration-300">
                  Community
                </Link>
                <Link href="#deals" className="text-white hover:text-blue-400 transition-colors duration-300">
                  Deals
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Shopping Cart */}
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}