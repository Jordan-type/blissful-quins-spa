import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
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
            Soothing touch meets the healing power of essential oils for a deeply relaxing,
            restorative experience.
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

        {/* CONTENT + SIDEBAR */}
        <div className="mt-14 grid md:grid-cols-12 gap-10">

          {/* LEFT CONTENT */}
          <div className="md:col-span-8">

            {/* ABOUT */}
            <div>
              <h2 className="text-2xl font-semibold text-primary">About the Service</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Aromatherapy massage is a full-body experience that combines gentle massage
                techniques with the therapeutic benefits of carefully selected essential oils.
                Whether you’re seeking stress relief, emotional grounding, or deep physical
                relaxation, this treatment brings both body and mind into balance.
              </p>
            </div>

            {/* WHAT TO EXPECT */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-primary">
                What to Expect During Your Session
              </h3>

              <ol className="mt-6 space-y-6 text-muted-foreground">

                <li>
                  <span className="font-semibold text-foreground">
                    1. Consultation & Oil Selection
                  </span>
                  <p className="text-sm mt-1">
                    Your therapist begins with a short consultation to understand your needs
                    and mood, followed by selecting essential oils tailored to your wellness goals.
                  </p>
                </li>

                <li>
                  <span className="font-semibold text-foreground">
                    2. Gentle Body Massage
                  </span>
                  <p className="text-sm mt-1">
                    The full-body massage includes slow, flowing strokes designed to relieve
                    tension, promote circulation, and encourage deep relaxation.
                  </p>
                </li>

                <li>
                  <span className="font-semibold text-foreground">
                    3. Aromatherapy Integration
                  </span>
                  <p className="text-sm mt-1">
                    As the oils are absorbed into the skin, soothing scents surround you,
                    enriching the sensory experience and enhancing emotional wellbeing.
                  </p>
                </li>

                <li>
                  <span className="font-semibold text-foreground">
                    4. Finishing Touch
                  </span>
                  <p className="text-sm mt-1">
                    Your session ends with calming techniques and warm towel application
                    to seal in the benefits.
                  </p>
                </li>

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

            {/* GALLERY */}
            <div className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {service.gallery.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt="Gallery"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="md:col-span-4">

            <div className="bg-[#6b5e52] text-white rounded-2xl p-6 md:sticky md:top-24">

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

              <Link href="/contact">
                <Button className="mt-6 w-full rounded-full bg-white text-[#6b5e52] hover:bg-white/90">
                  Book Now
                </Button>
              </Link>

            </div>

          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-20 bg-[#6b5e52] text-white rounded-2xl p-10">

          <h2 className="text-3xl font-serif font-semibold">
            Your Words, Our Pride
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {testimonials.slice(0,3).map((t) => (
              <Card key={t.name} className="p-6 bg-white text-black rounded-xl">
                <p className="text-sm leading-relaxed">“{t.quote}”</p>

                <div className="mt-4 font-semibold">{t.name}</div>

                {t.role && (
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                )}
              </Card>
            ))}
          </div>

        </div>

        {/* FAQ */}
        <div className="mt-20 text-center">

          <h2 className="text-3xl font-serif font-semibold">
            Need More Details?
          </h2>

          <p className="text-muted-foreground mt-2">
            Browse through our most asked questions.
          </p>

          <div className="max-w-3xl mx-auto mt-10">
            <Accordion type="single" collapsible>

              {service.faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}

            </Accordion>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl overflow-hidden grid md:grid-cols-2">

          <div className="bg-[#6b5e52] text-white p-10 flex flex-col justify-center">

            <h2 className="text-3xl font-serif font-semibold">
              Feel Ready to Rejuvenate?
            </h2>

            <p className="mt-4 text-white/80">
              Book your treatment today or contact us for personalized
              recommendations.
            </p>

            <div className="mt-6 flex gap-3">
              <Button className="rounded-full bg-white text-[#6b5e52]">
                Book Now
              </Button>

              <Button
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
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
  );
}