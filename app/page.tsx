"use client";
import Hero from "./components/sections/Hero";
import Listings from "./components/sections/Listings";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Listings />
    </div>
  );
}
