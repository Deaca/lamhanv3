"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FixedOrderButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <Link href="/order">
        <Button size="lg" className="shadow-lg group shadow-white/30 h-12 md:h-14 px-4 md:px-6">
          <ShoppingBag className="mr-2 h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
          <span className="text-sm md:text-base">Order Now</span>
        </Button>
      </Link>
    </div>
  )
}

