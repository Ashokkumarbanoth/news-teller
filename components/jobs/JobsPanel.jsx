import JobAccordion from "@/components/jobs/JobAccordion";
import GoogleAdSlot from "@/components/ui/GoogleAdSlot";

export default function JobsPanel({ jobs }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-2xl font-black text-slate-900">Career opportunities</h3>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
          Updated today
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobAccordion key={job.title} job={job} />
          ))}
        </div>

        <div className="space-y-4">
          <GoogleAdSlot label="Ad 300x600" height="h-72" />
          <div className="rounded-2xl bg-slate-900 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Opportunity</p>
            <h4 className="mt-2 text-xl font-black">Join the next wave of local storytellers.</h4>
            <p className="mt-3 text-sm text-slate-300">Build civic reporting, culture coverage and community-first design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
