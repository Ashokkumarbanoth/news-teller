"use client";

import Link from "next/link";
import { categories, languages, navLinks } from "@/lib/data";
import { translations } from "@/lib/translations";

export default function Header({ language = "en", onLanguageChange }) {
  const t = translations[language] || translations.en;

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button className="rounded-md border border-slate-200 px-2 py-1 text-sm text-slate-600 md:hidden">
              ☰
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                N
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-red-600">{t.live}</p>
                <h1 className="text-xl font-black tracking-tight text-slate-900">{t.brand}</h1>
              </div>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="w-full max-w-xl">
              <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
                <span>⌕</span>
                <input
                  aria-label="Search headlines"
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-transparent outline-none placeholder:text-slate-400"
                />
              </label>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 sm:flex">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              {t.live}
            </div>
            <select
              aria-label="Language selector"
              value={language}
              onChange={(event) => onLanguageChange?.(event.target.value)}
              className="rounded-full border border-slate-200 bg-white px-2 py-1.5 text-sm font-medium text-slate-700 outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <nav className="mt-3 flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                item.href === "/"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {t[item.label.toLowerCase()] || item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${
                category.slug === "top-stories"
                  ? "border-red-200 bg-red-50 text-red-700"
                  : "border-slate-200 bg-white text-slate-600"
              }`}
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
