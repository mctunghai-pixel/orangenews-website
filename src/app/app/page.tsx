import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Mobile App — Aravt News",
  description: "Aravt News iOS / Android аппликейшн тун удахгүй нээгдэнэ.",
};

export default function AppPage() {
  return (
    <ComingSoon
      title="Aravt News Mobile App"
      description="Aravt News-ийн iOS / Android аппликейшн тун удахгүй нээгдэнэ. Шинэ мэдээллийг push notification-аар хүлээн авах боломжтой болно."
    />
  );
}
