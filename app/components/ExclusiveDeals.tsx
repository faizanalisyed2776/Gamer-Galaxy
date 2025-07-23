
'use client';

import { useState, useEffect } from 'react';

interface ExclusiveDealsProps {
  onAddToCart?: (item: any) => void;
}

export default function ExclusiveDeals({ onAddToCart }: ExclusiveDealsProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDeals = [
    {
      id: 1,
      title: "Red Dead Redemption 2",
      originalPrice: 59.99,
      salePrice: 19.99,
      discount: 67,
      image: "https://readdy.ai/api/search-image?query=Red%20Dead%20Redemption%202%20western%20outlaw%20Arthur%20Morgan%20with%20horse%2C%20wild%20west%20landscape%2C%20rockstar%20games%20artwork&width=500&height=300&seq=deal1&orientation=landscape",
      genre: "Action Adventure",
      rating: 4.8,
      timeLeft: "6h 23m",
      type: 'game' as const
    },
    {
      id: 2,
      title: "The Witcher 3: Wild Hunt",
      originalPrice: 39.99,
      salePrice: 9.99,
      discount: 75,
      image: "https://readdy.ai/api/search-image?query=The%20Witcher%203%20Wild%20Hunt%20Geralt%20of%20Rivia%20with%20silver%20sword%2C%20fantasy%20monsters%2C%20CD%20Projekt%20Red%20game%20art&width=500&height=300&seq=deal2&orientation=landscape",
      genre: "RPG",
      rating: 4.9,
      timeLeft: "12h 45m",
      type: 'game' as const
    },
    {
      id: 3,
      title: "Grand Theft Auto V",
      originalPrice: 29.99,
      salePrice: 14.99,
      discount: 50,
      image: "https://readdy.ai/api/search-image?query=Grand%20Theft%20Auto%20V%20Los%20Santos%20city%20with%20three%20protagonists%2C%20open%20world%20crime%20game%2C%20Rockstar%20Games%20artwork&width=500&height=300&seq=deal3&orientation=landscape",
      genre: "Action",
      rating: 4.7,
      timeLeft: "18h 12m",
      type: 'game' as const
    }
  ];

  const CountdownTimer = ({ time }: { time: typeof timeLeft }) => (
    <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-400">{time.days.toString().padStart(2, '0')}</div>
        <div className="text-xs text-gray-400">DAYS</div>
      </div>
      <div className="text-orange-400 text-xl">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-400">{time.hours.toString().padStart(2, '0')}</div>
        <div className="text-xs text-gray-400">HOURS</div>
      </div>
      <div className="text-orange-400 text-xl">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-400">{time.minutes.toString().padStart(2, '0')}</div>
        <div className="text-xs text-gray-400">MINS</div>
      </div>
      <div className="text-orange-400 text-xl">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-400">{time.seconds.toString().padStart(2, '0')}</div>
        <div className="text-xs text-gray-400">SECS</div>
      </div>
    </div>
  );

  const handleAddToCart = (deal: typeof flashDeals[0]) => {
    const cartItem = {
      id: deal.id + 100, // Offset to avoid conflicts
      title: deal.title,
      price: deal.salePrice,
      image: deal.image,
      quantity: 1,
      type: deal.type
    };

    // Get existing cart from localStorage
    const existingCart = localStorage.getItem('galaxy-games-cart');
    let cartItems = existingCart ? JSON.parse(existingCart) : [];

    // Check if item already exists
    const existingItem = cartItems.find((item: any) => item.id === cartItem.id);
    if (existingItem) {
      // Increase quantity
      cartItems = cartItems.map((item: any) => 
        item.id === cartItem.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new item
      cartItems.push(cartItem);
    }

    // Save to localStorage
    localStorage.setItem('galaxy-games-cart', JSON.stringify(cartItems));

    // Show success feedback
    const button = document.querySelector(`#add-to-cart-${deal.id}`) as HTMLButtonElement;
    if (button) {
      const originalText = button.innerHTML;
      button.innerHTML = '<i class="ri-check-line mr-2"></i>Added!';
      button.classList.add('bg-green-500');
      button.disabled = true;

      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('bg-green-500');
        button.disabled = false;
      }, 2000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-orange-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
              <i className="ri-fire-line text-white text-2xl"></i>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Exclusive Deals
            </h2>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
              <i className="ri-fire-line text-white text-2xl"></i>
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Limited-time offers that will disappear faster than a quantum jump
          </p>
          <CountdownTimer time={timeLeft} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flashDeals.map((deal) => (
            <div
              key={deal.id}
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Flash Sale Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold z-10 animate-pulse">
                <i className="ri-flashlight-line mr-1"></i>
                FLASH SALE
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-lg font-bold z-10">
                -{deal.discount}%
              </div>

              {/* Game Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Deal Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-orange-400 font-semibold">{deal.genre}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{deal.title}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ri-star-${i < Math.floor(deal.rating) ? 'fill' : 'line'} text-yellow-400`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">({deal.rating})</span>
                </div>

                {/* Price Comparison */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl font-bold text-green-400">${deal.salePrice}</span>
                    <span className="text-lg text-gray-400 line-through">${deal.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    You save: <span className="text-green-400 font-semibold">${(deal.originalPrice - deal.salePrice).toFixed(2)}</span>
                  </div>
                </div>

                {/* Time Left */}
                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 text-red-400">
                    <i className="ri-time-line"></i>
                    <span className="text-sm font-semibold">Ends in: {deal.timeLeft}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    id={`add-to-cart-${deal.id}`}
                    onClick={() => handleAddToCart(deal)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  >
                    <i className="ri-shopping-cart-line mr-2"></i>
                    Grab Deal
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg text-white transition-all duration-300">
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-red-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            <i className="ri-fire-line mr-2"></i>
            View All Flash Deals
          </button>
        </div>
      </div>
    </section>
  );
}
