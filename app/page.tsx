```tsx
import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-700 text-white px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">
        OhmWork — No BS Electrician’s Guide
      </h1>
      <p className="mb-8 max-w-md">
        Your straightforward, no-nonsense resource to master electrical work.
      </p>
      <a
        href="/guide"
        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </main>
  );
}
```