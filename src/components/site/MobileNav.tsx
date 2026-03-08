"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden rounded-2xl">
          ☰
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px]">
        <SheetHeader>
          <SheetTitle className="text-primary">Blissful Quins Spa</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 bg-secondary text-foreground hover:bg-accent transition"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/book-now" className="mt-2">
            <Button className="w-full rounded-2xl">Book Now</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}