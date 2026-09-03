import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مشروع البطة السمينة | مؤسسة كمال أبو علي للمحاماة x SHIFT Agency",
  description: "خطة تظبيط الشغل وفصل الحملات: حماية قانونية استباقية لبيزنس الشركات (B2B) وإنهاء فوري وسري لقضايا الأسرة والأفراد (B2C).",
  keywords: [
    "محامي شركات",
    "تأسيس شركات",
    "صياغة عقود تجارية",
    "قضايا عمالية",
    "محامي طلاق وخلع",
    "استشارات قانونية",
    "كمال أبو علي",
    "SHIFT Agency"
  ],
  authors: [{ name: "SHIFT Agency" }, { name: "مؤسسة كمال أبو علي" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} style={{ fontFamily: "var(--font-cairo), 'Cairo', sans-serif" }}>
      <body className="min-h-screen bg-[#06060c] text-[#f8fafc] antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
