export type BadgeType = "Gấp" | "Thời vụ" | "Bán thời gian" | "Nóng" | "Mới đăng" | "Khác";

export interface Job {
  id: string;
  title: string;
  salary: number;
  salaryUnit: "ngày" | "giờ" | "ca";
  location: string;
  schedule: string;
  postedAt: string;
  badge: BadgeType;
}
