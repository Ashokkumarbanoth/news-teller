import Image from "next/image";

export default function HeroCard({ story }) {
  if (!story) return null;

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-72 w-full md:h-96">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <div className="inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
            {story.category}
          </div>
          <h2 className="mt-3 max-w-2xl text-2xl font-black leading-tight text-white md:text-4xl">
            {story.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-200 md:text-base">{story.summary}</p>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-200">
            <span>{story.author}</span>
            <span>•</span>
            <span>{story.timestamp}</span>
            <span>•</span>
            <span>{story.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
