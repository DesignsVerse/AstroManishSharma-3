"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageType {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryClientProps {
  images: ImageType[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null && selectedIndex >= 0 && selectedIndex < images.length
      ? images[selectedIndex]
      : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <main className="container mx-auto px-4 py-12 pt-40 bg-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              loading={idx > 5 ? "lazy" : "eager"}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={idx <= 5}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium truncate">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in overflow-auto"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition"
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>
            {/* Prev Button */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl bg-gray-800/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition disabled:opacity-50"
              onClick={handlePrev}
              disabled={selectedIndex === 0}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            {/* Next Button */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl bg-gray-800/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition disabled:opacity-50"
              onClick={handleNext}
              disabled={selectedIndex === images.length - 1}
              aria-label="Next image"
            >
              &#8594;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-[80vh] rounded-lg"
              sizes="100vw"
            />
            <p className="text-white text-lg font-medium text-center mt-4">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </main>
  );
} 