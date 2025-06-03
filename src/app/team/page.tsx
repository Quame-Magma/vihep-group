// This file is the Team page for the application
"use client"; // Enables client-side rendering for this page

// Import Next.js optimized image component
import Image from 'next/image';
// Import our custom motion components with proper typing
import { motion } from '../../components/motion';
// Import dynamic for client-only component loading
import dynamic from 'next/dynamic';

// Dynamically import the ContactForm component, disabling SSR for client-only rendering
const ContactForm = dynamic(() => import('../../components/ContactForm'), { ssr: false });

// Array of team members for the hero slider and team grid
const teamMembers = [
  { name: 'Alice Johnson', role: 'CEO', image: '/team/alice.jpg' },
  { name: 'Bob Smith', role: 'Lead Developer', image: '/team/bob.jpg' },
  { name: 'Carol Lee', role: 'UI/UX Designer', image: '/team/carol.jpg' },
  { name: 'David Kim', role: 'Marketing Lead', image: '/team/david.jpg' },
  { name: 'Eva Brown', role: 'Template Maker', image: '/team/eva.jpg' },
];

// Array of skill bars for the mission/skills section
const skills = [
  { label: 'Development', value: 95 },
  { label: 'UI/UX Design', value: 90 },
  { label: 'Marketing', value: 85 },
  { label: 'Template Maker', value: 80 },
];

// Array of FAQs for the FAQ section
const faqs = [
  { question: "How do you select your team members?", answer: "We select our team based on experience, passion, and a proven track record in their respective fields." },
  { question: "What is your team's mission?", answer: "Our mission is to deliver innovative solutions and exceed client expectations through teamwork and expertise." },
  { question: "How can I join your team?", answer: "Check our Careers page for open positions or contact us directly with your resume and portfolio." },
  { question: "Do you offer remote work?", answer: "Yes, we support flexible and remote work arrangements for many roles." },
];

// Main TeamPage component
export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section: Team slider with member cards */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section label */}
          <span className="text-red-500 font-semibold">-Our Team</span>
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Meet Our Professional Team</h1>
          {/* Team slider: horizontally scrollable cards */}
          <div className="flex gap-8 overflow-x-auto pb-4">
            {teamMembers.map((member, idx) => (
              // Each team member card
              <motion.div
                key={idx}
                className="min-w-[220px] bg-[#F8F6F3] rounded-xl shadow p-6 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Team member image */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                {/* Team member name */}
                <div className="font-bold text-lg text-black mb-1">{member.name}</div>
                {/* Team member role */}
                <div className="text-gray-500 text-sm">{member.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Skills Section: Promise statement and animated skill bars */}
      <section className="py-16 bg-[#F8F6F3] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Mission statement */}
          <div>
            <span className="text-indigo-600 font-semibold">-Our Promise</span>
            <h2 className="text-3xl font-bold mb-4 text-black">We Deliver Excellence</h2>
            <p className="text-gray-700 mb-4">Our team is dedicated to providing top-notch solutions, creative designs, and effective marketing strategies to help your business grow.</p>
          </div>
          {/* Right: Animated skill bars */}
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              // Each skill bar
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-800 font-semibold">{skill.label}</span>
                  <span className="text-gray-600">{skill.value}%</span>
                </div>
                {/* Animated progress bar */}
                <motion.div
                  className="h-3 bg-indigo-200 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-indigo-600" style={{ width: `${skill.value}%` }} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section: All team members with share buttons */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section heading */}
          <h2 className="text-2xl font-bold mb-8 text-black">Our Team Members</h2>
          {/* Team members grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, idx) => (
              // Each team member card in the grid
              <div key={idx} className="bg-[#F8F6F3] rounded-xl shadow p-6 flex flex-col items-center">
                {/* Team member image */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                {/* Team member name */}
                <div className="font-bold text-md text-black mb-1">{member.name}</div>
                {/* Team member role */}
                <div className="text-gray-500 text-sm mb-2">{member.role}</div>
                {/* Share buttons (placeholder) */}
                <div className="flex gap-2 mt-2">
                  <button className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition">S</button>
                  <button className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition">L</button>
                  <button className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition">T</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section: Frequently asked questions */}
      <section className="py-16 bg-[#F8F6F3] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          {/* Section heading */}
          <h2 className="text-2xl font-bold mb-8 text-black">Frequently Asked Questions</h2>
          {/* FAQ list */}
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              // Each FAQ item
              <div key={idx} className="bg-white rounded-xl shadow p-6">
                {/* Question */}
                <div className="font-semibold text-black mb-2">{faq.question}</div>
                {/* Answer */}
                <div className="text-gray-700">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section: Contact form and map */}
      <section className="py-16 bg-[#4F46E5] relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image src="/contact/pattern.svg" alt="pattern" fill className="object-cover" />
        </div>
        {/* Main content grid: Contact form and map */}
        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Contact form section */}
          <div className="bg-transparent p-8 flex flex-col justify-center">
            {/* Section label */}
            <span className="text-white font-semibold">-Contact Us</span>
            {/* Section heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Contact Us For Any Query</h2>
            {/* Contact form (client-only) */}
            <ContactForm />
          </div>
          {/* Right: Map embed section */}
          <div className="flex items-center justify-center bg-black/60 rounded-xl p-4">
            <Image src="/contact/map.png" alt="Map" width={400} height={300} className="rounded-lg object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
} 