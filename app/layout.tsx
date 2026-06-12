import type {Metadata} from 'next';
import './globals.css';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Navdeep Singh - Software Developer',
  description: 'AI Product & Full-Stack Software Developer building practical AI-powered products.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("dark font-sans", inter.variable)}>
      <body className="min-h-screen bg-[#0f1115] text-[#f8fafc] antialiased selection:bg-[#d2ff36]/30 selection:text-white" suppressHydrationWarning>
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-24">
          {children}
        </div>
      </body>
    </html>
  );
}
