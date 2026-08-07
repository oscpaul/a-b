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
