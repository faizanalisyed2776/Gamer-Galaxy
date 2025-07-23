'use client';

import { useState, useEffect } from 'react';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  type: 'game' | 'gear';
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<CartItem[]>([]);
  const [currentTab, setCurrentTab] = useState<'cart' | 'wishlist'>('cart');
  const [isLoading, setIsLoading] = useState(false);

  // Load cart and wishlist from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('galaxy-games-cart');
    const savedWishlist = localStorage.getItem('galaxy-games-wishlist');
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    } else {
      // Initial demo data
      const demoCart = [
        {
          id: 1,
          title: "Quantum Realms: Infinity",
          price: 59.99,
          image: "https://readdy.ai/api/search-image?query=quantum%20sci-fi%20game%20cover%20art%20with%20futuristic%20technology%20and%20space%20themes%2C%20professional%20game%20artwork&width=120&height=160&seq=cart1&orientation=portrait",
          quantity: 1,
          type: 'game' as const
        },
        {
          id: 2,
          title: "Galaxy Pro Gaming Headset",
          price: 149.99,
          image: "https://readdy.ai/api/search-image?query=professional%20gaming%20headset%20with%20RGB%20lighting%2C%20high-tech%20gaming%20peripheral%20product%20photo&width=120&height=160&seq=cart2&orientation=portrait",
          quantity: 1,
          type: 'gear' as const
        }
      ];
      setCartItems(demoCart);
      localStorage.setItem('galaxy-games-cart', JSON.stringify(demoCart));
    }

    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    } else {
      // Initial demo wishlist
      const demoWishlist = [
        {
          id: 3,
          title: "Neon Uprising",
          price: 39.99,
          image: "https://readdy.ai/api/search-image?query=cyberpunk%20action%20game%20cover%20with%20neon%20city%20and%20futuristic%20themes%2C%20professional%20game%20artwork&width=120&height=160&seq=wish1&orientation=portrait",
          quantity: 1,
          type: 'game' as const
        },
        {
          id: 4,
          title: "Stellar Horizons",
          price: 49.99,
          image: "https://readdy.ai/api/search-image?query=space%20exploration%20game%20cover%20with%20colorful%20planets%20and%20spacecraft%2C%20professional%20game%20artwork&width=120&height=160&seq=wish2&orientation=portrait",
          quantity: 1,
          type: 'game' as const
        }
      ];
      setWishlistItems(demoWishlist);
      localStorage.setItem('galaxy-games-wishlist', JSON.stringify(demoWishlist));
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('galaxy-games-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('galaxy-games-wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToCart = (item: CartItem) => {
    // Remove from wishlist
    setWishlistItems(wishlistItems.filter(wishItem => wishItem.id !== item.id));
    
    // Check if item already exists in cart
    const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingCartItem) {
      // If exists, increase quantity
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      // If doesn't exist, add to cart
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    
    // Switch to cart tab
    setCurrentTab('cart');
  };

  const moveToWishlist = (item: CartItem) => {
    // Remove from cart
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    
    // Check if item already exists in wishlist
    const existingWishlistItem = wishlistItems.find(wishItem => wishItem.id === item.id);
    if (!existingWishlistItem) {
      // Add to wishlist with quantity 1
      setWishlistItems([...wishlistItems, { ...item, quantity: 1 }]);
    }
    
    // Switch to wishlist tab
    setCurrentTab('wishlist');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const handleCheckout = () => {
    setIsLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false);
      alert('Checkout successful! Thank you for your purchase.');
      clearCart();
      onClose();
    }, 2000);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-gray-900 to-black shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-500/20">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <i className={`ri-${currentTab === 'cart' ? 'shopping-cart' : 'heart'}-line text-blue-400`}></i>
              {currentTab === 'cart' ? 'Shopping Cart' : 'Wishlist'}
            </h2>
            {currentTab === 'cart' && cartItems.length > 0 && (
              <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
            {currentTab === 'wishlist' && wishlistItems.length > 0 && (
              <span className="bg-pink-500 text-white text-sm px-2 py-1 rounded-full">
                {wishlistItems.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-gray-800/50 mx-6 mt-4 rounded-full p-1">
          <button
            onClick={() => setCurrentTab('cart')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              currentTab === 'cart'
                ? 'bg-blue-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <i className="ri-shopping-cart-line"></i>
            Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
          <button
            onClick={() => setCurrentTab('wishlist')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              currentTab === 'wishlist'
                ? 'bg-pink-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <i className="ri-heart-line"></i>
            Wishlist ({wishlistItems.length})
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6">
          {currentTab === 'cart' ? (
            cartItems.length === 0 ? (
              <div className="text-center py-12">
                <i className="ri-shopping-cart-line text-6xl text-gray-600 mb-4"></i>
                <p className="text-gray-400 text-lg">Your cart is empty</p>
                <p className="text-gray-500 text-sm mt-2">Add some games or gear to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-400 text-sm">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)} item(s) in cart
                  </p>
                  <button
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-300 text-sm transition-colors duration-300"
                  >
                    Clear Cart
                  </button>
                </div>
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-20 object-cover rounded-lg object-top"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm mb-2 capitalize">
                          <i className={`ri-${item.type === 'game' ? 'gamepad' : 'headphone'}-line mr-1`}></i>
                          {item.type}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                            >
                              <i className="ri-subtract-line"></i>
                            </button>
                            <span className="text-white font-semibold min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                            >
                              <i className="ri-add-line"></i>
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                            <div className="flex gap-2 mt-1">
                              <button
                                onClick={() => moveToWishlist(item)}
                                className="text-pink-400 hover:text-pink-300 text-sm transition-colors duration-300"
                              >
                                <i className="ri-heart-line mr-1"></i>
                              </button>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-400 hover:text-red-300 text-sm transition-colors duration-300"
                              >
                                <i className="ri-delete-bin-line mr-1"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            wishlistItems.length === 0 ? (
              <div className="text-center py-12">
                <i className="ri-heart-line text-6xl text-gray-600 mb-4"></i>
                <p className="text-gray-400 text-lg">Your wishlist is empty</p>
                <p className="text-gray-500 text-sm mt-2">Save your favorite games and gear here!</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-400 text-sm">
                    {wishlistItems.length} item(s) in wishlist
                  </p>
                  <button
                    onClick={clearWishlist}
                    className="text-red-400 hover:text-red-300 text-sm transition-colors duration-300"
                  >
                    Clear Wishlist
                  </button>
                </div>
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-20 object-cover rounded-lg object-top"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm mb-2 capitalize">
                          <i className={`ri-${item.type === 'game' ? 'gamepad' : 'headphone'}-line mr-1`}></i>
                          {item.type}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-white font-bold">${item.price.toFixed(2)}</p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => moveToCart(item)}
                              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 whitespace-nowrap"
                            >
                              <i className="ri-shopping-cart-line mr-1"></i>
                              Add to Cart
                            </button>
                            <button
                              onClick={() => removeFromWishlist(item.id)}
                              className="text-red-400 hover:text-red-300 text-sm transition-colors duration-300"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* Cart Summary */}
        {currentTab === 'cart' && cartItems.length > 0 && (
          <div className="border-t border-blue-500/20 p-6 bg-gray-800/50">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-white border-t border-gray-600 pt-3">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 transform hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                    Processing...
                  </div>
                ) : (
                  <>
                    <i className="ri-secure-payment-line mr-2"></i>
                    Checkout
                  </>
                )}
              </button>
              <button 
                onClick={onClose}
                className="w-full border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg text-gray-300 hover:text-white font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}