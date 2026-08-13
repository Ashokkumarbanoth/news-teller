import Link from "next/link";
import { jobs } from "@/lib/data";

export default function JobsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="mb-6 inline-block text-sm font-semibold text-red-600">
        ← Back to home
      </Link>
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">Careers</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Jobs and opportunities</h1>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">{job.title}</h2>
                <p className="text-sm text-slate-500">{job.company}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                {job.type}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.salary}</span>
            </div>
            <p className="mt-4 leading-7 text-slate-700">{job.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
