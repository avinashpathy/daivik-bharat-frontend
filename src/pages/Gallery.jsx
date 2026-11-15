import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo";
import { albums } from "../content/data/gallery";

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const dialog = useRef(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <div className="wrap page">
      <Seo title="Photos" path="/gallery" description="Photos from places we have visited." />
      <header className="page-header">
        <h1>Photos</h1>
        <p className="page-header__lede">Photos we took ourselves on our travels. Tap a photo to see it full size.</p>
      </header>
      {albums.map((album) => (
        <section key={album.slug} className="album" aria-labelledby={`album-${album.slug}`}>
          <h2 id={`album-${album.slug}`}>{album.name}</h2>
          <p className="meta">{album.place}</p>
          <div className="album__grid">
            {album.photos.map((p, i) => (
              <button key={i} className="album__photo" onClick={() => setOpen(p)} aria-label={`Open photo: ${p.alt}`}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </section>
      ))}
      <dialog ref={dialog} className="lightbox" onClose={() => setOpen(null)} onClick={(e) => e.target === dialog.current && setOpen(null)}>
        {open && (
          <figure>
            <img src={open.src} alt={open.alt} />
            <figcaption>{open.alt}</figcaption>
          </figure>
        )}
        <button className="lightbox__close" onClick={() => setOpen(null)}>Close</button>
      </dialog>
    </div>
  );
}
