'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function IntroPage() {
  const chapters = [
    { id: '01', title: 'Chapter 1', subtitle: 'General Requirements', href: '/modules/module-01' },
    { id: '02', title: 'Chapter 2', subtitle: 'Wiring & Protection', href: '/modules/module-02' },
    { id: '03', title: 'Chapter 3', subtitle: 'Wiring Methods', href: '/modules/module-03' },
    { id: '04', title: 'Chapter 4', subtitle: 'Equipment for General Use', href: '/modules/module-04' },
    { id: '05', title: 'Chapter 5', subtitle: 'Special Occupancies', href: '/modules/module-05' },
    { id: '06', title: 'Chapter 6', subtitle: 'Special Equipment', href: '/modules/module-06' },
    { id: '07', title: 'Chapter 7', subtitle: 'Special Conditions', href: '/modules/module-07' },
    { id: '08', title: 'Chapter 8', subtitle: 'Communications Systems', href: '/modules/module-08' },
    { id: '09', title: 'Chapter 9', subtitle: 'Tables', href: '/modules/module-09' },
    { id: '10', title: 'Chapter 10', subtitle: 'Annexes', href: '/modules/module-10' },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6 overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          variants={heroVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Welcome to OhmWork
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Master the National Electrical Code. Pick your chapter and dive in.
          </p>
        </motion.div>

        {/* Chapter Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
        >
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Link href={chapter.href} className="block">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">
                    {chapter.title}
                  </div>
                  <div className="text-sm text-white/70 leading-relaxed">
                    {chapter.subtitle}
                  </div>
                  <div className="mt-4 text-xs text-green-400/80 font-medium group-hover:text-green-400 transition-colors">
                    Start Learning →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 hover:bg-white/5 hover:border-white/30 transition-all duration-300 group"
          >
            <span className="text-white/80 group-hover:text-white transition-colors">←</span>
            <span className="text-white/80 group-hover:text-white transition-colors">Back to Home</span>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}