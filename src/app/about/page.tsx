// This file is the About page for the application
'use client'; // Enables client-side rendering for this page

// Import Next.js optimized image component
import Image from "next/image";
// Import React's useState hook for managing state
import { useState } from 'react';
import Link from "next/link";

// Array of team members for the team section
const team = [
  { name: 'Arnold K. Anyor', role: 'Frontend Lead', image: '/assets/images/team/Arnold_Headshot.jpg' },
  { name: 'Emmanuel Nlone', role: 'UI/UX Lead', image: '/assets/images/team/emma_headshort.jpg' },
  { name: 'Isaac Nkansah', role: 'Backend Lead', image: '/assets/images/team/Isaac_pic.jpg' },
  { name: 'Ferdous Sarker', role: 'AI/ML Lead', image: '/assets/images/team/Arnold_Headshot.jpg' },
];

// Main About page component
export default function About() {
  // State to track which FAQ is open (null means none are open)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen">
      {/* Hero Section: Main intro with heading, description, and image */}
      <section className="relative pt-[100px] pb-[60px] overflow-hidden bg-[#FAF9F8] font-inter">
        {/* Faint contour pattern background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" className="w-full h-full">
            <path d="M0,200 Q200,100 400,200 T800,200" stroke="#111" strokeWidth="2" opacity="0.08" fill="none" />
          </svg>
        </div>
        <div className="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center px-4 relative z-10">
          {/* Left: Headline and subtext */}
          <div className="flex flex-col gap-6 justify-center">
            <h1 className="text-[36px] font-bold leading-tight text-[#111]">
              Build Complete Web Solutions<br />with <span className="text-[#FF3F4F]">Vihep</span>
            </h1>
            <p className="text-[14px] text-[#666] md:text-right max-w-md ml-auto">We offer some special services through which you can easily complete the marketing work on social media. Which helps increase your lead and sales.</p>
          </div>
          {/* Right: Hero image with bars and doodle */}
          <div className="relative flex items-center justify-center w-full">
            {/* Blue bar */}
            <div className="absolute left-[-40px] top-8 w-2 h-[200px] bg-[#4B6FF7] rounded z-10" />
            {/* White outline bar */}
            <div className="absolute left-[-28px] top-8 w-1 h-[200px] border border-white rounded z-20" />
            {/* Main image */}
            <div className="relative w-full max-w-[420px] h-[280px] rounded-lg overflow-hidden shadow-[0_4px_24px_0_rgba(0,0,0,0.10)] z-30">
              <Image src="/assets/images/developer.jpg" alt="Team" fill className="object-cover rounded-lg" />
              {/* Red doodle accent */}
              <svg className="absolute -top-4 right-4 z-40" width="40" height="40" viewBox="0 0 40 40"><path d="M5 35 Q20 5 35 35" stroke="#FF3F4F" strokeWidth="3" fill="none"/></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#111] py-[100px] font-inter">
        <div className="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center px-4 relative">
          {/* Left: Vision text and doodle */}
          <div className="relative flex flex-col justify-center">
            <span className="uppercase text-[12px] font-medium text-[#FF3F4F] mb-2 tracking-wider">– Our Vision</span>
            <h2 className="text-[32px] font-bold text-white leading-[1.25] mb-4">Read Our Vision Statement<br />To Learm More About Us</h2>
            <p className="text-[14px] text-[#CCCCCC] mb-3">Vihep is the partner of choice to many of the world&apos;s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
            <p className="text-[14px] text-[#CCCCCC] mb-3">The partner of choice for many of the world&apos;s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
            {/* White hand-drawn arrow doodle */}
            <svg className="absolute -left-12 top-16 -rotate-12" width="60" height="80" viewBox="0 0 60 80"><path d="M55 70 Q10 40 40 10" stroke="#fff" strokeWidth="3" fill="none"/></svg>
          </div>
          {/* Right: Vision image with red bar */}
          <div className="relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-[420px] h-[280px] rounded-lg overflow-hidden">
              <Image src="/assets/images/brainstorming.jpg" alt="Vision" fill className="object-cover rounded-lg" />
              {/* Red bar */}
              <div className="absolute right-0 top-0 h-full w-4 bg-[#FF3F4F] rounded-r-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Promo Video CTA */}
      <section className="bg-[#FAF9F8] py-[60px] text-center font-inter">
        <h2 className="text-[24px] font-bold mb-8 text-[#111]">Let&apos;s Watch Our Promo Video</h2>
        <button className="inline-flex items-center justify-center w-12 h-12 md:w-[48px] md:h-[48px] rounded-full border-2 border-[#111] bg-white hover:bg-[#FF3F4F] group transition">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#111" strokeWidth="2" />
            <polygon points="13,11 22,16 13,21" fill="#111" className="group-hover:fill-white" />
          </svg>
        </button>
      </section>

      {/* Team Section */}
      <section className="bg-white pt-[100px] pb-[60px] font-inter">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <span className="uppercase text-[12px] font-medium text-[#FF3F4F] tracking-wider">– Team</span>
              <h2 className="text-[32px] font-bold text-[#111] mt-2">Meet With Dedicated Team Members.</h2>
            </div>
            <Link href="/team" className="border border-[#111] text-[#111] px-6 py-2 rounded-[6px] text-[14px] font-medium hover:bg-[#FF3F4F] hover:text-white transition flex items-center gap-2 mt-4 md:mt-0">All Member <span>→</span></Link>
          </div>
          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, idx) => {
              // Pastel backgrounds for each card
              const pastel = ["bg-blue-100", "bg-pink-100", "bg-green-100", "bg-yellow-100"];
              return (
                <div key={idx} className={`rounded-lg p-6 flex flex-col items-center ${pastel[idx % pastel.length]}`}> 
                  <div className="w-[200px] h-[200px] rounded-lg overflow-hidden mb-4">
                    <Image src={member.image} alt={member.name} width={200} height={200} className="object-cover w-full h-full" />
                  </div>
                  <div className="font-bold text-[16px] text-[#111]">{member.name}</div>
                  <div className="text-[14px] text-[#666] mb-3">{member.role}</div>
                  {/* Social icons */}
                  <div className="flex gap-2 mt-2">
                    {["linkedin", "twitter", "facebook"].map((icon, i) => (
                      <a key={i} href="#" className="w-8 h-8 bg-white flex items-center justify-center rounded-[6px] border border-[#EEE] hover:bg-[#FF3F4F] transition">
                        <svg width="18" height="18" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24">
                          {icon === "linkedin" && <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>}
                          {icon === "twitter" && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03A12.94 12.94 0 0 1 3.1.67a4.52 4.52 0 0 0-.61 2.28c0 1.57.8 2.96 2.02 3.77A4.48 4.48 0 0 1 2 5.13v.06c0 2.2 1.56 4.03 3.64 4.45a4.52 4.52 0 0 1-2.04.08c.57 1.78 2.23 3.08 4.2 3.12A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59z" />}
                          {icon === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4V7a3 3 0 0 1 3-3h3" />}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-[60px] font-inter">
        <div className="container max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          {/* Left: Circular photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src="/assets/images/avatar.png" alt="Ben Stokes" width={100} height={100} className="object-cover" />
            </div>
          </div>
          {/* Right: Quote, name, role */}
          <div className="flex flex-col justify-center">
            <blockquote className="italic text-[16px] text-[#888] mb-4">&quot;Really good platform for eLearning. I was a student on this platform learnt Digital Marketing from then. Now I am working as a freelancer in various marketplaces.&quot;</blockquote>
            <div className="font-bold text-[16px]">Ben Stokes</div>
            <div className="text-[14px] text-[#777]">Student of Marketing</div>
            {/* Pagination dots */}
            <div className="flex gap-2 mt-6">
              <span className="w-[14px] h-[14px] rounded-full bg-[#111] inline-block" />
              <span className="w-[14px] h-[14px] rounded-full bg-[#DDD] inline-block" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#FAF9F8] py-[100px] pb-[60px] font-inter">
        <div className="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start px-4">
          {/* Left: Label, heading, search */}
          <div>
            <span className="uppercase text-[12px] font-medium text-[#FF3F4F] tracking-wider">– FAQ</span>
            <h2 className="text-[32px] font-bold text-[#111] mt-2 mb-6">Most Asked Question.</h2>
            <input type="text" placeholder="Search anything…" className="w-full text-[16px] px-3 py-2 text-[#111] border border-[#CCC] rounded-[6px] mb-4" />
          </div>
          {/* Right: Accordion */}
          <div className="divide-y bg-white rounded-lg shadow p-4">
            {[0,1,2,3].map(idx => (
              <div key={idx} className="py-2">
                <button type="button" className="w-full flex justify-between items-center py-3 text-[16px] font-bold text-[#111] focus:outline-none" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  Do You Support?
                  <svg width="20" height="20" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24" className={`transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" /></svg>
                </button>
                {idx === 0 && (
                  <div className="pb-2 text-[14px] text-[#666]">Yes, we are offering jobs after completing this course. If you are interested in working with us then you can join.</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Map Section */}
      <section className="py-[100px] font-inter">
        <div className="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-stretch px-4">
          {/* Left: Contact form */}
          <div className="bg-[#4B6FF7] text-white rounded-[8px] p-8 flex flex-col justify-center">
            <h2 className="text-[24px] font-bold mb-6">Contact Us For Any Query.</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="rounded-[6px] bg-white text-black px-3 py-2 border border-[#DDD]" />
              <input type="email" placeholder="Email" className="rounded-[6px] bg-white text-black px-3 py-2 border border-[#DDD]" />
              <input type="tel" placeholder="Phone" className="rounded-[6px] bg-white text-black px-3 py-2 border border-[#DDD]" />
              <textarea placeholder="Message" className="rounded-[6px] bg-white text-black px-3 py-2 border border-[#DDD] min-h-[100px]" />
              <button type="submit" className="border border-white text-white px-5 py-3 rounded-[6px] text-[16px] font-medium bg-transparent hover:bg-[#FF3F4F] hover:text-white transition">Submit Now →</button>
            </form>
          </div>
          {/* Right: Map with doodle bg */}
          <div className="relative bg-[#111] rounded-[8px] flex items-center justify-center min-h-[320px] overflow-hidden">
            {/* Swirl doodle background */}
            <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 320" fill="none"><path d="M50,160 Q200,10 350,160 Q200,310 50,160" stroke="#fff" strokeWidth="8" fill="none"/></svg>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1357%2C51.4975%2C-0.1277%2C51.5015&amp;layer=mapnik"
              className="w-full h-full min-h-[320px] grayscale border-0 rounded-[8px] relative z-10"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
} 