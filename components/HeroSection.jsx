// components/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative">
      
      {/* ====================== FULL WIDTH HERO ====================== */}
      <div className="relative w-screen min-h-[100vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">

        {/* Full Width Background Image */}
        <Image 
          src="/pic1.jpg" 
          alt="Professional Auto Repair Shop"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65 md:bg-black/55"></div>

        {/* Content - Centered and Readable */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white mb-6">
            Get professional<br />
            auto care with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              confidence.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto mb-10">
            Expert auto repair and maintenance serving DuPage County, Lombard, Addison, and surrounding areas.
          </p>

          {/* Call Button */}
          <a 
            href="tel:+1234567890"
            className="group border border-white/80 hover:border-white text-white px-10 py-4 rounded-2xl font-medium text-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm inline-flex items-center justify-center gap-3 mx-auto"
          >
            <span className="md:hidden">📞</span>
            <span>Call For Service</span>
          </a>
        </div>
      </div>

      {/* ====================== FEATURES SECTION ====================== */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 md:-mt-16 relative z-20 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-6 items-start">
            <div className="w-20 h-20 flex-shrink-0 rounded-3xl overflow-hidden shadow-md">
              <Image 
                src="/oil-2.png" 
                alt="Oil Change Service"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Conveniently Located in Addison</h3>
              <p className="text-gray-600">
                Serving all of DuPage County and surrounding areas including Lombard, Wheaton, Downers Grove, Glen Ellyn, and more.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-6 items-start">
            <div className="w-20 h-20 flex-shrink-0 rounded-3xl overflow-hidden shadow-md">
              <Image 
                src="/pic2.jpg" 
                alt="Certified Auto Repair"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Trusted Certified Repair</h3>
              <p className="text-gray-600">
                Our ASE-certified technicians deliver expert auto care using the latest diagnostic equipment and quality parts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
