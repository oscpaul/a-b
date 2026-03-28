// app/services/maintenance/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Routine Maintenance Services in Addison
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert care for brakes, oil changes, routine maintenance, and undercoating. 
            Keep your vehicle safe, reliable, and protected year-round.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:YOUR_PHONE_NUMBER" 
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Call Now: (XXX) XXX-XXXX
            </a>
            <Link 
              href="#schedule" 
              className="border border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Expert Automotive Care You Can Trust</h2>
            <p className="text-lg text-gray-700 mb-6">
              At 2 Brothers Auto Service, we provide honest, efficient maintenance services for all makes and models. 
              Our experienced technicians use quality parts and fluids to keep your vehicle performing at its best.
            </p>
            <p className="text-lg text-gray-700">
              Located at <strong>915 S Westwood Ave, Addison, IL</strong>, we proudly serve local drivers who want reliable service without the hassle.
            </p>
          </div>
          {/* Replace with your picture - e.g., hero or shop interior */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/images/maintenance-hero.jpg" 
              alt="Professional vehicle maintenance at 2 Brothers Auto Service in Addison IL"
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Brake Services */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Brake Services</h3>
            <p className="text-gray-600 mb-6">
              Your brakes are critical for safety. We deliver thorough inspections and quality service to ensure strong stopping power and smooth operation.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">• Brake pads, rotors, and calipers</li>
              <li className="flex items-start gap-3">• Brake fluid check and flush</li>
              <li className="flex items-start gap-3">• Warning signs like squealing or vibration</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">We provide clear, upfront estimates so you know exactly what your vehicle needs.</p>
          </div>

          {/* Oil Changes */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Oil Changes & Fluid Services</h3>
            <p className="text-gray-600 mb-6">
              Regular oil changes protect your engine, improve fuel efficiency, and extend vehicle life.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">• Conventional, synthetic, or blend oil</li>
              <li className="flex items-start gap-3">• New oil filter installation</li>
              <li className="flex items-start gap-3">• Multi-point inspection and fluid top-offs</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">We’ll recommend the right interval based on your vehicle and driving habits.</p>
          </div>

          {/* Routine Maintenance */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Routine Vehicle Maintenance</h3>
            <p className="text-gray-600 mb-6">
              Preventive care catches small issues before they become expensive problems.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">• Full vehicle health inspection</li>
              <li className="flex items-start gap-3">• Brakes, suspension, steering, and tires</li>
              <li className="flex items-start gap-3">• Battery, belts, hoses, and filters</li>
            </ul>
          </div>

          {/* Undercoating */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Undercoating & Rust Protection</h3>
            <p className="text-gray-600 mb-6">
              Protect your vehicle from Illinois winters, road salt, and corrosion with professional undercoating.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">• Shields frame, brake lines, and fuel tank</li>
              <li className="flex items-start gap-3">• Reduces road noise</li>
              <li className="flex items-start gap-3">• Helps maintain resale value</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">Especially recommended for vehicles driven in the Midwest.</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl shadow p-10 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Why Drivers in Addison Choose 2 Brothers</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="font-semibold mb-2">Experienced Technicians</h4>
              <p className="text-sm text-gray-600">Years of hands-on expertise with all makes and models</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-semibold mb-2">Transparent Pricing</h4>
              <p className="text-sm text-gray-600">No surprises — clear upfront estimates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Fast Service</h4>
              <p className="text-sm text-gray-600">We respect your time and get you back on the road quickly</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏡</div>
              <h4 className="font-semibold mb-2">Locally Owned</h4>
              <p className="text-sm text-gray-600">Proudly serving Addison and nearby communities</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How often should I get an oil change?",
                a: "It depends on your vehicle and oil type. Many modern vehicles with synthetic oil can go 5,000–10,000 miles. We’ll check your owner’s manual and recommend the best schedule for your driving habits."
              },
              {
                q: "What are common signs my brakes need service?",
                a: "Look for squealing or grinding noises, a soft or vibrating brake pedal, longer stopping distances, or a dashboard warning light. Bring your vehicle in for a quick inspection if you notice any of these."
              },
              {
                q: "Is undercoating worth it in Illinois?",
                a: "Yes — especially with harsh winters and road salt. It helps protect against rust and corrosion, potentially saving you money long-term and preserving your vehicle’s value."
              },
              {
                q: "How long does an oil change take?",
                a: "Most standard oil changes are completed in 30–45 minutes. We’ll let you know right away if anything else needs attention during the service."
              },
              {
                q: "Do you service all makes and models?",
                a: "Yes! Our technicians are experienced working on domestic, import, and European vehicles."
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="group bg-white rounded-2xl shadow p-6 cursor-pointer"
              >
                <summary className="flex justify-between items-center text-lg font-medium list-none">
                  {faq.q}
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div id="schedule" className="bg-blue-900 text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Maintenance?</h2>
          <p className="text-xl mb-8 max-w-lg mx-auto">
            Stop by or give us a call today. Same-day appointments often available for oil changes and basic services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:YOUR_PHONE_NUMBER" 
              className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 inline-block"
            >
              Call (XXX) XXX-XXXX
            </a>
            <Link 
              href="/contact" 
              className="border-2 border-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 inline-block"
            >
              Contact Us Online
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-80">
            915 S Westwood Ave, Addison, IL • Open Monday–Saturday
          </p>
        </div>
      </div>
    </div>
  );
}
