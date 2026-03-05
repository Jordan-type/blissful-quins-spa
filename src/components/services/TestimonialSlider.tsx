"use client"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { testimonials } from "@/lib/data/testimonials"

export default function TestimonialSlider() {
  return (
    <section className="section bg-primary text-white">

      <div className="site-container">

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >

          {/* HEADER */}
          <div className="flex items-center justify-between mb-10">

            <h2 className="text-3xl font-serif font-semibold">
              Your Words, Our Pride
            </h2>

            <div className="flex gap-3">
              <CarouselPrevious className="static translate-y-0 bg-white/20 border-white/30 text-white" />
              <CarouselNext className="static translate-y-0 bg-white/20 border-white/30 text-white" />
            </div>

          </div>

          <CarouselContent>

            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="p-6 bg-white text-black rounded-xl h-full">

                  <p className="text-sm leading-relaxed">
                    “{t.quote}”
                  </p>

                  <div className="mt-5 font-semibold">
                    {t.name}
                  </div>

                  {t.role && (
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  )}

                </Card>
              </CarouselItem>
            ))}

          </CarouselContent>

        </Carousel>

      </div>

    </section>
  )
}