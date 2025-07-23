
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MegaFooter() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Investor Relations", href: "/investors" },
        { name: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Games",
      links: [
        { name: "All Games", href: "/games" },
        { name: "New Releases", href: "/games/new" },
        { name: "Coming Soon", href: "/games/upcoming" },
        { name: "Free Games", href: "/games/free" },
        { name: "Early Access", href: "/games/early-access" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "Contact Us", href: "/contact" },
        { name: "Bug Reports", href: "/support/bugs" },
        { name: "System Requirements", href: "/support/system" },
        { name: "Refund Policy", href: "/support/refunds" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Forums", href: "/community" },
        { name: "Discord", href: "#" },
        { name: "Reddit", href: "#" },
        { name: "Events", href: "/events" },
        { name: "Tournaments", href: "/tournaments" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Accessibility", href: "/accessibility" }
      ]
    }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const socialLinks = [
    { icon: 'ri-twitter-x-line', href: '#', name: 'Twitter' },
    { icon: 'ri-facebook-line', href: '#', name: 'Facebook' },
    { icon: 'ri-instagram-line', href: '#', name: 'Instagram' },
    { icon: 'ri-youtube-line', href: '#', name: 'YouTube' },
    { icon: 'ri-discord-line', href: '#', name: 'Discord' },
    { icon: 'ri-twitch-line', href: '#', name: 'Twitch' },
    { icon: 'ri-reddit-line', href: '#', name: 'Reddit' },
    { icon: 'ri-linkedin-line', href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="ri-gamepad-line text-white text-2xl"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Galaxy-Games
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              The ultimate gaming platform where gamers discover, play, and connect. 
              Join millions of players exploring infinite gaming worlds.
            </p>
            
            {/* App Downloads */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="flex items-center gap-3 bg-black hover:bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 transition-all duration-300">
                <i className="ri-apple-line text-white text-xl"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-black hover:bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 transition-all duration-300">
                <i className="ri-google-play-line text-white text-xl"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </button>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-8 text-white text-sm focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white font-semibold mb-4">Follow Galaxy-Games</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-right">
              <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Galaxy-Games. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed with ❤️ for gamers worldwide
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex gap-2">
                {[
                  'ri-visa-line',
                  'ri-mastercard-line',
                  'ri-paypal-line',
                  'ri-apple-line',
                  'ri-google-line'
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400"
                  >
                    <i className={icon}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line text-green-400"></i>
                <span className="text-gray-400 text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-customer-service-line text-green-400"></i>
                <span className="text-gray-400 text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-medal-line text-green-400"></i>
                <span className="text-gray-400 text-sm">Trusted by 10M+ Gamers</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <i className="ri-earth-line text-gray-400"></i>
                <span className="text-gray-400 text-sm">Available in 180+ countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
