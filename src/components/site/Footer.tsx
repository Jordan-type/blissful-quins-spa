import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { cn } from "@/lib/utils";

const socials = [
  { href: "https://www.instagram.com/blissfulquinsspa/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/profile.php?id=61577328142953", label: "Facebook", Icon: Facebook },
  { href: "https://www.tiktok.com/@quinterachieng2", label: "Tiktok", Icon: FaTiktok },
];


export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("mt-20", className)}>
      {/* Newsletter band */}
      <section className="full-bleed bg-primary text-primary-foreground">
        <div className="site-container py-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                Stay Radiant<br />with Blissful Quins
              </h3>
            </div>

            <div className="md:col-span-6">
              <p className="opacity-90 mb-4">
                Sign up to receive exclusive offers, beauty tips, and wellness inspiration.
              </p>

              <form className="flex w-full max-w-xl flex-wrap sm:flex-nowrap gap-3">
                <input
                  className="h-12 w-full rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-5 text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground/40"
                  placeholder="Enter your email"
                />
                <button
                  className="h-12 shrink-0 rounded-full bg-background text-foreground px-6 font-medium hover:bg-background/90"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <section className="bg-secondary">
        <div className="site-container py-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-background grid place-items-center text-primary font-bold">
                BQ
              </div>
              <span className="font-semibold text-primary">Blissful Quins Spa</span>
            </div>
            <p className="text-muted-foreground mt-4 max-w-sm">
              Rooted in wellness, elevated by beauty.
            </p>

            <div className="mt-6 text-sm text-muted-foreground">
              <div className="font-semibold text-primary mb-2">Working Hours</div>
              <div>Monday – Saturday: 9:00am – 9:00pm</div>
              <div>Sunday: Closed</div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-primary">Menu</h4>
            <ul className="mt-4 grid gap-2 text-muted-foreground">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold text-primary">Contact Us</h4>
            <ul className="mt-4 grid gap-2 text-muted-foreground">
              <li>+254 114 123 208</li>
              <li>blisfulquinsspa@gmail.com</li>
              <li>Chaka Rd aside Kilua Apartment, Nairobi, Kenya</li>
            </ul>

            {/* socials pills (optional) */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-full bg-background/60 hover:bg-background/80 border border-border/60 grid place-items-center transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/60">
          <div className="site-container py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-muted-foreground">
            <span>Copyright © {new Date().getFullYear()} Blissful Quins Spa</span>
            <div className="flex gap-5">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}