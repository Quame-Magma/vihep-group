import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { href: 'https://facebook.com', icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4V7a3 3 0 0 1 3-3h3" /></svg>
  ) },
  { href: 'https://twitter.com', icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03A12.94 12.94 0 0 1 3.1.67a4.52 4.52 0 0 0-.61 2.28c0 1.57.8 2.96 2.02 3.77A4.48 4.48 0 0 1 2 5.13v.06c0 2.2 1.56 4.03 3.64 4.45a4.52 4.52 0 0 1-2.04.08c.57 1.78 2.23 3.08 4.2 3.12A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59z" /></svg>
  ) },
  { href: 'https://linkedin.com', icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
  ) },
];

const companyLinks = [
  { name: 'Products', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Help Center', href: '#' },
];

const instagramImages = [
  '/images/insta1.jpg',
  '/images/insta2.jpg',
  '/images/insta3.jpg',
  '/images/insta4.jpg',
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#111] text-[#666] pt-[100px] pb-[40px]">
      {/* Newsletter Bar */}
      <div className="w-full px-4 mb-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-b border-[#222]">
          <div className="text-white text-[18px] font-bold">Keep Yourself Up to Date.</div>
          <form className="flex w-full md:w-auto items-center">
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#222] text-white placeholder-white border border-[#444] rounded-l-[6px] px-4 py-2 focus:outline-none w-full md:w-[260px]"
            />
            <button
              type="submit"
              className="bg-[#FF3F4F] text-white px-6 py-2 rounded-r-[6px] font-semibold hover:bg-[#e62e3e] transition"
            >
              Subscribe
            </button>
          </form>
          {/* Hand-drawn arrow and note */}
          <div className="hidden md:flex flex-col items-center ml-4">
            <svg width="60" height="24" viewBox="0 0 60 24"><path d="M5 20 Q30 0 55 20" stroke="#fff" strokeWidth="2" fill="none"/><text x="30" y="23" textAnchor="middle" fontSize="10" fill="#fff">No Spam, We Promise!</text></svg>
          </div>
          {/* On mobile, show note below */}
        </div>
        <div className="md:hidden flex justify-end mt-2">
          <span className="text-white text-xs flex items-center gap-1">
            <svg width="32" height="12" viewBox="0 0 32 12"><path d="M2 10 Q16 0 30 10" stroke="#fff" strokeWidth="1.5" fill="none"/></svg>
            No Spam, We Promise!
          </span>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[40px] px-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/assets/images/logo.png" alt="Vihep Logo" width={40} height={40} />
            <span className="text-[18px] font-bold text-white">Vihep</span>
          </div>
          <p className="text-[14px] text-[#666] mb-6">We work with a passion of taking challenges and creating new ones in advertising sector.</p>
          <div className="flex gap-4">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF3F4F] transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Company Links */}
        <div>
          <div className="text-[16px] font-bold text-white mb-4">Company</div>
          <ul className="space-y-2">
            {companyLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="text-[14px] text-[#666] hover:text-[#FF3F4F] transition leading-8">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Instagram Preview */}
        <div>
          <div className="text-[16px] font-bold text-white mb-4">Instagram</div>
          <div className="grid grid-cols-2 gap-2">
            {instagramImages.map((src, idx) => (
              <div key={idx} className="w-[60px] h-[60px] rounded-[4px] overflow-hidden bg-[#222]">
                <Image src={src} alt={`Instagram ${idx + 1}`} width={60} height={60} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#333] mt-10 pt-4 text-center text-[12px] text-[#666] h-10 flex items-center justify-center">
        © 2022 fenet.com All rights reserved. •{' '}
        <Link href="#" className="hover:text-[#FF3F4F] underline">Terms & Conditions</Link> •{' '}
        <Link href="#" className="hover:text-[#FF3F4F] underline">Privacy Policy</Link>
      </div>
    </footer>
  );
} 