
'use client';

import { useState } from 'react';

export default function CommunityHighlights() {
  const [activeTab, setActiveTab] = useState('creators');

  const creators = [
    {
      id: 1,
      name: "Shroud",
      title: "FPS Legend",
      followers: "10.2M",
      avatar: "https://readdy.ai/api/search-image?query=professional%20gaming%20streamer%20Shroud%20with%20gaming%20headset%2C%20FPS%20player%20setup%2C%20content%20creator%20portrait&width=150&height=150&seq=creator1&orientation=squarish",
      game: "Valorant",
      achievement: "Former CS:GO Pro Player",
      streaming: true
    },
    {
      id: 2,
      name: "Pokimane",
      title: "Variety Streamer",
      followers: "9.3M",
      avatar: "https://readdy.ai/api/search-image?query=female%20gaming%20streamer%20Pokimane%20with%20colorful%20gaming%20setup%2C%20variety%20content%20creator%20portrait&width=150&height=150&seq=creator2&orientation=squarish",
      game: "Among Us",
      achievement: "Top Twitch Streamer 2023",
      streaming: false
    },
    {
      id: 3,
      name: "Ninja",
      title: "Battle Royale King",
      followers: "18.5M",
      avatar: "https://readdy.ai/api/search-image?query=gaming%20streamer%20Ninja%20with%20blue%20hair%20and%20gaming%20gear%2C%20Fortnite%20professional%20player%20portrait&width=150&height=150&seq=creator3&orientation=squarish",
      game: "Fortnite",
      achievement: "Most Followed Gamer",
      streaming: true
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      username: "@AlexT_Gaming",
      avatar: "https://readdy.ai/api/search-image?query=happy%20gaming%20enthusiast%20with%20gaming%20headset%2C%20satisfied%20customer%20portrait%2C%20positive%20gaming%20experience&width=80&height=80&seq=user1&orientation=squarish",
      rating: 5,
      text: "Galaxy-Games has completely transformed my gaming experience! Got Baldur's Gate 3 at an amazing price and the community is incredible.",
      game: "Baldur's Gate 3",
      verified: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      username: "@SarahPlays",
      avatar: "https://readdy.ai/api/search-image?query=female%20gamer%20with%20colorful%20gaming%20setup%2C%20enthusiastic%20gamer%20portrait%2C%20modern%20gaming%20lifestyle&width=80&height=80&seq=user2&orientation=squarish",
      rating: 5,
      text: "The exclusive deals are unbeatable! I've saved hundreds on games like Cyberpunk 2077 and Elden Ring.",
      game: "Cyberpunk 2077",
      verified: true
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      username: "@MarcusGamer",
      avatar: "https://readdy.ai/api/search-image?query=passionate%20gamer%20with%20gaming%20controller%2C%20satisfied%20customer%20portrait%2C%20gaming%20lifestyle&width=80&height=80&seq=user3&orientation=squarish",
      rating: 5,
      text: "Best gaming platform I've ever used. The game trailers showcase feature is pure genius!",
      game: "The Witcher 3",
      verified: false
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best builds for Baldur's Gate 3 endgame",
      author: "RPGMaster",
      replies: 234,
      views: "12.5K",
      lastActivity: "2 hours ago",
      category: "Strategy",
      hot: true
    },
    {
      id: 2,
      title: "Starfield DLC rumors and speculation",
      author: "SpaceExplorer",
      replies: 89,
      views: "5.2K",
      lastActivity: "4 hours ago",
      category: "News",
      hot: false
    },
    {
      id: 3,
      title: "Looking for Elden Ring co-op partners",
      author: "DarkSoulsFan",
      replies: 45,
      views: "2.8K",
      lastActivity: "1 hour ago",
      category: "LFG",
      hot: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-pink-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
            Community Highlights
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with fellow gamers, creators, and champions in our vibrant community
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: 'creators', name: 'Featured Creators', icon: 'ri-user-star-line' },
            { id: 'testimonials', name: 'Player Reviews', icon: 'ri-chat-quote-line' },
            { id: 'discussions', name: 'Forum Hot Topics', icon: 'ri-discuss-line' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <i className={`${tab.icon} text-lg`}></i>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'creators' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-pink-500/30"
                      />
                      {creator.streaming && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{creator.name}</h3>
                      <p className="text-pink-400 text-sm">{creator.title}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <i className="ri-user-line text-pink-400"></i>
                      <span className="text-sm">{creator.followers} followers</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <i className="ri-gamepad-line text-pink-400"></i>
                      <span className="text-sm">Playing {creator.game}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <i className="ri-trophy-line text-pink-400"></i>
                      <span className="text-sm">{creator.achievement}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 whitespace-nowrap">
                      <i className="ri-user-follow-line mr-2"></i>
                      Follow
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-white transition-all duration-300">
                      <i className="ri-live-line"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <i className="ri-verified-badge-fill text-blue-400"></i>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{testimonial.username}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ri-star-${i < testimonial.rating ? 'fill' : 'line'} text-yellow-400`}
                      ></i>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>

                  <div className="flex items-center gap-2 text-pink-400">
                    <i className="ri-gamepad-line"></i>
                    <span className="text-sm">Playing {testimonial.game}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'discussions' && (
            <div className="space-y-6">
              {discussions.map((discussion) => (
                <div
                  key={discussion.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">{discussion.title}</h3>
                      {discussion.hot && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          <i className="ri-fire-line mr-1"></i>
                          HOT
                        </span>
                      )}
                    </div>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                      {discussion.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-gray-400 text-sm mb-4">
                    <span>by {discussion.author}</span>
                    <span>{discussion.replies} replies</span>
                    <span>{discussion.views} views</span>
                    <span>{discussion.lastActivity}</span>
                  </div>

                  <button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 whitespace-nowrap">
                    <i className="ri-discuss-line mr-2"></i>
                    Join Discussion
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            <i className="ri-community-line mr-2"></i>
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
}
