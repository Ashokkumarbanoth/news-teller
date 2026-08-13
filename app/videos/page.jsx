import Link from "next/link";
import { newsItems } from "@/lib/data";

export default function VideosPage() {
  const videos = newsItems.filter((item) => item.type === "video");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="mb-6 inline-block text-sm font-semibold text-red-600">
        ← Back to home
      </Link>
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">Video</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Latest videos</h1>
      </div>

      <div className="space-y-5">
        {videos.map((item) => (
          <div key={item.slug} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                <p className="text-sm text-slate-500">{item.author}</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.duration}</span>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl bg-slate-950">
              <video controls className="w-full" src={item.videoUrl} preload="metadata">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
