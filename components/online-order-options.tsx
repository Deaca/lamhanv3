import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { ExternalLink, Phone, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const deliveryPartners = [
  {
    name: "UberEats",
    logo: "/img/ubereat.jpeg",
    link: "https://www.ubereats.com",
    description: "Order delivery through UberEats",
  },
  {
    name: "DoorDash",
    logo: "/img/doordash.png",
    link: "https://www.doordash.com",
    description: "Get your favorite dishes via DoorDash",
  },
  {
    name: "Ritual",
    logo: "/img/ritual.jpeg",
    link: "https://www.ritual.co",
    description: "Order ahead and skip the line with Ritual",
  },
  {
    name: "Fantuan",
    logo: "/img/fantuan.png",
    link: "https://www.fantuan.ca",
    description: "Order through Fantuan for fast delivery",
  },
]

export default function OnlineOrderOptions() {
  return (
    <div className="py-8">
      {/* "Prefer to order directly" section above the cards */}
      <FadeInSection delay={0.1}>
        <div className="bg-custom-orange/10 backdrop-blur-sm rounded-lg p-8 text-center border border-custom-orange/20 shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-custom-orange mb-4">Prefer to order directly?</h3>
          <p className="text-custom-dark-gray mb-6 max-w-2xl mx-auto">
            Call us to place your order or use our online form to order for pickup. We&apos;ll have your delicious food ready
            when you arrive!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="tel:+11234567890" passHref>
              <Button size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call to Order
              </Button>
            </Link>

            <Link href="https://www.foodbooking.com/ordering/restaurant/menu?company_uid=5248587b-48ec-4ab1-8621-25d81693f8ee&restaurant_uid=2803ea39-fbd9-4d92-953a-37f1b0ae9671" passHref>
              <Button size="lg">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Pickup Order
              </Button>
            </Link>
          </div>
        </div>
      </FadeInSection>

      <h3 className="text-xl font-semibold text-custom-dark-gray mb-6">Order through our delivery partners</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {deliveryPartners.map((partner, index) => (
          <FadeInSection key={index} delay={0.1 * index}>
            <div className="bg-orange-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow h-full flex flex-col border border-orange-100 shadow-md hover:border-custom-orange/20">
              <div className="flex-grow">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-custom-dark-gray mb-2">{partner.name}</h3>
                <p className="text-custom-dark-gray/80 mb-6">{partner.description}</p>
              </div>
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Button className="w-full">
                  Order on {partner.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  )
}

