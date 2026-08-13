export const categories = [
  { label: "Top Stories", slug: "top-stories" },
  { label: "Politics", slug: "politics" },
  { label: "Business", slug: "business" },
  { label: "Tech", slug: "tech" },
  { label: "World", slug: "world" },
  { label: "Sports", slug: "sports" },
  { label: "Entertainment", slug: "entertainment" },
  { label: "Health", slug: "health" },
];

export const languages = [
  { code: "en", label: "EN" },
  { code: "te", label: "తెలుగు" },
  { code: "hi", label: "हिंदी" },
];

export const tickerItems = [
  "Monsoon alert issued for coastal districts",
  "TSRTC launches new city bus routes",
  "Startup funding surges in Hyderabad",
  "India reaches 5G milestone in major cities",
  "Local teams gear up for weekend fixtures",
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Latest", href: "/#latest" },
  { label: "Videos", href: "/videos" },
  { label: "Podcasts", href: "/podcasts" },
  { label: "Jobs", href: "/jobs" },
  { label: "Photos", href: "/#latest" },
];

export const topStories = [
  {
    id: 1,
    slug: "hyderabad-smart-mobility-projects",
    title: "Hyderabad leads new urban innovation wave with smart mobility projects",
    summary:
      "City planners, tech leaders and citizens are collaborating on next-generation transit and digital services aimed at reducing congestion and expanding access.",
    category: "Top Stories",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    author: "Ananya Rao",
    timestamp: "2 hours ago",
    body: [
      "City administrators have unveiled a new portfolio of mobility projects focused on connected buses, digital transit maps, and safer pedestrian routes across high-growth corridors.",
      "The initiative is expected to reduce commute times while opening up public services to more residents in underserved neighbourhoods.",
      "Officials said data from recent pilot programs showed improved average travel reliability and better last-mile connectivity for commuters.",
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    slug: "state-budget-rural-connectivity",
    title: "State budget boosts rural connectivity and irrigation support",
    category: "Politics",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
    summary: "Officials say the spending package will target agricultural resilience and last-mile digital access.",
    type: "article",
    duration: null,
    author: "Vikram Sen",
    body: [
      "The state allocation includes a stronger digital access plan to extend connectivity to remote villages and agricultural clusters.",
      "Farm leaders said the package could improve irrigation scheduling and reduce pressure on water infrastructure during the monsoon cycle.",
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    slug: "ai-clinics-early-screening",
    title: "AI-enabled clinics improve early screening in underserved districts",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    summary: "Researchers are piloting low-cost diagnostic models to widen preventive care coverage.",
    type: "audio",
    duration: "3:42",
    author: "Meera Iyer",
    body: [
      "Pilot clinics using AI-assisted screening have reported faster detection of chronic conditions in communities that lack specialist access.",
      "Doctors believe the model will help prioritize preventive treatment while keeping costs low for public health systems.",
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    slug: "chennai-electric-cargo-delivery",
    title: "Chennai startup unveils low-cost electric cargo delivery platform",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    summary: "The new fleet model aims to reduce fuel consumption and improve market reach for small sellers.",
    type: "video",
    duration: "4:18",
    author: "Karan Singh",
    body: [
      "The startup said its electric cargo system reduces delivery cost per trip while allowing smaller retailers to expand beyond dense urban clusters.",
      "Analysts expect the partnership model to attract more sellers in regional supply chains that are still dependent on traditional fleets.",
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    slug: "city-schools-bilingual-stem-labs",
    title: "City schools adopt bilingual STEM labs to widen access",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    summary: "Teachers say hands-on labs are improving participation among students from mixed-language backgrounds.",
    type: "article",
    duration: null,
    author: "Nisha Reddy",
    body: [
      "District administrators said bilingual instruction is helping students transition more easily into technical subjects and digital skill training.",
      "School leaders argued that the new curriculum could improve both learning outcomes and student confidence in competitive academic programs.",
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    slug: "weekend-cricket-finals-record-viewership",
    title: "Weekend cricket finals draw record viewership in regional markets",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80",
    summary: "Analysts point to growing interest in live sports coverage and fan-led storytelling formats.",
    type: "video",
    duration: "2:56",
    author: "Rahul Das",
    body: [
      "Regional broadcast networks recorded record watch time as more fans tuned in for the final match and live commentary segments.",
      "Commentators linked the spike to improved coverage quality, fan moments, and a growing appetite for digital-first sports storytelling.",
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 7,
    slug: "film-producers-local-language-storytelling",
    title: "Film producers lean into local language storytelling with global appeal",
    category: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    summary: "Streaming platforms are investing in diverse narratives that connect regional audiences with wider markets.",
    type: "article",
    duration: null,
    author: "Sana Khan",
    body: [
      "Producers said culturally rooted storytelling is resonating strongly with audiences as digital streaming expands across language groups.",
      "The trend is also boosting demand for niche regional talent and more diverse creative collaborations in the entertainment supply chain.",
    ],
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export const featuredStory = topStories[0];
export const newsItems = topStories.slice(1);

export const jobs = [
  {
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    company: "UrbanNest",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹18–24 LPA",
    description: "Design intuitive civic tech experiences for public transport and housing dashboards.",
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    company: "Aster Labs",
    location: "Bengaluru",
    type: "Hybrid",
    salary: "₹12–18 LPA",
    description: "Turn campaign and marketplace metrics into actionable growth recommendations.",
  },
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    company: "Nexa Media",
    location: "Remote",
    type: "Contract",
    salary: "₹15–21 LPA",
    description: "Build fast, accessible interfaces for community-first news and storytelling products.",
  },
  {
    slug: "operations-manager",
    title: "Operations Manager",
    company: "GreenGrid",
    location: "Pune",
    type: "Full-time",
    salary: "₹16–20 LPA",
    description: "Coordinate infrastructure delivery for clean-energy expansion and facility rollouts.",
  },
];

export const sportsHighlights = [
  "Runners set new pace records in city marathon",
  "National women’s team workouts intensify before qualifiers",
  "Local football club announces youth academy expansion",
];

export const adSlots = [
  { id: "top-banner", label: "Ad 728x90" },
  { id: "sidebar-box", label: "Ad 300x250" },
  { id: "in-article", label: "Ad 970x250" },
];

export function getArticleBySlug(slug) {
  return topStories.find((story) => story.slug === slug);
}

export function getJobBySlug(slug) {
  return jobs.find((job) => job.slug === slug);
}
