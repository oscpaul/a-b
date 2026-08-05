"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [hide, setHide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.pageYOffset;

      setHide(current > lastScroll && current > 100);

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_Nero_AI_Image_Sharpener_Sharp_Face.png"
            alt="2 Brothers Auto Logo"
            width={50}
            height={50}
            className="h-10 sm:h-12 mr-2"
          />

          <span className="font-bold text-lg sm:text-xl">
            2 Brothers Auto
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

      </div>
    </header>
  );
}
