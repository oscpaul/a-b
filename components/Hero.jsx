// components/ReviewsSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-[#fbfdfb] text-gray-900 w-full">
      <div className="w-full px-6 md:px-12 lg:px-16">
        
        {/* Top Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gray-950">
            Loved by Our Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See what real people are saying about us.
          </p>
        </div>

        {/* Middle: Full-width iframe with ticked (dashed) border */}
        <div className="mb-20 w-full">
          <div className="border-2 border-dashed border-gray-300 rounded-3xl p-6 md:p-10 bg-white shadow-sm">
            <div className="w-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 min-h-[420px] md:min-h-[520px] lg:min-h-[580px]">
              {/* Your iframe embed goes here */}
              <iframe
                src="https://your-iframe-url-here.com" // ← REPLACE WITH YOUR ACTUAL IFRAME SRC
                title="Customer Reviews Embed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
                style={{ minHeight: '520px' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom: Social Review Logos + CTA */}
        <div className="flex flex-col items-center">
          <p className="text-gray-600 text-lg mb-12 text-center">
            Trusted and reviewed on
          </p>

          {/* Review Logos */}
          <div className="flex flex-wrap justify-center items-center gap-x-16 md:gap-x-24 gap-y-12 mb-16">
            {/* Google Reviews */}
            <div className="flex flex-col items-center">
              <Image 
                src="/logos/google-reviews.svg" 
                alt="Google Reviews" 
                width={180} 
                height={60} 
                className="h-12 w-auto"
              />
              <span className="text-sm text-gray-500 mt-3">4.9 ★★★★★</span>
            </div>

            {/* Yelp */}
            <div className="flex flex-col items-center">
              <Image 
                src="/logos/yelp.svg" 
                alt="Yelp" 
                width={150} 
                height={60} 
                className="h-12 w-auto"
              />
              <span className="text-sm text-gray-500 mt-3">5.0 ★★★★★</span>
            </div>

            {/* Facebook */}
            <div className="flex flex-col items-center">
              <Image 
                src="/logos/facebook.svg" 
                alt="Facebook" 
                width={150} 
                height={60} 
                className="h-12 w-auto"
              />
              <span className="text-sm text-gray-500 mt-3">Excellent</span>
            </div>
          </div>

          {/* CTA Button to Leave a Google Review */}
          <Link 
            href="https://g.page/your-business/review" // ← Replace with your actual Google review link
            target="_blank"
            className="group inline-flex items-center gap-4 bg-gray-900 hover:bg-black text-white font-semibold px-12 py-5 rounded-2xl text-xl transition-all active:scale-[0.98]"
          >
            Leave us a Google Review
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 12h14" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
