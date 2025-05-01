import React from 'react';
// import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';

// Define the structure for a team
// interface Team {
//   id: string;
//   name: string;
//   description: string;
//   members: string[];
// }

// Sample data for teams
// const teams: Team[] = [
//   {
//     id: '1',
//     name: 'Development Team',
//     description: 'Responsible for software development and coding.',
//     members: ['John Doe', 'Jane Smith', 'Mike Johnson'],
//   },
//   {
//     id: '2',
//     name: 'Design Team',
//     description: 'Handles UI/UX design and creative aspects.',
//     members: ['Alice Brown', 'Bob White', 'Charlie Green'],
//   },
//   {
//     id: '3',
//     name: 'Marketing Team',
//     description: 'Manages marketing strategies and campaigns.',
//     members: ['David Lee', 'Eva Martinez', 'Frank Wilson'],
//   },
//   {
//     id: '4',
//     name: 'Cloud Services Team',
//     description: 'Oversees cloud infrastructure and deployments.',
//     members: ['Grace Kim', 'Henry Ford', 'Ivy Chen'],
//   },
//   {
//     id: '5',
//     name: 'Support Team',
//     description: 'Provides technical support and customer service.',
//     members: ['Jack Black', 'Karen White', 'Liam Brown'],
//   },
//   {
//     id: '6',
//     name: 'QA Team',
//     description: 'Ensures product quality through testing.',
//     members: ['Mona Lisa', 'Nate Silver', 'Olivia Wilde'],
//   },
// ];

// Animation variants for scale-in effect (copied from About page)
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

// Team member data (copied from About page)
const team = [
  { name: 'Arnold K. Anyor', role: 'Frontend Lead', image: '/assets/images/team/Arnold_Headshot.jpg' },
  { name: 'Isaac Nkansah', role: 'Backend Lead', image: '/assets/images/team/Isaac_pic.jpg' },
  { name: 'Emmanuel Nlone', role: 'UI/UX Lead', image: '/assets/images/team/emma_headshort.jpg' },
  { name: 'Ferdous Sarker', role: 'AI/ML Lead', image: '/assets/images/team/Arnold_Headshot.jpg' },
];

// Configure Image component for public directory
const ImageConfig = {
  loader: ({ src }) => src,
  unoptimized: true
};

const AllTeamsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <span className="text-red-500 font-semibold">Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black">Meet With Dedicated Team Members</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-white rounded-xl shadow p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image src={member.image} alt={member.name} fill className="rounded-full object-cover" {...ImageConfig} />
              </div>
              <div className="font-bold text-lg">{member.name}</div>
              <div className="text-gray-500 text-sm">{member.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllTeamsPage; 