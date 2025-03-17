import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { SectionHeader } from "@/components/section-header"
import OnlineOrderOptions from "@/components/online-order-options"

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-custom-white text-custom-dark-gray">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <SectionHeader
              title="Order Online"
              subtitle="Get your favorite Vietnamese dishes delivered to your door"
              textColor="text-custom-orange"
            />
          </FadeInSection>
          <OnlineOrderOptions />
        </div>
      </div>
      <Footer />
    </main>
  )
}

