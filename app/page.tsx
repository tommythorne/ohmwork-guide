'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Sparkles from 'react-sparkle';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white grid place-items-center overflow-hidden">
      <div className="w-full max-w-[960px] px-6 text-center">
        {/* OhmWork — dramatic entrance with sparkles */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.86, rotate: -2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[64px] md:text-[96px] font-extrabold leading-[0.95] text-yellow-400 drop-shadow-[0_10px_26px_rgba(250,204,21,0.35)]"
          >
            OhmWork
          </motion.h1>
          <Sparkles
            color="rgba(250, 204, 21, 0.6)"
            count={20}
            minSize={3}
            maxSize={6}
            fadeOutSpeed={30}
            flicker={false}
          />
        </div>

        {/* Subheader slam text */}
        <div className="mt-6 space-y-2 md:space-y-3 text-[22px] md:text-[28px] font-bold text-white">
          <motion.p
            initial={{ opacity: 0, y: -80, scaleY: 1.28, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, scaleY: 1, rotate: 0 }}
            transition={{
              delay: 0.7,
              type: 'spring',
              stiffness: 900,
              damping: 28,
              mass: 0.55,
            }}
            className="text-white/95"
          >
            Learn the Code.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: -80, scaleY: 1.28, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, scaleY: 1, rotate: 0 }}
            transition={{
              delay: 1.4,
              type: 'spring',
              stiffness: 900,
              damping: 28,
              mass: 0.55,
            }}
            className="text-white/95"
          >
            Pass the Exam.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: -80, scaleY: 1.28, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, scaleY: 1, rotate: 0 }}
            transition={{
              delay: 2.1,
              type: 'spring',
              stiffness: 900,
              damping: 28,
              mass: 0.55,
            }}
            className="text-white/95"
          >
            No BS.
          </motion.p>
        </div>

        {/* Let's Do This button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: [-50, 0, -18, 0, -8, 0],
          }}
          transition={{
            delay: 2.8,
            duration: 1.4,
            times: [0, 0.45, 0.65, 0.82, 0.92, 1],
            ease: 'easeOut',
          }}
        >
          <Link href="/intro">
            <button className="select-none rounded-xl px-6 py-3 text-lg font-bold
                             bg-green-500 text-black shadow-lg shadow-green-500/25
                             hover:bg-green-600 hover:shadow-green-500/35
                             transition-all duration-300 ease-out
                             focus:outline-none focus:ring-2 focus:ring-green-400
                             active:scale-[0.98] animate-pulse">
              Let's Do This
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}