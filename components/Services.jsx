"use client";

export default function Services() {
  const services = [
    {
      title: "Muffler Repair",
      link : "/muffler-service",
      img: "/oil-1.png",
      description:
        "A properly functioning muffler is essential for reducing noise, improving exhaust flow, and keeping your vehicle running efficiently. At 2 Brothers Auto & Muffler, we provide expert muffler repair and replacement for all makes and models.",
    },
    {
      title: "Routine Maintenance",
            link : "/maintenance",
      img: "/brakes-1.png",
      description:
        "Maintaining your brakes and suspension is essential for safety, comfort, and vehicle performance. At 2 Brothers Auto & Muffler, we provide comprehensive brake and suspension inspections and repairs to keep your car driving smoothly.",
    },
    {
      title: "Suspension Repair",
                  link : "/suspension-service",
      img: "diagnostics-1.png",
      description: "Examine suspension components including shocks, struts, springs, and control arms.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Section Title */}
        <h2
          className="font-extrabold mb-8 text-center"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1 }}
        >
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Image as a Link */}
              <a href={service.link} className="w-full aspect-square block overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}