import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black text-blue-800 dark:text-blue-400 tracking-tighter">
            JobNow
          </Link>
          <div className="hidden md:flex gap-6">
            <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium" href="/">Trang chủ</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium" href="/jobs">Tìm việc</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</button>
          <button className="material-symbols-outlined text-slate-600 dark:text-slate-400">mail</button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
            <span className="material-symbols-outlined text-outline">account_circle</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 dark:bg-slate-800 h-[1px] w-full"></div>
    </nav>
  );
}
