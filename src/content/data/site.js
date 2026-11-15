export const site = {
  name: "Daivik Bharat",
  nameDevanagari: "दैविक भारत",
  url: "https://www.daivikbharat.in",
  email: "daivikbharat1@gmail.com",
  instagram: "https://www.instagram.com/daivikbharat",
  instagramHandle: "@daivikbharat",
  twitter: "https://twitter.com/daivikbharat",
  tagline: "Discover Bharat, one story at a time.",
  description:
    "A research-led platform of stories and explainers on India's history, spiritual heritage, geography, living traditions and place in the world. Sources shown, so you can make up your own mind.",
};

// The five content pillars from the brand strategy, plus open topics. No subject is off limits:
// add a topic here and tag articles with its slug.
export const topics = [
  { slug: "history", pillar: true, tone: "gold", name: "History and civilisation", blurb: "Dynasties, archaeology, trade routes, architecture and the knowledge systems that shaped India." },
  { slug: "spiritual", pillar: true, tone: "plum", name: "Sanatan Dharma and spiritual heritage", blurb: "Philosophy, scriptures, temples, pilgrimages and festivals, with belief and historical record kept clearly apart." },
  { slug: "geography", pillar: true, tone: "forest", name: "Geography and natural heritage", blurb: "Rivers, mountains, forests and how the land has shaped the people who live on it." },
  { slug: "culture", pillar: true, tone: "peacock", name: "Culture, communities and living traditions", blurb: "Languages, food, crafts, music and the many ways different regions celebrate." },
  { slug: "geopolitics", pillar: true, tone: "navy", name: "Geopolitics and strategic Bharat", blurb: "Diplomacy, trade corridors, the Indian Ocean and India's place in world affairs." },
  { slug: "polity", tone: "slate", name: "Polity and the Constitution", blurb: "How the state works: the Constitution, laws, courts and elections." },
  { slug: "economy", tone: "slate", name: "Economy and money", blurb: "Budgets, taxes, jobs and prices, explained for an ordinary household." },
  { slug: "science-tech", tone: "slate", name: "Science and technology", blurb: "Space, digital public infrastructure and the science behind the headlines." },
];

// Planned Instagram and website series from the content strategy.
export const series = [
  { title: "भारत की नदियाँ", subtitle: "Bharat ki nadiyan", topic: "geography", blurb: "India's rivers, one at a time, and the beliefs and stories that have grown up along their banks." },
  { title: "विविध भारत", subtitle: "Vividh Bharat", topic: "culture", blurb: "The diversity of India's food, languages and customs: where they come from and how they differ from region to region." },
  { title: "भू-राजनीति", subtitle: "Bhu-rajniti", topic: "geopolitics", blurb: "Maps, sea lanes and borders: the geography behind India's strategic choices." },
];

export const formats = {
  explainer: { name: "Explainer", plural: "Explainers", blurb: "A topic people argue about, broken down: what the sources say, how different sides see it, what's still unclear." },
  "myth-check": { name: "Myth-check", plural: "Myth-checks", blurb: "A viral claim, checked against primary sources, with our working shown." },
  story: { name: "Story", plural: "Stories", blurb: "Stories from India's traditions, told as the texts and the people who keep them tell them." },
};

export function topicBySlug(slug) {
  return topics.find((t) => t.slug === slug);
}

export function toneFor(article) {
  return topicBySlug(article.topics?.[0])?.tone || "navy";
}
