// app/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const slamVariants: Variants = {
  hidden: { opacity: 0, y: -120, scaleY: 0.8, rotate: -5 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    scaleY: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 16,
      delay,
    },
  }),
};

export default function Home() {
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
          transition: { type: "spring", stiffness: 160, damping: 14, delay: 0.2 },
        }}
      >
        OhmWork
      </motion.h1>

      {/* Subheaders with longer slam delay */}
      <div className="mt-8 space-y-3 text-xl md:text-3xl font-semibold text-white/90">
        <motion.p
          variants={slamVariants}
          initial="hidden"
          animate="show"
          custom={1.0}
        >
          Learn the Code.
        </motion.p>
        <motion.p
          variants={slamVariants}
          initial="hidden"
          animate="show"
          custom={1.6}
        >
          Pass the Exam.
        </motion.p>
        <motion.p
          variants={slamVariants}
          initial="hidden"
          animate="show"
          custom={2.2}
        >
          No BS.
        </motion.p>
      </div>

      {/* Button with toss + bounce */}
      <motion.div
        initial={{ opacity: 0, y: 120, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 200, damping: 8, delay: 2.8 },
        }}
        className="mt-12"
      >
        <Link href="/intro">
          <motion.button
            className="px-8 py-4 text-lg font-bold bg-green-500 text-black rounded-full shadow-lg hover:bg-green-400 transition-all"
            initial={false}
            animate={{
              y: [0, -18, 0, -10, 0, -5, 0],
              boxShadow: [
                "0 0 0 rgba(0,0,0,0)",
                "0 16px 28px rgba(0,0,0,0.45)",
                "0 10px 18px rgba(0,0,0,0.35)",
                "0 12px 20px rgba(0,0,0,0.4)",
                "0 8px 14px rgba(0,0,0,0.3)",
                "0 6px 10px rgba(0,0,0,0.25)",
                "0 8px 16px rgba(0,0,0,0.3)",
              ],
              transition: {
                delay: 3.0,
                duration: 1.8,
                ease: "easeOut",
                times: [0, 0.25, 0.45, 0.65, 0.8, 0.92, 1],
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Let’s Do This
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}