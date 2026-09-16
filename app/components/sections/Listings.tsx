"use client";

import { properties } from "@/public/assets/properties";
import { MapPin } from "lucide-react";
import React, { useMemo, useState } from "react";
import PropertyCard from "../ui/PopertyCard";

const propertiesPerPage = 8;

function Listings() {
  const [location, setLocation] = useState("");
  const [transaction, setTransaction] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // NOTE: category holds "For Sale" / "For Rent" / "For Lease", so we match
  // with `.includes()` rather than exact equality against "sale"/"rent"/"lease".
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (location.trim()) {
      const query = location.trim().toLowerCase();
      result = result.filter((p) => p.location?.toLowerCase().includes(query));
    }
    if (transaction) {
      result = result.filter((p) => p.category?.toLowerCase().includes(transaction));
    }
    if (propertyType) {
      result = result.filter((p) => p.type?.toLowerCase() === propertyType);
    }
    if (sortPrice === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [location, transaction, propertyType, sortPrice]);

  const totalPages = Math.max(1, Math.ceil(filteredProperties.length / propertiesPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const indexOfFirst = (safePage - 1) * propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirst, indexOfFirst + propertiesPerPage);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  return (
    <div id="listings" className="flex flex-col items-center justify-center scroll-mt-4">
      <div className="w-full text-center flex flex-col gap-6 bg-[#C9A646] py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Browse Our Listings
        </h1>

        <p className="max-w-2xl mx-auto text-white/90">
          Explore listings for sale and rent. From cozy studios to luxury villas
          — your next home is waiting.
        </p>

        {/* Search bar */}
        <div
          className="w-full max-w-4xl mx-auto bg-white rounded-2xl p-4 shadow-lg
        flex flex-col md:flex-row gap-4 items-center"
        >
          {/* Location */}
          <div className="relative w-full md:w-1/3">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Location (e.g. Nairobi, Westlands)"
              aria-label="Location"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100
              outline-none focus:ring-2 focus:ring-[#C9A646] transition placeholder:text-gray-500 text-gray-900"
            />
          </div>

          {/* Transaction */}
          <select
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
            aria-label="Transaction type"
            className="w-full md:w-1/4 px-4 py-3 rounded-lg bg-gray-100 outline-none text-gray-900"
          >
            <option value="">All Transactions</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
          </select>

          {/* Property Type */}
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            aria-label="Property type"
            className="w-full md:w-1/4 px-4 py-3 rounded-lg bg-gray-100 outline-none text-gray-900"
          >
            <option value="">All Property Types</option>
            <option value="apartment">Apartment</option>
            <option value="mansion">Mansion</option>
            <option value="villa">Villa</option>
            <option value="studio">Studio</option>
            <option value="land">Land</option>
          </select>

          {/* Price Sort */}
          <select
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
            aria-label="Sort by price"
            className="w-full md:w-1/4 px-4 py-3 rounded-lg bg-gray-100 outline-none text-gray-900"
          >
            <option value="">No Sorting</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>

          {/* Search Button */}
          <button
            type="button"
            onClick={handleSearch}
            className="w-full md:w-auto bg-[#C9A646] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>

      {/* Property Listings */}
      {currentProperties.length > 0 ? (
        <div className="w-full max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={{
                ...property,
                images: property.images.filter((img) => img !== undefined),
              }}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 px-4 text-center text-gray-500">
          <p className="text-lg font-medium">No properties match your search.</p>
          <p className="mt-1 text-sm">Try a different location or clear a filter.</p>
        </div>
      )}

      <hr className="border-gray-300 w-full" />

      {totalPages > 1 && (
        <div className="flex gap-5 mt-6 p-4 bg-gray-100 rounded-lg text-gray-700 mb-2">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={safePage === 1}
            className="disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`${safePage === i + 1 ? "bg-[#C9A646] text-white" : "bg-white"} px-3 py-1 rounded cursor-pointer`}
            >
              {i + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={safePage === totalPages}
            className="disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Listings;
