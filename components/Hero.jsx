// components/ReviewSidebar.tsx
'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  return (
    <div className="flex flex-col lg:flex-row min-h-screen  w-full bg-white">
      {/* Left / Top Side - Headline + Carousel */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16">
        <div className="max-w-3xl w-full text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-10"
          >
            Loved by Real Customers
          </motion.h1>

          {/* Swiper Carousel */}
          <div className="mb-12">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <SwiperSlide>
                <img 
                  src="/2brothers_2mb.jpg" 
                  alt="Customer Review 1" 
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src="/2brother1_2mb.jpg" 
                  alt="Customer Review 2" 
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src="/muffler3.png" 
                  alt="Customer Review 3" 
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* CTA Statement */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-lg mx-auto lg:mx-0">
            Join thousands of happy customers who trust us every day.
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
        <div className="p-6 flex justify-center gap-10 lg:gap-8 bg-white border-t border-gray-100">
          <div className="flex flex-col items-center">
            <img src="/yelp.svg" alt="Yelp" className="h-9 w-auto" />
            <span className="text-xs text-gray-500 mt-1">Yelp</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/google.svg" alt="Google" className="h-9 w-auto" />
            <span className="text-xs text-gray-500 mt-1">Google</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/facebook.svg" alt="Facebook" className="h-9 w-auto" />
            <span className="text-xs text-gray-500 mt-1">Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSidebar;
