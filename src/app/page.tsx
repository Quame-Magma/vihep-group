// This file is the main homepage for the application
'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { IconCode, IconDeviceMobile, IconPalette } from '@tabler/icons-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const services = [
  {
    icon: <IconCode size={24} />,
    title: 'Web Development',
    description: 'We bring more than just good coding skills. Our experience allows us to craft solutions.',
  },
  {
    icon: <IconDeviceMobile size={24} />,
    title: 'Mobile Development',
    description: 'Create complex enterprise software, ensure reliable software integration.',
  },
  {
    icon: <IconPalette size={24} />,
    title: 'UI/UX Design',
    description: 'Build the product you need on time with an experienced team that uses a clear and effective design.',
  },
];

export default function Home() {
  return (
    <div className="bg-[#FAF9F8] min-h-screen w-full">
      {/* HERO SECTION */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full py-20"
      >
        <div className="container max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          {/* Left */}
          <div className="space-y-6">
            <div className="uppercase text-[12px] font-medium text-[#FF3F4F] tracking-wider">Development Agency</div>
            <h1 className="text-[48px] font-bold leading-tight text-[#111]">
              <span className="inline-block -rotate-2">Delivering</span><br />
              Result-Oriented<br />
              <span className="text-[#FF3F4F]">Digital Solutions</span>
            </h1>
            <p className="text-[16px] text-[#666] max-w-lg">This is software that protects all your data including strong security access. Use cases as needed and provide security.</p>
            <Link href="#" className="inline-block px-6 py-3 bg-white border border-[#111] rounded-md text-[16px] font-semibold text-[#111] hover:bg-[#FF3F4F] hover:text-white transition">Get Started →</Link>
          </div>
          {/* Right */}
          <div className="relative flex items-center justify-center">
            {/* Red block */}
            <div className="absolute -top-8 right-8 w-[320px] h-[220px] bg-[#FF3F4F] rounded-lg z-0" />
            {/* White outline */}
            <div className="absolute -top-4 right-4 w-[320px] h-[220px] border-2 border-white rounded-lg z-10" />
            {/* Main image */}
            <div className="relative w-[320px] h-[220px] rounded-lg overflow-hidden shadow-lg z-20">
              <Image src="/assets/images/developer.jpg" alt="Team" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICES SHOWCASE */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full pt-20 pb-10"
      >
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="uppercase text-[12px] font-medium text-[#FF3F4F] tracking-wider">Our Services</div>
            <Link href="/services" className="border border-[#111] text-[#111] px-4 py-2 rounded-full text-[14px] font-medium hover:bg-[#FF3F4F] hover:text-white transition flex items-center gap-2">All Services <span>→</span></Link>
          </div>
          <h2 className="text-[32px] font-bold text-[#111] mb-8">We Offer A Wide Variety Of IT Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#111] text-white p-6 rounded-lg hover:bg-[#222] transition-colors"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-mono font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* STATS COUNTER */}
      <section className="w-full bg-white py-16">
        <div className="container max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-[48px] font-bold text-[#111]">15</div>
            <div className="text-[14px] text-[#666]">Years of Experience</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-[48px] font-bold text-[#111]">36,000+</div>
            <div className="text-[14px] text-[#666]">Social Followers</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-[48px] font-bold text-[#111]">6,428</div>
            <div className="text-[14px] text-[#666]">Projects Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-[48px] font-bold text-[#111]">92,000+</div>
            <div className="text-[14px] text-[#666]">Social Posts</div>
          </motion.div>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full py-20 bg-[#FAF9F8]"
      >
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="uppercase text-[12px] font-medium text-[#FF3F4F] tracking-wider">How We Work</div>
          </div>
          <h2 className="text-[32px] font-bold text-[#111] mb-12">Our Working Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#FF3F4F] text-white flex items-center justify-center text-xl font-bold">1</div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#111] mb-2">Research & Analysis</h3>
                  <p className="text-[16px] text-[#666]">We conduct thorough research and analysis to understand your business needs and objectives.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#4B6FF7] text-white flex items-center justify-center text-xl font-bold">2</div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#111] mb-2">Design & Planning</h3>
                  <p className="text-[16px] text-[#666]">Our team creates detailed plans and designs tailored to your specific requirements.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center text-xl font-bold">3</div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#111] mb-2">Development & Testing</h3>
                  <p className="text-[16px] text-[#666]">We develop and rigorously test solutions to ensure they meet quality standards.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#FF8243] text-white flex items-center justify-center text-xl font-bold">4</div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#111] mb-2">Deployment & Support</h3>
                  <p className="text-[16px] text-[#666]">We handle deployment and provide ongoing support to ensure optimal performance.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/brainstorming.jpg"
                  alt="Our Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white transition flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full py-20 bg-white"
      >
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="uppercase text-[12px] font-medium text-[#FF3F4F] tracking-wider">Testimonials</div>
          </div>
          <h2 className="text-[32px] font-bold text-[#111] mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAF9F8] p-8 rounded-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image src="/assets/images/avatar.png" alt="Client" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[18px] text-[#111]">Ben Stokes</div>
                  <div className="text-[14px] text-[#666]">Sr. Executive of Marketing</div>
                </div>
              </div>
              <p className="text-[16px] text-[#666] italic">&ldquo;Really good platform for eLearning. I was a student of this platform, learnt Digital Marketing from them. Now I am working as a freelancer in various marketplace.&rdquo;</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAF9F8] p-8 rounded-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image src="/assets/images/avatar.png" alt="Client" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[18px] text-[#111]">Sarah Johnson</div>
                  <div className="text-[14px] text-[#666]">Product Manager</div>
                </div>
              </div>
              <p className="text-[16px] text-[#666] italic">&ldquo;The team at Vihep delivered exceptional results. Their attention to detail and commitment to quality exceeded our expectations. Highly recommended!&rdquo;</p>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <button className="w-3 h-3 rounded-full bg-[#FF3F4F]" />
              <button className="w-3 h-3 rounded-full bg-[#DDD]" />
              <button className="w-3 h-3 rounded-full bg-[#DDD]" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* LATEST NEWS / BLOG */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full pt-20 pb-10"
      >
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="uppercase text-[12px] font-medium text-[#FF3F4F] tracking-wider">Latest Case Studies</div>
            <Link href="#" className="border border-[#111] text-[#111] px-4 py-2 rounded-full text-[14px] font-medium hover:bg-[#FF3F4F] hover:text-white transition flex items-center gap-2">View All <span>→</span></Link>
          </div>
          <h2 className="text-[32px] font-bold text-[#111] mb-8">Read Our Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/assets/images/team-studies.jpg"
                  alt="Case Study 1"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#FF3F4F] text-white text-[10px] px-3 py-1 rounded-full">Hot News</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[16px] font-bold mb-2">How to optimize your development workflow</div>
                <Link href="#" className="inline-block min-w-[180px] h-[48px] px-6 py-3 bg-white border border-[#111] rounded-md text-[16px] font-semibold text-[#111] hover:bg-[#FF3F4F] hover:text-white transition flex justify-center text-center items-center">Learn More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/assets/images/smartphone.jpg"
                  alt="Case Study 2"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#FF3F4F] text-white text-[10px] px-3 py-1 rounded-full">Hot News</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[16px] font-bold mb-2">Mobile-first development strategies</div>
                <Link href="#" className="inline-block min-w-[180px] h-[48px] px-6 py-3 bg-white border border-[#111] rounded-md text-[16px] font-semibold text-[#111] hover:bg-[#FF3F4F] hover:text-white transition flex justify-center text-center items-center">Learn More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/assets/images/brainstorming.jpg"
                  alt="Case Study 3"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#FF3F4F] text-white text-[10px] px-3 py-1 rounded-full">Hot News</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[16px] font-bold mb-2">Team collaboration best practices</div>
                <Link href="#" className="inline-block min-w-[180px] h-[48px] px-6 py-3 bg-white border border-[#111] rounded-md text-[16px] font-semibold text-[#111] hover:bg-[#FF3F4F] hover:text-white transition flex justify-center text-center items-center">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
