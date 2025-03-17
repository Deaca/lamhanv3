import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-custom-dark-gray">
      <div className="container mx-auto px-4 py-12">
        <FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-custom-orange rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-custom-white font-serif">LB</span>
                </div>
                <h3 className="text-xl font-bold text-custom-orange font-serif">Lamhan Banhmi</h3>
              </div>
              <p className="text-custom-orange mb-4">Authentic Vietnamese cuisine in the heart of the city.</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-custom-orange hover:text-custom-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-custom-orange hover:text-custom-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-custom-orange hover:text-custom-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-custom-orange">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-custom-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-custom-orange hover:text-custom-white transition-colors">
                    Lamhan Banh Mi
                    <br />
                    1089 Bathurst St
                    <br />
                    Toronto, ON M5R 3G8
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-custom-orange mr-2 flex-shrink-0" />
                  <a href="tel:+11234567890" className="text-custom-orange hover:text-custom-white transition-colors">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-custom-orange mr-2 flex-shrink-0" />
                  <a
                    href="mailto:info@lamhanbanhmi.com"
                    className="text-custom-orange hover:text-custom-white transition-colors break-all"
                  >
                    info@lamhanbanhmi.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-custom-orange">Hours</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-custom-orange mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-custom-orange">
                    <p className="font-medium">Monday - Friday</p>
                    <p>11:00 AM - 9:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-custom-orange mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-custom-orange">
                    <p className="font-medium">Saturday - Sunday</p>
                    <p>11:00 AM - 10:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-custom-orange">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/menu" className="text-custom-orange hover:text-custom-white transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/order" className="text-custom-orange hover:text-custom-white transition-colors">
                    Order Online
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-custom-orange hover:text-custom-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#merchandise" className="text-custom-orange hover:text-custom-white transition-colors">
                    Merchandise
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <div className="border-t border-custom-orange/20 mt-8 pt-8 text-center text-custom-orange">
          <p>© 2025 Lamhan Banhmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

