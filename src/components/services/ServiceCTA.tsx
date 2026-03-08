import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServiceCTA() {
  return (
    <section className="section">

      <div className="site-container">

        <div className="rounded-3xl overflow-hidden grid md:grid-cols-2">

          <div className="bg-primary text-white p-10 flex flex-col justify-center">

            <h2 className="text-3xl font-serif font-semibold">
              Feel Ready to Rejuvenate?
            </h2>

            <p className="mt-4 text-white/80">
              Book your treatment today or contact us for personalized recommendations.
            </p>

            <div className="mt-6 flex gap-3">

              <Link href="/book-now">
                <Button className="rounded-full bg-white text-[#6b5e52]">
                  Book Now
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="ghost"
                  className="rounded-full border border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>

            </div>

          </div>

          <div className="relative min-h-[280px]">
            <Image
              src="/images/sections/service-cta.jpg"
              alt="Spa"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  )
}