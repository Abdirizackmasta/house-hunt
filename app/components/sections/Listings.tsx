"use client";

import { properties } from "@/public/assets/properties";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import PropertyCard from "../ui/PopertyCard";

function Listings() {
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 8;
  const indexOfFirst = (currentPage - 1) * propertiesPerPage;
  const indexOfLast = indexOfFirst + propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full text-center flex flex-col gap-6 bg-[#C9A646] py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Find Your Dream Home
        </h1>

        <p className="max-w-2xl mx-auto text-white/90">
          Explore listings for sale and rent. From cozy studios to luxury villas
          — your next home is waiting.
        </p>

        {/* 🔥 Search Bar */}
        <div
          className="w-full max-w-4xl mx-auto bg-white rounded-2xl p-4 shadow-lg
        flex flex-col md:flex-row gap-4 items-center"
        >
          {/* Location */}
          <div className="relative w-full md:w-1/3">
            {/* Icon */}
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            {/* Input */}
            <input
              type="text"
              placeholder="Location (e.g. Nairobi, Westlands)"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 
              outline-none focus:ring-2 focus:ring-[#C9A646] transition placeholder:text-gray-500 text-gray-900"
            />
          </div>

          {/* Transaction */}
          <select className="w-full md:w-1/4 px-4 py-3 rounded-lg bg-gray-100 outline-none text-gray-900">
            <option value="" className="text-gray-500">
              Transaction
            </option>
            <option value="sale" className="text-gray-700">
              Sale
            </option>
            <option value="rent" className="text-gray-700">
              Rent
            </option>
            <option value="lease" className="text-gray-700">
              Lease
            </option>
          </select>

          {/* Property Type */}
          <select className="w-full md:w-1/4 px-4 py-3 rounded-lg bg-gray-100 outline-none text-gray-900">
            <option value="" className="text-gray-500">
              Property Type
            </option>
            <option value="apartment" className="text-gray-700">
              Apartment
            </option>
            <option value="mansion" className="text-gray-700">
              Mansion
            </option>
            <option value="villa" className="text-gray-700">
              Villa
            </option>
            <option value="studio" className="text-gray-700">
              Studio
            </option>
            <option value="land" className="text-gray-700">
              Land
            </option>
          </select>

          {/* Price Sort */}
          <select className="w-full md:w-1/4 px-4 py-3 rounded-lg bg-gray-100 outline-none text-gray-900">
            <option value="" className="text-gray-500">
              Sort by Price
            </option>
            <option value="low" className="text-gray-700">
              Low → High
            </option>
            <option value="high" className="text-gray-700">
              High → Low
            </option>
          </select>

          {/* 🔥 Search Button */}
          <button className="w-full md:w-auto bg-[#C9A646] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">
            Search
          </button>
        </div>
      </div>
      {/* Property Listings CARDS */}
      <div className="w-full max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 🔥 Map through properties and render PropertyCard */}
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={{ ...property, images: property.images.filter((img) => img !== undefined) }} />
        ))}
      </div>
      <hr className="border-gray-300" />
      <div className="flex gap-5 mt-6 p-4 bg-gray-100 rounded-lg text-gray-700 mb-2">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className="cursor-pointer">
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={` ${currentPage === i + 1 ? "bg-[#C9A646] text-white" : "bg-white"} px-3 py-1 rounded cursor-pointer`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Listings;
