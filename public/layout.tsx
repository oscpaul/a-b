import "./globals.css"
import Header from "../components/Header"
import { ReactNode } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets:["latin"],
  weight:["400","600","700"],
  display:"swap"
})

export default function RootLayout({children}:{children:ReactNode}) {

  return (
    <html lang="en">
      <body className={poppins.className}>

        <Header/>

        {children}

      </body>
    </html>
  )
}