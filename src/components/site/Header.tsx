import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
      <div className="site-container h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-secondary grid place-items-center text-primary font-bold">
            BQ
          </div>
          <span className="font-semibold tracking-tight">Blissful Quins Spa</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link href="/book-now" className="hidden md:block">
            <Button className="rounded-full px-6">Book Now</Button>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}