// This file is the Services page for the application
'use client'; // Enables client-side rendering for this page

// Import Next.js optimized image component
import Image from 'next/image';
// Import Next.js Link component for navigation
import Link from 'next/link';
// Import our custom motion components with proper typing
import { motion, fadeIn, scaleIn } from '../../components/motion';
import React from 'react';

// Service card type definition
type ServiceCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
};

// Services data
const services: ServiceCard[] = [
  {
    title: "Web Development",
    description: "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    link: "/services/web-development"
  },
  {
    title: "Mobile Development",
    description: "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    link: "/services/mobile-development"
  },
  {
    title: "UI/UX Design",
    description: "Build the product you need on time with an experienced team that uses a clear and effective design process.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    link: "/services/ui-ux-design"
  },
  {
    title: "Cloud Services",
    description: "We're so excited about our new Learning & Development programs where people…",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    link: "/services/cloud-services"
  },
  {
    title: "Hosting Services",
    description: "From the basics, including health and life insurance, and retirement and savings.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    link: "/services/hosting-services"
  },
  {
    title: "SEO & Marketing",
    description: "Our customers get solutions and business opportunities instead of just projects.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    link: "/services/seo-marketing"
  }
];

// Array of pricing plans for the pricing section
const pricing = [
  {
    name: 'Starter',
    price: 8,
    color: 'bg-white text-black',
    features: [
      '3 Social Media Account',
      'Free Platform Access',
      '24/7 Customer Support',
    ],
    button: 'border-black text-black',
  },
  {
    name: 'Basic',
    price: 40,
    color: 'bg-black text-white',
    features: [
      '3 Social Media Account',
      'Free Platform Access',
      '24/7 Customer Support',
    ],
    button: 'border-white text-white',
  },
  {
    name: 'Premium',
    price: 120,
    color: 'bg-red-500 text-white',
    features: [
      '3 Social Media Account',
      'Free Platform Access',
      '24/7 Customer Support',
    ],
    button: 'border-white text-white',
  },
];

// Main Services page component
export default function Services() {
  return (
    <main className="min-h-screen bg-[#FAF9F8] font-inter">
      {/* Hero Section */}
      <section className="pt-[100px] pb-[80px] bg-[#FAF9F8]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-[36px] font-bold text-[#111]">We Provide The Best Services</h2>
                <div className="relative inline-block">
                  <h1 className="text-[36px] font-bold text-[#111]">
                    To Our Customers
                  </h1>
                  {/* Red underline */}
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#FF3F4F]" />
                </div>
              </div>
              <p className="text-[16px] text-[#666666] max-w-[500px]">
                We offer some special services through which you can easily complete the marketing work on social media. Which helps increase your lead and sales.
              </p>
              {/* Doodle Arrow */}
              <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="#111111">
                <path d="M20 30 Q50 80 80 50" strokeWidth="2" />
              </svg>
            </div>
            {/* Right Column */}
            <div className="relative">
              {/* Orange rectangles behind image */}
              <div className="absolute -bottom-2 -left-2 w-full h-full bg-[#FF8243] rounded-lg" />
              <div className="absolute right-0 top-0 w-full h-full border-2 border-[#FF8243] rounded-lg" />
              {/* Main image */}
              <div className="relative z-10 rounded-lg border border-[#111] overflow-hidden">
                <Image
                  src="/assets/images/pexels-4.jpg"
                  alt="Team working"
                  width={600}
                  height={400}
                  className="w-full grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-[40px] pb-[80px] bg-[#FAF9F8]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link 
                key={idx}
                href={service.link}
                className="bg-[#111111] rounded-lg p-6 h-full hover:bg-[#222] transition-colors duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-3">
                    {service.icon}
                  </div>
                  {/* Title */}
                  <h3 className="text-[18px] font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[14px] text-[#CCCCCC] leading-[1.5]">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process Section: Description of the company's process */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Process image with scale-in animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="relative"
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/process.jpg" alt="Working Process" fill className="object-cover" />
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-white bg-white/80 hover:bg-white transition">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#000" strokeWidth="2"/><polygon points="13,11 22,16 13,21" fill="#000"/></svg>
                </span>
              </button>
            </div>
          </motion.div>
          {/* Right: Process description with fade-in animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <span className="text-red-500 font-semibold">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black">That&apos;s Our Cool Working Process</h2>
            <p className="text-gray-600">Vihep is the partner of choice for many of the world&apos;s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.<br/><br/>Technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
            <button className="mt-4 px-6 py-2 border text-[#111] rounded-full hover:bg-gray-100 transition font-medium flex items-center gap-2">
              {/* Button text and icon */}
              Learn More
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section: List of pricing plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">Our Pricing Plans</h2>
          {/* Pricing grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className={`${plan.color} rounded-xl shadow-lg p-8 flex flex-col items-center gap-6`}
              >
                {/* Plan name */}
                <div className="text-xl font-bold mb-2">{plan.name}</div>
                {/* Plan price */}
                <div className="text-4xl font-bold mb-4">${plan.price}<span className="text-lg font-normal">/mo</span></div>
                {/* Plan features */}
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full inline-block" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Plan button */}
                <button className={`mt-auto px-6 py-2 border rounded-full font-medium transition ${plan.button} hover:bg-black/10`}>Choose Plan</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 