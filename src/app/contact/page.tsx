// This file is the Contact page for the application
"use client"; // Enables client-side rendering for this page

// Import icons from Heroicons for the info row
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";
// Import dynamic for client-only component loading
import dynamic from "next/dynamic";
// Import Next.js optimized image component
import Image from "next/image";

// Dynamically import the ContactForm component, disabling SSR for client-only rendering
const ContactForm = dynamic(() => import("../../components/ContactForm"), { ssr: false });

// Main ContactPage component
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section: Heading, subheading, and intro text */}
      <section className="bg-[#F8F6F3] border-b border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Section label */}
          <span className="text-red-500 font-semibold">-Contact Us</span>
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-black">We'd Love To Hear From You</h1>
          {/* Introductory text */}
          <p className="text-gray-700 max-w-2xl">Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development</p>
        </div>
      </section>

      {/* Info Row: Address, Support, and Hours cards */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address card */}
          <div className="flex flex-col items-center text-center border p-6 rounded-xl">
            <MapPinIcon className="w-8 h-8 text-black mb-2" />
            <div className="font-bold mb-1">Address</div>
            <div className="text-gray-600 text-sm">329 Queenberry Street, North Melbourne VIC 3051, Australia.</div>
          </div>
          {/* Support card */}
          <div className="flex flex-col items-center text-center border p-6 rounded-xl">
            <PhoneIcon className="w-8 h-8 text-black mb-2" />
            <div className="font-bold mb-1">Support</div>
            <div className="text-gray-600 text-sm">Mobile: 123 456 7890<br />Mail: support@vihep.com</div>
          </div>
          {/* Hours card */}
          <div className="flex flex-col items-center text-center border p-6 rounded-xl">
            <ClockIcon className="w-8 h-8 text-black mb-2" />
            <div className="font-bold mb-1">Hour of operation</div>
            <div className="text-gray-600 text-sm">Monday - Friday: 09:00 - 20:00<br />Sunday & Saturday: 10:30 - 22:00</div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-[#4F46E5] relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image src="/contact/pattern.svg" alt="pattern" fill className="object-cover" />
        </div>
        {/* Main content grid: Contact form and map */}
        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Contact form section */}
          <div className="bg-transparent p-8 flex flex-col justify-center">
            {/* Section label */}
            <span className="text-white font-semibold">-Contact Us</span>
            {/* Section heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Contact Us For Any Query</h2>
            {/* Contact form (client-only) */}
            <ContactForm />
          </div>
          {/* Right: Map embed section */}
          <div className="flex items-center justify-center bg-black/60 rounded-xl p-4">
            <Image src="/contact/map.png" alt="Map" width={400} height={300} className="rounded-lg object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
} 