"use client";

import Link from "next/link";
import { useState } from "react";

export default function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Bốc vác",
    quantity: "",
    description: "",
    salary: "",
    location: "",
    shift: "Ca sáng"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Đã tạo bài đăng thành công!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-[#fbf8ff] text-[#1a1b22] min-h-screen font-['Inter']">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#e3e1eb]">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-black text-[#00288e] font-['Be_Vietnam_Pro'] tracking-tight">JobNow</Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/jobs" className="text-[#444653] font-medium hover:text-[#00288e] transition-colors">Khám phá</Link>
            <Link href="/dashboard/employer" className="text-[#00288e] font-bold border-b-2 border-[#00288e] py-5">Việc làm của tôi</Link>
            <Link href="/chat" className="text-[#444653] font-medium hover:text-[#00288e] transition-colors">Tin nhắn</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-[#444653] hover:bg-[#f4f2fc] p-2 rounded-full transition-colors">notifications</button>
            <button className="material-symbols-outlined text-[#444653] hover:bg-[#f4f2fc] p-2 rounded-full transition-colors">account_circle</button>
          </div>
        </div>
      </nav>

      <div className="flex max-w-7xl mx-auto pt-16 min-h-screen">
        {/* SideNavBar (Hidden on Mobile) */}
        <aside className="hidden md:flex flex-col py-6 gap-2 h-[calc(100vh-64px)] sticky top-16 w-64 bg-slate-50 border-r border-[#e3e1eb] font-['Be_Vietnam_Pro'] text-sm">
          <div className="px-6 mb-6">
            <div className="text-xl font-bold text-[#00288e]">Quản lý JobNow</div>
            <div className="text-[#757684] text-xs mt-1">Phân khúc Thời vụ</div>
          </div>
          <nav className="flex flex-col gap-1">
            <Link href="/dashboard/employer" className="flex items-center gap-3 py-3 px-4 text-[#444653] hover:bg-[#e8e7f1] mx-2 rounded-lg transition-all duration-200">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Bảng điều khiển</span>
            </Link>
            <Link href="/dashboard/employer/jobs" className="flex items-center gap-3 py-3 px-4 text-[#444653] hover:bg-[#e8e7f1] mx-2 rounded-lg transition-all duration-200">
              <span className="material-symbols-outlined">work</span>
              <span>Việc làm của tôi</span>
            </Link>
            <Link href="/candidates" className="flex items-center gap-3 py-3 px-4 text-[#444653] hover:bg-[#e8e7f1] mx-2 rounded-lg transition-all duration-200">
              <span className="material-symbols-outlined">group</span>
              <span>Ứng viên</span>
            </Link>
            <Link href="/chat" className="flex items-center gap-3 py-3 px-4 text-[#444653] hover:bg-[#e8e7f1] mx-2 rounded-lg transition-all duration-200">
              <span className="material-symbols-outlined">chat</span>
              <span>Tin nhắn</span>
            </Link>
            <Link href="/settings" className="flex items-center gap-3 py-3 px-4 text-[#444653] hover:bg-[#e8e7f1] mx-2 rounded-lg transition-all duration-200">
              <span className="material-symbols-outlined">settings</span>
              <span>Cài đặt</span>
            </Link>
          </nav>
          <div className="mt-auto px-4 pb-4">
            <button className="w-full py-3 bg-gradient-to-r from-[#00288e] to-[#1e40af] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#00288e]/20 hover:opacity-90 transition-all">
              <span className="material-symbols-outlined">add_circle</span>
              Đăng tin ngay
            </button>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 bg-[#f4f2fc] p-4 md:p-8 lg:p-12">
          <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-black text-[#1a1b22] tracking-tight mb-2 font-['Be_Vietnam_Pro']">Tạo bài đăng mới</h1>
              <p className="text-[#444653] font-medium">Tìm kiếm nhân sự thời vụ nhanh chóng và chất lượng nhất.</p>
            </header>

            {/* Form Content */}
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Essential Info Section */}
                <section>
                  <h2 className="text-lg font-bold text-[#00288e] mb-6 flex items-center gap-2 font-['Be_Vietnam_Pro']">
                    <span className="material-symbols-outlined">info</span>
                    Thông tin cơ bản
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-[#444653] mb-2 ml-1">Tiêu đề công việc</label>
                      <input 
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full bg-[#e8e7f1] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#00288e]/40 text-[#1a1b22] placeholder:text-[#757684] transition-all outline-none" 
                        placeholder="Ví dụ: Cần 5 người bốc vác hàng hóa tại kho" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#444653] mb-2 ml-1">Danh mục</label>
                      <div className="relative">
                        <select 
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                          className="w-full bg-[#e8e7f1] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#00288e]/40 text-[#1a1b22] appearance-none transition-all outline-none cursor-pointer"
                        >
                          <option>Bốc vác</option>
                          <option>Phục vụ</option>
                          <option>Giao hàng</option>
                          <option>Bảo vệ</option>
                          <option>Khác</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#757684] pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#444653] mb-2 ml-1">Số lượng cần tuyển</label>
                      <input 
                        type="number"
                        min="1"
                        required
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        className="w-full bg-[#e8e7f1] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#00288e]/40 text-[#1a1b22] placeholder:text-[#757684] transition-all outline-none" 
                        placeholder="Số lượng" 
                      />
                    </div>
                  </div>
                </section>

                {/* Details Section */}
                <section>
                  <h2 className="text-lg font-bold text-[#00288e] mb-6 flex items-center gap-2 font-['Be_Vietnam_Pro']">
                    <span className="material-symbols-outlined">description</span>
                    Chi tiết công việc
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-[#444653] mb-2 ml-1">Mô tả chi tiết</label>
                      <textarea 
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        className="w-full bg-[#e8e7f1] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#00288e]/40 text-[#1a1b22] placeholder:text-[#757684] transition-all outline-none resize-y" 
                        placeholder="Mô tả công việc, yêu cầu kỹ năng, quyền lợi..." 
                        rows={5}
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-bold text-[#444653] mb-2 ml-1">Mức lương (VNĐ)</label>
                        <input 
                          type="text"
                          required
                          value={formData.salary}
                          onChange={(e) => setFormData({...formData, salary: e.target.value})}
                          className="w-full bg-[#e8e7f1] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#00288e]/40 text-[#1a1b22] placeholder:text-[#757684] transition-all outline-none" 
                          placeholder="Ví dụ: 500.000" 
                        />
                        <span className="absolute right-4 bottom-4 text-[#757684] font-bold">đ</span>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#444653] mb-2 ml-1">Địa điểm (Quận/Huyện)</label>
                        <input 
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          className="w-full bg-[#e8e7f1] border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#00288e]/40 text-[#1a1b22] placeholder:text-[#757684] transition-all outline-none" 
                          placeholder="Ví dụ: Quận 1, TP.HCM" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#444653] mb-2 ml-1">Thời gian làm việc</label>
                      <div className="flex flex-wrap gap-3">
                        {["Ca sáng", "Ca chiều", "Toàn thời gian"].map((shiftType) => (
                          <label key={shiftType} className="flex-1 min-w-[140px] cursor-pointer">
                            <input 
                              type="radio"
                              name="shift"
                              value={shiftType}
                              checked={formData.shift === shiftType}
                              onChange={(e) => setFormData({...formData, shift: e.target.value})}
                              className="hidden peer"
                            />
                            <div className="bg-[#e8e7f1] p-4 rounded-xl text-center peer-checked:bg-[#1e40af] peer-checked:text-white hover:bg-[#dad9e3] transition-all font-bold text-[#1a1b22]">
                              {shiftType}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <div className="pt-8 border-t border-[#e3e1eb] flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 p-4 bg-[#ffdbca] rounded-xl border border-[#783200]/10 flex-1">
                    <span className="material-symbols-outlined text-[#7f3500]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    <p className="text-xs text-[#783200] font-bold">Đăng tin ngay để nhận được ứng tuyển trong vòng 15 phút!</p>
                  </div>
                  <button type="submit" className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#00288e] to-[#1e40af] text-white rounded-xl font-black text-lg shadow-xl shadow-[#00288e]/30 hover:opacity-90 active:scale-95 transition-all">
                    Đăng tin ngay
                  </button>
                </div>
              </form>
            </div>
            
            {/* Footer Context */}
            <footer className="mt-12 text-center text-[#757684] text-sm">
              <p>© 2026 JobNow Vietnam. Toàn quyền sở hữu.</p>
            </footer>
          </div>
        </main>
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 md:hidden bg-white/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-2xl z-50 border-t border-slate-100">
        <Link href="/" className="flex flex-col items-center justify-center text-slate-400 active:text-[#00288e] transition-all">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Trang chủ</span>
        </Link>
        <Link href="/jobs" className="flex flex-col items-center justify-center text-slate-400 active:text-[#00288e] transition-all">
          <span className="material-symbols-outlined">search</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Tìm việc</span>
        </Link>
        <Link href="/post-job" className="flex flex-col items-center justify-center text-[#00288e] bg-[#dde1ff] rounded-xl px-4 py-1.5 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_box</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Đăng tin</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center text-slate-400 active:text-[#00288e] transition-all">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Hồ sơ</span>
        </Link>
      </nav>
    </div>
  );
}
