```tsx
import React from "react"

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-600 px-6">
      <div className="max-w-xl text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">OhmWork — No BS Electrician’s Guide</h1>
        <p className="mb-8 text-lg">Straightforward tips and tricks for electricians.</p>
        <a
          href="/guide"
          className="inline-block rounded bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </main>
  )
}
```