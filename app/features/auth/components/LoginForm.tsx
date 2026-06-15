"use client";

import { useState } from "react";         
import Link from "next/dist/client/link";
export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4 py-8">
      
      {/* Main Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">
        
        {/* Left Side - Property Image Section */}
        

        {/* Right Side - Form */}
        <div className="p-6 sm:p-10 flex flex-col justify-center">
          
          {/* Logo / Brand */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              House Hunt
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Welcome back. Please login to continue.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
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
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#C9A646]"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[#C9A646] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#C9A646] hover:bg-[#b89232] text-white py-3 rounded-xl font-semibold transition"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-[#C9A646] font-medium cursor-pointer hover:underline">
              Create account
            </Link>
          </p>
        </div>
        <div className="hidden md:flex relative">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="House"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Find your dream home with House Hunt
            </h1>

            <p className="text-gray-200 mt-4 text-sm">
              Explore properties, connect with agents, and discover spaces that
              feel like home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}