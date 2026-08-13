"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const resourceLinks = [
  { label: "Help Center", href: "#faq" },
  { label: "Templates", href: "#faq" },
  { label: "Videos", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

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
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-navy/80 hover:text-navy"
              aria-expanded={resourcesOpen}
            >
              Resources
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {resourcesOpen ? (
              <div className="absolute left-1/2 top-full z-20 w-40 -translate-x-1/2 pt-2">
                <div className="rounded-md border border-line bg-cream py-2 shadow-lg">
                  {resourceLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-1.5 text-[13px] text-navy/80 hover:bg-cream-deep hover:text-navy"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="#login" className="text-[13px] font-medium text-navy/80 hover:text-navy">
            Login
          </Link>
          <Button href="#pricing" className="!px-4 !py-2.5 text-[13px]">
            Start 3-Day Free Trial
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-md p-2 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            {resourceLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="#login" className="text-sm font-medium text-navy" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Button href="#pricing" className="mt-1 w-full">
              Start 3-Day Free Trial
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
