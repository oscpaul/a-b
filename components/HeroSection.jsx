// components/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
<div className="relative">
  {/* Big Image / Visual at the Top */}
  <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
    <img 
      src="/pic1.jpg" 
      alt="Hero Background" 
      className="absolute inset-0 w-full h-full object-cover"
    />
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content Overlay */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white mb-6">
        Build amazing<br />
        products with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">confidence.</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10">
        The modern toolkit that helps teams ship faster, collaborate better, and delight users.
      </p>

    <a 
  href="tel:+1234567890"
  className="group border border-white/70 hover:border-white text-white px-10 py-4 rounded-2xl font-medium text-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm inline-flex items-center justify-center gap-3"
>
  <span className="md:hidden">📞</span>
  <span>Watch demo</span>
</a>
    </div>
  </div>

  {/* Two Features Section */}
  <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20 pb-16">
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Feature 1 */}
      <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-6 items-start">
        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
          ⚡
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-6 items-start">
        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
          👥
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Team Collaboration</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
