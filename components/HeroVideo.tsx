"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundVideo({
  videos,
  currentVideoIndex,
}: {
  videos: string[];
  currentVideoIndex: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const restartVideo = async () => {
      try {
        // Force reload the current source
        video.src = videos[currentVideoIndex];
        video.load(); // Important for mobile after navigation

        // Small delay helps on iOS/Safari after back navigation
        await new Promise((resolve) => setTimeout(resolve, 50));

        await video.play();
      } catch (err) {
        console.warn("Video autoplay failed on mobile:", err);
        // Fallback: try again after user interaction if needed
      }
    };

    // Restart when returning to the page or video changes
    restartVideo();

    // Cleanup on unmount / route change
    return () => {
      video.pause();
      // Optional: video.src = ''; // can help free memory on some devices
    };
  }, [videos, currentVideoIndex, pathname]);

  return (
<video
      
       ref={videoRef}
        src="/Adobe Express - segment (5).mp4"
        autoPlay // Muted is often required for autoplay to work
        muted
         key={pathname}
         loop
      preload="metadata"   // Better than "auto" on mobile (saves data/battery)
        playsInline
        controls={false} // Set to true if you want controls
        // Ensure the video itself fills the container using object-cover
        className="classname2 h-full w-full object-cover"
        
      >
        Your browser does not support the video tag.
        
      </video>
  );
}
