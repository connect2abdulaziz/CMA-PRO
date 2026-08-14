import Link from "next/link";
import { Logo } from "./Logo";

const socials = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "Instagram",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z",
  },
  {
    label: "YouTube",
    path: "M22.5 6.5s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C16.2 3 12 3 12 3h0s-4.2 0-7.4.2c-.4.1-1.4.1-2.2 1-.7.7-.9 2.3-.9 2.3S1.3 8.4 1.3 10.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.8 2.4.9 1.8.2 7.2.2 7.2.2s4.2 0 7.4-.2c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 14.3V7.9l6.2 3.2-6.2 3.2z",
  },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
  },
];

const columns = [
  {
    title: "PRODUCT",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Blog", href: "/#faq" },
      { label: "Contact", href: "/help" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Help Center", href: "/help" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 lg:px-6">
        <div className="grid gap-10 md:grid-cols-[1.35fr_1.25fr_0.7fr]">
          <div className="flex items-center gap-4">
            <Logo variant="footer" />
            <p className="max-w-[15rem] text-sm leading-snug text-cream/70">
              A better CMA process for the work you already do.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] font-semibold tracking-[0.14em] text-cream">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/65 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:text-right">
            <p className="text-sm font-medium text-cream/85">Built for agents.</p>
            <div className="mt-3 flex gap-2 md:justify-end">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-white/40 hover:text-cream"
                  aria-label={social.label}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} My CMA Pro. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-cream">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-cream">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
