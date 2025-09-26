"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') { // Check if window is defined
        if (window.scrollY > lastScrollY) {
          setHideHeader(true); // scrolling down → hide header
        } else {
          setHideHeader(false); // scrolling up → show header
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  return (
    <header
      className={`${poppins.className} fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/cubichouse.png"
            alt="The Cubic House Logo"
            width={200}
            height={200}
            priority
            className="object-contain w-20 h-auto sm:w-28 md:w-36 lg:mt-16 md:mt-5 filter invert mix-blend-difference"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-white font-medium tracking-wide uppercase">
          {["Projects", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`${item.toLowerCase()}`}
              className="relative group transition-colors duration-300 hover:text-gray-300"
            >
              <span>{item}</span>
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md shadow-lg"
          >
            <nav className="flex flex-col space-y-4 px-6 py-6 text-white font-medium tracking-wide uppercase">
              {["Projects", "Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="relative group py-2"
                >
                  <span>{item}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;