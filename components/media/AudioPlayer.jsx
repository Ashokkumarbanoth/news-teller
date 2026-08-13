"use client";

import { useState } from "react";

export default function AudioPlayer({ audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }) {
  const [progress, setProgress] = useState(38);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Podcast</p>
          <h4 className="text-base font-bold text-slate-900">City Briefing</h4>
        </div>
        <span className="rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-white">▶</span>
      </div>

      <audio controls className="w-full" src={audioUrl} preload="metadata">
        Your browser does not support the audio element.
      </audio>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-linear-to-r from-red-500 to-orange-400"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <span>1:24</span>
        <button onClick={() => setProgress((value) => (value >= 100 ? 0 : value + 12))} className="font-semibold text-slate-700">
          Skip ahead
        </button>
        <span>3:42</span>
      </div>
    </div>
  );
}
