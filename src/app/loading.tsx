export default function Loading() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center min-h-[70vh] bg-surface">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Outer subtle ring */}
        <div className="absolute inset-0 rounded-full border-[4px] border-primary/10"></div>
        
        {/* Spinning primary ring */}
        <div className="absolute inset-0 rounded-full border-[4px] border-primary border-r-transparent animate-spin"></div>
        
        {/* Center icon */}
        <span className="material-symbols-outlined text-3xl text-primary animate-pulse">
          work
        </span>
      </div>
      
      <div className="mt-8 flex flex-col items-center">
        <h3 className="text-xl font-bold text-on-surface tracking-tight">JobNow</h3>
        <p className="mt-2 text-sm text-on-surface-variant font-medium animate-pulse">
          Đang tải dữ liệu...
        </p>
      </div>
    </div>
  );
}
