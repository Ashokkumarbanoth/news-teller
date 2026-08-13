"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TopStoriesAccordion({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [items]);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = activeIndex === index;

        return (
          <div key={item.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
              onClick={() => setActiveIndex(index)}
            >
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="font-semibold text-slate-800">{item.title}</span>
              </span>
              <span className="text-xl text-slate-500">{open ? "−" : "+"}</span>
            </button>

            {open ? (
              <div className="border-t border-slate-200 bg-white px-4 py-3">
                <p className="mb-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                <Link href={`/news/${item.slug}`} className="text-sm font-semibold text-red-600">
                  Read article →
                </Link>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
