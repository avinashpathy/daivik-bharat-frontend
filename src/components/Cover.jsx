// Typographic cover: a word on a quiet tone. Used where we don't have our own photo.
export default function Cover({ glyph, tone = "indigo", image, alt = "", size = "md" }) {
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
