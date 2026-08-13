export default function GoogleAdSlot({ label = "Ad", height = "h-40" }) {
  return (
    <div className={`flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 ${height}`}>
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">{label}</span>
    </div>
  );
}
