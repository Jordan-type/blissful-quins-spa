import Image from "next/image"
import { Phone, Clock, MapPin, Instagram, Facebook, Linkedin, } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

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

                <Button className="rounded-full bg-background text-foreground hover:bg-background/90 w-fit px-8">
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
                hello@blissfulquins.com
              </p>

              <p className="text-muted-foreground text-sm">
                +254 114 123 208
              </p>
            </div>

            {/* HOURS */}
            <div>
              <div className="mx-auto w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>

              <h3 className="mt-4 font-semibold">Opening Hours</h3>

              <p className="text-muted-foreground text-sm mt-2">
                Mon – Fri: 09:00AM – 9:00PM
              </p>

              <p className="text-muted-foreground text-sm">
                Saturday: 09:00AM – 9:00PM
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
                6 Chaka Rd
              </p>

              <p className="text-muted-foreground text-sm">
                Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="mt-10 flex justify-center gap-4">

            {[Instagram, Facebook, Linkedin,].map((Icon, i) => (
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
        <div className="relative h-[580px] w-full">

          <iframe 
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8036222890273!2d36.788166776019!3d-1.2922266356348189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c752f783818fc4f%3A0xedd92527f7b8e1e5!2sQuins%20Blissful%20SPA!5e0!3m2!1sen!2sza!4v1772743365680!5m2!1sen!2sza" 
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