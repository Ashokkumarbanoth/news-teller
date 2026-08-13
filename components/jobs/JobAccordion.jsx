"use client";

import { useState } from "react";

export default function JobAccordion({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((current) => !current)}
      >
        <div>
          <p className="font-bold text-slate-900">{job.title}</p>
          <p className="text-sm text-slate-500">{job.company}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
          {job.type}
        </span>
      </button>

      {open ? (
        <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.salary}</span>
          </div>
          <p className="mt-3 leading-6">{job.description}</p>
        </div>
      ) : null}
    </div>
  );
}
