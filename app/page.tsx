
import './globals.css'
import { motion } from "framer-motion"
import HeroSection from "../components/HeroSection"
import Hero from "../components/Hero"
import BoxDiv from "../components/BoxDiv"
import AboutSection from "../components/AboutSection"
import Services from "../components/Services"
import CTA from "../components/CTA"
import LocationSection from "../components/LocationSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">
      
      
      <HeroSection/>
        <Services/>
      <AboutSection/>
   <Hero/>
          <BFCacheFix />   {/* ← Add this line */}

<LocationSection/>

            <Footer/>

    </main>
    
  );
}
