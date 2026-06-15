"use client";

import Link from "next/dist/client/link";
import { useState } from "react";

export default function SignupForm() {
  const [selectedRole, setSelectedRole] = useState("client");

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...form,
      role: selectedRole,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4 py-8 mt-8">
      
      {/* Main Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">
        
        {/* Left Section */}
        <div className="hidden md:flex relative">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
            alt="Property"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-10">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Start your journey with House Hunt
            </h1>

            <p className="text-gray-200 mt-4 text-sm leading-6">
              Whether you're searching for your next home or listing
              properties for clients, House Hunt gives you the platform
              to connect, explore, and grow.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-6 sm:p-10 flex flex-col justify-center">
          
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Join House Hunt and start exploring properties today.
            </p>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">
              I want to join as:
            </p>

            <div className="grid grid-cols-2 gap-3">
              
              {/* Client/Tenant */}
              <button
                type="button"
                onClick={() => setSelectedRole("client")}
                className={`border rounded-2xl p-4 text-left transition ${
                  selectedRole === "client"
                    ? "border-[#C9A646] bg-[#C9A646]/10"
                    : "border-gray-300 hover:border-[#C9A646]"
                }`}
              >
                <h3 className="font-semibold text-gray-800">
                  Client / Tenant
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Search, save and enquire about properties.
                </p>
              </button>

              {/* Agent/Landlord */}
              <button
                type="button"
                onClick={() => setSelectedRole("agent")}
                className={`border rounded-2xl p-4 text-left transition ${
                  selectedRole === "agent"
                    ? "border-[#C9A646] bg-[#C9A646]/10"
                    : "border-gray-300 hover:border-[#C9A646]"
                }`}
              >
                <h3 className="font-semibold text-gray-800">
                  Agent / Landlord
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Post listings and manage property enquiries.
                </p>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Full Name
              </label>

              <input
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                value={form.fullname}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#C9A646]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#C9A646]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#C9A646]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#C9A646]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#C9A646] hover:bg-[#b89232] text-white py-3 rounded-xl font-semibold transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#C9A646] font-medium cursor-pointer hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}