"use client";

import { useState, useEffect } from "react";

export default function SquareSplitSection() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        gap: "20px",
       
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          flex: "1 1 45%",
          minWidth: "300px",
          aspectRatio: "1 / 1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
         backgroundColor:"#fbfdfb",
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
          If you’re searching for: “Muffler repair near me” “Auto repair Addison IL”
          “Brake repair Addison Illinois” “Exhaust shop near Addison”
          “Catalytic converter replacement Addison IL” – 2 Brothers Auto & Muffler
          is your go-to local repair shop.
        </p>
      </div>

      {/* RIGHT SIDE - MAP */}
      <div
        style={{
          flex: "1 1 45%",
          minWidth: "300px",
          aspectRatio: "1 / 1",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#e5e3df", // map-like base
        }}
      >
        {mounted && (
          <>
            {/* GOOGLE MAP STYLE SKELETON */}
            {!mapLoaded && (
              <>
                {/* Fake roads/grid */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #ddd 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    opacity: 0.4,
                  }}
                />

                {/* Center pin */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -100%)",
                    fontSize: "32px",
                  }}
                >
                  📍
                </div>

                {/* Top search bar */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    right: "10px",
                    height: "40px",
                    background: "#fff",
                    borderRadius: "6px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                />

                {/* Bottom info card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    width: "140px",
                    height: "60px",
                    background: "#fff",
                    borderRadius: "6px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                />

                {/* Shimmer overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.5) 50%, transparent 75%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s infinite",
                  }}
                />
              </>
            )}

            {/* REAL MAP */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.221500662038!2d-88.00034572326757!3d41.90959687123834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fad1e80a5fd89%3A0xfd281a59c01ad6e2!2s2%20BROTHERS%20AUTO%20SERVICE%2FMUFFLERS!5e0!3m2!1sen!2sus!4v1773603670192!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{
                border: 0,
                opacity: mapLoaded ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
              loading="lazy"
              onLoad={() => setMapLoaded(true)}
            />
          </>
        )}

        {/* Animation */}
        <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
