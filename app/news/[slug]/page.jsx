import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/" className="mb-6 inline-block text-sm font-semibold text-red-600">
        ← Back to home
      </Link>

      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative h-80 w-full">
          <Image src={article.image} alt={article.title} fill className="object-cover" />
        </div>

        <div className="space-y-6 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.timestamp}</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">{article.title}</h1>

          <p className="text-lg leading-8 text-slate-700">{article.summary}</p>

          {article.body?.map((paragraph, index) => (
            <p key={`${article.id}-${index}`} className="text-base leading-8 text-slate-700">
              {paragraph}
            </p>
          ))}

          {article.videoUrl ? (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
              <video controls className="w-full" src={article.videoUrl} preload="metadata">
                Your browser does not support the video tag.
              </video>
            </div>
          ) : null}

          {article.audioUrl ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <audio controls className="w-full" src={article.audioUrl} preload="metadata">
                Your browser does not support the audio element.
              </audio>
            </div>
          ) : null}
        </div>
      </article>
    </main>
  );
}
