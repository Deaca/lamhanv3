import { FadeInSection } from "@/components/fade-in-section"
import { SectionHeader } from "@/components/section-header"
import { MapPin, Clock, Phone } from "lucide-react"
import Image from "next/image"

interface LocationSectionProps {
  textColor?: string
}

export default function LocationSection({ textColor = "text-custom-white" }: LocationSectionProps) {
  return (
    <div>
      <SectionHeader title="Our Location" subtitle="Visit us in person" className={textColor} />

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <FadeInSection delay={0.1}>
          <div className="bg-custom-white rounded-lg overflow-hidden h-full shadow-md">
            <div className="relative w-full h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Bánh Mì & More storefront"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-custom-orange mt-1" />
                <div>
                  <h3 className="font-semibold text-custom-dark-gray">Address</h3>
                  <p className="text-custom-dark-gray/80">
                    Lamhan Banh Mi
                    <br />
                    1089 Bathurst St
                    <br />
                    Toronto, ON M5R 3G8
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-custom-orange mt-1" />
                <div>
                  <h3 className="font-semibold text-custom-dark-gray">Hours</h3>
                  <p className="text-custom-dark-gray/80">
                    Monday - Friday: 11:00 AM - 9:00 PM
                    <br />
                    Saturday - Sunday: 11:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-custom-orange mt-1" />
                <div>
                  <h3 className="font-semibold text-custom-dark-gray">Phone</h3>
                  <p className="text-custom-dark-gray/80">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="bg-custom-white rounded-lg overflow-hidden h-full shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2886.2676539154722!2d-79.4208142!3d43.663403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35e22ec7273b%3A0x646b5b8eecbabe86!2sLamhan%20Banh%20Mi!5e0!3m2!1svi!2sca!4v1741406630210!5m2!1svi!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lamhan Banh Mi location on Google Maps"
              className="w-full h-full"
            />
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}

