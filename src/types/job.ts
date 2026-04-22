export type BadgeType = "Gấp" | "Nóng" | "Thời vụ" | "Bán thời gian";

export interface Job {
  id: string;
  title: string;
  salary: number;
  salaryUnit: "ngày" | "ca" | "tháng" | "giờ";
  location: string;
  schedule: string;
  postedAt: string;
  badge: BadgeType;
  quantity?: number;
  description?: string[];
  requirements?: string[];
  employer?: {
    name: string;
    avatar: string;
    rating: number;
    type: string;
    totalPosts: number;
    joinedDate: string;
  };
}
