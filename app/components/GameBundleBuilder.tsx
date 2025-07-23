
'use client';

import { useState } from 'react';

export default function GameBundleBuilder() {
  const [selectedGames, setSelectedGames] = useState<number[]>([]);
  const [bundleStep, setBundleStep] = useState(1);

  const availableGames = [
    {
      id: 1,
      title: "Assassin's Creed Valhalla",
      genre: "Action RPG",
      price: 59.99,
      image: "https://readdy.ai/api/search-image?query=Assassins%20Creed%20Valhalla%20Viking%20warrior%20Eivor%20with%20axe%2C%20Norse%20mythology%20setting%2C%20Ubisoft%20game%20artwork&width=200&height=300&seq=bundle1&orientation=portrait",
      rating: 4.6,
      popular: true
    },
    {
      id: 2,
      title: "Hollow Knight",
      genre: "Metroidvania",
      price: 14.99,
      image: "https://readdy.ai/api/search-image?query=Hollow%20Knight%20dark%20atmospheric%20platformer%20with%20knight%20character%2C%20insect%20kingdom%2C%20Team%20Cherry%20indie%20game%20art&width=200&height=300&seq=bundle2&orientation=portrait",
      rating: 4.9,
      popular: false
    },
    {
      id: 3,
      title: "Rocket League",
      genre: "Sports",
      price: 19.99,
      image: "https://readdy.ai/api/search-image?query=Rocket%20League%20cars%20playing%20soccer%20football%2C%20arena%20sports%20game%2C%20Psyonix%20competitive%20gameplay%20artwork&width=200&height=300&seq=bundle3&orientation=portrait",
      rating: 4.7,
      popular: true
    },
    {
      id: 4,
      title: "Stardew Valley",
      genre: "Simulation",
      price: 14.99,
      image: "https://readdy.ai/api/search-image?query=Stardew%20Valley%20farming%20simulation%20with%20crops%20and%20animals%2C%20pixel%20art%20style%2C%20ConcernedApe%20indie%20game%20artwork&width=200&height=300&seq=bundle4&orientation=portrait",
      rating: 4.8,
      popular: false
    },
    {
      id: 5,
      title: "Cities: Skylines",
      genre: "City Builder",
      price: 29.99,
      image: "https://readdy.ai/api/search-image?query=Cities%20Skylines%20city%20building%20simulation%20with%20skyscrapers%20and%20infrastructure%2C%20urban%20planning%20game%20artwork&width=200&height=300&seq=bundle5&orientation=portrait",
      rating: 4.5,
      popular: false
    },
    {
      id: 6,
      title: "DOOM Eternal",
      genre: "FPS",
      price: 39.99,
      image: "https://readdy.ai/api/search-image?query=DOOM%20Eternal%20Doom%20Slayer%20with%20shotgun%20fighting%20demons%2C%20intense%20action%20FPS%2C%20id%20Software%20game%20artwork&width=200&height=300&seq=bundle6&orientation=portrait",
      rating: 4.8,
      popular: true
    }
  ];

  const toggleGameSelection = (gameId: number) => {
    if (selectedGames.includes(gameId)) {
      setSelectedGames(selectedGames.filter(id => id !== gameId));
    } else if (selectedGames.length < 5) {
      setSelectedGames([...selectedGames, gameId]);
    }
  };

  const calculateTotal = () => {
    return selectedGames.reduce((total, gameId) => {
      const game = availableGames.find(g => g.id === gameId);
      return total + (game ? game.price : 0);
    }, 0);
  };

  const calculateDiscount = () => {
    const total = calculateTotal();
    if (selectedGames.length >= 5) return 0.35; // 35% discount
    if (selectedGames.length >= 4) return 0.25; // 25% discount
    if (selectedGames.length >= 3) return 0.15; // 15% discount
    return 0;
  };

  const finalPrice = calculateTotal() * (1 - calculateDiscount());
  const savings = calculateTotal() - finalPrice;

  return (
    <section className="py-20 bg-gradient-to-b from-black via-emerald-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <i className="ri-stack-line text-white text-2xl"></i>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Game Bundle Builder
            </h2>
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <i className="ri-stack-line text-white text-2xl"></i>
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Create your perfect gaming bundle and save big! Select 3-5 games for maximum discounts.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Bundle Progress */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 mb-8 backdrop-blur-sm border border-emerald-500/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">Your Bundle Progress</h3>
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 font-semibold">
                  {selectedGames.length}/5 Games Selected
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < selectedGames.length ? 'bg-emerald-500' : 'bg-gray-600'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Discount Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className={`p-4 rounded-lg border-2 ${
                selectedGames.length >= 3 ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-600 bg-gray-700/30'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">15%</div>
                  <div className="text-sm text-gray-400">3 Games</div>
                </div>
              </div>
              <div className={`p-4 rounded-lg border-2 ${
                selectedGames.length >= 4 ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-600 bg-gray-700/30'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">25%</div>
                  <div className="text-sm text-gray-400">4 Games</div>
                </div>
              </div>
              <div className={`p-4 rounded-lg border-2 ${
                selectedGames.length >= 5 ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-600 bg-gray-700/30'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">35%</div>
                  <div className="text-sm text-gray-400">5 Games</div>
                </div>
              </div>
            </div>

            {/* Price Summary */}
            {selectedGames.length > 0 && (
              <div className="bg-black/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Original Price:</span>
                  <span className="text-white font-semibold">${calculateTotal().toFixed(2)}</span>
                </div>
                {calculateDiscount() > 0 && (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Discount ({(calculateDiscount() * 100).toFixed(0)}%):</span>
                      <span className="text-green-400 font-semibold">-${savings.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-600 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-white">Bundle Price:</span>
                        <span className="text-2xl font-bold text-emerald-400">${finalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Game Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {availableGames.map((game) => (
              <div
                key={game.id}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  selectedGames.includes(game.id)
                    ? 'border-emerald-500 shadow-lg shadow-emerald-500/30'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
                onClick={() => toggleGameSelection(game.id)}
              >
                {/* Popular Badge */}
                {game.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    Popular
                  </div>
                )}

                {/* Selection Indicator */}
                {selectedGames.includes(game.id) && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                    <i className="ri-check-line text-white font-bold"></i>
                  </div>
                )}

                {/* Game Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                {/* Game Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-emerald-400 font-semibold">{game.genre}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
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

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">${game.price}</span>
                    <button className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                      selectedGames.includes(game.id)
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}>
                      {selectedGames.includes(game.id) ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle Actions */}
          {selectedGames.length >= 3 && (
            <div className="text-center bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-8 border border-emerald-500/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Your Bundle is Ready!</h3>
                <p className="text-gray-400">
                  You've selected {selectedGames.length} games and saved ${savings.toFixed(2)} with your bundle discount!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  <i className="ri-shopping-cart-line mr-2"></i>
                  Add Bundle to Cart - ${finalPrice.toFixed(2)}
                </button>
                <button className="border-2 border-emerald-500/50 hover:border-emerald-500 px-8 py-4 rounded-full text-emerald-400 hover:text-emerald-300 font-bold text-lg transition-all duration-300 hover:bg-emerald-500/10 backdrop-blur-sm whitespace-nowrap">
                  <i className="ri-heart-line mr-2"></i>
                  Save Bundle
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
