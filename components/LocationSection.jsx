"use client";

export default function SquareSplitSection() {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        
        margin: "0 auto",
        boxSizing: "border-box",
        gap: "20px",
         paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
      }}
    >
      {/* Left Square - Text */}
      <div
        style={{
          flex: "1 1 45%",
          minWidth: "300px",
          aspectRatio: "1 / 1", // ensures square
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Serving Addison, Lombard, Elmhurst, Villa Park, and surrounding DuPage County communities
        </h2>
        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            lineHeight: 1.4,
          }}
        >
          If you’re searching for: “Muffler repair near me” “Auto repair Addison IL” “Brake repair Addison Illinois” “Exhaust shop near Addison” “Catalytic converter replacement Addison IL” – 2 Brothers Auto & Muffler is your go-to local repair shop.
        </p>
      </div>

      {/* Right Square - Google Maps */}
      <div
        style={{
          flex: "1 1 45%",
          minWidth: "300px",
          aspectRatio: "1 / 1", // ensures square
          boxSizing: "border-box",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.221500662038!2d-88.00034572326757!3d41.90959687123834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fad1e80a5fd89%3A0xfd281a59c01ad6e2!2s2%20BROTHERS%20AUTO%20SERVICE%2FMUFFLERS!5e0!3m2!1sen!2sus!4v1773603670192!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
