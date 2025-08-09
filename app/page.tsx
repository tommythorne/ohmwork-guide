```tsx
import React from "react";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-600 text-white px-6">
      <section className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          OhmWork — No BS Electrician’s Guide
        </h1>
        <p className="mb-8 text-lg">
          Clear, practical advice for electricians who want results.
        </p>
        <a
          href="/guide"
          className="inline-block rounded bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
```