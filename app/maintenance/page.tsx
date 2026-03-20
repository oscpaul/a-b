"use client";

import Head from "next/head";

const routineServices = [
  {
    title: "Oil Change",
    overview:
      "Keep your engine running smoothly with regular oil changes. We provide fast and professional oil changes for all makes and models.",
    faq: [
      {
        question: "How often should I get an oil change?",
        answer:
          "Typically every 3,000 to 5,000 miles, depending on your vehicle’s manufacturer recommendations.",
      },
    ],
    img: "how-to-change-your-car-oil-featured-image.jpeg",
  },
  {
    title: "Fluid Check & Top-Up",
    overview:
      "We inspect and top up all essential fluids including coolant, brake, power steering, and windshield washer fluids.",
    faq: [
      {
        question: "Do you check all fluids during a routine maintenance visit?",
        answer:
          "Yes, we ensure your vehicle’s fluids are at proper levels for safe and smooth operation.",
      },
    ],
    img: "/how-often-do-you-change-brakes-on-a-car.jpg",
  },
  {
    title: "Battery Inspection",
    overview:
      "Avoid unexpected breakdowns with a battery test and inspection to ensure your car starts reliably.",
    faq: [
      {
        question: "Can you replace my battery if needed?",
        answer:
          "Yes, we provide battery replacements for most vehicles during routine maintenance.",
      },
    ],
    img: "/Checklist-1-640w.webp",
  },
];

export default function RoutineMaintenance() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...routineServices.map((service) => ({
        "@type": "Service",
        name: service.title,
        description: service.overview,
        provider: {
          "@type": "Organization",
          name: "2 Brothers Auto & Muffler",
          address: { "@type": "PostalAddress", streetAddress: "Addison, IL" },
        },
        areaServed: [
          { "@type": "City", name: "Addison" },
          { "@type": "City", name: "Elmhurst" },
          { "@type": "City", name: "Bensenville" },
          { "@type": "City", name: "Villa Park" },
          { "@type": "City", name: "Lombard" },
          { "@type": "City", name: "Chicago" },
        ],
      })),
      {
        "@type": "FAQPage",
        mainEntity: routineServices.flatMap((s) =>
          s.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          }))
        ),
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Routine Maintenance | 2 Brothers Auto & Muffler, Addison, IL</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center">
            Routine Maintenance Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-16 text-center">
            At 2 Brothers Auto & Muffler in Addison, IL, we provide routine maintenance services to keep your vehicle running safely and efficiently. Our ASE-certified technicians perform oil changes, fluid checks, battery inspections, and more.
          </p>

          {/* Service Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {routineServices.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="font-semibold text-lg sm:text-xl mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 flex-1">{service.overview}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Why Choose 2 Brothers Auto & Muffler
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Serving Addison, Elmhurst, Bensenville, Villa Park, Lombard, and Chicago, our team ensures your vehicle receives thorough routine maintenance using quality parts and professional service.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              {routineServices.flatMap((s) => s.faq).map((f, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-xl mb-2">{f.question}</h3>
                  <p className="text-gray-700">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}