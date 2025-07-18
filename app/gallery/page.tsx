import Image from "next/image";
import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

// Define a type for the image object
interface ImageType {
  src: string;
  alt: string;
  caption: string;
}

export default function GalleryPage() {
  // Dynamically read all images from public/gallery
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const files = fs.readdirSync(galleryDir);
  // Filter only image files and create image objects with generated captions
  const images: ImageType[] = files
    .filter((file) =>
      [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"].some((ext) =>
        file.toLowerCase().endsWith(ext)
      )
    )
    .map((file) => ({
      src: `/gallery/${file}`,
      alt: `Gallery image ${file}`,
      caption: file
        .replace(/\.[^/.]+$/, "") // Remove file extension
        .replace(/[-_]/g, " ") // Replace hyphens/underscores with spaces
        .replace(/\b\w/g, (c) => c.toUpperCase()), // Capitalize words
    }));

  return <GalleryClient images={images} />;
}