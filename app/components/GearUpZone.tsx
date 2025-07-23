
'use client';

import { useState } from 'react';

export default function GearUpZone() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filters = [
    { id: 'all', name: 'All Gear', icon: 'ri-grid-line' },
    { id: 'headsets', name: 'Headsets', icon: 'ri-headphone-line' },
    { id: 'controllers', name: 'Controllers', icon: 'ri-gamepad-line' },
    { id: 'keyboards', name: 'Keyboards', icon: 'ri-keyboard-line' },
    { id: 'mice', name: 'Mice', icon: 'ri-cursor-line' },
    { id: 'apparel', name: 'Apparel', icon: 'ri-shirt-line' }
  ];

  const products = [
    {
      id: 1,
      name: "Galaxy Pro Gaming Headset",
      category: "headsets",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      image: "https://readdy.ai/api/search-image?query=professional%20gaming%20headset%20with%20RGB%20lighting%20and%20futuristic%20design%2C%20high-tech%20gaming%20peripheral%2C%20sleek%20black%20and%20blue%20colors%2C%20product%20photography&width=400&height=400&seq=gear1&orientation=squarish",
      description: "Immersive 7.1 surround sound with RGB lighting",
      features: ["7.1 Surround Sound", "RGB Lighting", "Noise Cancellation"],
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Quantum Gaming Controller",
      category: "controllers",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.9,
      image: "https://readdy.ai/api/search-image?query=advanced%20gaming%20controller%20with%20ergonomic%20design%20and%20LED%20accents%2C%20professional%20gaming%20peripheral%2C%20modern%20black%20design%2C%20product%20photography&width=400&height=400&seq=gear2&orientation=squarish",
      description: "Precision control with haptic feedback",
      features: ["Haptic Feedback", "Wireless", "40h Battery"],
      badge: "New"
    },
    {
      id: 3,
      name: "Nebula Mechanical Keyboard",
      category: "keyboards",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.7,
      image: "https://readdy.ai/api/search-image?query=mechanical%20gaming%20keyboard%20with%20RGB%20backlighting%20and%20premium%20keycaps%2C%20professional%20gaming%20peripheral%2C%20sleek%20design%2C%20product%20photography&width=400&height=400&seq=gear3&orientation=squarish",
      description: "Mechanical switches with RGB backlighting",
      features: ["Mechanical Switches", "RGB Backlight", "Anti-Ghosting"],
      badge: "Sale"
    },
    {
      id: 4,
      name: "Cosmic Gaming Mouse",
      category: "mice",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.6,
      image: "https://readdy.ai/api/search-image?query=high-precision%20gaming%20mouse%20with%20RGB%20lighting%20and%20ergonomic%20shape%2C%20professional%20gaming%20peripheral%2C%20modern%20design%2C%20product%20photography&width=400&height=400&seq=gear4&orientation=squarish",
      description: "High-precision sensor with customizable RGB",
      features: ["16000 DPI", "RGB Lighting", "Ergonomic Design"],
      badge: "Popular"
    },
    {
      id: 5,
      name: "Galaxy Gaming Hoodie",
      category: "apparel",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.5,
      image: "https://readdy.ai/api/search-image?query=gaming%20hoodie%20with%20futuristic%20logo%20design%2C%20comfortable%20gaming%20apparel%2C%20black%20hoodie%20with%20colorful%20accents%2C%20product%20photography&width=400&height=400&seq=gear5&orientation=squarish",
      description: "Premium gaming apparel with galaxy design",
      features: ["100% Cotton", "Galaxy Design", "Comfortable Fit"],
      badge: "Limited"
    },
    {
      id: 6,
      name: "Stellar Gaming Chair",
      category: "furniture",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      image: "https://readdy.ai/api/search-image?query=ergonomic%20gaming%20chair%20with%20LED%20lighting%20and%20premium%20materials%2C%20professional%20gaming%20furniture%2C%20modern%20design%2C%20product%20photography&width=400&height=400&seq=gear6&orientation=squarish",
      description: "Ergonomic design with RGB accent lighting",
      features: ["Ergonomic Design", "RGB Lighting", "Premium Materials"],
      badge: "Premium"
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const badgeColors = {
    'Best Seller': 'bg-orange-500',
    'New': 'bg-green-500',
    'Sale': 'bg-red-500',
    'Popular': 'bg-blue-500',
    'Limited': 'bg-purple-500',
    'Premium': 'bg-yellow-500'
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-indigo-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">
            Gear Up Zone
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Elevate your gaming experience with premium gear and exclusive merchandise
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <i className={`${filter.icon} text-lg`}></i>
              {filter.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hoveredProduct === index ? 'shadow-2xl shadow-indigo-500/20' : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              {product.badge && (
                <div className={`absolute top-4 left-4 ${badgeColors[product.badge as keyof typeof badgeColors]} text-white px-3 py-1 rounded-full text-sm font-bold z-10`}>
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Quick Actions */}
                {hoveredProduct === index && (
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300">
                      <i className="ri-heart-line"></i>
                    </button>
                    <button className="w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300">
                      <i className="ri-eye-line"></i>
                    </button>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">({product.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-600 hover:to-cyan-700 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    <i className="ri-shopping-cart-line mr-2"></i>
                    Add to Cart
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg text-white transition-all duration-300">
                    <i className="ri-more-line"></i>
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-xl transition-all duration-500 pointer-events-none ${
                hoveredProduct === index ? 'ring-2 ring-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]' : ''
              }`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-600 hover:to-cyan-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            <i className="ri-shopping-bag-line mr-2"></i>
            Shop All Gear
          </button>
        </div>
      </div>
    </section>
  );
}
