// A toran: the string of mango leaves and marigolds hung over Indian doorways.
// Used once, across the top of the home page, as the site's signature.
export default function Toran({ className = "" }) {
  return (
    <svg className={`toran ${className}`} aria-hidden="true" focusable="false" width="100%" height="58">
      <defs>
        <pattern id="toran-unit" width="56" height="58" patternUnits="userSpaceOnUse">
          <path d="M0 6 Q14 12 28 6 T56 6" fill="none" stroke="#7a1d12" strokeWidth="2" />
          <path d="M14 9 C 6 20, 8 36, 14 50 C 20 36, 22 20, 14 9 Z" fill="#2f6b3c" />
          <path d="M14 12 L14 46" stroke="#1f4b29" strokeWidth="1" />
          <line x1="42" y1="7" x2="42" y2="16" stroke="#7a1d12" strokeWidth="1.2" />
          <circle cx="42" cy="23" r="8" fill="#f0a020" />
          <circle cx="42" cy="23" r="5" fill="#e8692e" />
          <circle cx="42" cy="23" r="2" fill="#f3c24a" />
          <circle cx="42" cy="36" r="5.5" fill="#f0a020" />
          <circle cx="42" cy="36" r="3" fill="#e8692e" />
        </pattern>
      </defs>
      <rect width="100%" height="58" fill="url(#toran-unit)" />
    </svg>
  );
}
