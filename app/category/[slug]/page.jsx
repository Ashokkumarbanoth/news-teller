import Link from "next/link";
import { categories, newsItems } from "@/lib/data";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }) {
  const currentCategory = categories.find((category) => category.slug === params.slug);

  if (!currentCategory) {
    notFound();
  }

  const categoryStories = newsItems.filter((item) => item.category === currentCategory.label);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="mb-6 inline-block text-sm font-semibold text-red-600">
        ← Back to home
      </Link>
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">Category</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">{currentCategory.label}</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {categoryStories.length ? (
          categoryStories.map((item) => (
            <article key={item.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
              <Link href={`/news/${item.slug}`} className="mt-4 inline-block text-sm font-semibold text-red-600">
                Read story →
              </Link>
            </article>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-slate-500">
            No stories available in this category yet.
          </div>
        )}
      </div>
    </main>
  );
}
