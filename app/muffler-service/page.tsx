"use client";

import Head from "next/head";

const mufflerService = {
  title: "Muffler Repair & Replacement",
  overview:
    "A properly functioning muffler is essential for reducing noise, improving exhaust flow, and keeping your vehicle running efficiently. At 2 Brothers Auto & Muffler in Addison, IL, we provide expert muffler repair and replacement for all makes and models.",
  details: [
    {
      text: "Inspect and diagnose muffler and exhaust system issues.",
      img: "muffer-repair-in-victorville.webp",
    },
    {
      text: "Repair or replace damaged mufflers to restore proper function.",
      img: "muffler-repair.jpg",
    },
    {
      text: "Check exhaust pipes, hangers, and clamps for wear or damage.",
      img: "exhaust-muffler-repair-service.webp",
    },
  ],
  faq: [
    {
      question: "How can I tell if my muffler needs repair?",
      answer:
        "Signs include loud exhaust noise, rattling, or reduced engine performance. Our experts inspect and repair mufflers promptly.",
    },
    {
      question: "Do you provide muffler replacement for all vehicle types?",
      answer:
        "Yes, we service all makes and models, including cars, trucks, and SUVs.",
    },
    {
      question: "How long does muffler repair usually take?",
      answer:
        "Most repairs can be completed within a few hours, depending on parts availability.",
    },
  ],
};

export default function MufflerRepair() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: mufflerService.title,
        description: mufflerService.overview,
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
      },
      {
        "@type": "FAQPage",
        mainEntity: mufflerService.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Muffler Repair | 2 Brothers Auto & Muffler, Addison, IL</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center">
            {mufflerService.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-16 text-center">
            {mufflerService.overview}
          </p>

          {/* Details Section */}
          <div className="space-y-12">
            {mufflerService.details.map((detail, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-6 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-1">
                  <img
                    src={detail.img}
                    alt="Muffler service image"
                    className="w-full aspect-square object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-lg sm:text-xl font-semibold">{detail.text}</p>
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
              Serving Addison, Elmhurst, Bensenville, Villa Park, Lombard, and Chicago, we provide expert muffler repair and replacement using high-quality parts and professional service. Fast, reliable, and affordable.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              {mufflerService.faq.map((f, i) => (
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