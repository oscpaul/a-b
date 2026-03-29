"use client";

import { usePathname } from "next/navigation";

export default function BackgroundVideo({ videos, currentVideoIndex }: {
  videos: string[];
  currentVideoIndex: number;
}) {
  const pathname = usePathname();

  return (
    <div key={pathname}>   {/* This forces full remount on route change */}
     <video
      
       src="/Adobe Express - segment (5).mp4"
        autoPlay // Muted is often required for autoplay to work
        muted
         loop
        preload="metadata"
        playsInline
        controls={false} // Set to true if you want controls
        // Ensure the video itself fills the container using object-cover
        className="classname2 h-full w-full object-cover"
        
      >
        Your browser does not support the video tag.
        
      </video>
    </div>
  );
}
