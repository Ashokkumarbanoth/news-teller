import { tickerItems } from "@/lib/data";

export default function NewsTicker() {
  const loopItems = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-slate-200 bg-slate-900 text-sm text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2">
        <span className="shrink-0 rounded-full bg-red-600 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
          Breaking
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex min-w-max animate-ticker gap-10 whitespace-nowrap">
            {loopItems.map((item, index) => (
              <span key={`${item}-${index}`} className="font-medium text-slate-100">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
