"use client"
import Link from 'next/link';

import { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function Header() {
  const [hide, setHide] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const current = window.pageYOffset
      setHide(current > lastScroll && current > 100)
      lastScroll = current
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 w-full h-16
        bg-white shadow-md z-[100]
        transition-transform duration-300
        ${hide ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-5">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/logo_Nero_AI_Image_Sharpener_Sharp_Face.png" alt="2 Brothers Auto Logo" className="h-10 sm:h-12 mr-2" />
          <span className="font-bold text-lg sm:text-xl">2 Brothers Auto</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a className="text-gray-800 font-medium text-sm sm:text-base" href="/muffler-service">
            Muffler Service
          </a>
          <a className="text-gray-800 font-medium text-sm sm:text-base" href="/suspension-service">
            Suspension and Brakes
          </a>
          <a className="text-gray-800 font-medium text-sm sm:text-base" href="/maintenance">
            Maintenance
          </a>
<Link
  href="https://app.squareup.com/appointments/book/2pefuflo2hw9e3/LCTHN7ABYT9JV/start"
  target="_blank"
  rel="noopener noreferrer nofollow"
  className="book-now-btn"
>
  Book Now
</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-5 py-4 space-y-3">
            <a className="text-gray-800 font-medium text-base" href="/muffler-service">
              Muffler Service
            </a>
            <a className="text-gray-800 font-medium text-base" href="/suspension-service">
              Suspension and Brakes
            </a>
            <a className="text-gray-800 font-medium text-base" href="/maintenance">
              Maintenance
            </a>
           <a
  href="https://app.squareup.com/appointments/book/2pefuflo2hw9e3/LCTHN7ABYT9JV/start"
  target="_blank"
  rel="noopener noreferrer nofollow"
  className="book-now-btn mobile-book-btn"
  style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "Avenir Next", Avenir, "Nimbus Sans L", Roboto, Noto, "Segoe UI", Arial, Helvetica, "Helvetica Neue", sans-serif',
  }}
>
  Book Now
</a>
          </nav>
        </div>
      )}
    </header>
  )
}
