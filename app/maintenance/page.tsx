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
    <source src="/your-hero-video.mp4" type="video/mp4" />
  </video>

  {/* Content */}
  <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-12 pb-16 md:pt-0">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white mb-6 font-serif">
      We Create Digital<br />Experiences That Matter
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
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden">
    <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-center justify-center">
      <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll-down"></div>
    </div>
  </div>
</section>

  {/* Features / Services Section */}
  <section className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">Our Services</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
Oil Change Addison – Fast, Reliable Service Near YouLooking for a trusted oil change Addison or oil change Addison near me? At our car service center, we make vehicle maintenance simple and affordable. Whether you need a quick oil change, express oil change, 10 minute oil change, or a full synthetic oil change, our experienced auto mechanic team delivers fast, professional service. We proudly offer conventional oil change, full synthetic oil change, 5 quart oil change, and car oil change or truck oil change options to keep your engine running smoothly.Why Choose Our Oil Change Service?We understand you’re busy, which is why we provide mobile oil change service near me options and same day auto repair for most services. Ask about our current oil change coupon and oil change special to enjoy a cheap oil change without sacrificing quality. Not sure how much does an oil change cost or when should I get an oil change? Our technicians will explain everything clearly, including the best oil for my car and the difference between synthetic vs conventional oil.Complete Preventive Maintenance for Your VehicleRegular preventive maintenance is the best way to avoid costly breakdowns. Our multi point inspection checks all vital systems while you wait. We also perform tire rotation, oil filter replacement, air filter replacement, cabin air filter replacement, brake inspection, fluid top off, windshield wiper replacement, and battery test during every visit.Popular packages include oil change and tire rotation as well as oil change and brake service. These combinations help you save time and money while keeping your car in top condition.Full Auto Repair Near Me in AddisonBeyond oil changes, we are your reliable auto repair near me and car repair shop in Addison. Our skilled mechanic near me team handles everything from routine car maintenance to complex vehicle repair. Need emergency car repair or roadside assistance? We’re here to help with fast response times and honest service.Additional services we offer include:Tune up service
Transmission fluid change
Coolant flush
Power steering fluid replacement
Brake fluid flush
Spark plug replacement
Serpentine belt replacement

Signs You Need an Oil Change and Other MaintenanceWondering about the signs you need an oil change? Common indicators include dark or gritty oil, engine noise, reduced fuel efficiency, or the check engine light. Don’t wait until it’s too late—schedule your oil change service today and protect your engine.Why Local Drivers Trust Our Automotive Repair ShopAs your neighborhood automotive repair experts in Addison, we combine speed, quality parts, and transparent pricing. Whether you drive a daily commuter, family SUV, or heavy-duty truck, we treat every vehicle with care. Search no further for Oil change Addison, Oil change Addison near me, or Auto repair Addison—we are the convenient, trustworthy choice.Ready to schedule?
Contact us today for your next quick oil change, full maintenance package, or any auto repair near me needs. Walk-ins welcome and same-day service available on most repairs.

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
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0 max-w-5xl mx-auto">
  
  {/* Video 1 */}
  <div className="w-full aspect-square relative rounded-3xl overflow-hidden shadow-lg">
    <HeroVideo src="/27C6DF7E-795A-4C5C-9864-52DC4019C1BD.mp4" />
  </div>

  {/* Video 2 */}
  <div className="w-full aspect-square relative rounded-3xl overflow-hidden shadow-lg">
    <HeroVideo src="/A9E2A6AE-A40C-4BE4-B557-AB5588D3CC19.mp4" />
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
