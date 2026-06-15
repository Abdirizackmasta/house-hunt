import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 ">
      <div className="flex flex-col md:flex-row justify-around items-start">
        <div className="mb-4 md:mb-0 ">
          <h1 className="text-xl font-extrabold mb-4 text-[#C9A646]">
            House Hunt
          </h1>
          <div className="mt-2 space-x-2">
            <FaFacebookF className="inline-block  border border-[#C9A646] text-lg h-8 w-8 p-2 hover:bg-[#C9A646] hover:text-black cursor-pointer transition duration-300  " />
            <FaInstagram className="inline-block  border border-[#C9A646] text-lg h-8 w-8 p-2 hover:bg-[#C9A646] hover:text-black cursor-pointer transition duration-300" />
            <FaLinkedinIn className="inline-block  border border-[#C9A646] text-lg h-8 w-8 p-2 hover:bg-[#C9A646] hover:text-black cursor-pointer transition duration-300" />
            <TbPhoneCall className="inline-block  border border-[#C9A646] text-lg h-8 w-8 p-2 hover:bg-[#C9A646] hover:text-black cursor-pointer transition duration-300" />
            <BsTwitterX className="inline-block  border border-[#C9A646] text-lg h-8 w-8 p-2 hover:bg-[#C9A646] hover:text-black cursor-pointer transition duration-300" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-extrabold mb-4 text-[#C9A646]">
            Company
          </h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link 
                href="/"
            className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0
                after:bottom-[-2px]
                after:h-[2px]
                after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
              href="/about"
          className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
              href="/careers"
          className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 
                after:bottom-[-2px]
                after:h-[2px]
                 after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                Careers
              </Link>
            </li>
            <li>
              <Link 
              href="/services"
           className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                 after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                Services
              </Link>
            </li>
            <li 
              className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                 after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
            >
              <Link href="/contact">Get in Touch</Link>
            </li>
            <li
              className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                 after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
            >
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-extrabold mb-4 text-[#C9A646]">
            Explore
          </h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/buy"
              className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                 after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                Buy
              </Link>
            </li>
            <li>
              <Link href="/rent" 
             className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                 after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                Rent
              </Link>
            </li>
            <li>
              <Link href="/sell" 
            className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                 after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                Sell
              </Link>
            </li>
            <li>
              <Link href="/commercial" 
             className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                 after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                Commercial
              </Link>
            </li>
            <li>
              <Link href="/residential" 
             className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                Residential
              </Link>
            </li>
            <li>
              <Link href="/news" 
             className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
              >
                News
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0 flex flex-col gap-4">
          <h1 className="text-xl font-extrabold mb-4 text-[#C9A646]">
            Contact Us
          </h1>
          <Link
            href="https://www.google.com/maps/place/123+Main+Street,+Anytown,+USA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLocationOn className="inline-block mr-2 text-[#dfb031] text-xl" />
            <span>123 Main Street, Anytown, USA</span>
          </Link>
          <Link href="mailto:info@househunt.com">
            <CiMail className="inline-block mr-2 text-[#dfb031] text-xl" />
            <span
               className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "  
            >
              Email: info@househunt.com
            </span>
          </Link>
          <Link href="tel:(123) 456-7890">
            <IoCallOutline className="inline-block mr-2 text-[#dfb031] text-xl" />
            <span 
               className="
                relative inline-block
                transition-transform duration-300
                hover:text-[#C9A646] 
                after:content-['']
                after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px]
                after:scale-x-0
                after:w-full
                after:bg-[#C9A646]
                after:origin-top
                after:transition-transform after:duration-300
                hover:after:scale-x-100
                "
            >
              Phone: (123) 456-7890
            </span>
          </Link>
        </div>
      </div>
      <hr className="border-gray-700 my-6" />
      <p className="text-center text-gray-400">
        &copy; {new Date().getFullYear()} House Hunt. All rights reserved.
      </p>
    </footer>
  );
}


