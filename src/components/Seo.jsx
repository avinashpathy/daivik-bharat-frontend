import { site } from "../content/data/site";

// React 19 hoists these tags into <head>.
export default function Seo({ title, description = site.description, path = "" }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.nameDevanagari}`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={site.url + path} />
      <link rel="canonical" href={site.url + path} />
    </>
  );
}
