
'use client';

import { useState, useCallback } from 'react';

export default function TrendingNow() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<{ [key: number]: boolean }>({});

  const trendingGames = [
    {
      id: 1,
      title: "Baldur's Gate 3",
      genre: "RPG",
      rating: 4.9,
      price: "$59.99",
      originalPrice: "$69.99",
      discount: "14%",
      image: "https://readdy.ai/api/search-image?query=Baldurs%20Gate%203%20fantasy%20RPG%20with%20party%20adventurers%2C%20dungeons%20and%20dragons%20style%2C%20epic%20fantasy%20adventure%2C%20professional%20game%20cover%20design&width=400&height=600&seq=trend1&orientation=portrait",
      description: "An epic RPG experience with endless possibilities",
      features: ["Turn-based combat", "Character customization", "Co-op multiplayer"],
      playTime: "100+ hours",
      releaseDate: "2023"
    },
    {
      id: 2,
      title: "Cyberpunk 2077",
      genre: "Action RPG",
      rating: 4.7,
      price: "$29.99",
      originalPrice: "$59.99",
      discount: "50%",
      image: "https://readdy.ai/api/search-image?query=Cyberpunk%202077%20futuristic%20city%20Night%20City%20with%20neon%20lights%2C%20V%20character%2C%20cyberpunk%20aesthetic%2C%20professional%20game%20cover&width=400&height=600&seq=trend2&orientation=portrait",
      description: "Open-world action-adventure in dystopian Night City",
      features: ["Open world", "Story choices", "Futuristic setting"],
      playTime: "60+ hours",
      releaseDate: "2020"
    },
    {
      id: 3,
      title: "Forza Horizon 5",
      genre: "Racing",
      rating: 4.8,
      price: "$39.99",
      originalPrice: "$59.99",
      discount: "33%",
      image: "https://readdy.ai/api/search-image?query=Forza%20Horizon%205%20racing%20cars%20in%20Mexico%20landscape%2C%20beautiful%20open%20world%20racing%2C%20dynamic%20weather%20effects&width=400&height=600&seq=trend3&orientation=portrait",
      description: "Ultimate racing playground set in Mexico",
      features: ["Open world racing", "Dynamic weather", "Online multiplayer"],
      playTime: "Endless",
      releaseDate: "2021"
    },
    {
      id: 4,
      title: "Elden Ring",
      genre: "Action RPG",
      rating: 4.9,
      price: "$49.99",
      originalPrice: "$59.99",
      discount: "17%",
      image: "https://readdy.ai/api/search-image?query=Elden%20Ring%20dark%20fantasy%20world%20with%20Tarnished%20warrior%2C%20epic%20boss%20battles%2C%20FromSoftware%20game%20art%2C%20mystical%20landscape&width=400&height=600&seq=trend4&orientation=portrait",
      description: "A new dark fantasy epic from FromSoftware",
      features: ["Dark fantasy", "Epic bosses", "Exploration"],
      playTime: "80+ hours",
      releaseDate: "2022"
    },
    {
      id: 5,
      title: "Call of Duty: Modern Warfare III",
      genre: "FPS",
      rating: 4.6,
      price: "$69.99",
      originalPrice: "$69.99",
      discount: "",
      image: "https://readdy.ai/api/search-image?query=Call%20of%20Duty%20Modern%20Warfare%20III%20military%20soldiers%20with%20tactical%20weapons%2C%20intense%20battlefield%20action%2C%20professional%20FPS%20game%20artwork&width=400&height=600&seq=trend5&orientation=portrait",
      description: "The ultimate first-person shooter experience",
      features: ["Campaign mode", "Multiplayer", "Zombies mode"],
      playTime: "40+ hours",
      releaseDate: "2023"
    }
  ];

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredGame(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredGame(null);
  }, []);

  const handleAddToCart = useCallback((game: typeof trendingGames[0]) => {
    // Get existing cart or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem('galaxy-games-cart') || '[]');
    
    // Check if item already exists
    const existingItemIndex = existingCart.findIndex((item: any) => item.id === game.id);
    
    if (existingItemIndex !== -1) {
      // Increase quantity if exists
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // Add new item
      const cartItem = {
        id: game.id,
        title: game.title,
        price: parseFloat(game.price.replace('$', '')),
        image: game.image,
        quantity: 1,
        type: 'game'
      };
      existingCart.push(cartItem);
    }
    
    // Save to localStorage
    localStorage.setItem('galaxy-games-cart', JSON.stringify(existingCart));
    
    // Visual feedback
    setAddedToCart(prev => ({ ...prev, [game.id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [game.id]: false }));
    }, 2000);
  }, []);

  const renderStars = useCallback((rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="ri-star-half-fill text-yellow-400 text-sm"></i>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="ri-star-line text-gray-500 text-sm"></i>
      );
    }

    return stars;
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <i className="ri-fire-line text-white text-2xl"></i>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Trending Now
            </h2>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <i className="ri-fire-line text-white text-2xl"></i>
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the hottest games that are dominating the gaming world right now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {trendingGames.map((game, index) => (
            <div
              key={game.id}
              className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl overflow-hidden backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hoveredGame === index ? 'shadow-2xl shadow-blue-500/20' : 'shadow-lg shadow-black/20'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Discount Badge */}
              {game.discount && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                  -{game.discount}
                </div>
              )}

              {/* Trending Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
                <i className="ri-fire-line text-sm"></i>
                #{index + 1}
              </div>

              {/* Game Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Hover Play Button */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredGame === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="bg-blue-500/90 hover:bg-blue-500 rounded-full p-4 backdrop-blur-sm transform transition-all duration-300 hover:scale-110">
                    <i className="ri-play-fill text-white text-2xl"></i>
                  </div>
                </div>

                {/* Quick Info Overlay */}
                <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredGame === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                    <span className="bg-black/50 px-2 py-1 rounded-full">{game.playTime}</span>
                    <span className="bg-black/50 px-2 py-1 rounded-full">{game.releaseDate}</span>
                  </div>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-400 font-semibold bg-blue-500/10 px-2 py-1 rounded-full">
                    {game.genre}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(game.rating)}
                    <span className="text-sm text-gray-400 ml-1">({game.rating})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                  {game.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {game.description}
                </p>

                {/* Features - Show on hover */}
                <div className={`space-y-1 mb-4 transition-all duration-300 ${
                  hoveredGame === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  {game.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <i className="ri-check-line text-green-400 text-xs"></i>
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-white">{game.price}</span>
                  {game.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{game.originalPrice}</span>
                  )}
                  {game.discount && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      SAVE {game.discount}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => handleAddToCart(game)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                    addedToCart[game.id]
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                  }`}
                >
                  {addedToCart[game.id] ? (
                    <div className="flex items-center justify-center gap-2">
                      <i className="ri-check-line"></i>
                      Added!
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <i className="ri-shopping-cart-line"></i>
                      Add to Cart
                    </div>
                  )}
                </button>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
                hoveredGame === index ? 'ring-2 ring-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.3)]' : ''
              }`}></div>

              {/* Trending Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50">
                <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Don't Miss Out on These Hot Games
            </h3>
            <p className="text-gray-400">
              Join millions of players enjoying the most popular games of the year
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 whitespace-nowrap">
              <i className="ri-gamepad-line mr-2"></i>
              View All Trending Games
            </button>
            
            <button className="border-2 border-blue-500/50 hover:border-blue-500 px-8 py-4 rounded-full text-blue-400 hover:text-blue-300 font-bold text-lg transition-all duration-300 hover:bg-blue-500/10 backdrop-blur-sm whitespace-nowrap">
              <i className="ri-filter-line mr-2"></i>
              Filter by Genre
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
