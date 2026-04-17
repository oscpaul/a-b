// app/services/maintenance/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import HeroVideo from "@/components/HeroVideo"
import Script from 'next/script';
export const metadata: Metadata = {
  title: 'Tune-up Maintenance Addison IL | Quick Auto Repair Near Me',
  description: 'Keep your vehicle safe with professional tune-up, brake service, and undercoating services in Addison. Same day auto repair, tire rotation & preventive maintenance.',
  openGraph: {
    title: 'Tune-up Maintenance Addison IL | Quick Auto Repair Near Me',
    description: 'Keep your vehicle safe with professional tune-up, brake service, and undercoating services in Addison. Same day auto repair, tire rotation & preventive maintenance.',
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
          "name": "Tune up",
          "serviceType": "Preventive Maintenance",
          "provider": { "@id": "https://www.yourdomain.com/#business" },
          "description": "Comprehensive routine maintenance including tire rotation, brake inspection, fluid top-off, air filter replacement, cabin filter replacement, battery test, and more. Perfect for keeping your vehicle reliable.",
           "areaServed": {
    "@type": "Place",
    "name": "Addison, IL and surrounding areas"
  },
          "offers": {
            "@type": "Offer",
            "price": "99.99",
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
      Tune-up and <br />Maintenance
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
 
  {/* Video Section */}
  
  <section className="py-24 bg-gray-50">
    <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0 max-w-5xl mx-auto">




  {/* Video 1 */}
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

  {/* About / Lorem Ipsum Section */}
  <section className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <div className="prose prose-lg text-gray-600 max-w-none">

<h2 className="text-5xl font-bold tracking-tight text-gray-900">
  Tune-ups, Brakes Maintenance
</h2>

<h3 className="text-2xl font-semibold mt-6 mb-2">
  Complete Preventive Maintenance Services Included
</h3>

<p className="mb-4 leading-relaxed">
  A vehicle tune-up is a routine maintenance service designed to restore your engine to optimal performance by inspecting, cleaning, adjusting, or replacing key wear-and-tear components. In modern cars (especially those with electronic ignition and fuel injection), a typical tune-up includes:
</p>

<ul className="list-disc pl-6 mb-4 space-y-1">
  <li>Replacing spark plugs (and sometimes ignition coils or wires)</li>
  <li>Replacing the air filter and fuel filter</li>
  <li>Checking or replacing belts and hoses</li>
  <li>Inspecting fluid levels and condition</li>
  <li>Scanning the On-Board Diagnostics (OBD) system for trouble codes</li>
  <li>Sometimes including an oil change, tire rotation, or broader inspection of the battery, brakes, and emission control parts</li>
</ul>

<p className="mb-4 leading-relaxed">
  The goal is to ensure the proper balance of air, fuel, and spark for efficient combustion.
</p>

<p className="mb-4 leading-relaxed font-semibold">
  How a Tune-Up Reduces Emissions
</p>

<p className="mb-4 leading-relaxed">
  When engine components wear out, combustion becomes incomplete or inefficient. This leads to higher levels of harmful pollutants such as hydrocarbons (HC), carbon monoxide (CO), nitrogen oxides (NOx), and excess carbon dioxide (CO₂) being released through the exhaust.
</p>

<p className="mb-2 leading-relaxed">
  A tune-up lowers emissions in several direct ways:
</p>

<ul className="list-disc pl-6 mb-4 space-y-1">
  <li>Fresh spark plugs create a stronger, more consistent spark → fuel burns more completely instead of partially burning and releasing unburned hydrocarbons.</li>
  <li>A clean air filter allows the correct amount of air into the engine → preventing a too-rich (excess fuel) or too-lean mixture that increases pollutants.</li>
  <li>Clean fuel delivery (via a new fuel filter) ensures the engine receives uncontaminated fuel at the right pressure → improving combustion efficiency.</li>
  <li>Proper ignition timing and sensor function (checked during the OBD scan) help the engine control module adjust fuel and spark accurately → reducing excess emissions.</li>
</ul>

<p className="mb-4 leading-relaxed">
  In Illinois, where many areas require a passing OBD emissions test every two years to renew registration, a well-timed tune-up is especially useful. It often clears minor issues that trigger the check-engine light or cause the vehicle to fail the test, helping you stay compliant while also improving fuel economy and reducing your car's overall environmental impact.
</p>

<p className="mb-4 leading-relaxed">
  In short, a tune-up doesn't just make your car run smoother and more reliably — it helps it burn fuel cleaner, which directly cuts down on tailpipe pollution. Most experts recommend a tune-up every 25,000–30,000 miles or once a year, depending on your vehicle and driving conditions. If you're in Illinois and approaching your emissions test deadline, scheduling one soon can prevent headaches and failed inspections.
</p>

<h4 className="text-xl font-semibold mt-8 mb-2">
  Full Auto Repair Near Me in Addison
</h4>

<p className="mb-4 leading-relaxed">
  Regular <strong>preventive maintenance</strong> is the smartest way to avoid expensive repairs. During every <strong>tune up</strong>, we perform a thorough <strong>multi point inspection</strong> and include the following <strong>services included</strong>:
</p>

<h4 className="text-xl font-semibold mt-6 mb-2">
  Additional Automotive Repair Services
</h4>

<p className="mb-4 leading-relaxed">
  Our expert technicians offer a wide range of repairs including:
</p>

<ul className="list-disc pl-6 mb-4 space-y-1">
  <li><strong>Transmission fluid change</strong></li>
  <li><strong>Coolant flush</strong></li>
  <li><strong>Power steering fluid</strong> replacement</li>
  <li><strong>Brake fluid flush</strong></li>
  <li><strong>Spark plug replacement</strong></li>
  <li><strong>Serpentine belt replacement</strong></li>
</ul>

<p className="mb-4 leading-relaxed">
  Popular packages combine <strong>oil change and tire rotation</strong> as well as <strong>oil change and brake service</strong> to save you time and money.
</p>

<p className="mb-4 leading-relaxed">
  Beyond oil changes, we are your reliable <strong>auto repair near me</strong> and <strong>car repair shop</strong> in Addison. Our skilled <strong>mechanic near me</strong> team handles everything from routine <strong>car maintenance</strong> to complex <strong>vehicle repair</strong> and <strong>emergency car repair</strong>.
</p>

<p className="mb-4 leading-relaxed">
  We also provide <strong>roadside assistance</strong> coordination and honest, transparent service at our convenient <strong>car service center</strong>.
</p>















<h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
  Why Local Drivers Trust Our Automotive Repair Shop
</h2>

<h3 className="text-2xl font-semibold mt-4 mb-2">
 Quick & Professional Service Going the Extra Mile
</h3>

<p className="mb-4 leading-relaxed">
Our tune-up service is designed to keep your vehicle running at its best while extending its lifespan. As a trusted local shop right here in Addison, we take pride in serving our community with reliable, high-quality care. We’re conveniently located near the Addison emissions testing center, and we go the extra step by testing vehicles to help ensure they pass inspection with confidence. 
  A full tune-up not only helps prolong the life of your car, but also improves fuel economy and overall performance. 
  Backed by our consistent 5-star reviews on Google, you can count on us for honest service and dependable results every time.</p>

<h3 className="text-2xl font-semibold mt-6 mb-2">
  Ready to Schedule Your Service?
</h3>

<p className="mb-4 leading-relaxed">
  Contact us today for your next <strong>quick oil change</strong>, full maintenance package, or any <strong>auto repair near me</strong> needs. Walk-ins are welcome and <strong>same day auto repair</strong> is available on most services.
</p>


        
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
