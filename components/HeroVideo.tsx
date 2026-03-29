"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundVideo({ videos, currentVideoIndex }: { 
  videos: string[]; 
  currentVideoIndex: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force a full reset on mobile when returning via back button
    const resetAndPlay = async () => {
      video.pause();                    // Stop any old playback
      video.src = videos[currentVideoIndex]; // Re-assign source
      video.load();                     // Critical for Safari after navigation

      try {
        await new Promise(resolve => setTimeout(resolve, 30)); // tiny delay helps iOS
        await video.play();
      } catch (e) {
        console.warn("Video play failed after remount:", e);
      }
    };

    resetAndPlay();

    return () => {
      video.pause();
    };
  }, [pathname, videos, currentVideoIndex]);

  return (
   <video
      
       ref={videoRef}
        src="/Adobe Express - segment (5).mp4"
        autoPlay // Muted is often required for autoplay to work
        muted
         loop
        preload="auto"
        playsInline
        controls={false} // Set to true if you want controls
        // Ensure the video itself fills the container using object-cover
        className="classname2 h-full w-full object-cover"
        
      >
        Your browser does not support the video tag.
        
      </video>
  );
}
