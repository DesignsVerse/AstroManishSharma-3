import Image from "next/image";
import fs from "fs";
import path from "path";

export default function GalleryPage() {
  // Static list of images for now; can be automated if needed
  const images = [
    "/images/about.jpg",
    "/images/temple.jpg",
    "/images/Maa-Baglamukhi.jpg",
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>
        ))}
      </div>
    </main>
  );
} 