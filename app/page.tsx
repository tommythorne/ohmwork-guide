// app/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Build the sparkles scene inline and disable SSR for three.js
const SparkleBG = dynamic(
  async () => {
    const React = await import('react');
    const { Canvas } = await import('@react-three/fiber');
    const { Sparkles } = await import('@react-three/drei');

    function Scene() {
      return (
        <>
          {/* a dark, subtle vignette */}
          <mesh>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial color="#000" />
          </mesh>
          {/* sparkles layer */}
          <Sparkles
            count={180}
            size={2.2}
            speed={0.35}
            scale={[30, 20, 10]}
            color="#FACC15" // tailwind yellow-400
            noise={1}
          />
          {/* second, cooler layer for depth */}
          <Sparkles
            count={120}
            size={1.6}
            speed={0.25}
            scale={[30, 20, 10]}
            color="#60A5FA" // tailwind blue-400
            noise={1.2}
          />
        </>
      );
    }

    return function SparkleBG() {
      return (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Canvas camera={{ position: [0, 0, 9], fov: 50 }}>
            <Scene />
          </Canvas>
        </div>
      );
    };
  },
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* sparkles + gradient glows */}
      <SparkleBG />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(250,204,21,.12),transparent_60%),radial-gradient(40%_30%_at_80%_80%,rgba(96,165,250,.10),transparent_60%)]" />

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 pb-20 text-center sm:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl font-extrabold tracking-tight sm:text-7xl"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_8px_32px_rgba(250,204,21,.25)]">
            OhmWork
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-6 text-xl text-white/80 sm:text-2xl"
        >
          Learn the Code • Pass the Test • No BS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="mt-10 flex gap-4"
        >
          <Link
            href="/intro"
            className="inline-flex items-center rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black shadow-[0_10px_30px_-10px_rgba(250,204,21,.6)] transition hover:scale-[1.03] hover:shadow-[0_14px_36px_-8px_rgba(250,204,21,.75)]"
          >
            Let’s Do This
          </Link>

          <a
            href="#modules"
            className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/5 hover:text-white"
          >
            See Modules
          </a>
        </motion.div>

        {/* quick module teaser grid */}
        <motion.div
          id="modules"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-16 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <Link
              key={i}
              href={`/modules/module-${i + 1}`}
              className="group rounded-lg border border-white/10 bg-white/[.02] p-4 text-left transition hover:border-yellow-400/60 hover:bg-white/[.04]"
            >
              <div className="text-sm uppercase tracking-wide text-white/60">
                Module {i + 1}
              </div>
              <div className="mt-1 font-semibold text-white">
                {[
                  'Fundamentals',
                  'Wiring Methods',
                  'Branch Circuits',
                  'Services',
                  'Conductors & Ampacity',
                  'Grounding & Bonding',
                  'Boxes & Enclosures',
                  'Motors / HVAC',
                  'Special Occupancies',
                  'Low Voltage',
                  'Calculations',
                  'Inspection & Safety',
                ][i]}
              </div>
              <div className="mt-2 h-px w-full bg-gradient-to-r from-white/0 via-white/25 to-white/0 transition group-hover:from-yellow-300/0 group-hover:via-yellow-300/60 group-hover:to-yellow-300/0" />
            </Link>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
