// A jaali: the pierced stone lattice found in temples, tombs, palaces and havelis across India.
// Drawn as overlapping circles in antique gold, it is the site's one decorative signature.
export default function Jaali({ className = "" }) {
  return (
    <svg className={`jaali ${className}`} aria-hidden="true" focusable="false" width="100%" height="100%">
      <defs>
        <pattern id="jaali-unit" width="48" height="48" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="0" cy="0" r="24" />
            <circle cx="48" cy="0" r="24" />
            <circle cx="0" cy="48" r="24" />
            <circle cx="48" cy="48" r="24" />
            <circle cx="24" cy="24" r="24" />
            <circle cx="24" cy="24" r="4" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jaali-unit)" />
    </svg>
  );
}
