// components/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#fbfdfb] text-gray-900 py-12 lg:py-24 w-full">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column - Headline + Features */}
          <div className="flex flex-col justify-center order-1 lg:order-1 space-y-12">

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-gray-950">
                Build amazing<br />
                products with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">confidence</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                The modern toolkit that helps teams ship faster, 
                collaborate better, and delight users.
              </p>
            </div>

            {/* Hero Image - Shows only on mobile, right under headline */}
            <div className="lg:hidden order-2 relative pt-4">
              <div className="relative aspect-[4/3] w-full max-w-[620px] mx-auto">
                <Image
                  src="/hero-image.png"        // ← Replace with your actual image
                  alt="Hero Dashboard Preview"
                  fill
                  className="object-contain rounded-3xl shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Features - Bottom on desktop, last on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-8 order-3 lg:order-2">
              <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition-all">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600 text-lg">
                  Optimized performance that loads in under 100ms and feels instant.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-md transition-all">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Enterprise Secure</h3>
                <p className="text-gray-600 text-lg">
                  Built with security and compliance in mind from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image - Desktop only (right side) */}
          <div className="hidden lg:block order-2 lg:order-2 relative">
            <div className="relative aspect-[4/3] lg:aspect-square w-full max-w-[680px] mx-auto">
              <Image
                src="/hero-image.png"
                alt="Hero Dashboard Preview"
                fill
                className="object-contain rounded-3xl shadow-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
