// app/services/maintenance/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroVideo from "@/components/HeroVideo"
import Script from 'next/script';
export const metadata: Metadata = {
  title: 'Oil Change Addison IL | Quick Auto Repair Near Me',
  description: 'Oil Change Addison IL – Fast quick oil change, full synthetic oil change & cheap oil change near me. Same day auto repair, tire rotation & preventive maintenance.',
  openGraph: {
    title: 'Routine Maintenance Services - 2 Brothers Auto Service',
    description: 'Keep your vehicle safe and reliable with professional brake, oil change, and undercoating services in Addison.',
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
    <source src="/44D26A87-4FE2-41DB-A7AA-E43DD3E0C011.mp4" type="video/mp4" />
  </video>

  {/* Content */}
  <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-12 pb-16 md:pt-0">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white mb-6 font-serif">
      Oil Change and <br />Maintenance
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













<h2 className="text-5xl font-bold tracking-tight text-gray-900">Tune-ups , Brakes Maintenance</h2>
<h3>Complete Preventive Maintenance Services Included</h3>
        <p>
        A vehicle tune-up is a routine maintenance service designed to restore your engine to optimal performance by inspecting, cleaning, adjusting, or replacing key wear-and-tear components. In modern cars (especially those with electronic ignition and fuel injection), a typical tune-up includes:Replacing spark plugs (and sometimes ignition coils or wires)
Replacing the air filter and fuel filter
Checking or replacing belts and hoses
Inspecting fluid levels and condition
Scanning the On-Board Diagnostics (OBD) system for trouble codes
Sometimes including an oil change, tire rotation, or broader inspection of the battery, brakes, and emission control parts

The goal is to ensure the proper balance of air, fuel, and spark for efficient combustion.How a Tune-Up Reduces EmissionsWhen engine components wear out, combustion becomes incomplete or inefficient. This leads to higher levels of harmful pollutants such as hydrocarbons (HC), carbon monoxide (CO), nitrogen oxides (NOx), and excess carbon dioxide (CO₂) being released through the exhaust.A tune-up lowers emissions in several direct ways:Fresh spark plugs create a stronger, more consistent spark → fuel burns more completely instead of partially burning and releasing unburned hydrocarbons.
A clean air filter allows the correct amount of air into the engine → preventing a too-rich (excess fuel) or too-lean mixture that increases pollutants.
Clean fuel delivery (via a new fuel filter) ensures the engine receives uncontaminated fuel at the right pressure → improving combustion efficiency.
Proper ignition timing and sensor function (checked during the OBD scan) help the engine control module adjust fuel and spark accurately → reducing excess emissions.

In Illinois, where many areas require a passing OBD emissions test every two years to renew registration, a well-timed tune-up is especially useful. It often clears minor issues that trigger the check-engine light or cause the vehicle to fail the test, helping you stay compliant while also improving fuel economy and reducing your car's overall environmental impact.In short, a tune-up doesn't just make your car run smoother and more reliably — it helps it burn fuel cleaner, which directly cuts down on tailpipe pollution. Most experts recommend a tune-up every 25,000–30,000 miles or once a year, depending on your vehicle and driving conditions. If you're in Illinois and approaching your emissions test deadline, scheduling one soon can prevent headaches and failed inspections.


        </p>
        
<h4>Full Auto Repair Near Me in Addison</h4>


<p>Regular <strong>preventive maintenance</strong> is the smartest way to avoid expensive repairs. During every <strong>tune up</strong>, we perform a thorough <strong>multi point inspection</strong> and include the following <strong>services included</strong>:</p>



<h4>Additional Automotive Repair Services</h4>
<p>Our expert technicians offer a wide range of repairs including:</p>

<ul>
    <li><strong>Transmission fluid change</strong></li>
    <li><strong>Coolant flush</strong></li>
    <li><strong>Power steering fluid</strong> replacement</li>
    <li><strong>Brake fluid flush</strong></li>
    <li><strong>Spark plug replacement</strong></li>
    <li><strong>Serpentine belt replacement</strong></li>
</ul>
<p>Popular packages combine <strong>oil change and tire rotation</strong> as well as <strong>oil change and brake service</strong> to save you time and money.</p>


<p>Beyond oil changes, we are your reliable <strong>auto repair near me</strong> and <strong>car repair shop</strong> in Addison. Our skilled <strong>mechanic near me</strong> team handles everything from routine <strong>car maintenance</strong> to complex <strong>vehicle repair</strong> and <strong>emergency car repair</strong>.</p>

<p>We also provide <strong>roadside assistance</strong> coordination and honest, transparent service at our convenient <strong>car service center</strong>.</p>

<h2 className="text-5xl font-bold tracking-tight text-gray-900">Undercoating</h2>



<h2 className="text-5xl font-bold tracking-tight text-gray-900">Why Local Drivers Trust Our Automotive Repair Shop </h2>


<h3>Oil Change Addison Near Me – Quick & Professional Service</h3>

<p>As your neighborhood <strong>automotive repair</strong> experts in Addison, we combine speed, quality parts, and fair pricing. We <strong>ensure your vehicle</strong> receives the proper care it deserves, whether you drive a daily commuter, family SUV, or heavy-duty truck.</p>

<p>Search no further for <strong>Oil change Addison</strong>, <strong>Oil change Addison near me</strong>, or <strong>Auto repair Addison</strong> — we are the convenient and trustworthy choice for all your auto repair needs.</p>
<p>Looking for a trusted <strong>oil change Addison</strong> or <strong>oil change Addison near me</strong>? Our car service center makes vehicle maintenance simple and affordable. Whether you need a <strong>quick oil change</strong>, <strong>express oil change</strong>, <strong>10 minute oil change</strong>, or a premium <strong>full synthetic oil change</strong>, our experienced auto mechanic team delivers fast, high-quality service.</p>

<h3>Ready to Schedule Your Service?</h3>
<p>Contact us today for your next <strong>quick oil change</strong>, full maintenance package, or any <strong>auto repair near me</strong> needs. Walk-ins are welcome and <strong>same day auto repair</strong> is available on most services.</p>
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
