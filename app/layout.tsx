// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OhmWork",
  description: "No BS Electrician's Guide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="min-h-screen flex flex-col items-center justify-center text-center p-4"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
