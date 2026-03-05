import Image from "next/image";
import { Card } from "@/components/ui/card";
import { team } from "@/lib/data/team";

const milestones = [
  { year: "2013", title: "The Beginning", desc: "A small sanctuary with a big vision for calm and care." },
  { year: "2015", title: "Growing Community", desc: "Expanded services and a deeper focus on wellness rituals." },
  { year: "2018", title: "Signature Treatments", desc: "Introduced premium experiences and specialized care." },
  { year: "2020", title: "Modern Spa Era", desc: "Refined our space and elevated client-centered experiences." },
];

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="site-container">
          <div className="grid gap-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="h1 text-primary">Rooted in Wellness, Elevated by Beauty</h1>
                <p className="p-muted mt-4">
                  Self-care is more than a luxury — it’s a lifestyle. Blissful Quins Spa is a calm, elegant sanctuary where
                  beauty, wellness, and inner balance come together.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["/images/about/a1.jpg", "/images/about/a2.jpg", "/images/about/a3.jpg"].map((src) => (
                  <div key={src} className="relative aspect-[1/1] rounded-2xl overflow-hidden bg-secondary">
                    <Image src={src} alt="About" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* values row */}
            <Card className="rounded-2xl overflow-hidden bg-primary text-primary-foreground">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-semibold">Our Values, Your Experience</h2>
                  <p className="mt-3 opacity-90">
                    Everything we do is designed around care — mindfully chosen products, a calming environment, and
                    a personalized approach.
                  </p>
                </div>

                <div className="p-8 md:p-12 grid gap-4">
                  {[
                    { t: "Holistic Healing", d: "A full-body approach to calm and renewal." },
                    { t: "Client-Centered Care", d: "Your needs guide every treatment." },
                    { t: "Sustainable Beauty", d: "Thoughtful routines and mindful products." },
                    { t: "Continuous Innovation", d: "Always improving the experience." },
                    { t: "Authenticity", d: "Real wellness, no gimmicks." },
                    { t: "Community & Connection", d: "A safe space for self-care and balance." },
                  ].map((v) => (
                    <div key={v.t} className="rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 p-5">
                      <div className="font-semibold">{v.t}</div>
                      <div className="text-sm opacity-85 mt-1">{v.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* video section */}
            <div className="grid gap-4">
              <h2 className="h2 text-primary text-center">Step Inside Our Sanctuary</h2>
              <p className="p-muted text-center">
                A calm glimpse into the Blissful Quins experience.
              </p>

              <div className="rounded-2xl overflow-hidden bg-secondary shadow-soft">
                <div className="relative aspect-[16/9]">
                  {/* Replace with real video URL */}
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Blissful Quins Spa"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* milestones */}
            <div>
              <h2 className="h2 text-primary">Milestones in Beauty & Care</h2>
              <div className="mt-6 flex flex-col md:flex-row gap-4">
                {milestones.map((m) => (
                  <div key={m.year} className="flex-1 rounded-2xl bg-secondary p-6">
                    <div className="text-2xl font-semibold text-primary">{m.year}</div>
                    <div className="mt-2 font-semibold">{m.title}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* team */}
            <div>
              <h2 className="h2 text-primary">Meet the Experts Behind the Glow</h2>
              <p className="p-muted mt-2">A dedicated team focused on your wellness journey.</p>

              <div className="mt-8 grid gap-6 grid-cols-2 md:grid-cols-4">
                {team.map((m) => (
                  <div key={m.name} className="rounded-2xl bg-secondary overflow-hidden">
                    <div className="relative aspect-[4/5]">
                      <Image src={m.image} alt={m.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="font-semibold">{m.name}</div>
                      <div className="text-sm text-muted-foreground">{m.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* bottom newsletter strip (Footer already has one too; you can remove either) */}
          </div>
        </div>
      </section>
    </>
  );
}