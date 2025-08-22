"use client";
import Link from "next/link";

type NavLink = { href: string; label: string };

export default function FooterNav({
  prev,
  next,
  tocHref = "/intro",
}: {
  prev?: NavLink;
  next?: NavLink;
  tocHref?: string;
}) {
  return (
    <footer className="mx-auto max-w-5xl mt-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-white/[0.03] rounded-xl border border-white/20">
        <div className="flex items-center gap-3">
          <Link
            href={tocHref}
            className="px-5 py-2 rounded-lg border border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12] transition"
          >
            ← Back to TOC
          </Link>

          {prev && (
            <Link
              href={prev.href}
              className="px-5 py-2 rounded-lg border border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12] transition"
            >
              ← {prev.label}
            </Link>
          )}
        </div>

        <div className="text-white/60 text-sm order-first sm:order-none">
          OhmWork • OhmWork™ 2025
        </div>

        <div>
          {next ? (
            <Link
              href={next.href}
              className="px-6 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
            >
              {next.label} →
            </Link>
          ) : (
            <Link
              href={tocHref}
              className="px-6 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
            >
              Back to TOC →
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
