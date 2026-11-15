import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import NotFound from "./NotFound";
import { findStotra } from "../lib/content";

const sizes = [1.15, 1.35, 1.6, 1.9];

export default function Stotra() {
  const { slug } = useParams();
  const stotra = findStotra(slug);
  const [size, setSize] = useState(() => {
    try {
      return Number(localStorage.getItem("db-verse-size")) || 1;
    } catch {
      return 1;
    }
  });
  if (!stotra) return <NotFound />;

  const change = (delta) => {
    const next = Math.min(sizes.length - 1, Math.max(0, size + delta));
    setSize(next);
    try {
      localStorage.setItem("db-verse-size", String(next));
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <article className="stotra">
      <Seo title={`${stotra.titleEn} (${stotra.title})`} description={stotra.summary} path={`/texts/${slug}`} />
      <header className={`stotra__header tone-${stotra.tone}`}>
        <div className="wrap">
          <Link className="back-link back-link--light" to="/texts">All texts</Link>
          <h1 lang="hi">{stotra.title}</h1>
          <p className="stotra__en">{stotra.titleEn}</p>
          {stotra.attribution && <p className="stotra__attr">{stotra.attribution}</p>}
        </div>
      </header>
      <div className="wrap stotra__body">
        <div className="text-size" role="group" aria-label="Text size">
          <span>Text size</span>
          <button onClick={() => change(-1)} disabled={size === 0} aria-label="Smaller text">A−</button>
          <button onClick={() => change(1)} disabled={size === sizes.length - 1} aria-label="Larger text">A+</button>
        </div>
        <div lang="hi" className="verses" style={{ "--verse-size": `${sizes[size]}rem` }}>
          {stotra.parts.map((part, i) => (
            <section key={i} className="verses__part">
              {part.heading && <h2>{part.heading}</h2>}
              {part.verses.map((lines, j) => (
                <p key={j} className="verse">
                  {lines.map((line, k) => (
                    <span key={k}>{line}</span>
                  ))}
                </p>
              ))}
            </section>
          ))}
          {stotra.colophon && <p className="colophon">{stotra.colophon}</p>}
        </div>
      </div>
    </article>
  );
}
