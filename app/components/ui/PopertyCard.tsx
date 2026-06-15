"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface Property {
  images: string[];
  price: number;
  location: string;
  type: string;
  category: string;
  description: string;
  status: string;
  progress?: number;
  completionDate?: string;
  datePosted: string;
}

function PropertyCard({ property }: { property: Property }) {
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState(false);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length,
    );
  };
  // helper to calculate days since posted
  const getTimeSincePosted = (datePosted: string | Date) => {
    const postedDate = new Date(datePosted);
    const now = new Date();

    const diffMs = now.getTime() - postedDate.getTime();

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffDays < 30) {
      return {
        value: diffDays,
        unit: "day",
      };
    }

    if (diffDays < 365) {
      return {
        value: diffMonths,
        unit: "month",
      };
    }

    return {
      value: diffYears,
      unit: "year",
    };
  };
  // helper to format posted time
  const formatTimeSincePosted = (datePosted: string | Date) => {
    const { value, unit } = getTimeSincePosted(datePosted);

    const plural = value > 1 ? "s" : "";

    return `Posted ${value} ${unit}${plural} ago`;
  };
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      {/* IMAGE SLIDER */}
      <div className="relative h-56 w-full">
        <img
          src={property.images[index]}
          className="w-full h-full object-cover"
          alt="property"
        />

        {/* arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded cursor-pointer"
        >
          ‹
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded cursor-pointer"
        >
          ›
        </button>

        {/* save button */}
        <button
          onClick={() => setSaved(!saved)}
          className="absolute top-3 right-3 bg-white/80 p-2 rounded-full text-amber-400  hover:bg-white transition cursor-pointer hover:scale-110"
        >
          <Heart
            size={18}
            className={saved ? "fill-amber-500 text-amber-500" : ""}
          />
        </button>

        {/* status badge */}
        <span className="absolute top-3 left-3 bg-[#C9A646] text-white text-xs px-3 py-1 rounded-full">
          {property.status}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-2">
        {/* price */}
        <h2 className="text-xl font-bold text-gray-800">
          KSh {property.price.toLocaleString()}
        </h2>

        {/* location */}
        <p className="text-sm text-gray-500">{property.location}</p>

        {/* days posted */}
        <p className="text-xs text-[#C9A646] font-medium">
          {formatTimeSincePosted(property.datePosted)}
        </p>
        {/* type */}
        <div className="flex gap-2 text-xs">
          <span className="bg-gray-400 px-2 py-1 rounded">{property.type}</span >
          <span className="bg-gray-400 px-2 py-1 rounded">
            {property.category}
          </span>
        </div>
        {/* ongoing progress */}
        {property.status === "ongoing" && (
          <div className="mt-2">
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${property.progress}%` }}
                className="bg-[#C9A646] h-full"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {property.progress}% complete • Est. {property.completionDate}
            </p>
          </div>
        )}

        {/* buttons */}
        <div className="flex gap-2 mt-3">
          <button className="flex-1 bg-[#C9A646] text-white py-2 rounded-lg text-sm cursor-pointer transition hover:scale-105 ">
            View More
          </button>
          <button className="flex-1 border border-[#C9A646] py-2 rounded-lg text-sm text-[#C9A646] cursor-pointer  transition hover:scale-105">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
