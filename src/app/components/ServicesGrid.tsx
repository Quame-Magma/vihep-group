'use client';

const services = [
  {
    title: 'Web Development',
    description: 'We bring more than just good coding skills. Our experience allows us to craft solutions.',
  },
  {
    title: 'Mobile Development',
    description: 'Create complex enterprise software, ensure reliable software integration.',
  },
  {
    title: 'UI/UX Design',
    description: 'Build the product you need on time with an experienced team that uses a clear and effective design.',
  },
  {
    title: 'Cloud Services',
    description: 'Cloud computing & development programs where people can access the same files and applications.',
  },
  {
    title: 'Hosting Services',
    description: 'We provide reliable hosting services including health and DNS monitoring.',
  },
  {
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
          <h3 className="text-xl font-mono font-bold mb-2">{service.title}</h3>
          <p className="text-gray-300">{service.description}</p>
        </div>
      ))}
    </div>
  );
} 