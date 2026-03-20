import Link from "next/link";

export default function Footer() {
  return (
    <footer className="min-h-[50vh] bg-neutral-900 text-neutral-200 flex flex-col justify-between">
      {/* Main content */}
      <div className="max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Address / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <address className="not-italic text-sm leading-relaxed">
            915 S Westwood Ave<br />
            Addison, IL 60101<br />
            <span className="block mt-4">
              <a
                href="tel:+16302297330"
                className="hover:underline"
              >
                (630) 229-7330
              </a>
            </span>
          </address>
        </div>

        {/* Navigation / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* Optional brand / message */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
            Trusted auto repair serving Addison, IL and surrounding communities.
            We specialize in diagnostics, brake repair, exhaust systems, and
            complete vehicle maintenance with honest pricing and dependable service.
          </p>
        </div>
            <div>
          <h3 className="text-lg font-semibold mb-3">
  <Link href="/service-areas">
    All Service Areas
  </Link>          </h3>
       
          <ul className="space-y-2">
            <li>
              <Link href="/service-areas/lombard-il">
                Auto Repair in Lombard, IL
              </Link>
            </li>
            <li>
              <Link href="/service-areas/villa-park-il">
                Auto Repair in Villa Park, IL
              </Link>
            </li>
            <li>
              <Link href="/service-areas/elmhurst-il">
                Auto Repair in Elmhurst, IL
              </Link>
            </li>
            <li>
              <Link href="/service-areas/bensenville-il">
                Auto Repair in Bensenville, IL
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
       

    </footer>
  );
}
