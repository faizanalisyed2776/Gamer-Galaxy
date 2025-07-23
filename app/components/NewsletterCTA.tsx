
'use client';

import { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const benefits = [
    {
      icon: "ri-notification-line",
      title: "Early Access",
      description: "Be the first to know about new game releases and beta invitations"
    },
    {
      icon: "ri-price-tag-line",
      title: "Exclusive Deals",
      description: "Special discounts and flash sales only for subscribers"
    },
    {
      icon: "ri-trophy-line",
      title: "Gaming News",
      description: "Latest industry news, reviews, and gaming tips from experts"
    },
    {
      icon: "ri-gift-line",
      title: "Free Games",
      description: "Monthly giveaways and free game keys for community members"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-violet-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-violet-500/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/20 to-purple-600/20"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-mail-line text-white text-3xl"></i>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                  Join the Galaxy Elite
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Subscribe to our newsletter and unlock exclusive gaming benefits, early access, and special offers.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-violet-500/10 rounded-lg border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${benefit.icon} text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Form */}
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 bg-gray-800/50 border border-violet-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 px-8 py-4 rounded-full text-white font-bold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                    >
                      <i className="ri-send-plane-line mr-2"></i>
                      Subscribe
                    </button>
                  </div>
                  <p className="text-center text-gray-400 text-sm mt-4">
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              ) : (
                <div className="text-center max-w-md mx-auto">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Welcome to Galaxy Elite!</h3>
                  <p className="text-gray-400 mb-6">
                    You've successfully subscribed to our newsletter. Get ready for exclusive gaming content and deals!
                  </p>
                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="text-violet-400 hover:text-violet-300 font-semibold transition-colors duration-300"
                  >
                    Subscribe another email
                  </button>
                </div>
              )}

              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-violet-500/20">
                <p className="text-gray-400 text-sm">Follow us on social media:</p>
                <div className="flex gap-4">
                  {[
                    { icon: 'ri-twitter-x-line', href: '#' },
                    { icon: 'ri-discord-line', href: '#' },
                    { icon: 'ri-youtube-line', href: '#' },
                    { icon: 'ri-twitch-line', href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-violet-500/20 hover:bg-violet-500/30 rounded-full flex items-center justify-center text-violet-400 hover:text-violet-300 transition-all duration-300 transform hover:scale-110"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
