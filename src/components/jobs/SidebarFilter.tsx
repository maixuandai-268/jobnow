"use client";

import { useState } from "react";

export function SidebarFilter() {
  const [salaryFilter, setSalaryFilter] = useState<string[]>(["200k - 500k/ngày"]);
  const [timeFilter, setTimeFilter] = useState<string>("Toàn thời gian");

  const toggleSalary = (value: string) => {
    setSalaryFilter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <aside className="w-full md:w-[300px] space-y-6">
      <div className="bg-[#f4f5f9] rounded-2xl p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
          Bộ lọc tìm kiếm
        </h2>
        
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3 text-slate-700">Mức lương</label>
          <div className="space-y-3">
            {["Dưới 200k/ngày", "200k - 500k/ngày", "Trên 500k/ngày"].map((label) => (
              <label key={label} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={salaryFilter.includes(label)}
                  onChange={() => toggleSalary(label)}
                  className="w-4 h-4 rounded border-slate-300 text-[#00288e] focus:ring-[#00288e]"
                />
                <span className="text-sm text-slate-600 group-hover:text-[#00288e] transition-colors">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3 text-slate-700">Địa điểm</label>
          <div className="relative">
            <select className="w-full appearance-none bg-[#e8eaf6] border-none rounded-lg text-sm text-slate-700 px-4 py-3 focus:ring-2 focus:ring-[#00288e] cursor-pointer">
              <option>Tất cả Quận/Huyện</option>
              <option>Quận 1</option>
              <option>Quận 3</option>
              <option>Quận Bình Thạnh</option>
              <option>Thành phố Thủ Đức</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-3 text-slate-700">Thời gian</label>
          <div className="grid grid-cols-2 gap-2">
            {["Toàn thời gian", "Bán thời gian", "Ca sáng", "Ca tối"].map((label) => (
              <button
                key={label}
                onClick={() => setTimeFilter(label)}
                className={`text-xs font-bold py-2.5 rounded-lg transition-colors ${
                  timeFilter === label
                    ? "bg-[#00288e] text-white"
                    : "bg-[#e8eaf6] text-slate-700 hover:bg-[#d0d4e4]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        
        <button className="w-full mt-8 bg-[#1e3a8a] text-white font-bold py-3.5 rounded-lg shadow-sm hover:opacity-90 transition-all">
          Áp dụng bộ lọc
        </button>
      </div>
      
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-b from-[#1a3891] to-[#0f1f54] p-8 aspect-[3/4] flex flex-col justify-end text-left shadow-lg">
        <h3 className="text-white text-[22px] font-bold leading-tight mb-3">Tìm việc nhanh chóng cùng JobNow</h3>
        <p className="text-white/80 text-sm mb-6 leading-relaxed">Hơn 1.000+ công việc thời vụ mới mỗi ngày.</p>
        <button className="self-start bg-[#ffd8b5] text-[#9a4b00] px-4 py-2 rounded-full text-xs font-extrabold hover:opacity-90 transition-opacity">
          Khám phá ngay
        </button>
      </div>
    </aside>
  );
}
