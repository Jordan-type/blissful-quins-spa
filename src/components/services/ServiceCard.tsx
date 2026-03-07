import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block w-full max-w-[360px] aspect-[3/4.6] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <Image
        src={service.heroImage}
        alt={service.title}
        fill
        className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-sm"
        sizes="(max-width: 768px) 100vw, 360px"
      />

      {/* Default State */}
      <div className="absolute inset-0 flex flex-col justify-end transition-opacity duration-500 ease-out group-hover:opacity-0">
        <div className="bg-[#A21A64]/70 backdrop-blur-[2px] px-6 py-6">
          <p className="text-[#d9cfc4] text-sm font-light tracking-wider mb-1">
            {service.category}
          </p>

          <h3 className="text-[#f5efe8] text-xl md:text-2xl font-serif font-bold leading-tight">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Hover State */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center bg-[#A21A64]/65 backdrop-blur-[3px] opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">

        <p className="text-[#d9cfc4] text-sm font-light tracking-widest uppercase mb-3">
          {service.category}
        </p>

        <h3 className="text-[#f5efe8] text-2xl md:text-3xl font-serif font-bold leading-tight mb-5">
          {service.title}
        </h3>

        <p className="text-[#f5efe8]/80 text-sm mb-3">
          {service.price}
        </p>

        <p className="text-[#ddd2c7] text-sm md:text-base leading-relaxed mb-8 max-w-[300px]">
          {service.short}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col gap-3 w-full max-w-[220px]">

          {/* View Details */}
          <span className="block w-full text-center px-6 py-3 rounded-full bg-[#e8ddd1] text-[#4a3f35] text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#f5efe8] hover:shadow-lg hover:scale-[1.03]">
            View Details
          </span>


          {/* Book Now */}
          <Link
            href={{
              pathname: "/book-now",
              query: { service: service.title },
            }}
            className="w-full"
          >
            <span className="block w-full text-center px-6 py-3 rounded-full bg-white text-[#A21A64] text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#f8f8f8] hover:shadow-lg hover:scale-[1.03]">
              Book This Treatment
            </span>
          </Link>

        </div>

      </div>
    </Link>
  )
}




