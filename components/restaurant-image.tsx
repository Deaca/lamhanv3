import { FadeInSection } from "@/components/fade-in-section"
import { BackgroundImageFXParallax } from "@/components/background-image-fx-parallax"

export default function RestaurantImage() {
  return (
    <section className="relative" id="restaurant">
      <FadeInSection>
        <div className="aspect-[16/9] md:aspect-[21/9] relative w-full">
          <BackgroundImageFXParallax
            src="/img/restaurant.jpg"
            alt="Bánh Mì & More Restaurant Interior"
            speed={0.5}
            overlayOpacity={0.3}
            className="w-full h-full"
          />
        </div>
      </FadeInSection>
    </section>
  )
}

