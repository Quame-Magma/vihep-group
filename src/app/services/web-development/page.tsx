// This file is the Web Development Service Details page for the application
'use client'; // Enables client-side rendering for this page

// Import Next.js optimized image component
import Image from 'next/image';
// Import framer-motion for animations
import { motion } from 'framer-motion';
// Import React's useState hook for managing state
import { useState } from 'react';
import Link from 'next/link';

// Animation variants for fade-in effect
const fadeIn = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
  visible: { opacity: 1, y: 0 }  // Animate to visible and original position
};
// Animation variants for scale-in effect
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 }, // Start hidden and scaled down
  visible: { opacity: 1, scale: 1 }   // Animate to visible and normal scale
};

// Types
interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceCategory {
  name: string;
  description: string;
  href: string;
}

interface ServiceDetail {
  title: string;
  description: string;
  icon?: string;
}

// Data
const faqItems: FAQItem[] = [
  {
    question: "What technologies do you use for web development?",
    answer: "We utilize modern technologies like React, Next.js, Node.js, and other cutting-edge tools to build robust and scalable web applications. Our tech stack is carefully chosen based on project requirements and industry best practices."
  },
  {
    question: "How long does it typically take to complete a web development project?",
    answer: "Project timelines vary depending on complexity and requirements. A simple website might take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during project planning."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally. This includes regular updates, security patches, and technical support."
  },
  {
    question: "Can you help with both frontend and backend development?",
    answer: "Absolutely! We provide full-stack development services, handling both frontend and backend development. Our team has expertise in creating seamless user interfaces and robust server-side solutions."
  }
];

const serviceCategories: ServiceCategory[] = [
  {
    name: "Web Development",
    description: "Modern and responsive web applications",
    href: "/services/web-development"
  },
  {
    name: "SEO & Marketing",
    description: "Digital marketing and search optimization",
    href: "/services/seo-marketing"
  },
  {
    name: "UI/UX Design",
    description: "User-centered design solutions",
    href: "/services/ui-ux-design"
  },
  {
    name: "Mobile Development",
    description: "Native and cross-platform mobile apps",
    href: "/services/mobile-development"
  },
  {
    name: "Cloud Services",
    description: "Scalable cloud solutions",
    href: "/services/cloud-services"
  },
  {
    name: "Hosting Services",
    description: "Reliable web hosting solutions",
    href: "/services/hosting-services"
  }
];

const serviceDetails: ServiceDetail[] = [
  {
    title: "Custom Web Development",
    description: "Tailored solutions to meet your specific business needs and requirements.",
  },
  {
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website works perfectly on all devices.",
  },
  {
    title: "Performance Optimization",
    description: "Fast loading times and optimal performance for better user experience.",
  },
  {
    title: "Security Implementation",
    description: "Robust security measures to protect your web applications and data.",
  }
];

// Update categories data structure
const categories = [
  { name: "Web Development", selected: true },
  { name: "Mobile Development", selected: false },
  { name: "UI/UX Design", selected: false },
  { name: "Cloud Services", selected: false },
  { name: "Hosting Services", selected: false },
  { name: "SEO & Marketing", selected: false }
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="pt-[100px] pb-[80px]"
      >
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="md:text-right">
              <div className="relative inline-block">
                <h1 className="text-[36px] font-bold text-[#111111]">
                  Web Development
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#FF3F4F]" />
              </div>
              <p className="text-[14px] text-[#666666] mt-4">
                Transform your digital presence with our expert web development services. 
                We create modern, responsive, and high-performing websites tailored to your needs.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </motion.section>

      {/* Banner Image */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        className="w-full h-[300px] relative"
      >
        <Image
          src="/images/web-development-banner.jpg"
          alt="Web Development Services"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Web Development Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceDetails.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {/* Categories Card */}
              <div className="bg-white border border-[#EEE] rounded-lg p-6">
                <h3 className="text-[18px] font-bold text-[#111111] mb-4">Categories</h3>
                <ul className="space-y-4">
                  {categories.map((category, idx) => (
                    <li key={idx} className="relative">
                      <Link
                        href={`/services/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`text-[16px] ${
                          category.selected
                            ? 'font-bold text-[#111111] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#FF3F4F]'
                            : 'text-[#666666]'
                        }`}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brochures Card */}
              <div className="bg-white border border-[#EEE] rounded-lg p-6">
                <h3 className="text-[18px] font-bold text-[#111111] mb-4">Our Brochures</h3>
                <div className="space-y-3">
                  <button className="w-full bg-[#4B6FF7] text-white rounded-md px-4 py-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    PDF Download
                  </button>
                  <button className="w-full bg-[#6E5EF7] text-white rounded-md px-4 py-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    DOC Download
                  </button>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white border border-[#EEE] rounded-lg p-6">
                <h3 className="text-[18px] font-bold text-[#111111] mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#FF3F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-[14px] text-[#666666]">123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#FF3F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[14px] text-[#666666]">support@vihep.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 