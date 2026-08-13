export default function MobileDrawer({ open = false }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-slate-200 bg-white p-5 shadow-xl transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">Menu</h2>
        <button className="text-slate-500">✕</button>
      </div>
      <nav className="mt-6 space-y-3 text-sm text-slate-700">
        <p>Top Stories</p>
        <p>Business</p>
        <p>Sports</p>
        <p>Entertainment</p>
        <p>Jobs</p>
      </nav>
    </div>
  );
}
