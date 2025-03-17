import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

interface MerchandiseProps {
  bgColor?: string
  textColor?: string
  showHeader?: boolean
}

const merchandiseItems = [
  {
    name: "Signature Fish Sauce",
    description: "Our house-made fish sauce, perfect for dipping or cooking",
    image: "/img/300.png",
    price: 8.99,
  },
  {
    name: "Bánh Mì T-Shirt",
    description: "Soft cotton t-shirt with our logo and iconic bánh mì illustration",
    image: "/img/300.png",
    price: 24.99,
  },
  {
    name: "Gift Card",
    description: "The perfect gift for food lovers, available in various amounts",
    image: "/img/300.png",
    price: 25.0,
  },
  {
    name: "Chili Garlic Sauce",
    description: "Homemade spicy chili garlic sauce to add heat to any dish",
    image: "/img/300.png",
    price: 7.99,
  },
]

export default function Merchandise({
  bgColor = "bg-custom-orange",
  textColor = "text-custom-white",
  showHeader = false,
}: MerchandiseProps) {
  return (
    <section className={`py-10 relative ${bgColor} ${textColor}`} id="merchandise">
      <div className="container mx-auto px-4">
        {showHeader && (
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Merchandise & Gifts</h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">Take home a taste of our restaurant</p>
            </div>
          </FadeInSection>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {merchandiseItems.map((item, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="overflow-hidden bg-custom-white">
                <div className="h-48 relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-custom-dark-gray">{item.name}</h3>
                    <span className="font-bold text-custom-orange">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-custom-dark-gray/80 mb-4">{item.description}</p>
                  <Button className="w-full">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

