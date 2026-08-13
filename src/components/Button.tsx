import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[5px] text-center font-sans font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  const styles =
    variant === "primary"
      ? "bg-gold px-5 py-3 text-sm text-white hover:bg-gold-hover sm:px-6 sm:text-[15px]"
      : "bg-transparent px-1 py-2 text-sm text-navy underline decoration-navy/30 underline-offset-4 hover:text-gold hover:decoration-gold sm:text-[15px]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
