'use client';

import Image from 'next/image';
import { motion, fadeIn, scaleIn } from '../../../components/motion';
// import { useState } from 'react';
import Link from 'next/link';

type FAQItem = {
  question: string;
  answer: string;
};

// type ServiceCategory = {
//   name: string;
//   href: string;
// };

type ServiceDetails = {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
};

const faqItems: FAQItem[] = [
  {
    question: "What is SEO and why is it important?",
    answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to increase its visibility in search engine results. It's important because it helps drive organic traffic to your website, increases brand awareness, and can lead to higher conversion rates.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy that typically takes 3-6 months to start seeing significant results. The timeline can vary depending on factors like competition, current website status, and the scope of optimization efforts.",
  },
  {
    question: "What marketing services do you offer?",
    answer: "We offer comprehensive digital marketing services including SEO, content marketing, social media marketing, email marketing, PPC advertising, and marketing strategy development.",
  },
  {
    question: "How do you measure marketing success?",
    answer: "We track various KPIs including website traffic, conversion rates, engagement metrics, search rankings, ROI, and other relevant metrics specific to your business goals.",
  },
];

// const serviceCategories: ServiceCategory[] = [
//   { 
//     name: "Web Development", 
//     href: "/services/web-development" 
//   },
//   { 
//     name: "SEO & Marketing", 
//     href: "/services/seo-marketing" 
//   },
//   { 
//     name: "UI/UX Design", 
//     href: "/services/ui-ux-design" 
//   },
//   { 
//     name: "Mobile Development", 
//     href: "/services/mobile-development" 
//   },
//   { 
//     name: "Cloud Services", 
//     href: "/services/cloud-services" 
//   },
//   { 
//     name: "Hosting Services", 
//     href: "/services/hosting-services" 
//   }
// ];

const serviceDetails: ServiceDetails = {
  title: "SEO & Marketing Services",
  description: "Drive growth and increase your online presence with our comprehensive SEO and digital marketing solutions. We help businesses reach their target audience and achieve measurable results.",
  features: [
    "Search Engine Optimization (SEO)",
    "Content Marketing Strategy",
    "Social Media Marketing",
    "Email Marketing Campaigns",
    "PPC Advertising Management",
    "Analytics & Performance Tracking",
  ],
  benefits: [
    "Increased organic website traffic",
    "Higher search engine rankings",
    "Improved brand visibility",
    "Better conversion rates",
    "Enhanced online presence",
    "Measurable ROI",
  ],
};

// Update categories data structure
const categories = [
  { name: "Web Development", selected: false },
  { name: "Mobile Development", selected: false },
  { name: "UI/UX Design", selected: false },
  { name: "Cloud Services", selected: false },
  { name: "Hosting Services", selected: false },
  { name: "SEO & Marketing", selected: true }
];

export default function SEOMarketingPage() {
  // const [expandedFaq, setExpandedFaq] = useState(0);
  // const [searchQuery, setSearchQuery] = useState("");

  // const filteredFaqs = faqItems.filter(faq => 
  //   faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  // );

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
                  SEO & Marketing
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#FF3F4F]" />
              </div>
              <p className="text-[14px] text-[#666666] mt-4">
                Drive growth and increase your online presence with our comprehensive SEO and digital marketing solutions. 
                We help businesses reach their target audience and achieve measurable results.
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
          src="/images/seo-marketing-banner.jpg"
          alt="SEO & Marketing Services"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {/* Features Section */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceDetails.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-gray-50 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Benefits Section */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceDetails.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <svg
                        className="w-6 h-6 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-lg">{benefit}</span>
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
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-gray-50 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
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
    </main>
  );
}