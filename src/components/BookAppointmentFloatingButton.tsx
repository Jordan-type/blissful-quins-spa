"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";

export default function BookAppointmentFloatingButton() {
  return (
    <Link
      href="/book-now"
      className="fixed bottom-20 right-6 z-50 flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-full shadow-xl transition-all"
    >
      <Calendar size={20} />
      <span className="hidden md:inline">Book Now</span>
    </Link>
  );
}