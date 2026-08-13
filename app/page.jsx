"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import NewsTicker from "@/components/layout/NewsTicker";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import HeroCard from "@/components/news/HeroCard";
import NewsGrid from "@/components/news/NewsGrid";
import JobsPanel from "@/components/jobs/JobsPanel";
import AudioPlayer from "@/components/media/AudioPlayer";
import GoogleAdSlot from "@/components/ui/GoogleAdSlot";
import TopStoriesAccordion from "@/components/news/TopStoriesAccordion";
import { featuredStory, newsItems, jobs, topStories } from "@/lib/data";
import { translations } from "@/lib/translations";

export default function HomePage() {
  const [language, setLanguage] = useState("en");
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header language={language} onLanguageChange={setLanguage} />
      <NewsTicker />

      <main className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <div className="grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
          <section className="space-y-6">
            <HeroCard story={featuredStory} />

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-black tracking-tight text-slate-900">Top stories</h2>
                <button className="text-sm font-semibold text-red-600">{t.viewAll}</button>
              </div>
              <TopStoriesAccordion items={topStories.slice(0, 4)} />
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="space-y-6" id="latest">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black tracking-tight text-slate-900">{t.latestStories}</h2>
                  <button className="text-sm font-semibold text-red-600">{t.viewAll}</button>
                </div>
                <NewsGrid items={newsItems} />
              </div>

              <div className="space-y-6">
                <AudioPlayer audioUrl={featuredStory.audioUrl} />
                <GoogleAdSlot label="Ad 300x250" height="h-60" />
              </div>
            </div>
          </section>

          <Sidebar language={language} />
        </div>

        <div className="mt-8">
          <JobsPanel jobs={jobs} />
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
