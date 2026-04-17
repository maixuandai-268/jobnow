export function Footer() {
  return (
    <footer className="w-full py-8 mt-auto bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-col items-center justify-center gap-4 w-full px-6 text-center">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">© 2024 JobNow Vietnam. Hành trình chuyên nghiệp của bạn.</p>
        <div className="flex gap-6">
          <a className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-all" href="#">Về chúng tôi</a>
          <a className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-all" href="#">Điều khoản</a>
          <a className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-all" href="#">Hỗ trợ</a>
        </div>
      </div>
    </footer>
  );
}
