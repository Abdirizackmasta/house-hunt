import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaMapPin } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { div } from "framer-motion/client";
function Page() {
  return (
    <div className="font-sans bg-gray-300 py-16 ">
      <div className="max-w-7xl mx-auto px-6 mt-8">
        {/* Heading */}
        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-[#C9A646]">
            Contact Us
          </h1>

          <p className="text-lg text-gray-600">Get in touch with our experts</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Form */}
          <form className="flex-1 bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#C9A646] mb-6">
              Send Us a Message
            </h2>

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="
                text-gray-700
              w-full px-4 py-3
              border border-gray-300
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-[#C9A646]
              transition-all duration-300
            "
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                className="
                text-gray-700
              w-full px-4 py-3
              border border-gray-300
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-[#C9A646]
              transition-all duration-300
            "
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Your Message"
                className="]
                text-gray-700 
              w-full px-4 py-3
              border border-gray-300
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-[#C9A646]
              transition-all duration-300
              resize-none
            "
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
            w-full py-3
            bg-[#C9A646]
            text-white
            rounded-lg
            font-semibold
            hover:scale-[1.02]
            transition-all duration-300
          "
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#C9A646] mb-6">
              Our Address
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 border border-gray-200 p-4 rounded-xl hover:shadow-sm transition-all duration-300">
                <BiPhoneCall className="text-[#C9A646] text-xl" />
                <span className="text-gray-600">0712345678</span>
              </div>

              <div className="flex items-center gap-3 border border-gray-200 p-4 rounded-xl hover:shadow-sm transition-all duration-300">
                <CiMail className="text-[#C9A646] text-xl" />
                <span className="text-gray-600">info@company.com</span>
              </div>

              <div className="flex items-center gap-3 border border-gray-200 p-4 rounded-xl hover:shadow-sm transition-all duration-300">
                <FaMapPin className="text-[#C9A646] text-xl" />
                <span className="text-gray-600">
                  123 Main Street, Anytown, USA
                </span>
              </div>

              <div className="flex items-start gap-3 border border-gray-200 p-4 rounded-xl hover:shadow-sm transition-all duration-300">
                <FaCalendarAlt className="text-[#C9A646] text-xl mt-1" />

                <span className="text-gray-600 leading-relaxed">
                  Monday — Friday: 8:00 AM — 5:00 PM
                  <br />
                  Saturday: 9:00 AM — 1:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 w-full h-[400px] md:h-[500px]  overflow-hidden shadow-md mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.83411410498!2d36.84654907568994!3d-1.272661935612878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17585a0079e1%3A0x8243f6c7d5cef557!2sEastleigh%20Social%20Hall%20-shop%20No.%20G36!5e0!3m2!1sen!2ske!4v1778490446610!5m2!1sen!2ske"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Page;
