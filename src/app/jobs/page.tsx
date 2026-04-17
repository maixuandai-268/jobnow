"use client";

import { useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { SidebarFilter } from "../../components/jobs/SidebarFilter";
import { JobCard } from "../../components/jobs/JobCard";
import { mockJobs } from "../../data/mockJobs";

export default function JobList() {
  const [sortBy, setSortBy] = useState<string>("Mới nhất");

  const sortedJobs = [...mockJobs].sort((a, b) => {
    if (sortBy === "Lương cao nhất") {
      return b.salary - a.salary;
    }
    return 0;
  });

  return (
    <div className="bg-[#f8f9fc] min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-28 pb-12 px-6 max-w-[1100px] mx-auto w-full flex-1">
        <div className="flex flex-col md:flex-row gap-8">
          <SidebarFilter />

          <section className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-4">
              <div>
                <h1 className="text-[32px] font-extrabold tracking-tight text-slate-900 leading-tight">
                  Việc làm mới nhất
                </h1>
                <p className="text-slate-500 text-[15px] mt-1">Tìm thấy {sortedJobs.length} kết quả phù hợp với bạn</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-500">Sắp xếp theo:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border-none text-sm font-bold text-[#00288e] pr-6 pl-1 focus:ring-0 cursor-pointer"
                  >
                    <option>Mới nhất</option>
                    <option>Lương cao nhất</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[18px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {sortedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            <div className="pt-10 flex items-center justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f4f5f9] text-slate-500 hover:bg-[#e8eaf6] transition-colors">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#00288e] text-white font-bold shadow-md">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f4f5f9] text-slate-700 hover:bg-[#e8eaf6] font-bold transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f4f5f9] text-slate-700 hover:bg-[#e8eaf6] font-bold transition-colors">
                3
              </button>
              <span className="px-2 text-slate-400 font-medium">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f4f5f9] text-slate-700 hover:bg-[#e8eaf6] font-bold transition-colors">
                12
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f4f5f9] text-slate-500 hover:bg-[#e8eaf6] transition-colors">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
