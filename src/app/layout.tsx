import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import BookAppointmentFloatingButton from "@/components/BookAppointmentFloatingButton";

// fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], });

export const metadata = {
  title: "Blissful Quins Spa | Luxury Spa in Nairobi",
  description: "Rooted in wellness, elevated by beauty. Experience luxury spa treatments, massages, and facials at Blissful Quins Spa in Nairobi.",
  applicationName: "blissful-quins-spa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} ${geistMono.variable} antialiased`}>
          <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
              {children}

            </main>
              <Footer />
              {/* Floating booking buttons */}
              <BookAppointmentFloatingButton />
              <WhatsAppFloatingButton/>
          </div>
      </body>
    </html>
  );
}