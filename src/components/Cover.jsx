// Typographic cover: a Devanagari word on a tone from the site palette.
export default function Cover({ glyph, tone = "maroon", image, alt = "", size = "md" }) {
  if (image) {
    return (
      <div className={`cover cover--${size} cover--image`}>
        <img src={image} alt={alt} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`cover cover--${size} tone-${tone}`} aria-hidden="true">
      <span lang="hi">{glyph}</span>
    </div>
  );
}
