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
    { 
      id: '01', 
      title: 'General Requirements', 
      href: '/modules/module-01',
      color: 'from-slate-800 via-slate-700 to-slate-600',
      borderColor: 'border-slate-500/30',
      textColor: 'text-slate-200'
    },
    { 
      id: '02', 
      title: 'Wiring & Protection', 
      href: '/modules/module-02',
      color: 'from-blue-900 via-blue-800 to-blue-700',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-200'
    },
    { 
      id: '03', 
      title: 'Wiring Methods', 
      href: '/modules/module-03',
      color: 'from-indigo-900 via-indigo-800 to-indigo-700',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-200'
    },
    { 
      id: '04', 
      title: 'Equipment for General Use', 
      href: '/modules/module-04',
      color: 'from-purple-900 via-purple-800 to-purple-700',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-200'
    },
    { 
      id: '05', 
      title: 'Special Occupancies', 
      href: '/modules/module-05',
      color: 'from-violet-900 via-violet-800 to-violet-700',
      borderColor: 'border-violet-500/30',
      textColor: 'text-violet-200'
    },
    { 
      id: '06', 
      title: 'Special Equipment', 
      href: '/modules/module-06',
      color: 'from-fuchsia-900 via-fuchsia-800 to-fuchsia-700',
      borderColor: 'border-fuchsia-500/30',
      textColor: 'text-fuchsia-200'
    },
    { 
      id: '07', 
      title: 'Special Conditions', 
      href: '/modules/module-07',
      color: 'from-pink-900 via-pink-800 to-pink-700',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-200'
    },
    { 
      id: '08', 
      title: 'Communications Systems', 
      href: '/modules/module-08',
      color: 'from-rose-900 via-rose-800 to-rose-700',
      borderColor: 'border-rose-500/30',
      textColor: 'text-rose-200'
    },
    { 
      id: '09', 
      title: 'Tables', 
      href: '/modules/module-09',
      color: 'from-red-900 via-red-800 to-red-700',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-200'
    },
    { 
      id: '10', 
      title: 'Annexes', 
      href: '/modules/module-10',
      color: 'from-orange-900 via-orange-800 to-orange-700',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-200'
    },
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
                <div className={`bg-gradient-to-br ${chapter.color} border ${chapter.borderColor} rounded-xl p-6 h-full hover:scale-105 hover:shadow-2xl transition-all duration-300 group backdrop-blur-sm`}>
                  <div className={`text-xl font-bold ${chapter.textColor} leading-tight`}>
                    {chapter.title}
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