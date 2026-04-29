import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Ажлын байр — Orange News",
  description: "Багаа бэлтгэхийн тулд тун удахгүй нээлттэй ажлын байруудаа зарлана.",
};

export default function CareersPage() {
  return (
    <ComingSoon
      title="Ажлын байр"
      description="Багаа бэлтгэхийн тулд бид тун удахгүй нээлттэй ажлын байруудаа зарлана. Шинэ боломжуудыг хүлээн авахын тулд info@orangenews.mn хаягаар холбогдоно уу."
    />
  );
}
