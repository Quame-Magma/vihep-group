// This file is the Careers page for the application
"use client"; // Enables client-side rendering for this page

// Import Next.js optimized image component
import Image from 'next/image';
// Import framer-motion for animations
import { motion } from '../../components/motion';
// Import dynamic for client-only component loading
import dynamic from 'next/dynamic';

// Dynamically import the ContactForm component, disabling SSR for client-only rendering
const ContactForm = dynamic(() => import('../../components/ContactForm'), { ssr: false });

// Array of job listings
const jobListings = [
  {
    title: "Senior Frontend Developer",
    type: "Full Time",
    location: "Remote",
    description: "We're looking for an experienced frontend developer to join our team and help build amazing user experiences.",
    requirements: [
      "5+ years of experience with React/Next.js",
      "Strong TypeScript skills",
      "Experience with modern CSS frameworks",
      "Excellent problem-solving abilities"
    ]
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Hybrid",
    description: "Join our design team to create beautiful and intuitive user interfaces for our clients.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma/Sketch",
      "Strong portfolio of previous work",
      "Understanding of user-centered design"
    ]
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Remote",
    description: "Help us build robust and scalable backend systems for our clients' applications.",
    requirements: [
      "4+ years of Node.js/Python experience",
      "Database design and optimization",
      "API development and documentation",
      "Cloud platform experience (AWS/GCP)"
    ]
  }
];

// Array of company benefits
const benefits = [
  {
    title: "Competitive Salary",
    description: "We offer competitive compensation packages based on experience and skills.",
    icon: "💰"
  },
  {
    title: "Flexible Work",
    description: "Work from anywhere with our remote-first policy and flexible hours.",
    icon: "🏠"
  },
  {
    title: "Health Benefits",
    description: "Comprehensive health insurance and wellness programs for all employees.",
    icon: "🏥"
  },
  {
    title: "Learning & Growth",
    description: "Continuous learning opportunities and professional development support.",
    icon: "📚"
  }
];

// Main CareersPage component
export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section: Careers introduction */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section label */}
          <span className="text-red-500 font-semibold">-Join Our Team</span>
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Build Your Career With Us</h1>
          {/* Hero description */}
          <p className="text-gray-700 max-w-2xl mb-8">
                      Join our team of passionate professionals and work on exciting projects that make a real difference.
            We&apos;re always looking for talented individuals to help us grow and innovate.
          </p>          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">            {benefits.map((benefit, idx) => (
              // Each benefit card
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >                <div className="bg-[#F8F6F3] rounded-xl shadow p-6">
                {/* Benefit icon */}
                <div className="text-4xl mb-4">{benefit.icon}</div>
                {/* Benefit title */}
                <h3 className="font-bold text-lg text-black mb-2">{benefit.title}</h3>
                {/* Benefit description */}
                <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-[#F8F6F3] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section heading */}
          <h2 className="text-3xl font-bold mb-8 text-black">Open Positions</h2>          {/* Job listings grid */}
          <div className="space-y-6">            {jobListings.map((job, idx) => (
              // Each job listing card
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl shadow p-6">
                {/* Job title and metadata */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-black">{job.title}</h3>
                    <div className="flex gap-4 mt-2">
                      <span className="text-gray-600">{job.type}</span>
                      <span className="text-gray-600">{job.location}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Apply Now
                  </button>
                </div>
                {/* Job description */}
                <p className="text-gray-700 mb-4">{job.description}</p>
                {/* Requirements list */}
                <div>
                  <h4 className="font-semibold text-black mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.requirements.map((req, reqIdx) => (
                      <li key={reqIdx}>{req}</li>
                    ))}
                  </ul>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 bg-[#4F46E5] relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image src="/contact/pattern.svg" alt="pattern" fill className="object-cover" />
        </div>
        {/* Main content grid */}
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Section heading */}
          <h2 className="text-3xl font-bold mb-8 text-white">Apply Now</h2>
          {/* Application form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
} 