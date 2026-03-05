import Image from "next/image"
import {
  Phone,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  X,
} from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { generalFaqs } from "@/lib/data/faqs"

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="site-container">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-primary">
              We’re Here to Help You <br /> Feel Your Best
            </h1>

            <p className="text-muted-foreground max-w-md">
              Whether you’re ready to book or simply have questions,
              we’d love to hear from you.
            </p>

          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section pt-0">
        <div className="site-container">

          <div className="rounded-3xl overflow-hidden shadow-soft grid md:grid-cols-2">

            {/* IMAGE */}
            <div className="relative min-h-[340px] md:min-h-[520px]">
              <Image
                src="/images/contact/contact.jpg"
                alt="Spa oils"
                fill
                className="object-cover"
              />
            </div>

            {/* FORM */}
            <div className="bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-center">

              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                Get in Touch
              </h2>

              <p className="mt-3 opacity-90 max-w-md">
                Have a question or need help choosing the right treatment?
                Send us a message and we’ll get back to you shortly.
              </p>

              <form className="mt-8 grid gap-5">

                <Input
                  placeholder="Full Name"
                  className="bg-transparent border-white/40 text-white placeholder:text-white/60"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Email"
                    className="bg-transparent border-white/40 text-white placeholder:text-white/60"
                  />

                  <Input
                    placeholder="Phone Number"
                    className="bg-transparent border-white/40 text-white placeholder:text-white/60"
                  />
                </div>

                <Input
                  placeholder="Subject"
                  className="bg-transparent border-white/40 text-white placeholder:text-white/60"
                />

                <Textarea
                  placeholder="Message"
                  className="bg-transparent border-white/40 text-white placeholder:text-white/60 min-h-[140px]"
                />

                <Button
                  className="rounded-full bg-background text-foreground hover:bg-background/90 w-fit px-8"
                >
                  Send Message
                </Button>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="section pt-0">
        <div className="site-container">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            {/* PHONE */}
            <div>
              <div className="mx-auto w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>

              <h3 className="mt-4 font-semibold">Contact</h3>

              <p className="text-muted-foreground text-sm mt-2">
                hello@beauva.com
              </p>

              <p className="text-muted-foreground text-sm">
                (123) 456-7890
              </p>
            </div>

            {/* HOURS */}
            <div>
              <div className="mx-auto w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>

              <h3 className="mt-4 font-semibold">Opening Hours</h3>

              <p className="text-muted-foreground text-sm mt-2">
                Mon – Fri: 10:00AM – 7:00PM
              </p>

              <p className="text-muted-foreground text-sm">
                Saturday: 10:00AM – 5:00PM
              </p>

              <p className="text-muted-foreground text-sm">
                Sunday: Closed
              </p>
            </div>

            {/* ADDRESS */}
            <div>
              <div className="mx-auto w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>

              <h3 className="mt-4 font-semibold">Address</h3>

              <p className="text-muted-foreground text-sm mt-2">
                123 Serenity Lane
              </p>

              <p className="text-muted-foreground text-sm">
                Los Angeles, CA 90028
              </p>
            </div>

          </div>

          {/* SOCIALS */}
          <div className="mt-10 flex justify-center gap-4">

            {[Instagram, Facebook, Linkedin, Youtube, X].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:bg-secondary/80"
              >
                <Icon className="w-4 h-4 text-primary" />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="section pt-0">
        <div className="relative h-[380px] w-full">

          <iframe
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            src="https://www.google.com/maps?q=Los%20Angeles%20CA&output=embed"
          />

        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="site-container">

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary">
                Wondering About Something?
              </h2>

              <p className="text-muted-foreground mt-3 max-w-sm">
                Everything we do is rooted in purpose — to nurture, uplift,
                and deliver beauty beyond the surface.
              </p>
            </div>

            {/* FAQ LIST */}
            <Accordion type="single" collapsible className="w-full">

              {generalFaqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}

            </Accordion>

          </div>

        </div>
      </section>
    </>
  )
}