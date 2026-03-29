// components/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
 <section className="min-h-screen bg-[#fbfdfb] py-12 lg:py-24 w-full">
  <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Image Column - Desktop left, mobile bottom */}
      <div className="relative order-2 lg:order-1 w-full flex justify-center">
        <div className="relative w-full max-w-[620px]">
          {/* Blue box behind image */}
          <div className="absolute right-[-12px] bottom-[-12px] w-full h-full bg-blue-500 z-0"></div>

          {/* Image */}
          <div className="relative aspect-[1365/2048] w-full">
            <Image
              src="/muffler1.jpg"
              alt="Hero Image"
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>
      </div>

      {/* Headline Column - Desktop right, mobile top */}
      <div className="flex flex-col justify-center order-1 lg:order-2 space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-normal text-gray-950">
          Build amazing<br />
          products with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">confidence.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-lg">
          The modern toolkit that helps teams ship faster, collaborate better, and delight users.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}
