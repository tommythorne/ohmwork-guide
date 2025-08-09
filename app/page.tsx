```tsx
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-600 text-white p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          OhmWork — No BS Electrician&apos;s Guide
        </h1>
        <p className="mb-6 text-lg">
          Your straightforward resource for everything electrical.
        </p>
        <a
          href="/guide"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}
```