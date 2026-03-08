"use client";

import { useState, useEffect } from "react";
import Image from "next/image"
import { Phone, Clock, MapPin, Instagram, Facebook } from "lucide-react"
import { FaTiktok } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

import { generalFaqs } from "@/lib/data/faqs"
import Link from "next/link";

const WHATSAPP_NUMBER = "254114123208";

const socials = [
  { href: "https://www.instagram.com/blissfulquinsspa/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/profile.php?id=61577328142953", label: "Facebook", Icon: Facebook },
  { href: "https://www.tiktok.com/@quinterachieng2", label: "Tiktok", Icon: FaTiktok },
];

export default function ContactPage() {

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const message = `
      Hello Blissful Quins Spa,

      Name: ${form.name}
      Email: ${form.email}
      Phone: ${form.phone}

      Subject: ${form.subject}

      Message:
      ${form.message}

      (Message sent from Blissful Quins Spa website)`;

    const encoded = encodeURIComponent(message);

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

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

              <form onSubmit={handleContactSubmit} className="mt-8 grid gap-4">

                <Input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-transparent border-white/40 text-white placeholder:text-white/60"
                />
                {errors.name && <p className="text-red-300 text-xs">{errors.name}</p>}

                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <Input
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-transparent border-white/40 text-white placeholder:text-white/60"
                    />
                    {errors.email && <p className="text-red-300 text-xs">{errors.email}</p>}
                  </div>

                  <div>
                    <Input
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-transparent border-white/40 text-white placeholder:text-white/60"
                    />
                    {errors.phone && <p className="text-red-300 text-xs">{errors.phone}</p>}
                  </div>

                </div>

                <Input
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="bg-transparent border-white/40 text-white placeholder:text-white/60"
                />
                {errors.subject && <p className="text-red-300 text-xs">{errors.subject}</p>}

                <Textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="bg-transparent border-white/40 text-white placeholder:text-white/60 min-h-[140px]"
                />
                {errors.message && <p className="text-red-300 text-xs">{errors.message}</p>}

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
                blisfulquinsspa@gmail.com
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

            {socials.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:bg-secondary/80"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="w-4 h-4 text-primary" />
              </Link>
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