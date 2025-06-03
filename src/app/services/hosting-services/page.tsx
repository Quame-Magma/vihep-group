'use client';

import Image from 'next/image';
import { motion, fadeIn, scaleIn } from '../../../components/motion';
import { useState } from 'react';
import Link from 'next/link';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What hosting services do you provide?",
    answer: "We offer a range of hosting services including shared hosting, VPS hosting, dedicated servers, managed WordPress hosting, and cloud hosting solutions with 24/7 support and monitoring."
  },
  {
    question: "How reliable is your hosting infrastructure?",
    answer: "Our hosting infrastructure maintains 99.9% uptime with redundant systems, regular backups, and enterprise-grade security measures. We use top-tier data centers with multiple layers of protection."
  },
  {
    question: "Do you provide SSL certificates?",
    answer: "Yes, we provide free SSL certificates with all hosting plans. We also offer premium SSL certificates for enhanced security and trust, including wildcard and multi-domain certificates."
  },
  {
    question: "What support do you offer?",
    answer: "We provide 24/7 technical support through multiple channels including live chat, phone, and email. Our expert team can help with server management, security, and performance optimization."
  }
];

const categories = [
  { name: "Web Development", selected: false },
  { name: "Mobile Development", selected: false },
  { name: "UI/UX Design", selected: false },
  { name: "Cloud Services", selected: false },
  { name: "Hosting Services", selected: true },
  { name: "SEO & Marketing", selected: false }
];

const serviceDetails = {
  webHosting: [
    "Shared Hosting Solutions",
    "VPS Hosting",
    "Dedicated Servers",
    "Managed WordPress Hosting"
  ],
  security: [
    "SSL Certificates",
    "DDoS Protection",
    "Malware Scanning",
    "Firewall Configuration"
  ],
  performance: [
    "CDN Integration",
    "Caching Solutions",
    "Load Balancing",
    "Performance Monitoring"
  ],
  support: [
    "24/7 Technical Support",
    "Server Management",
    "Regular Backups",
    "Security Updates"
  ]
};

export default function HostingServicesDetails() {
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">
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
                  Hosting Services
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#FF3F4F]" />
              </div>
              <p className="text-[14px] text-[#666666] mt-4">
                Reliable and secure hosting solutions for your business. 
                We provide high-performance hosting with 24/7 support and monitoring.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </motion.section>

      {/* Full-width Banner */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        className="w-full h-[300px] relative"
      >
        <Image
          src="/images/hosting-services-banner.jpg"
          alt="Hosting Services"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Main Content + Sidebar */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-20"
      >
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-[14px] text-[#666666] leading-relaxed">
                  Our hosting services provide reliable, secure, and scalable solutions for businesses of all sizes. 
                  With state-of-the-art infrastructure and expert support, we ensure your online presence is always available.
                </p>
                <p className="text-[14px] text-[#666666] leading-relaxed">
                  We offer a range of hosting solutions tailored to your needs, from shared hosting to dedicated servers, 
                  all backed by our commitment to security, performance, and customer satisfaction.
                </p>

                {/* Inline Image with Accent */}
                <div className="relative mt-12 mb-20">
                  <div className="absolute -left-4 top-0 w-2 h-full bg-[#4B6FF7]" />
                  <div className="relative rounded-lg shadow-lg overflow-hidden h-[200px]">
                    <Image
                      src="/images/hosting-services-inline.jpg"
                      alt="Hosting Infrastructure"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-8">
                  <h2 className="text-[24px] font-semibold text-[#111111]">
                    Hosting Services & Solutions
                  </h2>
                  <p className="text-[14px] text-[#666666]">
                    We provide comprehensive hosting solutions with robust security features and 
                    reliable performance to keep your business running smoothly.
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Web Hosting */}
                    <div>
                      <h3 className="text-[16px] font-bold text-[#111111] mb-4">
                        Web Hosting
                      </h3>
                      <ul className="space-y-3">
                        {serviceDetails.webHosting.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#FF8243] flex-shrink-0 mt-1" />
                            <span className="text-[14px] text-[#666666]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Security */}
                    <div>
                      <h3 className="text-[16px] font-bold text-[#111111] mb-4">
                        Security Features
                      </h3>
                      <ul className="space-y-3">
                        {serviceDetails.security.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#FF8243] flex-shrink-0 mt-1" />
                            <span className="text-[14px] text-[#666666]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Performance */}
                    <div>
                      <h3 className="text-[16px] font-bold text-[#111111] mb-4">
                        Performance Features
                      </h3>
                      <ul className="space-y-3">
                        {serviceDetails.performance.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#FF8243] flex-shrink-0 mt-1" />
                            <span className="text-[14px] text-[#666666]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Support */}
                    <div>
                      <h3 className="text-[16px] font-bold text-[#111111] mb-4">
                        Support & Management
                      </h3>
                      <ul className="space-y-3">
                        {serviceDetails.support.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#FF8243] flex-shrink-0 mt-1" />
                            <span className="text-[14px] text-[#666666]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Categories Card */}
                <div className="bg-white border border-[#EEE] rounded-lg p-6">
                  <h3 className="text-[18px] font-bold text-[#111111] mb-4">Categories</h3>
                  <ul className="space-y-4">
                    {categories.map((category, idx) => (
                      <li key={idx} className="relative">
                        <Link
                          href={`/services/${category.name
                            .toLowerCase()
                            .replace(/[&\s]+/g, '-')}`}
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
      </motion.section>

      {/* FAQ Section */}
      <section className="bg-[#FAF9F8] py-[100px]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <span className="text-[12px] font-medium text-[#FF3F4F]">– FAQ</span>
              <h2 className="text-[32px] font-bold text-[#111111] mt-2 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-[#CCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3F4F] focus:border-transparent"
                />
                <svg
                  className="w-5 h-5 text-[#666666] absolute left-3 top-1/2 -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Right Column - FAQ Accordion */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  custom={idx}
                  className="border-b border-[#EEE] pb-4"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                >
                  <div className="flex justify-between items-center cursor-pointer hover:text-[#FF3F4F] transition-colors">
                    <h3 className="text-[16px] font-bold text-[#111111]">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        expandedFaq === idx ? 'rotate-180 text-[#FF3F4F]' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: expandedFaq === idx ? "auto" : 0,
                      opacity: expandedFaq === idx ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[14px] text-[#666666] mt-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 