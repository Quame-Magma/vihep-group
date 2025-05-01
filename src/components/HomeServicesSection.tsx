'use client';

import React from 'react';
import Link from 'next/link';
import { IconCode, IconMobile, IconPalette } from '@tabler/icons-react';

const services = [
  {
    icon: <IconCode size={24} />,
    title: 'Web Development',
    description: 'We bring more than just good coding skills. Our experience allows us to craft solutions.',
  },
  {
    icon: <IconMobile size={24} />,
    title: 'Mobile Development',
    description: 'Create complex enterprise software, ensure reliable software integration.',
  },
  {
    icon: <IconPalette size={24} />,
    title: 'UI/UX Design',
    description: 'Build the product you need on time with an experienced team that uses a clear and effective design.',
  },
];

export default function HomeServicesSection() {
  return (
    <div>
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
  );
} 