import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import GalleryGrid from "@/components/services/GalleryGrid"
import TestimonialSlider from "@/components/services/TestimonialSlider"
import ServiceFAQ from "@/components/services/ServiceFAQ"
import ServiceCTA from "@/components/services/ServiceCTA"

import { services } from "@/lib/data/services";


export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <>
    <section className="section">
      <div className="site-container max-w-6xl">

        {/* Breadcrumb */}
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground">
            Home / Services / <span className="text-foreground">{service.title}</span>
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-4 text-primary">
            {service.title}
          </h1>

          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            {service.short}
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="relative h-[280px] md:h-[420px] rounded-3xl overflow-hidden">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        </div>

        </section>

        <section className="section">

          <div className="site-container max-w-6xl">

        {/* CONTENT + SIDEBAR */}
        <div className="mt-14 grid md:grid-cols-12 gap-10">

          {/* LEFT CONTENT */}
          <div className="md:col-span-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-2xl font-semibold text-primary">About the Service</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* WHAT TO EXPECT */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-primary">
                What to Expect During Your Session
              </h3>

              <ol className="mt-6 space-y-6 text-muted-foreground">
                {service.expectations.map((step, index) => (
                  <li key={step.title}>
                    <span className="font-semibold text-foreground">
                      {index + 1}. {step.title}
                    </span>

                    <p className="text-sm mt-1">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* BENEFITS */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-primary">Benefits</h2>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 items-start">
                    <span className="mt-1 text-primary">●</span>
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="md:col-span-4">

            <div className="bg-primary text-white rounded-2xl p-6 md:sticky md:top-24">

              <h3 className="text-lg font-semibold mb-4">
                Service Details
              </h3>

              <p className="text-sm text-white/80">
                Ideal for individuals experiencing stress, fatigue, anxiety,
                insomnia, or emotional imbalance. Suitable for relaxation seekers
                or those needing a natural self-care therapy.
              </p>

              <div className="mt-6 space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-white/70">Duration</span>
                  <span>{service.duration}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/70">Schedule</span>
                  <span>{service.schedule}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/70">Price</span>
                  <span>{service.price}</span>
                </div>

              </div>

              <Link
                href={{
                  pathname: "/book-now",
                  query: { service: service.title },
                  hash: "booking-form",
                }}
              >
                <Button className="mt-6 w-full rounded-full bg-white text-[#6b5e52] hover:bg-white/90">
                  Book Now
                </Button>
              </Link>

            </div>

          </div>
        </div>
        </div>
    </section>


        {/* GALLERY GRID */}
        <GalleryGrid images={service.gallery} />

        {/* TESTIMONIALS */}
        <TestimonialSlider />
        
        {/* FAQ */}
        <ServiceFAQ faqs={service.faqs} />

        {/* CTA */}
        <ServiceCTA />

</>
  );
}