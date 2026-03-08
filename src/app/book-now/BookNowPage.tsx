"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Calendar, Clock } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

const WHATSAPP_NUMBER = "254114123208";

export default function BookNowPage() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service") || "";

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: selectedService,
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!selectedService) return;

    const timer = setTimeout(() => {
      document.getElementById("booking-form")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedService]);

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

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s]+$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!form.service) newErrors.service = "Please select a service";
    if (!form.date) newErrors.date = "Please select a date";
    if (!form.time) newErrors.time = "Please select a time";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const message = `
Hello Blissful Quins Spa,

I would like to book a service.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Service: ${form.service}

Preferred Date: ${form.date}
Preferred Time: ${form.time}

Notes: ${form.notes || "None"}

(Booking request sent from Blissful Quins Spa website)
`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* HERO */}
      <section className="full-bleed relative h-[520px] md:h-[620px] overflow-hidden">
        <Image
          src="/images/hero/services-hero.jpg"
          alt="Services"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 grid place-items-center text-center px-6">
          <div>
            <h1 className="h1 text-primary-foreground">
              Our Spa & Wellness Treatments
            </h1>

            <p className="mt-3 text-primary-foreground/85 max-w-2xl mx-auto">
              Relax. Rejuvenate. Repeat. Explore treatments designed for
              beauty, calm, and full-body renewal.
            </p>

            <div className="mt-4 text-primary-foreground/70 text-sm">
              Home / Services
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="section">
        <div className="site-container max-w-xl mx-auto">

          <Card className="bg-primary text-primary-foreground p-10 md:p-12">

            <h3 className="text-2xl font-serif">
              Feel Beautiful, Inside & Out
            </h3>

            <p className="text-sm opacity-80 mt-3 max-w-sm">
              Ready to start your Blissful Quins Spa experience? Book your
              personalized treatment and our team will confirm your appointment.
            </p>

            <form
              id="booking-form"
              onSubmit={handleSubmit}
              className="mt-8 space-y-4"
            >

              {/* NAME */}
              <input
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 outline-none placeholder:text-primary-foreground/60"
                onChange={(e) => handleChange("name", e.target.value)}
              />
              {errors.name && (
                <p className="text-red-300 text-xs">{errors.name}</p>
              )}

              {/* EMAIL */}
              <input
                placeholder="Your Email"
                type="email"
                className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 outline-none placeholder:text-primary-foreground/60"
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="text-red-300 text-xs">{errors.email}</p>
              )}

              {/* PHONE */}
              <input
                placeholder="Phone Number (e.g. 0712 345 678)"
                type="tel"
                inputMode="numeric"
                className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 outline-none placeholder:text-primary-foreground/60"
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              {errors.phone && (
                <p className="text-red-300 text-xs">{errors.phone}</p>
              )}

              {/* SERVICE */}
              <select
                className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 outline-none text-white"
                value={form.service}
                onChange={(e) => handleChange("service", e.target.value)}
              >
                <option value="" className="text-black">
                  Preferred Service
                </option>

                {services.map((service) => (
                  <option
                    key={service.slug}
                    value={service.title}
                    className="text-black"
                  >
                    {service.title} — {service.price}
                  </option>
                ))}
              </select>

              {errors.service && (
                <p className="text-red-300 text-xs">{errors.service}</p>
              )}

              {/* DATE + TIME */}
              <div className="grid grid-cols-2 gap-6">

                <div className="flex items-center gap-2 border-b border-primary-foreground/40 pb-2">
                  <Calendar size={18} />

                  <input
                    type="date"
                    min={today}
                    className="bg-transparent outline-none w-full"
                    onChange={(e) => handleChange("date", e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-2 border-b border-primary-foreground/40 pb-2">
                  <Clock size={18} />

                  <input
                    type="time"
                    className="bg-transparent outline-none w-full"
                    onChange={(e) => handleChange("time", e.target.value)}
                  />
                </div>

              </div>

              {errors.date && (
                <p className="text-red-300 text-xs">{errors.date}</p>
              )}

              {errors.time && (
                <p className="text-red-300 text-xs">{errors.time}</p>
              )}

              {/* NOTES (OPTIONAL) */}
              <input
                placeholder="Additional Notes (optional)"
                className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 outline-none placeholder:text-primary-foreground/60"
                onChange={(e) => handleChange("notes", e.target.value)}
              />

              {/* PAYMENT NOTICE */}
              <p className="text-xs opacity-70">
                Note: Payments are made at the spa. Card payments are currently
                not available.
              </p>

              {/* SUBMIT */}
              <Button
                type="submit"
                className="mt-6 rounded-full bg-white text-primary hover:bg-white/90 px-8"
              >
                Book My Experience
              </Button>

            </form>

          </Card>

        </div>
      </section>
    </>
  );
}