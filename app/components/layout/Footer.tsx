import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";

// Shared animated-underline style for every footer link, so the effect
// only has to be defined once instead of copy-pasted per link.
const navLinkClasses =
  "relative inline-block transition-transform duration-300 hover:text-[#C9A646] " +
  "after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] " +
  "after:w-full after:origin-top after:scale-x-0 after:bg-[#C9A646] " +
  "after:transition-transform after:duration-300 hover:after:scale-x-100";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Services", href: "/services" },
  { label: "Get in Touch", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const exploreLinks = [
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "Commercial", href: "/commercial" },
  { label: "Residential", href: "/residential" },
  { label: "News", href: "/news" },
];

// Placeholders — replace with House Hunt's real profile URLs.
const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com/househunt", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/househunt", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/househunt", label: "LinkedIn" },
  { icon: BsTwitterX, href: "https://x.com/househunt", label: "X (Twitter)" },
];

function FooterNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={navLinkClasses}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1B1815] text-white p-8">
      <div className="flex flex-col md:flex-row justify-around items-start gap-10 md:gap-4">
        {/* Brand + social */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-extrabold mb-4 text-[#C9A646]">House Hunt</h1>
          <div className="mt-2 flex gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center border border-[#C9A646] text-lg h-8 w-8 p-2 hover:bg-[#C9A646] hover:text-black cursor-pointer transition duration-300"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Company links */}
        <div>
          <h1 className="text-xl font-extrabold mb-4 text-[#C9A646]">Company</h1>
          <ul className="flex flex-col gap-2">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <FooterNavLink href={link.href}>{link.label}</FooterNavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore links */}
        <div>
          <h1 className="text-xl font-extrabold mb-4 text-[#C9A646]">Explore</h1>
          <ul className="flex flex-col gap-2">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <FooterNavLink href={link.href}>{link.label}</FooterNavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="mb-4 md:mb-0 flex flex-col gap-4">
          <h1 className="text-xl font-extrabold mb-4 text-[#C9A646]">Contact Us</h1>

          <Link
            href="https://www.google.com/maps/place/Westlands,+Nairobi,+Kenya"
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClasses}
          >
            <CiLocationOn className="inline-block mr-2 text-[#C9A646] text-xl" aria-hidden="true" />
            Westlands, Nairobi, Kenya
          </Link>

          <Link href="mailto:info@househunt.com" className={navLinkClasses}>
            <CiMail className="inline-block mr-2 text-[#C9A646] text-xl" aria-hidden="true" />
            info@househunt.com
          </Link>

          <Link href="tel:+254700000000" className={navLinkClasses}>
            <IoCallOutline className="inline-block mr-2 text-[#C9A646] text-xl" aria-hidden="true" />
            +254 700 000 000
          </Link>
        </div>
      </div>

      <hr className="border-white/10 my-6" />
      <p className="text-center text-gray-400">
        &copy; {new Date().getFullYear()} House Hunt. All rights reserved.
      </p>
    </footer>
  );
}
