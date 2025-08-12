'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const slam = (delay: number) => ({
    initial: { opacity: 0, y: -120, scaleY: 0.8, rotate: -5 },
    animate: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 220,
        damping: 16,
        delay
      }
    }
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      {/* OhmWork dramatic entrance */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.4, rotate: -8 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { type: 'spring', stiffness: 160, damping: 14, delay: 0.2 }
        }}
      >
        OhmWork
      </motion.h1>

      {/* Subheaders with longer slam delay */}
      <div className="mt-8 space-y-3 text-xl md:text-3xl font-semibold text-white/90">
        <motion.p {...slam(1)}>Learn the Code.</motion.p>
        <motion.p {...slam(1.4)}>Pass the Exam.</motion.p>
        <motion.p {...slam(1.8)}>No BS.</motion.p>
      </div>

      {/* Button with bounce effect */}
      <motion.div
        initial={{ opacity: 0, y: 120, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 200, damping: 8, delay: 2.4 }
        }}
        whileHover={{ scale: 1.05 }}
        className="mt-12"
      >
        <Link
          href="/intro"
          className="px-8 py-4 text-lg font-bold bg-green-500 text-black rounded-full shadow-lg hover:bg-green-400 transition-all"
        >
          Let’s Do This
        </Link>
      </motion.div>
    </main>
  );
}