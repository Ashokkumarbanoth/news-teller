"use client";

export default function VideoModal({ open = false, onClose, videoUrl, title = "Story video" }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-700 px-4 py-3 text-white">
          <span className="text-sm uppercase tracking-[0.2em] text-slate-300">Video</span>
          <button onClick={onClose} className="text-xl text-white" aria-label="Close video">
            ✕
          </button>
        </div>
        <div className="aspect-video bg-slate-950">
          <video controls autoPlay className="h-full w-full object-cover" src={videoUrl} preload="metadata">
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-4 py-3 text-sm text-slate-200">{title}</div>
      </div>
    </div>
  );
}
