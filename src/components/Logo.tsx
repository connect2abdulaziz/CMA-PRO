import Link from "next/link";

type LogoProps = {
  href?: string;
  variant?: "header" | "footer";
};

export function Logo({ href = "/", variant = "header" }: LogoProps) {
  const isFooter = variant === "footer";
  const myFill = isFooter ? "#fdfbf7" : "#0d1c28";
  const goldFill = "#c0822f";

  const mark = (
    <svg
      viewBox="0 0 92 98"
      className={isFooter ? "h-[4.25rem] w-auto sm:h-[4.75rem]" : "h-11 w-auto sm:h-12"}
      role="img"
      aria-label="My CMA PRO"
    >
      <text
        x="6"
        y="22"
        fill={myFill}
        fontFamily="var(--font-display), Georgia, serif"
        fontSize="20"
        fontWeight="500"
      >
        My
      </text>
      <text
        x="0"
        y="56"
        fill={goldFill}
        fontFamily="var(--font-display), Georgia, serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        CMA
      </text>
      <text
        x="0"
        y="90"
        fill={goldFill}
        fontFamily="var(--font-display), Georgia, serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="1.5"
      >
        PRO
      </text>
    </svg>
  );

  if (!href) return mark;

  return (
    <Link href={href} className="inline-flex items-center" aria-label="My CMA PRO home">
      {mark}
    </Link>
  );
}
