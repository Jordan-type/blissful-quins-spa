import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/lib/data/services";

export default function ServicesPage() {
  return (
    <div className="page-services">
      {/* HERO full-bleed */}
      <section className="full-bleed relative h-[520px] md:h-[620px] overflow-hidden">
        <Image src="/images/hero/services-hero.jpg" alt="Services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 grid place-items-center text-center px-6">
          <div>
            <h1 className="h1 text-primary-foreground">Our Spa & Wellness Treatments</h1>
            <p className="mt-3 text-primary-foreground/85 max-w-2xl mx-auto">
              Relax. Rejuvenate. Repeat. Explore treatments designed for beauty, calm, and full-body renewal.
            </p>
            <div className="mt-4 text-primary-foreground/70 text-sm">Home / Services</div>
          </div>
        </div>
      </section>

      {/* CONTENT in site-container */}
      <section className="section">
        <div className="site-container">
          {/* intro row like the UI */}
          <div className="mt-2 grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
                Relax. Rejuvenate. <br /> Repeat.
              </h2>
            </div>
            <div className="md:col-span-6 md:text-right">
              <p className="text-sm md:text-base text-muted-foreground max-w-md md:ml-auto">
                From skincare rituals to full-body therapies, our services are tailored to meet your beauty and wellness goals.
              </p>
            </div>
          </div>

          {/* cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s, idx) => (
            <ServiceCard
            key={s.slug}
            service={s}
            />
        ))}
        </div>

          {/* CTA */}
        <div className="mt-16 rounded-3xl overflow-hidden relative">
        <div className="relative h-[240px] md:h-[260px]">
            <Image
            src="/images/sections/services-cta.jpg"
            alt="CTA"
            fill
            className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/55" />
        </div>

        <div className="absolute inset-0 grid place-items-center text-center px-6">
            <div className="max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-semibold text-primary-foreground">
                Ready to Reconnect With Yourself?
            </h3>
            <p className="mt-3 text-primary-foreground/85">
                Book your favorite treatment or consult our team for a personalized wellness plan made just for you.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
                <Link href="/services">
                <Button className="rounded-full px-7 bg-background text-foreground hover:bg-background/90">
                    Book Now
                </Button>
                </Link>
                <Link href="/packages">
                <Button
                    variant="outline"
                    className="rounded-full px-7 border-primary-foreground/45 text-primary-foreground hover:bg-primary-foreground/10"
                >
                    Explore Packages
                </Button>
                </Link>
            </div>
            </div>
        </div>
        </div>
        </div>
      </section>
    </div>
  );
}