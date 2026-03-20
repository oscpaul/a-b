"use client";
import { track } from "@vercel/analytics";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex flex-wrap items-center justify-between mx-auto max-w-[90vw] md:max-w-[1200px] gap-6 py-6  min-h-[600px]"
    >
      {/* Left side - Headline + Subheading + CTA + Social */}
      <div className="flex-1 min-w-[300px] text-center md:text-left flex flex-col gap-5 order-1 px-4">
        {/* Subheading */}
        <div className="space-y-1 text-sm md:text-base">
          <p>915 S Westwood Ave, Addison, IL 60101</p>
          <p className="font-semibold">
            <a href="tel:16302297330" className="hover:text-blue-600">
              (630) 229-7330
            </a>
          </p>

          {/* Social Icons */}
          <ul className="flex justify-center md:justify-start gap-3" role="list">
            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/_mariorhernandez/"
                title="Like me on Instagram"
                target="_blank"
                className="text-current hover:text-blue-600"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path>
                </svg>
              </a>
            </li>
            {/* Twitter */}
            <li>
              <a
                href="https://twitter.com/imariohernandez"
                title="Follow me on Twitter"
                target="_blank"
                className="text-current hover:text-blue-600"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.3 21.1 9.9 2.9H2.7l11.4 18.2zM2.7 21.1l7.2-6.6M14.1 9.5l7.2-6.6"></path>
                </svg>
              </a>
            </li>
            {/* Github */}
            <li>
              <a
                href="https://github.com/mariohernandez"
                title="Collaborate with me on Github"
                target="_blank"
                className="text-current hover:text-blue-600"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                </svg>
              </a>
            </li>
            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/mariorhernandez/"
                title="Network with me on LinkedIn"
                target="_blank"
                className="text-current hover:text-blue-600"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-3">
       <Link
  href="/routine-maintenance"
  className="button"
  onClick={() =>
    track("cta_click", {
      section: "hero",
      page: "home",
      destination: "/maintenance",
    })
  }
>
  Learn more
</Link>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mt-5 font-extrabold leading-tight text-[clamp(2.5rem,6vw,4rem)]">
          Auto Repair, Muffler & Brake Service in Addison, IL
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed">
          Reliable and Convenient Auto Service
        </p>
      </div>

      {/* Right side - Image */}
      <div className="flex-[1_1_500px] order-2 w-full md:w-auto md:max-w-[480px]">
        <img
          src="/muffler1.jpg"
          alt="Auto Repair"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
