export const site = {
  name: "Daivik Bharat",
  nameDevanagari: "दैविक भारत",
  url: "https://www.daivikbharat.in",
  email: "daivikbharat1@gmail.com",
  instagram: "https://www.instagram.com/daivikbharat",
  instagramHandle: "@daivikbharat",
  twitter: "https://twitter.com/daivikbharat",
  tagline: "Read the sources first. Then make up your mind.",
  description:
    "Explainers on India's history, polity, economy, culture and the debates around them. We lay out the sources and the arguments so you can form your own view.",
};

// Topics are deliberately broad and open-ended. Add one here and tag articles with its slug.
export const topics = [
  { slug: "polity", name: "Polity and the Constitution", blurb: "How the state works: the Constitution, laws, courts, elections." },
  { slug: "history", name: "History", blurb: "What happened, how we know, and why historians still disagree." },
  { slug: "economy", name: "Economy and money", blurb: "Budgets, taxes, jobs, prices and what they mean for an ordinary household." },
  { slug: "society", name: "Society", blurb: "Caste, language, gender, migration, education and how India lives together." },
  { slug: "culture-faith", name: "Culture and faith", blurb: "Religions, festivals, texts and traditions across India, told as their followers tell them." },
  { slug: "world", name: "India and the world", blurb: "Foreign policy, trade, borders and India's place in global debates." },
  { slug: "science-tech", name: "Science and technology", blurb: "Space, digital public infrastructure, health and the science behind the headlines." },
  { slug: "environment", name: "Environment", blurb: "Climate, water, air, forests and the trade-offs behind development." },
];

export const formats = {
  explainer: { name: "Explainer", plural: "Explainers", blurb: "A topic people argue about, broken down: what the sources say, how different sides see it, what's still unclear." },
  "myth-check": { name: "Myth-check", plural: "Myth-checks", blurb: "A viral claim, checked against primary sources, with our working shown." },
  story: { name: "Story", plural: "Stories", blurb: "Stories from India's traditions, told as the texts and the people who keep them tell them." },
};

export function topicBySlug(slug) {
  return topics.find((t) => t.slug === slug);
}
