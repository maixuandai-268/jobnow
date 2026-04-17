import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section className="hero-gradient min-h-[600px] flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-extrabold text-on-background leading-tight tracking-tighter">
                Việc làm nhanh,<br /><span className="text-primary">Thu nhập ngay.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                Kết nối trực tiếp với những chủ nhà và hộ kinh doanh cần người hỗ trợ tức thì. Không trung gian, không rườm rà.
              </p>
              
              <div className="bg-surface-container-lowest p-2 rounded-xl shadow-sm flex flex-col md:flex-row gap-2 max-w-2xl">
                <div className="flex-1 flex items-center px-4 gap-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-outline">search</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full py-3 text-on-surface font-medium" placeholder="Tên công việc..." type="text" />
                </div>
                <div className="flex-1 flex items-center px-4 gap-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-outline">location_on</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full py-3 text-on-surface font-medium" placeholder="Địa điểm tại Việt Nam" type="text" />
                </div>
                <button className="bg-primary hover:bg-primary-container text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md">
                  Tìm kiếm
                </button>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVf5SNhx8f9_GfYoK6FAgteny_fGi6VU7A2OIFj894nu_AJI581swZbBq45wzhuYqRQQI-2qDqeVMYE9vFKSuqqJie1FBnkfDybL0xcwCdcAeo7N7ESOCZ_Vf7tTvxzU0obxMDDDUwSG6V3FVv-qPVxW1vgtCElYkWejQZUOrJaIQvxl7uh3F9bPFNeRqwupGaMa3QSlkkhIbvay75O-qjjHCn64UHcl70cXx9u3rpfLEfUXVC0QFKRc2dC7C2QSNPF6_z1BvM4CPB" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX63Kl14JbkRMY2JjHvGUzHYPhvuxG0TKRgwaljAV_7qghDgsHIIK2UbehqRjQrk_5K4yWSo5ffmy29iI-Qyl3yqy2vS6jKMAd3P2PW-2t6w5wODKXpJLfPfZitgNif4hLJ00DK8SrfxwX6R_Jpf_60qm0TXAn0B3_s9vCse2kaD8vJo9JbI0uTJLO5kB7kMadDwYOdXJpXDhYTa0ckVzSFos21dLrJ-XNZTc-amo_WrWq5jJ0JGYXab7H8DhmPaurl-nmUtcZB5mC" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAijI8QeCFo4Jxg7D_gKNfboQ5JT0gK1UxO6x6BUv4WFWYCJnvH2Z0eUrZAoXJ8--84GxHYsxvLUw-eZ7Ddm6eq4SoWc7AwAmw4aTBeXEZWVw3Ee52CwewxFSrBiDgrB1DpsHRcBBR6rHEWnSf-EivERXfZaWfWdo338xgiw3-be2s9iaTMVNt34pD87rrNBY2bOYxJ4l_4QDL6VtY61D5VepvQuh9KA3WtKBgGCcwhR1kaRSS2RTygDAtcc21KizWyOX0Kka6QAUA0" />
                </div>
                <span className="text-sm font-semibold text-on-surface-variant">+2.400 người đã có việc hôm nay</span>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-2">
                <img className="w-full h-full object-cover" alt="Workers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxLOktZ0mPXplZZPAPqqlS5dF511VLCg6BdlE_LtHnptQkGnxqMRZccFAZq2AL9kSizbGoERUbQ5u-2CiN4TNb7BUMPGAWBQmiyVr3kOFWfGh0elHR7L1Fy0MiynynDQDt3ebZSNygRfGdus_jhVeYW9ELgwsY3fWzob7Le_y_Kc-Q5x9fZ36h1gGwBpHYt4F6fomcaLP4qpiYzT58f_1CbJCNUI0CEbPS3axZqExm-IbGF4G1BH5L5K1VF0ZlVh_299m60DM-8ewk" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <div className="text-tertiary font-black text-2xl">150k/giờ</div>
                <div className="text-xs font-bold text-outline">Mức lương trung bình cho việc bốc xếp</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Danh mục phổ biến</h2>
                <p className="text-on-surface-variant">Những công việc đang có nhu cầu nhân lực cao nhất</p>
              </div>
              <a className="text-primary font-bold hover:underline flex items-center gap-1" href="#">Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Bốc vác</h3>
                <p className="text-sm text-outline font-medium">420 việc làm</p>
              </div>
              
              <div className="bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Phục vụ</h3>
                <p className="text-sm text-outline font-medium">850 việc làm</p>
              </div>
              
              <div className="bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Giao hàng</h3>
                <p className="text-sm text-outline font-medium">1.2k việc làm</p>
              </div>
              
              <div className="bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">cleaning_services</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Dọn dẹp</h3>
                <p className="text-sm text-outline font-medium">310 việc làm</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Công việc nổi bật</h2>
              <p className="text-on-surface-variant">Tin tuyển dụng ưu tiên từ các chủ hộ uy tín</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-surface-container-lowest p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Cần gấp</span>
                  <span className="text-primary font-bold">40.000đ/giờ</span>
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">Phụ bốc xếp kho hàng bánh kẹo Tết</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">person</span>
                    <span>Chủ hộ: Anh Tuấn (Quận 7)</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>Lê Văn Lương, TP. HCM</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>Ca sáng: 08:00 - 12:00</span>
                  </div>
                </div>
                <div className="mt-auto flex gap-3">
                  <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">Ứng tuyển ngay</button>
                  <button className="p-3 bg-surface-container text-primary rounded-lg hover:bg-surface-container-high transition-all">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all flex flex-col h-full border border-primary/5">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Mới đăng</span>
                  <span className="text-primary font-bold">350.000đ/ngày</span>
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">Giao cơm trưa văn phòng khu vực Đống Đa</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">person</span>
                    <span>Tiệm Cơm Mẹ Nấu</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>Thái Hà, Hà Nội</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>10:30 - 13:30 (Thứ 2-6)</span>
                  </div>
                </div>
                <div className="mt-auto flex gap-3">
                  <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">Ứng tuyển ngay</button>
                  <button className="p-3 bg-surface-container text-primary rounded-lg hover:bg-surface-container-high transition-all">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Nóng</span>
                  <span className="text-primary font-bold">50.000đ/giờ</span>
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">Phục vụ tiệc cưới cuối tuần (Cần 10 người)</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">person</span>
                    <span>Nhà hàng Thanh Bình</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>Hòa Vang, Đà Nẵng</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>Thứ 7 & CN hằng tuần</span>
                  </div>
                </div>
                <div className="mt-auto flex gap-3">
                  <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">Ứng tuyển ngay</button>
                  <button className="p-3 bg-surface-container text-primary rounded-lg hover:bg-surface-container-high transition-all">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-primary overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img className="w-full h-full object-cover" alt="Background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvUwYSr9rRIsUt1HvFq9BoalkdhLZJ6nTQdcQghmT6svU1wMwVZKcvk3jflp_nmOlvv54GcNWNHPp4ZTl5N7dTRYD4V0mgDqi9WyM3c1J4DwWxBpBX9-4YMfZ-XJYDKhw_CD-SUyATPBERqqxU3SdWYg5x5DWPdvXRNdNPK6-GHi_UiG30Kc6TCjNbDMWDJ3_b3Mq6U07fn9UDFy6RE_3wkKfPTK_OgPjiNnqwx5jnijL-GGIcgUvVo5nYLtIFegujTR7ZXDycE2V3" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">Bạn đang cần người phụ giúp?</h2>
            <p className="text-white/80 text-xl mb-10 font-medium">Đăng tin ngay chỉ trong 30 giây. Hàng ngàn người sẵn sàng hỗ trợ bạn bất cứ lúc nào.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-blue-50 transition-colors shadow-lg">Đăng việc ngay</button>
              <button className="bg-primary-container/40 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-white/10 transition-colors">Tìm hiểu thêm</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
