import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { SectionHeader } from "@/components/section-header"
import Merchandise from "@/components/merchandise"

export default function MerchandisePage() {
  return (
    <main className="min-h-screen bg-custom-white text-custom-dark-gray">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <SectionHeader
              title="Merchandise & Gifts"
              subtitle="Take home a taste of our restaurant"
              textColor="text-custom-orange"
            />
          </FadeInSection>
          <Merchandise bgColor="bg-custom-white" textColor="text-custom-dark-gray" />
        </div>
      </div>
      <Footer />
    </main>
  )
}

