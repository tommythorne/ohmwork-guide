// app/page.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const prefersReduced = useReducedMotion();

  // Timings (seconds)
  const t0 = 0;          // start
  const tOhm = 0.15;     // OhmWork entrance duration
  const gap = 0.25;      // delay between slam lines
  const slamDur = 0.5;   // each slam length
  const btnDelay = t0 + tOhm + gap * 3 + 0.2; // after all lines finish

  return (
    <main className="min-h-screen bg-black text-white grid place-items-center p-6">
      <div className="text-center select-none">
        {/* OHMWORK — dramatic entrance */}
        <motion.h1
          className="text-6xl sm:text-8xl font-extrabold tracking-tight text-yellow-400"
          initial={
            prefersReduced
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.6, y: -40, filter: 'blur(6px)' }
          }
          animate={
            prefersReduced
              ? { opacity: 1 }
              : { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }
          }
          transition={{ delay: t0, duration: tOhm, ease: [0.16, 1, 0.3, 1] }}
        >
          OhmWork
        </motion.h1>

        {/* Slam lines */}
        <div className="mt-5 space-y-2">
          {['Learn the Code.', 'Pass the Exam.', 'No BS.'].map((line, i) => (
            <motion.p
              key={line}
              className="text-2xl sm:text-3xl font-semibold"
              initial={
                prefersReduced
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      y: -60,
                      scale: 1.12,
                      rotate: -2,
                      filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))',
                    }
              }
              animate={
                prefersReduced
                  ? { opacity: 1 }
                  : {
                      opacity: [0, 1, 1],
                      y: [-60, 8, 0],
                      scale: [1.12, 0.98, 1],
                      rotate: [-2, 1.5, 0],
                      filter: [
                        'drop-shadow(0 0 0 rgba(0,0,0,0))',
                        'drop-shadow(0 12px 18px rgba(0,0,0,0.45))',
                        'drop-shadow(0 6px 10px rgba(0,0,0,0.25))',
                      ],
                    }
              }
              transition={{
                delay: t0 + tOhm + i * gap,
                duration: slamDur,
                times: [0, 0.55, 1],
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* CTA button — jump in then bounce with glow */}
        <motion.div
          className="mt-10"
          initial={
            prefersReduced
              ? { opacity: 1 }
              : { opacity: 0, y: 30, scale: 0.9 }
          }
          animate={
            prefersReduced
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: [30, -14, 0, -6, 0],
                  scale: [0.9, 1.04, 1, 1.02, 1],
                  boxShadow: [
                    '0 0 0 rgba(250, 204, 21, 0)',
                    '0 0 32px rgba(250, 204, 21, 0.45)',
                    '0 0 18px rgba(250, 204, 21, 0.28)',
                    '0 0 26px rgba(250, 204, 21, 0.38)',
                    '0 0 14px rgba(250, 204, 21, 0.2)',
                  ],
                }
          }
          transition={{
            delay: btnDelay,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link
            href="/intro"
            className="inline-flex items-center rounded-xl bg-yellow-400 px-7 py-3 font-semibold text-black shadow-[0_8px_20px_rgba(250,204,21,0.3)] hover:shadow-[0_10px_26px_rgba(250,204,21,0.45)] hover:scale-[1.02] transition"
          >
            Let’s Do This
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
