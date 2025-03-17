"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Check if we're on a page with white background
  const isWhiteBgPage = ["/merchandise", "/order"].includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/order", label: "Order" },
    { href: pathname === "/" ? "#about" : "/#about", label: "About" },
    { href: "/merchandise", label: "Shop" },
  ]

  // Function to check if a link is active
  const isLinkActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/"
    }

    if (href.startsWith("/#")) {
      return false
    }

    if (href === "/") {
      return pathname === "/"
    }

    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-custom-dark-gray shadow-md py-3"
          : isWhiteBgPage
            ? "bg-custom-dark-gray py-5"
            : "bg-custom-dark-gray/70 backdrop-blur-sm py-5 border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Restaurant Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-custom-orange rounded-full flex items-center justify-center">
              <span className="text-lg md:text-xl font-bold text-custom-white font-serif">LB</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-custom-white font-serif truncate">Lamhan Banhmi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-medium text-custom-white hover:text-custom-teal transition-colors relative font-sans ${
                  isLinkActive(link.href)
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-custom-teal"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-custom-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-custom-white rounded-lg mt-2 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-3 rounded-md text-lg ${
                    isLinkActive(link.href)
                      ? "bg-custom-orange/10 text-custom-orange font-medium border-l-4 border-custom-orange"
                      : "text-custom-dark-gray hover:text-custom-orange"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

