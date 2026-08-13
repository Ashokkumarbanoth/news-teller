import { translations } from "@/lib/translations";

export default function Footer({ language = "en" }) {
  const t = translations[language] || translations.en;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black tracking-tight text-slate-900">{t.brand}</p>
          <p className="text-sm text-slate-500">Your daily briefing across India and beyond.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <span>About</span>
          <span>Advertise</span>
          <span>Careers</span>
          <span>Contact</span>
          <span>Privacy</span>
        </div>
        <p className="text-sm text-slate-500">{t.copyright}</p>
      </div>
    </footer>
  );
}
