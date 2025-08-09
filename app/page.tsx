```tsx
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-blue-600 flex flex-col justify-center items-center text-white px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">OhmWork — No BS Electrician’s Guide</h1>
      <p className="mb-8 max-w-md">
        Your straightforward source for electrician tips, tricks, and best practices.
      </p>
      <a
        href="/guide"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition"
      >
        Get Started
      </a>
    </main>
  );
}
```