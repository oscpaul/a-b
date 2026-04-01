// components/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
<div className="relative">
  {/* Big Image / Visual at the Top */}
  <div className="relative w-[90vw] min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img 
      src="/pic1.jpg" 
      alt="Hero Background" 
      className="absolute inset-0 w-full h-auto"
    />
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/10"></div>

    {/* Content Overlay */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white mb-6">
        Get professional<br />
        auto care with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">confidence.</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10">
        The modern toolkit that helps teams ship faster, collaborate better, and delight users.
      </p>

    <a 
  href="tel:+16302297330"
  className="group border border-white/70 hover:border-white text-white px-10 py-4 rounded-2xl font-medium text-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm inline-flex items-center justify-center gap-3"
>
  <span className="md:hidden">📞</span>
  <span>Call Us</span>
</a>
    </div>
  </div>

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
