import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Leaf, Lightbulb, BadgeCheck, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";

const stats = [
  { label: "Happy Clients Served", value: "5.2K+" },
  { label: "Average Customer Rating", value: "4.9/5" },
  { label: "Years of Experience", value: "10+" },
  { label: "Certified Wellness Experts", value: "50+" },
];

const steps = [
  { n: "1", title: "Schedule Your Appointment", desc: "Choose your service and pick a time that fits your day." },
  { n: "2", title: "Personalized Consultation", desc: "We tailor your session based on your needs and goals." },
  { n: "3", title: "Relax & Rejuvenate", desc: "Enjoy a calming experience in our wellness sanctuary." },
  { n: "4", title: "Glow Beyond the Spa", desc: "Leave with aftercare guidance to keep your results lasting." },
];

const pricing = [
  {
    title: "The Glow Ritual",
    price: "85 ksh",
    note: "per session",
    bullets: ["Full-body wellness ritual", "Relaxation-focused", "Ideal for first-time visitors"],
    cta: "Book Now",
  },
  {
    title: "Blissful Essentials",
    price: "145 ksh",
    note: "per session",
    bullets: ["Signature massage + add-on", "Personalized oils", "Best value package"],
    cta: "Book Now",
    featured: true,
  },
  {
    title: "Radiance Retreat",
    price: "220 ksh",
    note: "per session",
    bullets: ["Premium full experience", "Deep renewal", "Glow-forward finishing touch"],
    cta: "Book Now",
  },
];

const VALUES_LEFT = [
  { title: "Holistic Healing", desc: "Full-body wellness and calm, not just surface-level results.", icon: Heart },
  { title: "Client-Centered Care", desc: "Personalized experiences designed around you.", icon: HeartHandshake },
  { title: "Sustainable Beauty", desc: "Thoughtful products and mindful routines.", icon: Leaf },
];

const VALUES_RIGHT = [
  { title: "Continuous Innovation", desc: "We stay ahead with the latest spa technology and trends.", icon: Lightbulb },
  { title: "Authenticity", desc: "Real people, real care, real results.", icon: BadgeCheck },
  { title: "Community", desc: "A space where wellness is shared and supported.", icon: Users },
];

function ValueCard({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: React.ElementType;
}) {
  return (
    <div className="rounded-3xl bg-secondary px-6 py-6 flex items-center justify-between gap-6">
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</div>
      </div>

      <div className="shrink-0 h-11 w-11 rounded-2xl bg-background/60 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary/80" strokeWidth={1.75} />
      </div>
    </div>
  );
}


export default function HomePage() {
  return (
    <>
{/* HERO (full-bleed bg) */}
<section className="relative">
  {/* full-bleed background image */}
  <div className="full-bleed relative h-[520px] md:h-[620px] overflow-hidden">
    <Image
      src="/images/hero/home-hero.jpg"
      alt="Blissful Quins Spa"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/35" />

    {/* centered hero content */}
    <div className="absolute inset-0">
      <div className="site-container h-full flex flex-col items-center justify-center text-center">
        <h1 className="h1 text-primary-foreground max-w-3xl">
          Your Escape Begins Here
        </h1>

        <p className="mt-4 text-primary-foreground/90 max-w-xl">
          Step into a world of calm, comfort, and beauty — curated just for you.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/services">
            <Button className="rounded-full px-7">Book Your Experience</Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="rounded-full px-7 bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10"
            >
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Overlapping feature card */}
  <div className="site-container -mt-24 md:-mt-28 relative z-10">
    <Card className="rounded-3xl overflow-hidden bg-secondary shadow-soft">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[260px] md:min-h-[360px]">
          <Image
            src="/images/sections/feature.jpeg"
            alt="Spa feature"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="text-sm text-muted-foreground">◌</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-primary">
            Experience True Wellness
          </h2>
          <p className="p-muted mt-4 max-w-md">
            Luxury and wellness — facials, massages, and more — designed to renew your body, mind, and soul.
          </p>

          <div className="mt-6">
            <Link href="/about">
              <Button className="rounded-full px-7">Get to Know More</Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  </div>

  {/* spacer so next section doesn't collide */}
  <div className="h-10 md:h-14" />
</section>

{/* SERVICES ROW (like the design) */}
<section className="section">
  <div className="site-container text-center">
    <div className="inline-flex items-center justify-center">
      <Badge variant="outline" className="rounded-full px-4 py-1">
        Services
      </Badge>
    </div>

    <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-primary">
      Relax. Rejuvenate. Repeat.
    </h2>

    <p className="mt-3 p-muted max-w-2xl mx-auto">
      From skincare rituals to full-body therapies, our services are tailored to meet your beauty and wellness goals.
    </p>

    <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">
      {services.slice(0, 4).map((s) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className="group">
          <div className="mx-auto w-full max-w-[220px]">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary shadow-soft">
              <Image
                src={s.heroImage}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-4 text-xs text-muted-foreground">{s.category}</div>
            <div className="mt-1 text-base md:text-lg font-semibold leading-snug">
              {s.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


{/* VALUES (cards left + image center + cards right like design) */}
<section className="section">
  <div className="site-container">
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-primary">
        Our Values, Your Experience
      </h2>
      <p className="p-muted mt-3 max-w-2xl mx-auto">
        Everything we do is rooted in purpose — to nurture, uplift, and deliver beauty beyond the surface.
      </p>
    </div>

    {/* key: fixed middle column */}
    <div className="mt-10 grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_480px_minmax(0,1fr)] items-center">
      {/* LEFT */}
      <div className="grid gap-4">
        {VALUES_LEFT.map((v) => (
          <ValueCard key={v.title} title={v.title} desc={v.desc} Icon={v.icon} />
        ))}
      </div>

      {/* CENTER IMAGE */}
      <div className="mx-auto w-full max-w-[480px]">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-secondary shadow-soft">
          <Image
            src="/images/sections/bliss-hot-stone-therapy.jpeg"
            alt="Spa ambience"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="grid gap-4">
        {VALUES_RIGHT.map((v) => (
          <ValueCard key={v.title} title={v.title} desc={v.desc} Icon={v.icon} />
        ))}
      </div>
    </div>
  </div>
</section>

{/* OUR JOURNEY IN NUMBERS */}
<section className="section">
  <div className="site-container">
    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
      {/* left copy */}
      <div className="lg:col-span-5">
        <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
          Our Journey <br /> in Numbers
        </h2>
        <p className="p-muted mt-5 max-w-md">
          Every number tells a story — of glowing skin, happy hearts, and meaningful spa moments.
        </p>
      </div>

      {/* right stats */}
      <div className="lg:col-span-7">
        <div className="grid gap-8 sm:grid-cols-2">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl bg-secondary p-8">
              <div className="text-4xl md:text-5xl font-semibold text-primary">{s.value}</div>
              <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

    {/* VOICES OF WELLNESS (full-bleed band like design) */}
    <section className="full-bleed relative overflow-hidden">
      {/* pattern overlay (optional) */}
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_center,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative">
        <div className="site-container text-center">
          <div className="mx-auto mb-6 h-10 w-10 rounded-full border border-primary-foreground/30" />
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Voices of Wellness</h2>

          {/* choose one “hero” quote like the UI */}
          <p className="mt-10 text-xl md:text-3xl leading-relaxed max-w-4xl mx-auto opacity-95">
            “{testimonials[0]?.quote}”
          </p>

          <div className="mt-8 text-sm md:text-base opacity-85">
            {testimonials[0]?.name}
            {testimonials[0]?.role ? `, ${testimonials[0]?.role}` : ""}
          </div>

          {/* optional: small cards below (if you want) */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 text-left">
            {testimonials.slice(1, 3).map((t) => (
              <div
                key={t.name}
                className="rounded-3xl bg-primary-foreground/10 border border-primary-foreground/15 p-7"
              >
                <p className="opacity-95">“{t.quote}”</p>
                <div className="mt-5 font-semibold">{t.name}</div>
                {t.role ? <div className="text-sm opacity-80">{t.role}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/*How it works booking STEPS */}
      <section className="section relative overflow-hidden">
        {/* subtle pattern (optional) */}
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,rgba(0,0,0,.25)_1px,transparent_1px)] [background-size:120px_120px]" />

        <div className="site-container relative">
          <div className="text-center">
            <Badge variant="outline" className="rounded-full px-4 py-1">How it Works</Badge>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-primary">
              From Booking to Glowing
            </h2>
            <p className="p-muted mt-3 max-w-2xl mx-auto">
              A simple journey designed to feel effortless.
            </p>
          </div>

          {/* divider layout */}
          <div className="mt-12 grid gap-10 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border/40">
            {steps.map((s) => {
              return (
                <div key={s.n} className="md:px-10">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-semibold text-primary/70">{s.n}</div>
                  </div>

                  <div className="mt-5 text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="site-container">
          <div className="text-center">
            <h2 className="h2 text-primary">Wellness Begins with One Visit</h2>
            <p className="p-muted mt-2">Pick a package. We’ll handle the rest.</p>
          </div>

          <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
            {pricing.map((p) => (
              <Card
                key={p.title}
                className={[
                  "rounded-2xl p-6",
                  p.featured ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary",
                ].join(" ")}
              >
                <div className="font-semibold text-lg">{p.title}</div>
                <div className="mt-4 flex items-end gap-2">
                  <div className="text-3xl font-semibold">{p.price}</div>
                  <div className={p.featured ? "opacity-90" : "text-muted-foreground"}>{p.note}</div>
                </div>

                <Separator className={p.featured ? "my-6 bg-primary-foreground/20" : "my-6"} />

                <ul className={p.featured ? "space-y-2 opacity-95" : "space-y-2 text-muted-foreground"}>
                  {p.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link href="/services">
                    <Button className={p.featured ? "rounded-full w-full bg-background text-foreground hover:bg-background/90" : "rounded-full w-full"}>
                      {p.cta}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA News letter */}
<section className="section">
  <div className="site-container">
    <div className="mx-auto max-w-6xl rounded-3xl bg-secondary overflow-hidden shadow-soft">
      <div className="grid md:grid-cols-2">
        {/* image */}
        <div className="relative min-h-[240px] md:min-h-[320px]">
          <Image
            src="/images/sections/feel-beautiful.jpg"
            alt="Feel Beautiful"
            fill
            className="object-cover"
          />
        </div>

        {/* copy */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
            Feel Beautiful.<br />Be Beauva.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Ready to elevate your self-care?
          </p>

          <div className="mt-6">
            <Link href="/services">
              <Button className="rounded-full px-7">Book Your Experience</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}