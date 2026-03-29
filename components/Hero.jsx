// components/ReviewSidebar.tsx
'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import Carousel from "./Carousel"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { usePathname } from "next/navigation";


import { useRef, useState, useEffect } from 'react';





const DynamicSquareWidget = dynamic(
  () => Promise.resolve(() => (
    <div className="h-full border-2 border-gray-300 rounded-2xl overflow-hidden shadow-inner bg-white">
      <iframe
        src="https://square.site/appointments/buyer/widget/2pefuflo2hw9e3/LCTHN7ABYT9JV"
        className="w-full h-full"
        style={{ border: 'none' }}
        title="Book Appointment"
        allowFullScreen
        scrolling="yes"
      />
    </div>
  )),
  { ssr: false }
);

const ReviewSidebar = () => {

useEffect(() => {
  const video = videoRef.current;

  if (video) {
    video.load(); // reloads the video
    video.play().catch(() => {});
  }
}, []);
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    '/Adobe Express - segment (5).mp4', // Replace with your video URLs

  ];

  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      // Loop back to the first video if needed, or stop
      setCurrentVideoIndex(0); // Or stay at the last index
    }
  };

const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen  w-full bg-white align-center">
      {/* Left / Top Side - Headline + Carousel */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full text-center lg:text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl justify-center md:text-6xl font-bold  text-center text-gray-900 leading-tight mb-10"
          >
            Loved by Real Customers
          </motion.h1>

          {/* Swiper Carousel */}
<div className="relative w-full mb-6 flex flex-col md:flex-row rounded-xl overflow-hidden ">
  {/* Carousel */}
  <div className="w-full md:w-[420px] aspect-[1] relative">
    <Carousel />
  </div>

  {/* Video */}
  <div className="w-full md:w-[420px] aspect-[1] mt-6 md:mt-0 md:ml-4 relative">
    {/* Paste your video logic here */}
   <video
      
       
        src={videos[0]}
      ref={videoRef}
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
  </div>
</div>

          {/* CTA Statement */}
          <p className="text-xl text-center md:text-2xl text-gray-700 mx-auto lg:mx-0">
            Have Questions? Text Us — We’ll Help Fast
          </p>
        </div>
      </div>

      {/* Right / Bottom Side - Iframe + Logos Below */}
      <div className="w-full lg:w-[300px]  justify-center flex-shrink-0 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white flex flex-col">
        {/* Iframe Container - Responsive Height */}
        <div 
          className="w-full flex-shrink-0"
          style={{ height: '500px' }}           // Mobile default
        >
          <div className="h-full lg:h-[50vh]">
            <DynamicSquareWidget />
          </div>
        </div>

        {/* Logos Below the Iframe */}
        <div className="flex gap-6 justify-center mt-4">
  {/* Yelp */}
  <div className="flex flex-col items-center">
    <img src="/yelp.png" alt="Yelp" className="h-6 w-auto" />
    <span className="text-xs text-gray-500 mt-1">Yelp</span>
  </div>

<div className="flex flex-col items-center">
    <img src="/google.png" alt="Google" className="h-6 w-auto" />
    <span className="text-xs text-gray-500 mt-1">Google</span>
  </div>
  {/* Facebook */}
  <div className="flex flex-col items-center">
    <img src="/facebook.png" alt="Facebook" className="h-6 w-auto" />
    <span className="text-xs text-gray-500 mt-1">Facebook</span>
  </div>
</div>
      </div>
    </div>
  );
};

export default ReviewSidebar;
