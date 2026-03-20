"use client";

import Head from "next/head";

const services = [
  {
    title: "Muffler Repair",
    overview:
      "A properly functioning muffler is essential for reducing noise, improving exhaust flow, and keeping your vehicle running efficiently. At 2 Brothers Auto & Muffler, we provide expert muffler repair and replacement for all makes and models.",
    faq: [
      {
        question: "Do you offer same-day muffler repair in Addison, IL?",
        answer:
          "Yes, most muffler and exhaust repairs can be completed the same day depending on parts availability.",
      },
    ],
    img: "service-SuspensionRepair.jpg",
  },
  {
    title: "Brake Service",
    overview:
      "Maintaining your brakes and suspension is essential for safety, comfort, and vehicle performance. At 2 Brothers Auto & Muffler, we provide comprehensive brake and suspension inspections and repairs to keep your car driving smoothly.",
    faq: [
      {
        question: "Do you provide free brake inspections?",
        answer:
          "Yes, we offer free brake inspections for customers in Addison and surrounding areas.",
      },
    ],
    img: "2023-08-10.webp",
  },
  {
    title: "Suspension Repair",
    overview:
      "Examine suspension components including shocks, struts, springs, and control arms.",
    faq: [
      {
        question: "What types of vehicles do you service?",
        answer:
          "We service most domestic and foreign vehicles including cars, trucks, and SUVs.",
      },
    ],
    img: "/services-suspension.jpg",
  },
];

const additionalFaq = [
  {
    question: "Do you offer same-day muffler repair in Addison, IL?",
    answer:
      "Yes, most muffler and exhaust repairs can be completed the same day depending on parts availability.",
  },
  {
    question: "Do you provide free brake inspections?",
    answer:
      "Yes, we offer free brake inspections for customers in Addison and surrounding areas.",
  },
  {
    question: "What types of vehicles do you service?",
    answer:
      "We service most domestic and foreign vehicles including cars, trucks, and SUVs.",
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Services
      ...services.map((service) => ({
        "@type": "Service",
        name: service.title,
        description: service.overview,
        provider: {
          "@type": "Organization",
          name: "2 Brothers Auto & Muffler",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Addison, IL",
          },
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

      // FAQPage
      {
        "@type": "FAQPage",
        mainEntity: [
          ...services.flatMap((service) =>
            service.faq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            }))
          ),
          ...additionalFaq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Services | 2 Brothers Auto & Muffler, Addison, IL</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center">
            2 Brothers Auto & Muffler Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-16 text-center">
            Located in Addison, IL, we provide expert auto repair services including mufflers, brakes, and suspension repairs for all makes and models. Our ASE-certified technicians ensure your vehicle is safe, reliable, and performing at its best.
          </p>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-semibold text-xl mb-3">{service.title}</h2>
                  <p className="text-gray-700 flex-1">{service.overview}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional Additional Info */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Why Choose 2 Brothers Auto & Muffler
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Serving Addison, Elmhurst, Bensenville, Villa Park, Lombard, and Chicago, our technicians provide expert auto repairs, high-quality parts, and professional service. Fast, reliable, and affordable auto care you can trust.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              {services
                .flatMap((s) => s.faq)
                .concat(additionalFaq)
                .map((f, i) => (
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