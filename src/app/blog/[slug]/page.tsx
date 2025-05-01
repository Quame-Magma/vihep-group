// This file is the Blog Details page for the application
'use client'; // Enables client-side rendering for this page

// Import Next.js optimized image component
import Image from 'next/image';
// Import Next.js Link component for navigation
import Link from 'next/link';
// Import framer-motion for animations
// import { motion } from 'framer-motion';
// Import React's useState hook for managing state
import { useState } from 'react';

// Array of popular posts for the sidebar
const popularPosts = [
  {
    title: 'How To Draw A Rose For A Beginners: Step By Step Guidelines',
    date: 'February 1, 2022',
    comments: 7,
    image: '/assets/images/pexels-1.jpg',
  },
  {
    title: 'UNIX Vs. Linux: An Old Standby And A New Innovator',
    date: 'February 1, 2022',
    comments: 9,
    image: '/assets/images/pexels-2.jpg',
  },
  {
    title: 'PHP Vs. JavaScript: Which Is Better – A Full Comparison',
    date: 'February 1, 2022',
    comments: 5,
    image: '/assets/images/pexels-3.jpg',
  },
  {
    title: 'How To Use Dictation Software To Write A Book',
    date: 'February 1, 2022',
    comments: 3,
    image: '/assets/images/pexels-4.jpg',
  },
  {
    title: 'How To Draw A Rose For A Beginners: Step By Step Guidelines',
    date: 'February 1, 2022',
    comments: 7,
    image: '/assets/images/pexels-5.jpg',
  },
  {
    title: '10 Guitar Techniques To Take You From Beginner To Pro',
    date: 'February 1, 2022',
    comments: 2,
    image: '/assets/images/pexels-6.jpg',
  },
];

// Array of categories for the sidebar
const categories = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Cloud Services',
  'Hosting Services',
  'SEO & Marketing',
];

// Array of keywords for the sidebar
const keywords = [
  'UI Design', 'UI/UX Design', 'Web UX', 'UX Research', 'User Experience', 'UI/UX'
];

// Array of FAQs for the FAQ section
const faqs = [
  { question: 'Do You Support?', answer: 'Yes, we are offering jobs after completing the course. If you are interested in working with us, then you can join.' },
  { question: 'Do You Support?', answer: 'Yes, we are offering jobs after completing the course. If you are interested in working with us, then you can join.' },
  { question: 'Do You Support?', answer: 'Yes, we are offering jobs after completing the course. If you are interested in working with us, then you can join.' },
];

// Main BlogDetailsPage component
export default function BlogDetailsPage() {
  // State to track which FAQ is open (null means none are open)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="relative w-full h-80 md:h-96">
        <Image src="/assets/images/pexels-5.jpg" alt="Blog Hero" fill className="object-cover" />
      </section>

      {/* Main Content & Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
        {/* Main Content */}
        <article className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl text-[#111] font-bold mb-4">Dig into User Experience (UX)</h1>
          <p className="text-gray-700 mb-6">Welcome to learn about User Experience. First and foremost, let me give you a small introduction and walk you through the agenda to get a narrow idea of what will be gonna covered in this article.</p>

          {/* Table of Contents */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#111] mb-2" >Table of Contents</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Introduction to User Experience</li>
              <li>What and Why you should do a User Research</li>
              <li>Norman&apos;s Levels in Product Experience Design</li>
              <li>Finally, what is meant by User-centred design</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#111] mb-4 mt-10">Firstly, Let&apos;s Start with an Introduction to User Experience ⚡</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/blog/uiux-detail1.jpg" alt="UX Research" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/blog/uiux-detail2.jpg" alt="UX Research" fill className="object-cover" />
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2 text-[#111]">What is User Experience?</h3>
          <p className="mb-6 text-gray-700">User Experience can be defined as a person perception and response that result from the use or anticipated use of a product system or service. In other words in simpler terms you can say User experience (abbreviated as UX) is how a person feels when interfacing with a system.</p>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <blockquote className="italic text-gray-800">
              Three Levels of Processing: Visceral, Behavior, and Reflective. Visceral and behavioral levels are subconscious and the home of basic emotions. The reflective level is where conscious thought and decision - goal of UX making reside, as well as the highest level of emotions.
            </blockquote>
            <div className="mt-4 text-orange-700 font-bold">—Donald A. Norman</div>
          </div>

          <h3 className="text-xl font-bold mb-2 text-[#111]">What is User Experience Design?</h3>
          <p className="mb-6 text-gray-700">User experience design is a vast, multidisciplinary and fascinating field that process that design teams use to create product that provide meaningful relevant experience to users. This involves the design of the entire process of acquire integrating the product, including aspects of branding, design, usability and function.</p>

          <div className="border-t pt-8 flex justify-between items-center">
            <Link href="#" className="text-indigo-600 font-semibold flex items-center gap-2">&larr; Previous Post</Link>
            <div className="flex gap-4">
              <Link href="#" className="text-orange-500 text-2xl"><i className="fab fa-facebook"></i></Link>
              <Link href="#" className="text-orange-500 text-2xl"><i className="fab fa-instagram"></i></Link>
              <Link href="#" className="text-orange-500 text-2xl"><i className="fab fa-linkedin"></i></Link>
            </div>
            <Link href="#" className="text-indigo-600 font-semibold flex items-center gap-2">Next Post &rarr;</Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold mb-4">Popular Posts</h3>
            <div className="space-y-6">
              {popularPosts.map((post, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1 line-clamp-2">{post.title}</h4>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold mb-4 text-[#111]">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <button className={`w-full text-left text-[#111] px-4 py-2 rounded ${cat === 'UI/UX Design' ? 'bg-orange-100 text-orange-600 font-bold' : 'hover:bg-gray-100'}`}>{cat}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold mb-4">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700">{kw}</span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-500 font-semibold">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8 text-[#111]">Most Asked Question</h2>
          <input type="text" placeholder="Search anything..." className="w-full mb-8 px-4 py-3 border text-[#111] rounded-lg" />
          <div className="divide-y">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex justify-between items-center py-4 text-lg text-[#111] font-medium focus:outline-none">
                  {faq.question}
                  <span>{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 