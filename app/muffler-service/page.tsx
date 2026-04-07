// app/services/maintenance/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroVideo from "@/components/HeroVideo"

export const metadata: Metadata = {
  title: 'Routine Maintenance Services | Oil Change, Brakes & Undercoating in Addison',
  description: 'Expert brake service, oil changes, routine maintenance, and undercoating at 2 Brothers Auto Service in Addison, IL. Honest pricing, fast service, and trusted technicians.',
  keywords: ['oil change Addison', 'brake service Addison', 'car maintenance Addison', 'undercoating Illinois', 'routine maintenance'],
  openGraph: {
    title: 'Routine Maintenance Services - 2 Brothers Auto Service',
    description: 'Keep your vehicle safe and reliable with professional brake, oil change, and undercoating services in Addison.',
    images: [{ url: '/images/maintenance-hero.jpg' }], // replace with your actual image
  },
};

export default function MaintenancePage() {
  return (
   <div className="font-sans">
  {/* Hero Section - Big Background with Video/Image */}
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    
    {/* Replace with your video or image */}
    <video 
      autoPlay 
      muted 
      loop 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/A3DA80A7-056C-427E-8F14-472A631C1794.mp4" type="video/mp4" />
    </video>

    <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white leading-tight mb-6 font-serif">
        We Create Digital<br />Experiences That Matter
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+1234567890" className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
          Call Us Now
        </a>
        <button className="border border-white/80 text-white px-10 py-4 rounded-2xl font-medium text-lg hover:bg-white/10 transition">
          Watch Video
        </button>
      </div>
    </div>
  </section>

  {/* Features / Services Section */}
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">Our Services</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
        </p>
      </div>

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
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900">See Our Work</h2>
      </div>
      {/* Add your videos here */}
      <div className="grid md:grid-cols-2 gap-8">
  <div className="w-full md:w-[420px] aspect-[1] mt-6 md:mt-0 md:ml-4 relative">
    {/* Paste your video logic here */}
<HeroVideo  src="/27C6DF7E-795A-4C5C-9864-52DC4019C1BD.mp4"/>

  </div>  
  <div className="w-full md:w-[420px] aspect-[1] mt-6 md:mt-0 md:ml-4 relative">
      {/* Paste your video logic here */}
  <HeroVideo  src="/A9E2A6AE-A40C-4BE4-B557-AB5588D3CC19.mp4"/>

    </div>
      </div>
    </div>
  </section>

  {/* About / Lorem Ipsum Section */}
  <section className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-5xl font-bold tracking-tight text-center mb-12">About Us</h2>
      <div className="prose prose-lg text-gray-600 max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
