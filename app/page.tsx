import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center px-6">
      <section className="text-center max-w-4xl mx-auto py-32">
        <h1 className="text-white text-6xl font-extrabold leading-tight mb-6">
          Unlock Your Potential with Next.js
        </h1>
        <p className="text-indigo-200 text-xl max-w-3xl mx-auto mb-12">
          Build lightning-fast, scalable applications with ease and confidence. Start crafting outstanding web experiences today.
        </p>
        <button className="bg-white text-indigo-700 font-semibold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-indigo-50 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}