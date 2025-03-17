"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface BackgroundImageFXParallaxProps {
  src: string
  alt: string
  className?: string
  speed?: number // Controls the parallax effect speed (0.1 to 0.5 recommended)
  overlayColor?: string
  overlayOpacity?: number
}

export function BackgroundImageFXParallax({
  src,
  alt,
  className = "",
  speed = 0.3,
  overlayColor = "rgba(0,0,0,0.4)",
  overlayOpacity = 0.4,
}: BackgroundImageFXParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const { scrollY } = useScroll()

  // The y value changes based on scroll position
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [`${-speed * 100}%`, `${speed * 100}%`],
  )

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const updatePosition = () => {
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
      setClientHeight(window.innerHeight)
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)

    return () => {
      window.removeEventListener("resize", updatePosition)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Parallax image */}
      <motion.div className="absolute inset-0 w-full h-[140%] -top-[20%]" style={{ y }}>
        <div className="relative w-full h-full">
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        </div>
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      </motion.div>
    </div>
  )
}

