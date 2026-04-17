import { Job } from "../types/job";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Nhân viên phục vụ tiệc cưới cuối tuần",
    salary: 450000,
    salaryUnit: "ngày",
    location: "Quận 1, TP. Hồ Chí Minh",
    schedule: "08:00 - 17:00 (T7 & CN)",
    postedAt: "Đăng 2 giờ trước",
    badge: "Gấp",
  },
  {
    id: "2",
    title: "Cộng tác viên đóng gói quà Tết",
    salary: 220000,
    salaryUnit: "ca",
    location: "Quận Tân Bình, TP. HCM",
    schedule: "Ca tối (18:00 - 22:00)",
    postedAt: "Đăng 5 giờ trước",
    badge: "Thời vụ",
  },
  {
    id: "3",
    title: "Nhân viên kho vận - Phân loại hàng hóa",
    salary: 600000,
    salaryUnit: "ngày",
    location: "Thành phố Thủ Đức",
    schedule: "Toàn thời gian (Cố định)",
    postedAt: "Đăng 1 ngày trước",
    badge: "Gấp",
  },
  {
    id: "4",
    title: "Lễ tân nhà hàng - Ca sáng",
    salary: 300000,
    salaryUnit: "ca",
    location: "Quận 3, TP. Hồ Chí Minh",
    schedule: "09:00 - 14:00 (Hàng ngày)",
    postedAt: "Đăng 2 ngày trước",
    badge: "Bán thời gian",
  },
];
