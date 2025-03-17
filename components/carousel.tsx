"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  autoSlideInterval?: number
}

export function Carousel({ images, autoSlideInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = useCallback(() => {
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1))
  }, [images.length])

  const next = useCallback(() => {
    setCurrentIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1))
  }, [images.length])

  useEffect(() => {
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [next, autoSlideInterval])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          onClick={prev}
          size="icon"
          variant="outline"
          className="rounded-full bg-custom-white/20 border-custom-white/40 backdrop-blur-sm hover:bg-custom-white/40"
        >
          <ChevronLeft className="h-6 w-6 text-custom-white" />
        </Button>
        <Button
          onClick={next}
          size="icon"
          variant="outline"
          className="rounded-full bg-custom-white/20 border-custom-white/40 backdrop-blur-sm hover:bg-custom-white/40"
        >
          <ChevronRight className="h-6 w-6 text-custom-white" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentIndex === index ? "bg-[#53ea4b]" : "bg-custom-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

