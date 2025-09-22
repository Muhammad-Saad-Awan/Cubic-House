// components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/cubichouse.png" // replace with your logo link
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md shadow-sm"
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
