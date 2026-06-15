"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const menuRef = useRef(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // handle scroll shrink
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menus on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      animate={{
        padding: scrolled ? "10px 20px" : "16px 24px",
        scale: scrolled ? 0.97 : 1,
        backgroundColor: scrolled ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)",
      }}
      transition={{ duration: 0.25 }}
      className="fixed top-2 left-0 right-0 mx-4 z-50 rounded-full
      backdrop-blur-xl border border-white/20 text-white flex items-center justify-between
      shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
    >
      {/* Logo */}
      <Link href="/">
        <h1 className="font-bold tracking-wide">House Hunt</h1>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 font-medium">
        {links.map((link) => (
          <li key={link.href} className="relative">
            <Link
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-[#C9A646]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>

            {pathname === link.href && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#C9A646]"
              />
            )}
          </li>
        ))}
      </ul>

      {/* Avatar */}
      <div className="hidden md:block relative">
        <Link href="/login" className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition cursor-pointer   ">
          <User size={18} />
          
            Login
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setOpen((prev) => !prev)} className="md:hidden">
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="absolute top-16 left-0 w-full bg-[rgba(0,0,0,0.8)] rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${    
                  pathname === link.href ? "text-[#C9A646]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/login">Login</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}


