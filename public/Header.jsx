"use client"

import { useEffect, useState } from "react"
import styles from "../styles/header.module.css"

export default function Header() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const current = window.pageYOffset
      if (current > lastScroll && current > 100) {
        setHide(true)
      } else {
        setHide(false)
      }
      lastScroll = current
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${hide ? styles.hide : ""}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>2 Brothers Auto</div>
        <nav className={styles.nav}>
          <a href="/muffler-service">Mufflers</a>
          <a href="/suspension-service">Suspension and Brakes</a>
          <a href="/maintenance">Routine Maintenance</a>
        </nav>
      </div>
    </header>
  )
}