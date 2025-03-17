import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import RestaurantImage from "@/components/restaurant-image"
import Footer from "@/components/footer"
import LocationSection from "@/components/location-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-200 to-orange-500 text-custom-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <RestaurantImage />
      <div className="container mx-auto px-4 py-20">
        <LocationSection />
      </div>
      <Footer />
    </main>
  )
}

