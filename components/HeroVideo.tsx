"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // or from 'next/router' in Pages Router

  const videos = [
    '/Adobe Express - segment (5).mp4', // Replace with your video URLs

  ];
export default function BackgroundVideo({ videos, currentVideoIndex }: { 
  videos: string[]; 
  currentVideoIndex: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pathname = usePathname();







  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset and play the video when the component mounts or route changes
    const playVideo = async () => {
      try {
        video.src = videos[currentVideoIndex]; // ensure source is set
        video.load(); // force reload the new source if it changed
        await video.play(); // explicitly play (handles autoplay restrictions better)
      } catch (err) {
        console.warn("Video play failed (user interaction may be required):", err);
      }
    };

    playVideo();

    // Optional: Cleanup when unmounting (helps prevent memory issues)
    return () => {
      video.pause();
      // Do NOT set src = '' here unless you want to fully unload
    };
  }, [videos, currentVideoIndex, pathname]); // Re-run when video changes or route changes

  return (
   <video
      
       ref={videoRef}
        src="/Adobe Express - segment (5).mp4"
        autoPlay // Muted is often required for autoplay to work
        muted
         key={pathname}
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
