"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface CarouselSlide {
  image: string
  buttonText: string
  buttonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

interface HeroCarouselProps {
  slides: CarouselSlide[]
  autoSlideInterval?: number
}

export function HeroCarousel({ slides, autoSlideInterval = 6000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const prev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [slides.length, isTransitioning])

  const next = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [slides.length, isTransitioning])

  useEffect(() => {
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [next, autoSlideInterval])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-custom-dark-gray/40 z-10" />
            <div className="relative w-full h-full">
              <Image src={slide.image || "/placeholder.svg"} alt="Hero image" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                currentIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute"
              }`}
            >
              {currentIndex === index && (
                <div className="flex flex-col items-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={slide.buttonLink}>
                      <Button size="lg">
                        {slide.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>

                    {slide.secondaryButtonText && (
                      <Link href={slide.secondaryButtonLink || "#"}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-custom-white text-custom-white hover:bg-custom-white hover:text-custom-dark-gray"
                        >
                          {slide.secondaryButtonText}
                        </Button>
                      </Link>
                    )}
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex space-x-6 mt-8">
                    <a
                      href="#"
                      className="text-custom-white hover:text-[#53ea4b] transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-7 h-7" />
                    </a>
                    <a
                      href="#"
                      className="text-custom-white hover:text-[#53ea4b] transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-7 h-7" />
                    </a>
                    <a
                      href="#"
                      className="text-custom-white hover:text-[#53ea4b] transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-7 h-7" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Moved outside the content area */}
      <div className="absolute inset-y-0 left-2 md:left-6 flex items-center z-30">
        <Button
          onClick={prev}
          size="icon"
          variant="outline"
          className="rounded-full bg-custom-white/20 border-custom-white/40 backdrop-blur-sm hover:bg-custom-white/40 h-8 w-8 md:h-10 md:w-10"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-custom-white" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-2 md:right-6 flex items-center z-30">
        <Button
          onClick={next}
          size="icon"
          variant="outline"
          className="rounded-full bg-custom-white/20 border-custom-white/40 backdrop-blur-sm hover:bg-custom-white/40 h-8 w-8 md:h-10 md:w-10"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-custom-white" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsTransitioning(false), 500)
                }
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
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

