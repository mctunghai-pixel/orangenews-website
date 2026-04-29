import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Mobile App — Orange News",
  description: "Orange News iOS / Android аппликейшн тун удахгүй нээгдэнэ.",
};

export default function AppPage() {
  return (
    <ComingSoon
      title="Orange News Mobile App"
      description="Orange News-ийн iOS / Android аппликейшн тун удахгүй нээгдэнэ. Шинэ мэдээллийг push notification-аар хүлээн авах боломжтой болно."
    />
  );
}
