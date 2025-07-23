
'use client';

import { useState } from 'react';

export default function GenresGrid() {
  const [hoveredGenre, setHoveredGenre] = useState<number | null>(null);

  const genres = [
    {
      id: 1,
      name: "Action",
      icon: "ri-sword-line",
      color: "from-red-500 to-orange-600",
      glowColor: "shadow-red-500/30",
      description: "Fast-paced combat and adrenaline",
      gameCount: 1247,
      image: "https://readdy.ai/api/search-image?query=intense%20action%20game%20scene%20with%20warrior%20fighting%20enemies%2C%20explosive%20combat%2C%20dynamic%20action%20sequences%2C%20professional%20game%20artwork%2C%20dramatic%20lighting%20effects&width=400&height=300&seq=genre1&orientation=landscape"
    },
    {
      id: 2,
      name: "RPG",
      icon: "ri-sword-line",
      color: "from-purple-500 to-pink-600",
      glowColor: "shadow-purple-500/30",
      description: "Epic adventures and character progression",
      gameCount: 892,
      image: "https://readdy.ai/api/search-image?query=fantasy%20RPG%20character%20with%20magical%20staff%20in%20mystical%20landscape%2C%20epic%20fantasy%20adventure%2C%20role-playing%20game%20artwork%2C%20magical%20atmosphere&width=400&height=300&seq=genre2&orientation=landscape"
    },
    {
      id: 3,
      name: "Horror",
      icon: "ri-ghost-line",
      color: "from-gray-700 to-red-900",
      glowColor: "shadow-red-900/30",
      description: "Spine-chilling experiences await",
      gameCount: 456,
      image: "https://readdy.ai/api/search-image?query=dark%20horror%20game%20scene%20with%20creepy%20atmosphere%2C%20haunted%20environment%2C%20scary%20creatures%2C%20psychological%20horror%20artwork%2C%20gothic%20dark%20aesthetic&width=400&height=300&seq=genre3&orientation=landscape"
    },
    {
      id: 4,
      name: "Strategy",
      icon: "ri-dashboard-line",
      color: "from-blue-500 to-teal-600",
      glowColor: "shadow-blue-500/30",
      description: "Command armies and conquer worlds",
      gameCount: 634,
      image: "https://readdy.ai/api/search-image?query=strategic%20warfare%20with%20armies%20and%20battlefields%2C%20tactical%20combat%20scene%2C%20military%20strategy%20game%20artwork%2C%20commanding%20officers%20planning%20battle&width=400&height=300&seq=genre4&orientation=landscape"
    },
    {
      id: 5,
      name: "Shooter",
      icon: "ri-crosshair-line",
      color: "from-yellow-500 to-orange-600",
      glowColor: "shadow-yellow-500/30",
      description: "Precision shooting and tactical combat",
      gameCount: 789,
      image: "https://readdy.ai/api/search-image?query=first-person%20shooter%20game%20with%20futuristic%20weapons%2C%20tactical%20combat%20scene%2C%20military%20action%20gameplay%2C%20professional%20FPS%20game%20artwork&width=400&height=300&seq=genre5&orientation=landscape"
    },
    {
      id: 6,
      name: "Racing",
      icon: "ri-car-line",
      color: "from-green-500 to-emerald-600",
      glowColor: "shadow-green-500/30",
      description: "High-speed thrills and competition",
      gameCount: 345,
      image: "https://readdy.ai/api/search-image?query=high-speed%20racing%20cars%20on%20futuristic%20track%2C%20intense%20racing%20competition%2C%20automotive%20sport%20game%20artwork%2C%20speed%20and%20motion%20effects&width=400&height=300&seq=genre6&orientation=landscape"
    },
    {
      id: 7,
      name: "Sports",
      icon: "ri-football-line",
      color: "from-indigo-500 to-purple-600",
      glowColor: "shadow-indigo-500/30",
      description: "Athletic competition and team play",
      gameCount: 567,
      image: "https://readdy.ai/api/search-image?query=professional%20sports%20game%20with%20athletes%20in%20action%2C%20competitive%20sports%20scene%2C%20stadium%20atmosphere%2C%20dynamic%20sports%20gameplay%20artwork&width=400&height=300&seq=genre7&orientation=landscape"
    },
    {
      id: 8,
      name: "Indie",
      icon: "ri-lightbulb-line",
      color: "from-pink-500 to-rose-600",
      glowColor: "shadow-pink-500/30",
      description: "Creative and innovative experiences",
      gameCount: 923,
      image: "https://readdy.ai/api/search-image?query=artistic%20indie%20game%20with%20unique%20visual%20style%2C%20creative%20game%20design%2C%20innovative%20gameplay%20mechanics%2C%20artistic%20game%20artwork%2C%20colorful%20aesthetic&width=400&height=300&seq=genre8&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Explore Genres
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover your next gaming adventure across diverse universes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {genres.map((genre, index) => (
            <div
              key={genre.id}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hoveredGenre === index ? `hover:shadow-2xl ${genre.glowColor}` : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredGenre(index)}
              onMouseLeave={() => setHoveredGenre(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={genre.image}
                  alt={genre.name}
                  className="w-full h-full object-cover opacity-30"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-60`}></div>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-64 flex flex-col justify-between">
                <div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${genre.color} rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 ${
                    hoveredGenre === index ? 'scale-110 rotate-12' : ''
                  }`}>
                    <i className={`${genre.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{genre.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{genre.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {genre.gameCount.toLocaleString()} games
                  </div>
                  <div className={`w-8 h-8 bg-gradient-to-r ${genre.color} rounded-full flex items-center justify-center transform transition-all duration-300 ${
                    hoveredGenre === index ? 'scale-110' : ''
                  }`}>
                    <i className="ri-arrow-right-line text-white"></i>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-xl transition-all duration-500 pointer-events-none ${
                hoveredGenre === index ? `ring-2 ring-purple-500/50 shadow-[0_0_30px_rgba(147,51,234,0.3)]` : ''
              }`}></div>

              {/* Animated Border */}
              {hoveredGenre === index && (
                <div className="absolute inset-0 rounded-xl">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${genre.color} opacity-20 animate-pulse`}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            <i className="ri-game-line mr-2"></i>
            Explore All Genres
          </button>
        </div>
      </div>
    </section>
  );
}
