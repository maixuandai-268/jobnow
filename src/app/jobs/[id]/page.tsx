import { mockJobs } from "../../../data/mockJobs";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { JobCard } from "../../../components/jobs/JobCard";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function JobDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const job = mockJobs.find((j) => j.id === params.id) || mockJobs[0]; // fallback to first for demo

  if (!job) {
    notFound();
  }

  const formatCurrency = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  };

  const getBadgeClass = (badge: string) => {
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

  // Fallback data if job doesn't have detailed fields
  const description = job.description || [
    "Thực hiện các công việc được giao theo sự phân công của quản lý.",
    "Đảm bảo hoàn thành đúng tiến độ và chất lượng công việc.",
  ];
  
  const requirements = job.requirements || [
    "Chăm chỉ, trung thực, có trách nhiệm.",
    "Không yêu cầu kinh nghiệm, sẽ được đào tạo.",
  ];

  const employer = job.employer || {
    name: "Công ty TNHH Ẩn Danh",
    avatar: "https://ui-avatars.com/api/?name=C+T&background=00288e&color=fff",
    rating: 4.5,
    type: "Doanh nghiệp",
    totalPosts: 5,
    joinedDate: "01/2024",
  };

  const similarJobs = mockJobs.filter((j) => j.id !== job.id).slice(0, 3);

  return (
    <div className="bg-[#f8f9fc] min-h-screen flex flex-col text-slate-900">
      <Navbar />

      <main className="pt-24 pb-12 px-6 max-w-[1200px] mx-auto w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Job Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl p-8 relative overflow-hidden shadow-sm border border-transparent">
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${getBadgeClass(job.badge)}`}>
                    {job.badge}
                  </span>
                  <span className="px-3 py-1 bg-[#d9e2ff] text-[#001c63] rounded-full text-[11px] font-bold uppercase tracking-wider">
                    {job.salaryUnit === "ca" ? "Ca Làm" : "Cố định"}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-[34px] font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                  {job.title}
                </h1>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#f4f5f9] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#00288e]">payments</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Mức lương</p>
                      <p className="text-lg font-bold text-[#00288e]">{formatCurrency(job.salary)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#f4f5f9] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#00288e]">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Địa điểm</p>
                      <p className="text-sm font-bold text-slate-800">{job.location.split(',')[0]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#f4f5f9] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#00288e]">schedule</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Thời gian</p>
                      <p className="text-sm font-bold text-slate-800">{job.schedule.split(' ')[0]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#f4f5f9] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#00288e]">group</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Số lượng</p>
                      <p className="text-sm font-bold text-slate-800">{job.quantity || "Đang cập nhật"}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Ambient Light Background Effect */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#dde1ff] rounded-full blur-3xl opacity-40"></div>
            </div>

            {/* Job Description Content */}
            <div className="bg-white rounded-2xl p-8 space-y-10 shadow-sm">
              <section>
                <h2 className="text-[22px] font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#00288e] rounded-full"></span>
                  Mô tả công việc
                </h2>
                <ul className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
                  {description.map((desc, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="material-symbols-outlined text-[#00288e] flex-shrink-0 mt-0.5 text-[20px]">check_circle</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </section>
              
              <section>
                <h2 className="text-[22px] font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#00288e] rounded-full"></span>
                  Yêu cầu ứng viên
                </h2>
                <ul className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="material-symbols-outlined text-[#00288e] flex-shrink-0 mt-0.5 text-[20px]">radio_button_checked</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Employer Profile Card */}
            <div className="bg-white rounded-2xl p-6 sticky top-28 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  alt="Employer avatar" 
                  className="w-16 h-16 rounded-full object-cover border-4 border-slate-50 shadow-sm" 
                  src={employer.avatar} 
                />
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900">{employer.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span 
                        key={star} 
                        className="material-symbols-outlined text-[16px]" 
                        style={{ fontVariationSettings: `'FILL' ${star <= Math.floor(employer.rating) ? 1 : 0}` }}
                      >
                        star
                      </span>
                    ))}
                    <span className="text-sm font-bold text-slate-800 ml-1">{employer.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[15px] py-2 border-b border-slate-100">
                  <span className="text-slate-500">Loại hình</span>
                  <span className="font-bold text-slate-800">{employer.type}</span>
                </div>
                <div className="flex justify-between text-[15px] py-2 border-b border-slate-100">
                  <span className="text-slate-500">Tin đã đăng</span>
                  <span className="font-bold text-slate-800">{employer.totalPosts} tin</span>
                </div>
                <div className="flex justify-between text-[15px] py-2">
                  <span className="text-slate-500">Tham gia từ</span>
                  <span className="font-bold text-slate-800">{employer.joinedDate}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <button className="w-full py-4 px-6 bg-gradient-to-r from-[#00288e] to-[#1e40af] text-white rounded-xl font-bold text-[16px] shadow-lg shadow-[#00288e]/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Ứng tuyển ngay
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
                <button className="w-full py-4 px-6 bg-[#f4f5f9] text-[#00288e] rounded-xl font-bold text-[16px] hover:bg-[#e8eaf6] transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Nhắn tin
                </button>
              </div>
              <p className="text-xs text-center text-slate-500 mt-6 italic">Gợi ý: Nhắn tin để trao đổi kỹ hơn về công việc trước khi ứng tuyển.</p>
            </div>

            {/* Promotional Banner */}
            <div className="bg-[#00288e] p-6 rounded-2xl text-white relative overflow-hidden shadow-md">
              <h4 className="text-[17px] font-bold mb-2 relative z-10">Tăng tốc tìm việc?</h4>
              <p className="text-[13px] opacity-80 mb-5 relative z-10 leading-relaxed">
                Cập nhật hồ sơ để nhà tuyển dụng tìm thấy bạn nhanh hơn gấp 3 lần.
              </p>
              <Link href="/profile" className="inline-block py-2.5 px-5 bg-white text-[#00288e] rounded-lg font-bold text-sm relative z-10 hover:bg-slate-50 transition-colors">
                Cập nhật ngay
              </Link>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12">
                trending_up
              </span>
            </div>
          </div>
        </div>

        {/* Similar Jobs Section */}
        <section className="mt-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-[26px] font-extrabold text-slate-900 mb-2">Công việc tương tự</h2>
              <p className="text-slate-500 text-[15px]">Dựa trên sở thích và vị trí của bạn</p>
            </div>
            <Link href="/jobs" className="text-[#00288e] font-bold hover:underline flex items-center gap-1">
              Xem tất cả
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-5">
            {similarJobs.map((similarJob) => (
              <JobCard key={similarJob.id} job={similarJob} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
