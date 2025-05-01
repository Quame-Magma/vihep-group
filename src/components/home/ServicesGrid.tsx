'use client';

import React from 'react';
import { IconCode, IconMobile, IconPalette, IconCloud, IconServer, IconChartBar } from '@tabler/icons-react';

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
  {
    icon: <IconCloud size={24} />,
    title: 'Cloud Services',
    description: 'Cloud computing & development programs where people can access the same files and applications.',
  },
  {
    icon: <IconServer size={24} />,
    title: 'Hosting Services',
    description: 'We provide reliable hosting services including health and DNS monitoring.',
  },
  {
    icon: <IconChartBar size={24} />,
    title: 'SEO & Marketing',
    description: 'Our experience get success and sales leads of all projects.',
  },
];

export default function ServicesGrid() {
  return (
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
  );
} 