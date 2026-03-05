import Image from "next/image"

interface GalleryGridProps {
  images: string[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  if (!images?.length) return null

  return (
    <section className="section">
      <div className="site-container">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt="Spa gallery"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}