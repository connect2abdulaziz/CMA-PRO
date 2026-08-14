"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";

const links = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Help Center", href: "/help" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-5 lg:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/#login" className="text-[13px] font-medium text-navy/80 hover:text-navy">
            Login
          </Link>
          <Button href="/#pricing" className="!px-4 !py-2.5 text-[13px]">
            Start 3-Day Free Trial
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-md p-2 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-cream px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#login" className="text-sm font-medium text-navy" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Button href="/#pricing" className="mt-1 w-full">
              Start 3-Day Free Trial
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
