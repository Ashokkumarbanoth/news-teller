import { jobs, sportsHighlights } from "@/lib/data";
import { translations } from "@/lib/translations";
import GoogleAdSlot from "@/components/ui/GoogleAdSlot";

export default function Sidebar({ language = "en" }) {
  const t = translations[language] || translations.en;

  return (
    <aside className="space-y-6">
      <GoogleAdSlot label="Ad 300x250" height="h-64" />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">{t.jobs}</h3>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
            Hiring
          </span>
        </div>
        <div className="space-y-3">
          {jobs.slice(0, 3).map((job) => (
            <div key={job.title} className="rounded-xl border border-slate-200 p-3">
              <p className="font-semibold text-slate-900">{job.title}</p>
              <p className="text-sm text-slate-500">{job.company}</p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
                <span>{job.location}</span>
                <span>{job.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-slate-900">{t.sports}</h3>
        <ul className="space-y-3">
          {sportsHighlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
