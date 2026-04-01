// components/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
<div className="relative">


<div className="relative min-h-[100vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
  
  {/* Background Image */}
  <img 
    src="/pic1.jpg" 
    alt="Auto Repair Shop"
    className="absolute inset-0 w-full h-full object-cover"
  />
  
  {/* Dark Overlay - Stronger on mobile */}
  <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16 pb-12">
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
      className="group border border-white/80 hover:border-white text-white px-9 py-4 rounded-2xl font-medium text-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm inline-flex items-center justify-center gap-3 mx-auto"
    >
      <span className="md:hidden">📞</span>
      <span>Call For Service</span>
    </a>
  </div>
</div>

Key Fixes Applied:Removed w-[90vw] → now full width
Better height handling (min-h-[100vh] on mobile, slightly less on desktop)
Image uses object-cover so it properly fills the screen without distortion
Stronger overlay on mobile for better text readability
Smaller, more readable text sizes on mobile (text-4xl instead of text-5xl)
Better padding and spacing for mobile screens
Updated button text to be more relevant for an auto shop

Would you like me to make the text even smaller on mobile, or add a scroll indicator at the bottom?

Explore Tailwind responsive utilities

Optimize hero section animations

Revise mobile text sizing



  

  {/* Two Features Section */}
  <div className="max-w-6xl mx-auto px-6 -mt-2 relative z-20">
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Feature 1 */}
      <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-6 items-start">
        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
          <div className="w-20 h-20 mx-auto rounded-3xl overflow-hidden shadow-md">
  <img 
    src="/oil-2.png" 
    alt="Oil Change" 
    className="w-full h-full object-cover"
  />
</div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Conviently in  Addison </h3>
          <p className="text-gray-600">
Serving all of DuPage County and surrounding areas, our auto repair shop is proud to be your trusted local mechanic. Whether you’re in Lombard, Addison, Wheaton, Downers Grove, Glen Ellyn, or nearby communities, we provide fast, honest, and high-quality car service for every make and model.

          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-6 items-start">
        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
           <img 
    src="/pic2.jpg" 
    alt="Oil Change" 
    className="w-full h-full object-cover"
  />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Trusted repair service</h3>
          <p className="text-gray-600">
Our ASE-certified technicians deliver expert auto care using the latest diagnostic equipment and quality parts. You can trust us for honest, professional service on every repair.

          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
