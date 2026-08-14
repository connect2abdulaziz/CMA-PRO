type IconProps = {
  className?: string;
};

export function CircleCheck({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M6.2 10.3l2.4 2.4 5.2-5.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleX({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SmileyFace({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12.2" cy="13.5" r="1.1" fill="currentColor" />
      <circle cx="19.8" cy="13.5" r="1.1" fill="currentColor" />
      <path d="M11.5 19c1.4 2.2 7.6 2.2 9 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Sparkle({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 1.5c.35 3.8 2.3 6.4 6.2 7.5-3.9 1.1-5.85 3.7-6.2 7.5-.35-3.8-2.3-6.4-6.2-7.5 3.9-1.1 5.85-3.7 6.2-7.5Z" />
    </svg>
  );
}

export function BabyFace({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="20" cy="21" r="12" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 16c2-5 14-5 16 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="16" cy="20.5" r="1.1" fill="currentColor" />
      <circle cx="24" cy="20.5" r="1.1" fill="currentColor" />
      <path d="M16.5 26c1.2 1.6 5.8 1.6 7 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function OpenHeadEmoji({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M16 8.2c-7.2 2.4-12 9.2-12 17 0 9.4 7.6 17 17 17s17-7.6 17-17c0-7.8-4.8-14.6-12-17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M16 8.2c2.4-3.2 13.6-3.2 16 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="17.5" cy="23" r="1.6" fill="currentColor" />
      <circle cx="30.5" cy="23" r="1.6" fill="currentColor" />
      <path
        d="M17.5 31.5c2.2 3.4 10.8 3.4 13 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OutlineArrow({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" fill="none" className={className} aria-hidden>
      <path
        d="M4 16h32M28 6l14 10L28 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FatArrow({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 88 56" fill="none" className={className} aria-hidden>
      <path
        d="M6 20.5c18-.6 36-1 48 .4 1.2.1 2.2-1 2.2-2.2V10.2c0-2.4 2.7-3.7 4.6-2.2l22.4 16.8c1.7 1.3 1.7 3.9 0 5.2L61 46.8c-1.9 1.5-4.6.2-4.6-2.2V35.8c0-1.3-1.1-2.3-2.4-2.2-12.2.8-30.2.4-48.2-.4C4.4 33 3 31.4 3 29.2v-5c0-2 1.4-3.6 3-3.7Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarBurst({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 8.5l3.2 8.4 8.8.4-6.8 5.6 2.3 8.6L24 26.8l-7.5 4.7 2.3-8.6-6.8-5.6 8.8-.4L24 8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M36 7l2.2-4M40 11l4-1.5M42 16l3.5.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NoteArrow({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 64 40" fill="none" className={className} aria-hidden>
      <path
        d="M8 6c8 14 28 24 48 26"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M48 22l10 10-12 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SquareCheck({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      className={`block ${className}`}
      aria-hidden
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 12.2l3.2 3.2 7-7.4"
        stroke="#c0822f"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OutlineStar({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      className={`block ${className}`}
      aria-hidden
    >
      <path
        d="M12 3.2l2.35 6.1 6.45.35-5.05 4.15 1.7 6.25L12 16.7 6.55 20.05l1.7-6.25-5.05-4.15 6.45-.35L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MonitorChart({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3.8 5h16.4v10.4H3.8V5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M2.6 16.8h18.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 19.6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M7.2 13.4V9.8M10.8 13.4V8M14.4 13.4V9.2M17.8 13.4v-2.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CalculatorIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="5.2" y="3" width="13.6" height="18" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7.6" y="5.4" width="8.8" height="3.4" rx="0.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8.5" cy="12.2" r="0.9" fill="currentColor" />
      <circle cx="12" cy="12.2" r="0.9" fill="currentColor" />
      <circle cx="15.5" cy="12.2" r="0.9" fill="currentColor" />
      <circle cx="8.5" cy="15.4" r="0.9" fill="currentColor" />
      <circle cx="12" cy="15.4" r="0.9" fill="currentColor" />
      <circle cx="15.5" cy="15.4" r="0.9" fill="currentColor" />
      <circle cx="8.5" cy="18.5" r="0.9" fill="currentColor" />
      <circle cx="12" cy="18.5" r="0.9" fill="currentColor" />
      <circle cx="15.5" cy="18.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function DocHouse({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6.8 3.2h7.6L19.4 8.4V20.8H6.8V3.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14.3 3.2V8.3H19.4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d="M9.5 17v-3.3l3.5-2.4 3.5 2.4V17h-2.3v-2.1h-2.4V17H9.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DocPie({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6.8 3.2h7.6L19.4 8.4V20.8H6.8V3.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14.3 3.2V8.3H19.4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="11.1" cy="14.8" r="2.8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11.1 14.8V12A2.8 2.8 0 0 1 13.8 14" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M15.4 13.4h2.4M15.4 15.8h1.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LaptopHeart({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.4v1.8M9.2 4.4l.9 1.3M14.8 4.4l-.9 1.3M7.4 6.2l1.2.9M16.6 6.2l-1.2.9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M4.6 8h14.8v8.4H4.6V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M3.2 17.8h17.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 15.3c.4-.85 2.05-1.75 2.05-.2 0 1.15-2.05 2.2-2.05 2.2s-2.05-1.05-2.05-2.2c0-1.55 1.65-.65 2.05.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
