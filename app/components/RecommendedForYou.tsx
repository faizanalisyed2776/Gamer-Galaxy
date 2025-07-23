
'use client';

import { useState } from 'react';

export default function RecommendedForYou() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const recommendations = [
    {
      id: 1,
      title: "No Man's Sky",
      genre: "Space Exploration",
      price: "$29.99",
      originalPrice: "$59.99",
      rating: 4.4,
      image: "https://readdy.ai/api/search-image?query=No%20Mans%20Sky%20space%20exploration%20with%20alien%20planets%20and%20starships%2C%20Hello%20Games%20procedural%20universe%20artwork&width=300&height=400&seq=rec1&orientation=portrait",
      aiReason: "Based on your love for space games",
      tags: ["Space", "Exploration", "Survival"],
      match: "94%"
    },
    {
      id: 2,
      title: "Dark Souls III",
      genre: "Action RPG",
      price: "$24.99",
      originalPrice: "$59.99",
      rating: 4.7,
      image: "https://readdy.ai/api/search-image?query=Dark%20Souls%20III%20dark%20fantasy%20knight%20with%20sword%2C%20challenging%20RPG%20combat%2C%20FromSoftware%20atmospheric%20artwork&width=300&height=400&seq=rec2&orientation=portrait",
      aiReason: "Similar to your favorite challenging RPGs",
      tags: ["Dark Fantasy", "Challenging", "RPG"],
      match: "91%"
    },
    {
      id: 3,
      title: "Hitman 3",
      genre: "Stealth Action",
      price: "$19.99",
      originalPrice: "$59.99",
      rating: 4.6,
      image: "https://readdy.ai/api/search-image?query=Hitman%203%20Agent%2047%20in%20suit%20with%20stealth%20assassination%2C%20IO%20Interactive%20professional%20artwork&width=300&height=400&seq=rec3&orientation=portrait",
      aiReason: "Perfect for stealth game fans",
      tags: ["Stealth", "Strategy", "Action"],
      match: "89%"
    },
    {
      id: 4,
      title: "F1 23",
      genre: "Racing Simulation",
      price: "$34.99",
      originalPrice: "$69.99",
      rating: 4.5,
      image: "https://readdy.ai/api/search-image?query=F1%2023%20Formula%201%20racing%20cars%20on%20Monaco%20track%2C%20Codemasters%20realistic%20racing%20simulation%20artwork&width=300&height=400&seq=rec4&orientation=portrait",
      aiReason: "High-speed racing you'll love",
      tags: ["Racing", "Simulation", "Sports"],
      match: "87%"
    },
    {
      id: 5,
      title: "Portal 2",
      genre: "Puzzle",
      price: "$9.99",
      originalPrice: "$19.99",
      rating: 4.9,
      image: "https://readdy.ai/api/search-image?query=Portal%202%20test%20chambers%20with%20portal%20gun%20and%20GLaDOS%2C%20Valve%20puzzle%20game%20artwork%2C%20futuristic%20laboratory&width=300&height=400&seq=rec5&orientation=portrait",
      aiReason: "Brain-teasing puzzles you'll master",
      tags: ["Puzzle", "Co-op", "Sci-Fi"],
      match: "85%"
    },
    {
      id: 6,
      title: "Elite Dangerous",
      genre: "Space Simulation",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 4.3,
      image: "https://readdy.ai/api/search-image?query=Elite%20Dangerous%20space%20trading%20simulation%20with%20detailed%20starships%2C%20Frontier%20Developments%20space%20game%20artwork&width=300&height=400&seq=rec6&orientation=portrait",
      aiReason: "Complex space trading simulation",
      tags: ["Simulation", "Trading", "Space"],
      match: "83%"
    }
  ];

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 320));
  };

  const scrollRight = () => {
    const maxScroll = (recommendations.length - 3) * 320;
    setScrollPosition(Math.min(maxScroll, scrollPosition + 320));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-teal-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
              <i className="ri-brain-line text-white text-2xl"></i>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Recommended for You
            </h2>
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
              <i className="ri-brain-line text-white text-2xl"></i>
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AI-powered suggestions tailored to your gaming preferences
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
            disabled={scrollPosition === 0}
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
            disabled={scrollPosition >= (recommendations.length - 3) * 320}
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          {/* Scrollable Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {recommendations.map((game) => (
                <div
                  key={game.id}
                  className="min-w-[300px] bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-teal-500/20 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer"
                >
                  {/* AI Match Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    <i className="ri-brain-line mr-1"></i>
                    {game.match} Match
                  </div>

                  {/* Game Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-teal-400 font-semibold">{game.genre}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{game.title}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`ri-star-${i < Math.floor(game.rating) ? 'fill' : 'line'} text-yellow-400`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({game.rating})</span>
                    </div>

                    {/* AI Reason */}
                    <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <i className="ri-robot-line text-teal-400"></i>
                        <span className="text-teal-400 text-sm font-semibold">AI Insight</span>
                      </div>
                      <p className="text-gray-300 text-sm">{game.aiReason}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{game.price}</span>
                      <span className="text-sm text-gray-400 line-through">{game.originalPrice}</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {Math.round(((parseFloat(game.originalPrice.replace('$', '')) - parseFloat(game.price.replace('$', ''))) / parseFloat(game.originalPrice.replace('$', ''))) * 100)}% OFF
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                        <i className="ri-shopping-cart-line mr-2"></i>
                        Add to Cart
                      </button>
                      <button className="bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg text-white transition-all duration-300">
                        <i className="ri-heart-line"></i>
                      </button>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-cyan-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            <i className="ri-refresh-line mr-2"></i>
            Refresh Recommendations
          </button>
        </div>
      </div>
    </section>
  );
}
