
'use client';

import { useState } from 'react';

export default function EditorsPicks() {
  const [hoveredPick, setHoveredPick] = useState<number | null>(null);

  const editorsPicks = [
    {
      id: 1,
      title: "Hades",
      genre: "Roguelike",
      rating: 4.9,
      price: "$19.99",
      originalPrice: "$24.99",
      image: "https://readdy.ai/api/search-image?query=Hades%20roguelike%20game%20Zagreus%20with%20mythological%20gods%2C%20Greek%20mythology%20art%20style%2C%20supergiant%20games%20artwork&width=600&height=400&seq=pick1&orientation=landscape",
      editorNote: "John Smith - Lead Gaming Editor",
      whyPicked: "A masterpiece of roguelike design with incredible storytelling that makes every death feel meaningful and rewarding.",
      features: ["Endless replayability", "Stellar voice acting", "Perfect gameplay loop"],
      badge: "Editor's Choice",
      releaseDate: "Available Now"
    },
    {
      id: 2,
      title: "Disco Elysium",
      genre: "RPG",
      rating: 4.8,
      price: "$29.99",
      originalPrice: "$39.99",
      image: "https://readdy.ai/api/search-image?query=Disco%20Elysium%20detective%20RPG%20with%20unique%20art%20style%2C%20noir%20atmosphere%2C%20investigative%20gameplay%2C%20professional%20game%20artwork&width=600&height=400&seq=pick2&orientation=landscape",
      editorNote: "Sarah Johnson - Senior Editor",
      whyPicked: "Revolutionary RPG that redefines what storytelling in games can be, with incredible writing and character development.",
      features: ["No combat system", "Incredible writing", "Unique skill system"],
      badge: "Hidden Gem",
      releaseDate: "Available Now"
    },
    {
      id: 3,
      title: "Ori and the Will of the Wisps",
      genre: "Platformer",
      rating: 4.8,
      price: "$19.99",
      originalPrice: "$29.99",
      image: "https://readdy.ai/api/search-image?query=Ori%20and%20the%20Will%20of%20the%20Wisps%20beautiful%20forest%20platformer%2C%20magical%20creatures%2C%20hand-painted%20art%20style%2C%20Moon%20Studios%20artwork&width=600&height=400&seq=pick3&orientation=landscape",
      editorNote: "Mike Chen - Platformer Specialist",
      whyPicked: "A breathtakingly beautiful platformer with emotional storytelling and some of the most refined gameplay mechanics ever created.",
      features: ["Stunning visuals", "Emotional story", "Perfect controls"],
      badge: "Best Platformer",
      releaseDate: "Available Now"
    }
  ];

  const badgeColors = {
    "Editor's Choice": "bg-gradient-to-r from-yellow-500 to-orange-600",
    "Hidden Gem": "bg-gradient-to-r from-purple-500 to-pink-600",
    "Best Platformer": "bg-gradient-to-r from-blue-500 to-cyan-600"
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-yellow-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
              <i className="ri-award-line text-white text-2xl"></i>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Editor's Picks
            </h2>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
              <i className="ri-award-line text-white text-2xl"></i>
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Handpicked by our expert team of gaming professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {editorsPicks.map((pick, index) => (
            <div
              key={pick.id}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hoveredPick === index ? 'shadow-2xl shadow-yellow-500/20' : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredPick(index)}
              onMouseLeave={() => setHoveredPick(null)}
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 ${badgeColors[pick.badge as keyof typeof badgeColors]} text-white px-4 py-2 rounded-full text-sm font-bold z-10`}>
                <i className="ri-star-fill mr-1"></i>
                {pick.badge}
              </div>

              {/* Game Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pick.image}
                  alt={pick.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {/* Release Status */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {pick.releaseDate}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-yellow-400 font-semibold">{pick.genre}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{pick.title}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ri-star-${i < Math.floor(pick.rating) ? 'fill' : 'line'} text-yellow-400`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">({pick.rating})</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {pick.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <i className="ri-check-line text-green-400"></i>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-white">{pick.price}</span>
                  <span className="text-sm text-gray-400 line-through">{pick.originalPrice}</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {Math.round(((parseFloat(pick.originalPrice.replace('$', '')) - parseFloat(pick.price.replace('$', ''))) / parseFloat(pick.originalPrice.replace('$', ''))) * 100)}% OFF
                  </span>
                </div>

                {/* Editor Note */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-quill-pen-line text-yellow-400"></i>
                    <span className="text-yellow-400 text-sm font-semibold">{pick.editorNote}</span>
                  </div>
                  <p className="text-gray-300 text-sm italic">"{pick.whyPicked}"</p>
                </div>

                {/* Why We Picked It - Hover Reveal */}
                {hoveredPick === index && (
                  <div className="absolute inset-0 bg-black/95 flex items-center justify-center p-6 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-lightbulb-line text-white text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">Why We Picked It</h4>
                      <p className="text-gray-300 text-sm mb-6">"{pick.whyPicked}"</p>
                      <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 whitespace-nowrap">
                        <i className="ri-download-line mr-2"></i>
                        Get This Pick
                      </button>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    <i className="ri-shopping-cart-line mr-2"></i>
                    Buy Now
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg text-white transition-all duration-300">
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
                hoveredPick === index ? 'ring-2 ring-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.3)]' : ''
              }`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            <i className="ri-award-line mr-2"></i>
            See All Editor's Picks
          </button>
        </div>
      </div>
    </section>
  );
}
