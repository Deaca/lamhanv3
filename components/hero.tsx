import { HeroCarousel } from "@/components/hero-carousel"

const heroSlides = [
  {
    image: "/img/1920p.png",
    buttonText: "Order Now",
    buttonLink: "/order",
  },
  {
    image: "/img/1920p.png",
    buttonText: "See Specials",
    buttonLink: "/menu",
  },
  {
    image: "/img/1920p.png",
    buttonText: "Shop Now",
    buttonLink: "#merchandise",
  },
]

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <HeroCarousel slides={heroSlides} />
    </section>
  )
}

