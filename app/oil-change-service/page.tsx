// app/services/maintenance/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import HeroVideo from "@/components/HeroVideo"
import Script from 'next/script';
export const metadata: Metadata = {
  title: 'Oil Change Addison IL | Quick Auto Repair Near Me',
  description: 'Keep your engine running smoothly with our professional oil change service. We use high-quality conventional, synthetic, and high-mileage oils to protect your engine, improve performance, and extend its lifespan.',
  openGraph: {
    title: 'Oil Change Addison IL | Quick Auto Repair Near Me',
    description: 'Keep your engine running smoothly with our professional oil change service. We use high-quality conventional, synthetic, and high-mileage oils to protect your engine, improve performance, and extend its lifespan.',
    images: [{ url: '/oil-2.png' }], // replace with your actual image
  },
};




// Inside your MaintenancePage component, before or after the main <div>
<Script
  id="maintenance-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
   "@graph": [
        {
          "@type": "Service",
          "name": "Oil Change Service",
          "serviceType": "Automotive Maintenance",
          "provider": { "@id": "https://www.yourdomain.com/#business" },
          "description": "Quick oil change, full synthetic oil change, conventional oil change, 5-quart oil change, high mileage oil change for cars and trucks in Addison IL. Includes oil filter replacement and multi-point inspection.",
 "areaServed": {
    "@type": "Place",
    "name": "Addison, IL and surrounding areas"
  },          "offers": {
            "@type": "Offer",
            "price": "49.99",           // Update with your actual starting price
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://www.yourdomain.com/services/maintenance"
          }
        },
     {
  "@type": "Service",
  "name": "Undercoating Service",
  "serviceType": "Vehicle Undercoating",
  "provider": {
    "@id": "https://www.yourdomain.com/#business"
  },
  "description": "Professional undercoating and rustproofing application to protect your vehicle's underbody from rust, salt, and road debris. Ideal for cars and trucks in the Addison, IL area.",
  "areaServed": {
    "@type": "Place",
    "name": "Addison, IL and surrounding areas"
  },
  "offers": {
    "@type": "Offer",
    "price": "149.99",          // Replace with your actual price
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://www.yourdomain.com/services/maintenance"
  }
}
      ]
    })
  }}
/>

export default function MaintenancePage() {
  return (
   <div className="font-sans">
  {/* Hero Section - Big Background with Video/Image */}
     
<section className="relative min-h-[100vh] md:h-screen flex items-center justify-center overflow-hidden">
  
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-10"></div>
  
  {/* Hero Video */}
    <video 
      autoPlay 
      muted 
      loop 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/A3DA80A7-056C-427E-8F14-472A631C1794.mp4" type="video/mp4" />
    </video>

  {/* Content */}
  <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-12 pb-16 md:pt-0">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white mb-6 font-serif">
      Oil Change  <br />Service
    </h1>
  
    
    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="tel:+1234567890" 
        className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all active:scale-95"
      >
        Call Us Now
      </a>
      <button className="border border-white/80 text-white px-10 py-4 rounded-2xl font-medium text-lg hover:bg-white/10 transition-all active:scale-95">
        Watch Video
      </button>
    </div>
  </div>

  {/* Optional scroll indicator for mobile */}
{/* Scroll Down Indicator - Mobile Only */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden z-10">
  <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-center justify-center">
    <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll-down"></div>
  </div>
</div>
</section>

  {/* Features / Services Section */}
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
       
                <h2 className="text-5xl font-bold tracking-tight text-gray-900">Quick, Cheap Oil Change</h2>

<h3>Signs You Need an Oil Change</h3>
<p>Wondering about the <strong>signs you need an oil change</strong>? Common indicators include dark or gritty <strong>engine oil</strong>, unusual engine noise, reduced fuel efficiency, or the check engine light. Don’t wait until problems arise—schedule your <strong>oil change service</strong> today.
Signs You Need an Oil Change and Other Maintenance
Contact us today for your next quick oil change, full maintenance package, or any auto repair near me needs. Walk-ins welcome and same-day service available on most repairs.
      </p>
        <h4>High Mileage Oil Changes in Addison</h4>
<p>Driving a high-mileage vehicle? We specialize in <strong>high mileage</strong> oil changes designed for engines with over 75,000 miles. These advanced formulations help reduce oil consumption, minimize leaks, and provide extra protection against wear in older engines.</p>
      </div>


<h3>Choosing the Right Type of Oil for Your Vehicle</h3>
<p>We offer <strong>conventional oil change</strong>, <strong>synthetic oil change</strong>, <strong>5 quart oil change</strong>, <strong>car oil change</strong>, and <strong>truck oil change</strong>. We use quality <strong>engine oil</strong> and <strong>motor oil</strong> to <strong>ensure your vehicle</strong> stays protected and performs at its best.</p>
<p>Not sure what <strong>type of oil</strong> is best for your car? We help you choose between <strong>synthetic oil</strong> and <strong>conventional oil</strong> based on your driving habits and vehicle needs. For many modern cars, <strong>synthetic oil</strong> provides superior protection, better fuel economy, and longer intervals between changes. However, some vehicles perform perfectly with high-quality <strong>conventional oil</strong>.</p>
<p>We always refer to your <strong>owner manual</strong> and follow the <strong>vehicle manufacturer</strong> recommendations to select the correct <strong>motor oil</strong> and <strong>oil filter</strong> for optimal engine performance and longevity.</p>


      <div className="grid md:grid-cols-3 gap-10">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-blue-100 rounded-3xl flex items-center justify-center text-4xl mb-6">🚀</div>
          <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-3xl flex items-center justify-center text-4xl mb-6">📹</div>
          <h3 className="text-2xl font-semibold mb-3">Video Production</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-purple-100 rounded-3xl flex items-center justify-center text-4xl mb-6">📈</div>
          <h3 className="text-2xl font-semibold mb-3">Digital Marketing</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Video Section */}
  <section className="py-24 bg-gray-50">
    <div className="max-w-5xl mx-auto px-6">




  {/* Video 1 */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0 max-w-5xl mx-auto">

  <div className="w-full aspect-square relative rounded-3xl overflow-hidden shadow-lg">
    <div className="relative w-full h-full overflow-hidden">  {/* Container keeps same size as before */}

  {/* Clickable Thumbnail + Play Button Overlay */}
  <Link 
    href="/maintenance-1"   // ← Change this to your actual watch page URL
    className="block relative w-full h-full group"
  >
    {/* Thumbnail Image (use a static image or first frame) */}
    <Image 
      src="/thumbnail/0061.jpg"  // Create this image
      alt="Watch video"
      fill
      className="object-cover"
      priority // if this is above the fold
    />

    {/* Dark overlay for better visibility */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

    {/* Big Play Button */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#6C63FF"/>
  <polygon points="42,32 70,50 42,68" fill="white"/>
</svg>
      </div>
    </div>

    {/* Optional text */}
    <div className="absolute bottom-6 left-6 text-white text-lg font-medium drop-shadow-md">
      Watch the video
    </div>
  </Link>
</div>
  </div>












  {/* Video 2 */}
  <div className="w-full aspect-square relative rounded-3xl overflow-hidden shadow-lg">
    <div className="relative w-full h-full overflow-hidden">  {/* Container keeps same size as before */}

  {/* Clickable Thumbnail + Play Button Overlay */}
  <Link 
    href="/maintenance-2"   // ← Change this to your actual watch page URL
    className="block relative w-full h-full group"
  >
    {/* Thumbnail Image (use a static image or first frame) */}
    <Image 
      src="/thumbnail/0150.jpg"  // Create this image
      alt="Watch video"
      fill
      className="object-cover"
      priority // if this is above the fold
    />

    {/* Dark overlay for better visibility */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

    {/* Big Play Button */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
   <svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#6C63FF"/>
  <polygon points="42,32 70,50 42,68" fill="white"/>
</svg>
      </div>
    </div>

    {/* Optional text */}
    <div className="absolute bottom-6 left-6 text-white text-lg font-medium drop-shadow-md">
      Watch the video
    </div>
  </Link>
</div>
  </div>





      
          </div>





      
    
    
    
    </div>
  </section>

  

  {/* Final CTA */}
  <section className="bg-gray-900 py-20 text-white text-center">
    <div className="max-w-2xl mx-auto px-6">
      <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
      <p className="text-xl text-gray-400 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="tel:+1234567890" className="inline-block bg-white text-gray-900 px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-gray-100 transition">
        Get In Touch Today
      </a>
    </div>
  </section>
</div>
  );
}
