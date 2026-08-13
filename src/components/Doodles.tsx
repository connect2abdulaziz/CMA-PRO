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

export function CompBars({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 18V12M12 18V7M18 18v-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SheetIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 4.75h7l3.5 3.5V19.25H7V4.75Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M14 4.75V8.5h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path
        d="M10 12.25h4.5M10 15.5h3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HouseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4.5 11.5 12 5l7.5 6.5V19.5H4.5V11.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M10 19.5v-5h4v5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function PagesIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="6.5" y="6.5" width="11" height="13" rx="0.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9.25 4.75h11v13" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path
        d="M9.25 11h5M9.25 14.25h3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CrescentMoon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M15.2 4.8A7.8 7.8 0 1 0 19 16.6 6.4 6.4 0 0 1 15.2 4.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
