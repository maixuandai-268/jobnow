import { Job, BadgeType } from "../../types/job";
import Link from "next/link";

export function JobCard({ job }: { job: Job }) {
  const getBadgeClass = (badge: BadgeType) => {
    switch (badge) {
      case "Gấp":
      case "Nóng":
        return "bg-[#9a4b00] text-white";
      case "Thời vụ":
      case "Bán thời gian":
        return "bg-[#d9e2ff] text-[#001c63]";
      default:
        return "bg-[#e8eaf6] text-[#1e293b]";
    }
  };

  const formatCurrency = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  };

  return (
    <Link href={`/jobs/${job.id}`} className="block group">
      <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-transparent group-hover:border-blue-100 group-hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${getBadgeClass(job.badge)}`}>
              {job.badge}
            </span>
            <span className="text-xs font-medium text-slate-500">{job.postedAt}</span>
          </div>
          <h3 className="text-[22px] font-bold text-slate-900 group-hover:text-[#00288e] transition-colors leading-snug">
            {job.title}
          </h3>
          <div className="mt-5 flex flex-wrap gap-y-2 gap-x-6">
            <div className="flex items-center gap-2 text-slate-600">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span className="text-[14px] font-medium">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span className="text-[14px] font-medium">{job.schedule}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end justify-between min-w-[150px]">
          <div className="text-right">
            <span className="block text-[28px] font-bold text-[#00288e]">{formatCurrency(job.salary)}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Mỗi {job.salaryUnit}</span>
          </div>
          <button className="mt-4 sm:mt-0 px-5 py-2.5 bg-[#f1f3f9] text-[#1e293b] text-sm font-bold rounded-lg hover:bg-[#e2e6f3] transition-all">
            Ứng tuyển ngay
          </button>
        </div>
        </div>
      </div>
    </Link>
  );
}
