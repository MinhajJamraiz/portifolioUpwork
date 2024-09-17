"use client";

export default function myimageLoader({ src, width, quality }) {
  if (src.startsWith("https://images.pixels.com")) return src;
  return `https:www.example.com/${src}?w=${width}&q=${quality || 75}`;
}
