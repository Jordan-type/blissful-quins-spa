import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generalFaqs } from "@/lib/data/faqs";

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="site-container">
          {/* Top heading */}
          <div className="text-center">
            <h1 className="h1 text-primary">We’re Here to Help You Feel Your Best</h1>
            <p className="p-muted mt-3">
              Whether you’re ready to book or simply have questions, we’d love to hear from you.
            </p>
          </div>

          {/* Image + Form */}
          <div className="mt-10 rounded-2xl overflow-hidden bg-secondary shadow-soft">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[280px] md:min-h-[520px]">
                <Image src="/images/contact/contact.jpg" alt="Contact" fill className="object-cover" />
              </div>

              <div className="p-8 md:p-12 bg-primary text-primary-foreground">
                <h2 className="text-3xl font-semibold">Get in Touch</h2>
                <p className="mt-2 opacity-90">
                  Have a question or need help choosing the right treatment? Send us a message and we’ll get back shortly.
                </p>

                <form className="mt-8 grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input className="rounded-2xl bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20" placeholder="Full Name" />
                    <Input className="rounded-2xl bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20" placeholder="Your Email" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input className="rounded-2xl bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20" placeholder="Phone Number" />
                    <Input className="rounded-2xl bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20" placeholder="Subject" />
                  </div>

                  <Textarea className="rounded-2xl bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20 min-h-[140px]" placeholder="Message" />

                  <Button className="rounded-full bg-background text-foreground hover:bg-background/90 w-full md:w-auto md:self-end px-10">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact blocks */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl bg-secondary p-6 text-center">
              <div className="text-3xl">☎️</div>
              <div className="mt-2 font-semibold">Contact</div>
              <div className="text-sm text-muted-foreground mt-2">hello@blissfulquins.com</div>
              <div className="text-sm text-muted-foreground">(123) 456-7890</div>
            </Card>

            <Card className="rounded-2xl bg-secondary p-6 text-center">
              <div className="text-3xl">🕒</div>
              <div className="mt-2 font-semibold">Opening Hours</div>
              <div className="text-sm text-muted-foreground mt-2">Mon–Fri: 10:00AM–7:00PM</div>
              <div className="text-sm text-muted-foreground">Saturday: 10:00AM–5:00PM</div>
              <div className="text-sm text-muted-foreground">Sunday: Closed</div>
            </Card>

            <Card className="rounded-2xl bg-secondary p-6 text-center">
              <div className="text-3xl">📍</div>
              <div className="mt-2 font-semibold">Address</div>
              <div className="text-sm text-muted-foreground mt-2">123 Serenity Lane</div>
              <div className="text-sm text-muted-foreground">Los Angeles, CA 90028</div>
            </Card>
          </div>

          {/* Map */}
          <div className="mt-10 rounded-2xl overflow-hidden bg-secondary shadow-soft">
            <div className="relative aspect-[16/9]">
              {/* Replace with your real Google Maps embed */}
              <iframe
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Los%20Angeles%20CA&output=embed"
                title="Map"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="h2 text-primary">Wondering About Something?</h2>
            <p className="p-muted mt-2">Quick answers to the most common questions.</p>

            <div className="mt-8 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {generalFaqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}