"use client"
import React, { useState } from 'react'
import { AnimatedText } from './common/animated-text'
import { Play } from 'lucide-react';

const Video = () => {
      const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("video-player") as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };
  return (
   <div className="relative w-full max-w-4xl mx-auto mt-8 overflow-hidden shadow-lg rounded-2xl">
      {/* Video */}
      <video
        id="video-player"
        className="w-full h-[60vh] object-cover rounded-2xl"
        controls={isPlaying}
        poster="https://images.pexels.com/photos/8478201/pexels-photo-8478201.jpeg"
        preload="none"
      >
        <source src="/atelier_mhLZrWic.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      {/* Play button overlay (only if not playing) */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/40 hover:bg-black/50"
        >
          <div className="p-4 bg-white rounded-full shadow-lg">
            <Play className="w-10 h-10 text-black" />
          </div>
        </button>
      )}
    </div>
  )
}

export default Video