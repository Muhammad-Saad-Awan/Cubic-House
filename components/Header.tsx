"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Hide only navigation on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideNav(true); // scrolling down
      } else {
        setHideNav(false); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${montserrat.className} fixed top-0 left-0 w-full z-50 bg-transparent`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
        {/* Logo - always visible */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/cubichouse.png"
            alt="The Cubic House Logo"
            width={200}
            height={200}
            priority
            className="object-contain w-20 h-auto sm:w-28 md:w-44 lg:mt-16 md:mt-5 filter invert"
          />
        </Link>

        {/* Desktop Nav - hides on scroll */}
        <nav
          className={`hidden md:flex space-x-10 text-white font-semibold tracking-wide uppercase transition-transform duration-500 ${
            hideNav ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          {["Projects", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-colors duration-300 group-hover:text-gray-200">
                {item}
              </span>
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon - hides on scroll */}
        <button
          className={`md:hidden text-white transition-transform duration-500 ${
            hideNav ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-700 shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-6 text-white font-medium tracking-wide uppercase">
            {["Projects", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-gray-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
