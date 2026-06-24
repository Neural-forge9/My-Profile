"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-20 border-b border-border bg-background/95 backdrop-blur">
      <div className="editorial-container relative flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="group inline-flex items-stretch border border-border bg-card transition-colors hover:border-foreground/40"
          aria-label="Navdeep Singh portfolio home"
        >
          <span className="flex min-h-12 min-w-12 items-center justify-center bg-primary px-3 font-mono text-sm font-semibold text-primary-foreground">
            NS
          </span>
          <span className="flex flex-col justify-center px-4 py-2">
            <span className="text-base font-semibold leading-none tracking-[-0.02em] text-foreground">
              Navdeep Singh
            </span>
            <span className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
              Software Developer
            </span>
          </span>
        </Link>

        {isHome && (
          <div className="flex items-center gap-4 md:gap-6">
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
              <Link href="#projects" className="pill-control">
                Projects
              </Link>
              <Link href="#experience" className="pill-control">
                Experience
              </Link>
              <Link href="#skills" className="pill-control">
                Skills
              </Link>
            </nav>

            <a
              href="mailto:nvdeep0110@gmail.com"
              className="hidden items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
            >
              Contact
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              className="inline-flex size-12 items-center justify-center border border-border bg-card text-foreground transition-colors hover:border-foreground/40 md:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-site-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </div>

      {isHome && isMenuOpen && (
        <div id="mobile-site-navigation" className="border-t border-border bg-card md:hidden">
          <nav className="editorial-container grid gap-px bg-border py-px">
            <Link href="#projects" className="pill-control justify-start rounded-none px-4 py-4" onClick={closeMenu}>
              Projects
            </Link>
            <Link href="#experience" className="pill-control justify-start rounded-none px-4 py-4" onClick={closeMenu}>
              Experience
            </Link>
            <Link href="#skills" className="pill-control justify-start rounded-none px-4 py-4" onClick={closeMenu}>
              Skills
            </Link>
            <a
              href="mailto:nvdeep0110@gmail.com"
              className="inline-flex items-center justify-between bg-primary px-4 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={closeMenu}
            >
              Contact
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
