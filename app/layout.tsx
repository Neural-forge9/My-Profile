import type {Metadata} from 'next';
import './globals.css';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/SiteHeader";
import { LiquidGradientBackground } from "@/components/LiquidGradientBackground";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Navdeep Singh - Software Developer',
  description: 'AI Product & Full-Stack Software Developer building practical AI-powered products.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("dark font-sans", inter.variable)}>
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <LiquidGradientBackground />
        <SiteHeader />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
