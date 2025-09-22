"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 px-6 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-12 h-20">
        {/* Logo */}
       {/* Logo */}
<Link href="/" className="flex items-center">
  <Image
    src="/images/cubichouse.png"
    alt="The Cubic House Logo"
    width={200}
    height={200}
    priority
    className="object-contain w-20 h-auto sm:w-28 md:w-44   lg:mt-16 md:mt-5"
  />
</Link>


        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-gray-700 font-medium tracking-wide uppercase">
          <Link href="#projects" className="hover:text-black transition">
            Projects
          </Link>
          <Link href="#services" className="hover:text-black transition">
            Services
          </Link>
          <Link href="#about" className="hover:text-black transition">
            About
          </Link>
          <Link href="#contact" className="hover:text-black transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-6 text-gray-700 font-medium tracking-wide uppercase">
            <Link href="#projects" onClick={toggleMenu} className="hover:text-black">
              Projects
            </Link>
            <Link href="#services" onClick={toggleMenu} className="hover:text-black">
              Services
            </Link>
            <Link href="#about" onClick={toggleMenu} className="hover:text-black">
              About
            </Link>
            <Link href="#contact" onClick={toggleMenu} className="hover:text-black">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
