'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold text-yellow-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        OhmWork
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mt-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        No BS Electrician's Guide
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-8"
      >
        <Link href="/intro">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl text-lg">
            Enter
          </button>
        </Link>
      </motion.div>
    </main>
  );
}
 
