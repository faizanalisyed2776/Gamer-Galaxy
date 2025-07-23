
'use client';

import { useState } from 'react';

export default function GameTrailers() {
  const [currentTrailer, setCurrentTrailer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const trailers = [
    {
      id: 1,
      title: "Starfield",
      genre: "Space RPG",
      duration: "3:15",
      thumbnail: "https://readdy.ai/api/search-image?query=Starfield%20space%20exploration%20RPG%20with%20astronaut%20and%20alien%20planets%2C%20Bethesda%20game%20artwork%2C%20sci-fi%20atmosphere&width=800&height=450&seq=trailer1&orientation=landscape",
      description: "Explore the vast cosmos in Bethesda's newest epic",
      releaseDate: "Available Now"
    },
    {
      id: 2,
      title: "The Legend of Zelda: Tears of the Kingdom",
      genre: "Action Adventure",
      duration: "2:45",
      thumbnail: "https://readdy.ai/api/search-image?query=Zelda%20Tears%20of%20the%20Kingdom%20Link%20with%20new%20abilities%2C%20Hyrule%20kingdom%2C%20Nintendo%20game%20artwork%2C%20adventure%20atmosphere&width=800&height=450&seq=trailer2&orientation=landscape",
      description: "Link's greatest adventure in the skies above Hyrule",
      releaseDate: "Available Now"
    },
    {
      id: 3,
      title: "Spider-Man 2",
      genre: "Action Adventure",
      duration: "3:28",
      thumbnail: "https://readdy.ai/api/search-image?query=Spider-Man%202%20PS5%20with%20both%20Peter%20Parker%20and%20Miles%20Morales%20swinging%20through%20New%20York%20City%2C%20Insomniac%20Games%20artwork&width=800&height=450&seq=trailer3&orientation=landscape",
      description: "Two Spider-Men protect New York from new threats",
      releaseDate: "Available Now"
    },
    {
      id: 4,
      title: "Hogwarts Legacy",
      genre: "Action RPG",
      duration: "4:12",
      thumbnail: "https://readdy.ai/api/search-image?query=Hogwarts%20Legacy%20wizarding%20school%20with%20magic%20spells%20and%20fantastic%20beasts%2C%20Harry%20Potter%20universe%20game%20artwork&width=800&height=450&seq=trailer4&orientation=landscape",
      description: "Live the unwritten story of your Hogwarts adventure",
      releaseDate: "Available Now"
    }
  ];

  const nextTrailer = () => {
    setCurrentTrailer((prev) => (prev + 1) % trailers.length);
    setIsPlaying(false);
  };

  const prevTrailer = () => {
    setCurrentTrailer((prev) => (prev - 1 + trailers.length) % trailers.length);
    setIsPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-green-900/10 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Game Trailers Showcase
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Immerse yourself in cinematic previews of the galaxy's most anticipated games
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Trailer Display */}
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-green-500/20 mb-8">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={trailers[currentTrailer].thumbnail}
                alt={trailers[currentTrailer].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 ${
                    isPlaying ? 'animate-pulse' : ''
                  }`}
                >
                  <i className={`ri-${isPlaying ? 'pause' : 'play'}-fill`}></i>
                </button>
              </div>

              {/* Trailer Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {trailers[currentTrailer].genre}
                      </span>
                      <span className="text-gray-300 text-sm">
                        <i className="ri-time-line mr-1"></i>
                        {trailers[currentTrailer].duration}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {trailers[currentTrailer].title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-2">
                      {trailers[currentTrailer].description}
                    </p>
                    <span className="text-green-400 font-semibold">
                      {trailers[currentTrailer].releaseDate}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 whitespace-nowrap">
                      <i className="ri-heart-line mr-2"></i>
                      Wishlist
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 whitespace-nowrap">
                      <i className="ri-share-line mr-2"></i>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevTrailer}
              className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>

            <div className="flex gap-2">
              {trailers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTrailer(index);
                    setIsPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTrailer
                      ? 'bg-green-500 shadow-lg shadow-green-500/50'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTrailer}
              className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>

          {/* Trailer Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trailers.map((trailer, index) => (
              <button
                key={trailer.id}
                onClick={() => {
                  setCurrentTrailer(index);
                  setIsPlaying(false);
                }}
                className={`relative bg-gray-800/50 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  index === currentTrailer ? 'ring-2 ring-green-500/50 shadow-lg shadow-green-500/20' : ''
                }`}
              >
                <div className="relative h-24 md:h-32">
                  <img
                    src={trailer.thumbnail}
                    alt={trailer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <i className="ri-play-fill text-white text-sm"></i>
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {trailer.duration}
                  </div>
                </div>
                <div className="p-2">
                  <h4 className="text-white text-sm font-semibold truncate">{trailer.title}</h4>
                  <p className="text-gray-400 text-xs">{trailer.genre}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            <i className="ri-play-circle-line mr-2"></i>
            Watch All Trailers
          </button>
        </div>
      </div>
    </section>
  );
}
