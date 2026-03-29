import "./globals.css"
import Header from "../components/Header"
import { ReactNode } from "react"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets:["latin"],
  weight:["400","600","700"],
  display:"swap"
})

export default function RootLayout({children}:{children:ReactNode}) {

  return (
    <html lang="en">
      <head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.devwordpressspace.site/#organization",
                  "name": "2 Brothers Auto & Muffler",
                  "url": "https://www.devwordpressspace.site/",
                  "logo": "https://www.devwordpressspace.site/logo_Nero_AI_Image_Sharpener_Sharp_Face.png",
                  "sameAs": []
                },
                {
                  "@type": "AutoRepair",
                  "image": "https://www.devwordpressspace.site/logo_Nero_AI_Image_Sharpener_Sharp_Face.png",

                  "@id": "https://www.devwordpressspace.site/#autorepair",
                  "name": "2 Brothers Auto & Muffler",
                  "url": "https://www.devwordpressspace.site/",
                  "telephone": "+1-630-229-7330",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "915 S. Westwood Ave.",
                    "addressLocality": "Addison",
                    "addressRegion": "IL",
                    "postalCode": "60101",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                   "latitude": 41.922149,
                   "longitude": -88.016000
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "08:00",
                    "closes": "18:00"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "priceRange": "$$",
                  "image": "https://www.devwordpressspace.site/logo_Nero_AI_Image_Sharpener_Sharp_Face.png",

                  "@id": "https://www.devwordpressspace.site/#localbusiness",
                  "name": "2 Brothers Auto & Muffler",
                  "url": "https://www.devwordpressspace.site/",
                  "telephone": "+1-630-229-7330",
                  "address": {
                    "@type": "PostalAddress",
                                        "streetAddress": "915 S. Westwood Ave.",
                    "postalCode": "60101",

                    "addressLocality": "Addison",
                    "addressRegion": "IL",
                    "addressCountry": "US"
                  },
                  "parentOrganization": {
                    "@id": "https://www.devwordpressspace.site/#organization"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Muffler Repair",
                  "provider": {
                    "@id": "https://www.devwordpressspace.site/#autorepair"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Addison, Illinois"
                  },
                  "description": "Professional muffler repair and exhaust system services in Addison, IL."
                },
                {
                  "@type": "Service",
                  "name": "Brake and Suspension Service",
                  "provider": {
                    "@id": "https://www.devwordpressspace.site/#autorepair"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Addison, Illinois"
                  },
                  "description": "Brake inspection, repair, and suspension services to keep your vehicle safe and smooth."
                },
                {
                  "@type": "Service",
                  "name": "Routine Maintenance",
                  "provider": {
                    "@id": "https://www.devwordpressspace.site/#autorepair"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Addison, Illinois"
                  },
                  "description": "Routine vehicle maintenance including oil changes, inspections, and fluid services."
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Do you offer same-day muffler repair in Addison, IL?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, most muffler and exhaust repairs can be completed the same day depending on parts availability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you provide free brake inspections?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free brake inspections for customers in Addison and surrounding areas."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What types of vehicles do you service?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We service most domestic and foreign vehicles including cars, trucks, and SUVs."
                      }
                    }
                  ]
                },
                {
                  "@type": "Place",
                  "@id": "https://www.devwordpressspace.site/#addison",
                  "name": "Addison, IL",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Addison",
                    "addressRegion": "IL",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                   "latitude": 41.9317,
    "longitude": -87.9890
                  }
                },
 {
                  "@type": "Place",
                  "@id": "https://www.devwordpressspace.site/#addison",
                  "name": "Lombard, IL",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Addison",
                    "addressRegion": "IL",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                   "latitude":41.8800,
    "longitude": -88.0078
                  }
                },
                {
                  "@type": "Place",
                  "@id": "https://www.devwordpressspace.site/#dupagecounty",
                  "name": "DuPage County, IL",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "DuPage County",
                    "addressRegion": "IL",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                       "latitude": 41.8526,
    "longitude": -88.0853
                  }
                }
                // Add more places as needed...
              ]
            })
          }}
        />
        </head>
      <body className={poppins.className}>

        <Header/>

        <main className="pt-16">
          {children}
        </main>
        <Analytics />

      </body>
    </html>
  )
}
