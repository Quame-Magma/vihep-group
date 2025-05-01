'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm h-20 flex items-center">
      <div className="container max-w-[1200px] mx-auto flex items-center justify-between px-4 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="Vihep Logo"
            width={80}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`relative ${pathname === '/' ? 'text-[#FF3F4F] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#FF3F4F] after:rounded-full' : 'text-[#111] hover:text-[#FF3F4F] transition'}`}>Home</Link>
          <Link href="/about" className={`text-[#111] hover:text-[#FF3F4F] transition ${pathname.startsWith('/about') ? 'font-bold underline underline-offset-4 decoration-[#FF3F4F]' : ''}`}>About</Link>
          <Link href="/services" className={`text-[#111] hover:text-[#FF3F4F] transition ${pathname.startsWith('/services') ? 'font-bold underline underline-offset-4 decoration-[#FF3F4F]' : ''}`}>Services</Link>
          <Link href="/blog" className={`text-[#111] hover:text-[#FF3F4F] transition ${pathname.startsWith('/blog') ? 'font-bold underline underline-offset-4 decoration-[#FF3F4F]' : ''}`}>Blog</Link>
          <Link href="/careers" className={`text-[#111] hover:text-[#FF3F4F] transition ${pathname.startsWith('/careers') ? 'font-bold underline underline-offset-4 decoration-[#FF3F4F]' : ''}`}>Careers</Link>
        </nav>

        {/* Right: Search + Contact */}
        <div className="flex items-center gap-4">
          <button className="p-2"><svg width="20" height="20" fill="none" stroke="#666" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg></button>
          <Link href="/contact" className="border border-[#111] text-[#111] px-4 py-2 rounded-md text-[14px] font-medium hover:bg-[#FF3F4F] hover:text-white transition flex items-center gap-2">
            Contact Us <span className="ml-1">&rarr;</span>
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow z-50">
          <div className="flex flex-col gap-2 p-4">
            <Link href="/" className={`block px-3 py-2 rounded-md ${pathname === '/' ? 'text-[#FF3F4F] font-bold bg-red-50' : 'text-[#111] hover:bg-gray-50'}`}>Home</Link>
            <Link href="/about" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/about') ? 'text-[#FF3F4F] font-bold bg-red-50' : 'text-[#111] hover:bg-gray-50'}`}>About</Link>
            <Link href="/services" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/services') ? 'text-[#FF3F4F] font-bold bg-red-50' : 'text-[#111] hover:bg-gray-50'}`}>Services</Link>
            <Link href="/blog" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/blog') ? 'text-[#FF3F4F] font-bold bg-red-50' : 'text-[#111] hover:bg-gray-50'}`}>Blog</Link>
            <Link href="/careers" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/careers') ? 'text-[#FF3F4F] font-bold bg-red-50' : 'text-[#111] hover:bg-gray-50'}`}>Careers</Link>
            <Link href="/contact" className="w-full mt-4 bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center gap-2">
              Contact Us <span className="ml-1">&rarr;</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 