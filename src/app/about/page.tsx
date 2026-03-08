import Image from "next/image"

import {
  Heart,
  HeartHandshake,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Users,
  Calendar,
} from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { team } from "@/lib/data/team"

const milestones = [
  {
    year: "2013",
    desc: "Beauva was founded with a vision to redefine beauty and self-care."
  },
  {
    year: "2015",
    desc: "Welcomed our 10,000th client and introduced new wellness body rituals."
  },
  {
    year: "2018",
    desc: "Expanded with new treatment rooms and wellness menus."
  },
  {
    year: "2020",
    desc: "Awarded 'Top Beauty Retreat' and refined our sanctuary experience."
  }
]

const values = [
  {
    icon: Heart,
    title: "Holistic Healing",
    desc: "A beauty and wellness approach that nurtures mind, body, and spirit."
  },
  {
    icon: HeartHandshake,
    title: "Client-Centered Care",
    desc: "Every treatment is personalized to your needs and lifestyle."
  },
  {
    icon: Leaf,
    title: "Sustainable Beauty",
    desc: "We prioritize eco-friendly products and mindful practices."
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    desc: "Always exploring new techniques and experiences."
  },
  {
    icon: ShieldCheck,
    title: "Authenticity",
    desc: "Real wellness and trusted expertise."
  },
  {
    icon: Users,
    title: "Community & Connection",
    desc: "A sanctuary where everyone feels welcomed and cared for."
  }
]

export default function AboutPage() {
  return (
    <>

      {/* HERO */}
      <section className="section">
        <div className="site-container">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-primary">
                Rooted in Wellness,<br />Elevated by Beauty
              </h1>

              <p className="text-muted-foreground mt-4 max-w-md">
                Discover the story, soul, and vision behind every serene
                moment at Beauva.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {["/images/about/a1.jpeg","/images/about/a2.jpeg","/images/about/a3.jpeg"].map((img)=>(
                <div key={img} className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src={img} alt="" fill className="object-cover"/>
                </div>
              ))}
            </div>

          </div>


          {/* PHILOSOPHY */}
          <div className="text-center mt-16 max-w-3xl mx-auto">

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Self-care is more than a luxury — it's a lifestyle.
              Nestled in a calm, elegant space, our spa is a sanctuary
              where beauty, wellness, and inner balance come together.
            </p>

            <div className="w-16 h-px bg-border mx-auto mt-8"></div>

          </div>


          {/* LOGO STRIP Parntners */}
          {/* <div className="flex flex-wrap justify-center gap-10 mt-10 opacity-70">

            {["Logo","Logo","Logo","Logo","Logo"].map((l,i)=>(
              <div key={i} className="text-sm font-semibold">
                Logipsum
              </div>
            ))}

          </div> */}

        </div>
      </section>



      {/* VALUES */}
      <section className="bg-primary text-primary-foreground py-20">

        <div className="site-container grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-4xl font-serif">
              Our Values,<br />Your Experience
            </h2>

            <p className="mt-4 opacity-80 max-w-sm">
              Everything we do is rooted in purpose — to nurture,
              uplift, and deliver beauty beyond the surface.
            </p>
          </div>


          <div className="grid gap-6">

            {values.map((v)=>{

              const Icon = v.icon

              return (
                <div key={v.title} className="flex gap-4">

                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-foreground/10">
                    <Icon className="w-5 h-5"/>
                  </div>

                  <div>
                    <h4 className="font-semibold">{v.title}</h4>
                    <p className="text-sm opacity-80">{v.desc}</p>
                  </div>

                </div>
              )

            })}

          </div>

        </div>

      </section>

      {/* VIDEO */}
      <section className="section">
        <div className="site-container text-center">

          <h2 className="text-3xl md:text-4xl font-serif text-primary">
            Step Inside Our Sanctuary
          </h2>

          <p className="text-muted-foreground mt-3">
            A glimpse into the Blissful Quins Spa experience.
          </p>

          {/* VIDEO GRID */}
          <div className="mt-12 grid gap-8 justify-center sm:grid-cols-2 lg:grid-cols-4">

            {[
              "/videos/17.02.58.mp4",
              "/videos/17.08.05.mp4",
              "/videos/17.09.58.mp4",
              "/videos/17.12.45.mp4",
            ].map((video) => (
              <div
                key={video}
                className="w-full max-w-[300px] mx-auto rounded-xl overflow-hidden shadow-md bg-black"
              >
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* MILESTONES */}
      <section className="section pt-0">
        <div className="site-container">

          <h2 className="text-3xl font-serif text-primary text-center mb-12">
            Milestones in Beauty & Care
          </h2>

          <div className="relative">

            {/* top timeline line */}
            <div className="absolute top-4 left-0 right-0 h-px bg-border" />

            <div className="grid md:grid-cols-4 gap-10">

              {milestones.map((m, i) => (
                <div key={m.year} className="relative pt-8">

                  {/* dot */}
                  <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-primary"></div>

                  {/* vertical divider */}
                  {i !== milestones.length - 1 && (
                    <div className="absolute top-4 left-0 w-px h-full bg-border"></div>
                  )}

                  <h3 className="text-2xl font-semibold text-primary">
                    {m.year}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground max-w-[220px]">
                    {m.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="section pt-0">
        <div className="site-container">

          <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl">

            {/* Image */}
            <div className="relative min-h-[420px]">
              <Image
                src="/images/about/spa.jpeg"
                alt="Spa"
                fill
                className="object-cover"
              />
            </div>


            {/* Form */}
            <div className="bg-primary text-primary-foreground p-10 md:p-12">

              <h3 className="text-2xl font-serif">
                Feel Beautiful, Inside & Out
              </h3>

              <p className="text-sm opacity-80 mt-3 max-w-sm">
                Ready to start your Beauva journey? Book your personalized session
                or reach out to us with any questions.
              </p>


              <form className="mt-8 space-y-6">

                {/* name */}
                <input
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 outline-none placeholder:text-primary-foreground/60"
                />

                {/* email */}
                <input
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 outline-none placeholder:text-primary-foreground/60"
                />

                {/* service */}
                <select
                  className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 outline-none"
                >
                  <option>Preferred Service</option>
                </select>


                {/* date + time */}
                <div className="grid grid-cols-2 gap-6">

                  <input
                    type="date"
                    className="bg-transparent border-b border-primary-foreground/40 pb-2 outline-none"
                  />

                  <input
                    type="time"
                    className="bg-transparent border-b border-primary-foreground/40 pb-2 outline-none"
                  />

                </div>


                {/* notes */}
                <input
                  placeholder="Additional Notes (optional)"
                  className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 outline-none placeholder:text-primary-foreground/60"
                />


                <Button
                  className="mt-6 rounded-full bg-white text-primary hover:bg-white/90 px-8"
                >
                  Book My Experience
                </Button>

              </form>

            </div>

          </div>

        </div>
      </section>



      {/* TEAM */}
      {/* <section className="section pt-0">

        <div className="site-container">

          <div className="grid md:grid-cols-2 gap-10 items-end">

            <div>
              <h2 className="text-3xl font-serif text-primary">
                Meet the Experts Behind the Glow
              </h2>
            </div>

            <p className="text-muted-foreground">
              Our team is made of talented skincare specialists,
              wellness experts, and beauty artisans.
            </p>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">

            {team.map((m)=>(
              <div key={m.name} className="text-center">

                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                  <Image src={m.image} alt={m.name} fill className="object-cover"/>
                </div>

                <h4 className="mt-3 font-semibold">{m.name}</h4>
                <p className="text-sm text-muted-foreground">{m.title}</p>

              </div>
            ))}

          </div>

        </div>

      </section> */}

    </>
  )
}