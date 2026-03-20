import Link from "next/link";

export default function Footer() {
  return (
    <footer className="min-h-[50vh] bg-neutral-900 text-neutral-200 flex flex-col justify-between">
      
      {/* Main content */}
      <div className="mx-auto w-full px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <address className="not-italic text-sm leading-relaxed">
            <strong>2 Brothers Auto & Muffler</strong><br />
            915 S Westwood Ave<br />
            Addison, IL 60101<br />

            <a
              href="tel:+16302297330"
              className="block mt-4 hover:underline"
            >
              (630) 229-7330
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=915+S+Westwood+Ave,+Addison,+IL+60101"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-sm text-neutral-400 hover:text-white"
            >
              Get Directions
            </a>
          </address>

          {/* Map */}
         
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            <Link href="/service-areas">
              Service Areas
            </Link>
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/service-areas/lombard-il" className="hover:text-white">
                Lombard, IL
              </Link>
            </li>
          
        
       
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Reliable auto repair serving Addison and nearby communities.
            Honest work, fair pricing, and dependable service.
          </p>
        </div>

        {/* Social */}
       <div className="flex space-x-6 items-center">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

  {/* Facebook */}
  <svg className="w-6 h-6 text-gray-400 hover:text-gray-600 transition"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="Facebook icon"
  >
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 2.89h-2.3v6.99A10 10 0 0 0 22 12z" />
  </svg>

  {/* LinkedIn */}
  <svg className="w-7 h-7"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="LinkedIn icon"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.66-1.25 2.28-2.56 4.69-2.56C22.42 7.64 24 10 24 14.08V24h-5v-8.73c0-2.08-.04-4.75-2.89-4.75-2.89 0-3.33 2.26-3.33 4.6V24h-5V8z"/>
  </svg>

  {/* Instagram */}
  <svg className="w-6 h-6 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="Instagram icon"
  >
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5C20 18.55 18.55 20 16.25 20h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4zm4.25 2.75A5.25 5.25 0 1 0 17.25 12 5.26 5.26 0 0 0 12 6.75zm0 8.5A3.25 3.25 0 1 1 15.25 12 3.25 3.25 0 0 1 12 15.25zM17.5 6.5a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 17.5 6.5z"/>
  </svg>

</div>
        
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} 2 Brothers Auto & Muffler. All rights reserved.
      </div>

    </footer>
  );
}