"use client"

import { useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import Lottie from "lottie-react";
import animationData from "../public/driving.json"; // replace with your JSON file

export default function SplitCarouselSection() {
  const swiperRef = useRef(null)

  const images = [
    "/2brothers_2mb.jpg",
    "/2brother1_2mb.jpg",
    "/muffler3.png"
  ]

  useEffect(() => {
    const handleOrientation = () => {
      setTimeout(() => swiperRef.current?.update(), 200)
    }
    window.addEventListener("orientationchange", handleOrientation)
    return () => window.removeEventListener("orientationchange", handleOrientation)
  }, [])

  return (
    <section className="max-w-none">
      
      {/* Left side headline */}
  <div className="p-0 flex flex-col items-center text-center">
      {/* Headline */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">Two Brothers Auto/Muffler Service</h2>
       
      </div>

      {/* Lottie Animation */}
     
    </div>

      {/* Right side carousel */}
      <div style={carouselWrapper}>
        <div style={carouselBox}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
              centeredSlides={true}   // 👈 add this

            autoplay={{ delay: 3000 }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
          >
            {images.map((src) => (
              <SwiperSlide key={src} style={{ width: "100%", height: "100%" }}>
                <img
                  src={src}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}


// ======= Styles =======

const container = {
  display: "flex",
  flexDirection: "row", // horizontal on desktop
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",      // allows vertical stacking on small screens
  padding: "10px",
    

}

const headlineContainer = {
  flex: "1 1 300px",      // flexible but minimum width
  minWidth: "250px",
    textAlign: "center", // ← center all text horizontally


}

const headline = {
  fontSize: "2rem",
  margin: 0
}

const subheading = {
  fontSize: "1rem",
  marginTop: "8px"
}

const carouselWrapper = {
  flex: "1 1 0px",      // flexible but max width
  minWidth: "300px",
  display: "flex",
  justifyContent: "center",
  padding: "0px"
  
}

const carouselBox = {
   

  width: "420px",
  height: "420px",
  overflow: "hidden",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.12)"
}

