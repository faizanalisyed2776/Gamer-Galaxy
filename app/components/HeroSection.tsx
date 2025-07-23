
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroGames = [
    {
      title: "Cyberpunk: Neon Nights",
      subtitle: "Play Beyond Limits",
      description: "Experience the ultimate cyberpunk adventure in a neon-lit world where your choices shape destiny.",
      price: "$59.99",
      originalPrice: "$79.99",
      image: "https://readdy.ai/api/search-image?query=futuristic%20cyberpunk%20cityscape%20with%20neon%20lights%2C%20dark%20atmospheric%20background%2C%20digital%20art%20style%2C%20high%20contrast%20lighting%2C%20purple%20and%20blue%20tones%2C%20gaming%20aesthetic%2C%20professional%20game%20cover%20art&width=1920&height=1080&seq=hero1&orientation=landscape"
    },
    {
      title: "Quantum Warfare",
      subtitle: "The Future is Now",
      description: "Engage in epic space battles across multiple dimensions with cutting-edge combat mechanics.",
      price: "$49.99",
      originalPrice: "$69.99",
      image: "https://readdy.ai/api/search-image?query=epic%20space%20battle%20scene%20with%20quantum%20effects%2C%20futuristic%20spacecraft%2C%20energy%20weapons%2C%20dark%20space%20background%20with%20glowing%20effects%2C%20sci-fi%20gaming%20artwork%2C%20dynamic%20action%20scene&width=1920&height=1080&seq=hero2&orientation=landscape"
    },
    {
      title: "Dragon's Ascension",
      subtitle: "Forge Your Legend",
      description: "Embark on an epic fantasy journey with stunning visuals and immersive storytelling.",
      price: "$54.99",
      originalPrice: "$74.99",
      image: "https://readdy.ai/api/search-image?query=majestic%20dragon%20flying%20over%20fantasy%20landscape%2C%20magical%20glowing%20effects%2C%20epic%20fantasy%20artwork%2C%20dark%20dramatic%20sky%2C%20mystical%20atmosphere%2C%20game%20cover%20art%20style&width=1920&height=1080&seq=hero3&orientation=landscape"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroGames.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img
          src={heroGames[currentSlide].image}
          alt={heroGames[currentSlide].title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {heroGames[currentSlide].subtitle}
              </span>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight">
                {heroGames[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                {heroGames[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-orange-400">
                  {heroGames[currentSlide].price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {heroGames[currentSlide].originalPrice}
                </span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  25% OFF
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 whitespace-nowrap">
                <i className="ri-download-line mr-2"></i>
                Buy Now
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm whitespace-nowrap">
                <i className="ri-play-line mr-2"></i>
                Watch Trailer
              </button>
              <button className="border-2 border-orange-500/50 hover:border-orange-500 px-8 py-4 rounded-full text-orange-400 hover:text-orange-300 font-bold text-lg transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm whitespace-nowrap">
                <i className="ri-heart-line mr-2"></i>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroGames.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? heroGames.length - 1 : currentSlide - 1)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-left-line text-xl"></i>
      </button>
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % heroGames.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-right-line text-xl"></i>
      </button>
    </section>
  );
}
