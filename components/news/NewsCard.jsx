"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import VideoModal from "@/components/media/VideoModal";

export default function NewsCard({ item }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const detailHref = item.slug ? `/news/${item.slug}` : "/";

  return (
    <>
      <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 inline-flex rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800">
            {item.category}
          </div>
          {item.duration ? (
            <div className="absolute bottom-3 right-3 rounded-full bg-slate-900/80 px-2 py-1 text-[10px] font-semibold text-white">
              {item.duration}
            </div>
          ) : null}
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span>{item.type}</span>
            <span>{item.author}</span>
          </div>
          <h3 className="text-lg font-bold leading-snug text-slate-900">{item.title}</h3>
          <p className="text-sm leading-6 text-slate-600">{item.summary}</p>

          <div className="flex items-center gap-3">
            <Link href={detailHref} className="text-sm font-semibold text-red-600">
              Read more →
            </Link>
            {item.type === "video" ? (
              <button type="button" onClick={() => setVideoOpen(true)} className="text-sm font-semibold text-slate-700">
                Watch video
              </button>
            ) : null}
          </div>
        </div>
      </article>

      {item.type === "video" ? (
        <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} videoUrl={item.videoUrl} title={item.title} />
      ) : null}
    </>
  );
}
