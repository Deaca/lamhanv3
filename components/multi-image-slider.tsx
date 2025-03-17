"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

interface MultiImageSliderProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export function MultiImageSlider({ images }: MultiImageSliderProps) {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        skipSnaps: false,
      }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <div className="relative group overflow-hidden rounded-lg aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {image.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-2 text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-custom-white/20 border-custom-white/40 backdrop-blur-sm hover:bg-custom-white/40" />
      <CarouselNext className="right-2 bg-custom-white/20 border-custom-white/40 backdrop-blur-sm hover:bg-custom-white/40" />
    </Carousel>
  )
}

