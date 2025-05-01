// This file is the Blog listing page for the application
'use client'; // Enables client-side rendering for this page

// Import Next.js optimized image component
import Image from 'next/image';
// Import Next.js Link component for navigation
import Link from 'next/link';
// Import framer-motion for animations
// import { motion } from 'framer-motion';

// Array of blog categories for the hero section
const categories = [
  { name: 'Web Development', image: '/assets/images/pexels-8.jpg' },
  { name: 'Mobile Development', image: '/assets/images/pexels-2.jpg' },
  { name: 'UI/UX Design', image: '/assets/images/pexels-1.jpg' },
  { name: 'SEO & Marketing', image: '/assets/images/pexels-7.jpg' },
];

// Array of articles for the latest articles section
const articles = [
  {
    title: '6 Real Project Management Examples : How To Create A project Plan',
    date: 'February 1, 2022',
    comments: 7,
    excerpt: "Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate.",
    image: '/assets/images/pexels-5.jpg',
    slug: 'project-management-examples',
  },
  {
    title: 'How To Onboard A New Manager Or Team Leader Remotely',
    date: 'January 27, 2022',
    comments: 12,
    excerpt: "Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate.",
    image: '/assets/images/pexels-6.jpg',
    slug: 'onboard-new-manager',
  },
  {
    title: 'Why Managers Need To Model Continuous Learning Of Power Skills',
    date: 'January 22, 2022',
    comments: 9,
    excerpt: "Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate.",
    image: '/assets/images/pexels-7.jpg',
    slug: 'model-learning-power-skills',
  },
  {
    title: 'How To Succeed In The AWS Certified Developer Associate Exam',
    date: 'January 17, 2022',
    comments: 13,
    excerpt: "Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate.",
    image: '/assets/images/pexels-4.jpg',
    slug: 'aws-certified-developer',
  },
  {
    title: 'Why Big-Data Science Depends On Skilled Data Engineers',
    date: 'January 13, 2022',
    comments: 22,
    excerpt: "Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate.",
    image: '/assets/images/pexels-8.jpg',
    slug: 'big-data-science',
  },
];

// Array of popular posts for the sidebar
const popularPosts = [
  {
    title: 'How To Draw A Rose For A Beginners: Step By Step Guidelines',
    date: 'February 1, 2022',
    comments: 7,
    image: '/assets/images/pexels-2.jpg',
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
    image: '/assets/images/pexels-2.jpg',
  },
  {
    title: 'How To Use Dictation Software To Write A Book',
    date: 'February 1, 2022',
    comments: 3,
    image: '/assets/images/pexels-2.jpg',
  },
  {
    title: 'How To Draw A Rose For A Beginners: Step By Step Guidelines',
    date: 'February 1, 2022',
    comments: 7,
    image: '/assets/images/pexels-2.jpg',
  },
  {
    title: '10 Guitar Techniques To Take You From Beginner To Pro',
    date: 'February 1, 2022',
    comments: 2,
    image: '/assets/images/pexels-2.jpg',
  },
];

// Main BlogPage component
export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section: Blog categories as cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-500 font-semibold">-Blogs</span>
          {/* Main heading for the blog page */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Learn From The World&apos;s Best</h1>
          {/* Categories grid: Map over categories array to render each card */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                {/* Category image */}
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                {/* Overlay with category name */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{cat.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles & Sidebar Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Articles column: List of latest articles */}
          <div className="md:col-span-2">
            {/* Section heading for latest articles */}
            <h2 className="text-2xl font-bold mb-8 text-black">Latest Articles</h2>
            {/* Map over articles array to render each article card */}
            <div className="space-y-8">
              {articles.map((article, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow p-6">
                  {/* Article image */}
                  <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                  {/* Article content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Article title */}
                      <h3 className="text-xl font-bold mb-2 text-black">{article.title}</h3>
                      {/* Article meta info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.comments} Comments</span>
                      </div>
                      {/* Article excerpt */}
                      <p className="text-gray-600 mb-2">{article.excerpt}</p>
                      {/* Read More link */}
                      <Link href={`/blog/${article.slug}`} className="text-indigo-600 font-semibold hover:underline">Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sidebar column: Popular posts */}
          <aside>
            {/* Sidebar heading */}
            <h3 className="text-xl font-bold mb-6 text-black">Popular Posts</h3>
            {/* Map over popularPosts array to render each post */}
            <div className="space-y-6">
              {popularPosts.map((post, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  {/* Popular post image */}
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <div>
                    {/* Popular post title */}
                    <h4 className="text-sm font-bold mb-1 line-clamp-2 text-black">{post.title}</h4>
                    {/* Popular post meta info */}
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
} 