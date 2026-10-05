const base = "https://newsteller.vercel.app";

const articles = [
  "hyderabad-smart-mobility-projects",
  "state-budget-rural-connectivity",
  "ai-clinics-early-screening",
  "chennai-electric-cargo-delivery",
  "city-schools-bilingual-stem-labs",
  "weekend-cricket-finals-record-viewership",
  "film-producers-local-language-storytelling",
];

const categories = [
  "top-stories", "politics", "business", "tech",
  "world", "sports", "entertainment", "health",
];

export default function sitemap() {
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/videos` },
    { url: `${base}/podcasts` },
    { url: `${base}/jobs` },
    ...categories.map((c) => ({ url: `${base}/category/${c}` })),
    ...articles.map((a) => ({ url: `${base}/news/${a}` })),
  ];
}