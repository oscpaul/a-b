"use client";

export default function AboutSection() {
  const features = [
    { title: "Experienced Technicians", text: "Our team has years of hands-on experience with muffler repair, exhaust systems, muffler replacement, and full-service auto repair." },
    { title: "Transparent Pricing", text: "No surprises—just fair, upfront pricing for every repair." },
    { title: "Fast, Efficient Service", text: "We value your time and aim to get you back on the road quickly." },
    { title: "Local & Accessible", text: " Conveniently located at 915 S Westwood Ave, we serve Addison and nearby neighborhoods." },
    { title: "Community-Focused", text: "We’re a locally-owned shop dedicated to keeping Addison drivers safe and satisfied." },
  ];

  return (
    <section
      style={{
        backgroundColor:"#fbfdfb",
        padding: "30px 5%",
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Headline */}
      <h2
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)", // scales between 2rem and 3rem
          fontWeight: "800",
          marginBottom: "0.8rem",
          lineHeight: 1.1,
        }}
      >
        Why Choose 2 Brothers Auto Service?
      </h2>

      {/* Subheading */}
      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)", // scales with screen
          lineHeight: 1.35,
          marginBottom: "20px",
          maxWidth: "1100px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        At 2 Brothers Auto Service, Addison drivers trust us for honest, reliable, and fast muffler and exhaust repairs. Here’s why our customers keep coming back:
      </p>

      {/* Features */}
      <ul
        style={{
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          lineHeight: 1.4,
          listStyle: "disc inside",
          textAlign: "left",
          paddingLeft: "0",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, index) => (
          <li key={index} style={{ marginBottom: "6px" }}>
            <strong>{feature.title}:</strong> {feature.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
