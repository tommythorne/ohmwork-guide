// app/page.tsx
'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

// Variants for the “slam” lines (TS-safe)
const slamVariants: Variants = {
  hidden: { opacity: 0, y: -80, scaleY: 1.28, rotate: -1.5 },
  show: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 900,
      damping: 28,
      mass: 0.55,
    },
  },
};

// Helper component for a slam line with delay & reduced-motion
function SlamLine({ delay, children }: { delay: number; children: ReactNode }) {
  const prefersReduced = useReducedMotion();
  return prefersReduced ? (
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}>
      {children}
    </motion.p>
  ) : (
    <motion.p initial="hidden" animate="show" variants={slamVariants} transition={{ delay }}>
      {children}
    </motion.p>
  );
}

export default function Home() {
  const prefersReduced = useReducedMotion();

  // timings (s)
  const dOhm = 0.0;
  const d1 = 0.9;
  const d2 = 1.7;
  const d3 = 2.5;
  const dBtn = 3.4;

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white grid place-items-center overflow-hidden">
      <div className="w-full max-w-[960px] px-6 text-center">
        {/* OhmWork — dramatic entrance */}
        <motion.h1
          initial={
            prefersReduced
              ? { opacity: 0 }
              : { opacity: 0, y: 20, scale: 0.86, filter: 'blur(6px)' }
          }
          animate={
            prefersReduced
              ? { opacity: 1 }
              : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
          }
          transition={
            prefersReduced
              ? { delay: dOhm, duration: 0.6 }
              : { delay: dOhm, duration: 0.9, ease: [0.16, 1, 0.3, 1] }
          }
          className="text-[64px] md:text-[96px] font-extrabold leading-[0.95] text-yellow-400 drop-shadow-[0_10px_26px_rgba(250,204,21,0.35)]"
        >
          OhmWork
        </motion.h1>

        {/* Lines — slam with spacing */}
        <div className="mt-6 space-y-2 md:space-y-3 text-[22px] md:text-[28px] font-medium text-white/95">
          <SlamLine delay={d1}>Learn the Code.</SlamLine>
          <SlamLine delay={d2}>Pass the Exam.</SlamLine>
          <SlamLine delay={d3}>No BS.</SlamLine>
        </div>

        {/* CTA — toss & bounce, green, no outline */}
        <motion.div
          className="mt-10"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -50 }}
          animate={
            prefersReduced
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: [-50, 0, -18, 0, -8, 0],
                  transition: {
                    delay: dBtn,
                    duration: 1.4,
                    times: [0, 0.45, 0.65, 0.82, 0.92, 1],
                    ease: 'easeOut',
                  },
                }
          }
          transition={prefersReduced ? { delay: dBtn, duration: 0.4 } : undefined}
        >
          <Link href="/intro" prefetch>
            <button
              className="select-none rounded-xl px-6 py-3 text-lg font-semibold
                         bg-green-500 text-black shadow-lg shadow-green-500/25
                         hover:bg-green-600 hover:shadow-green-500/35
                         transition-transform duration-300 ease-out
                         focus:outline-none focus:ring-0 active:scale-[0.98]"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.boxShadow =
                  '0 10px 24px rgba(34,197,94,0.35), 0 6px 12px rgba(34,197,94,0.18)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.boxShadow = '0 10px 18px rgba(34,197,94,0.25)';
              }}
            >
              Let’s Do This
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Soft vignette + subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_35%,rgba(250,204,21,0.05),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]
                   [background-image:linear-gradient(to_right,rgba(255,255,255,.8)_1px,transparent_1px),
                                     linear-gradient(to_bottom,rgba(255,255,255,.8)_1px,transparent_1px)];
                   [background-size:60px_60px]"
      />
    </main>
  );
}