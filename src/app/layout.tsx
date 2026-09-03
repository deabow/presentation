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
  title: "Wadi3 Landscape | انطلاق الهوية (SHIFT GROWTH EDITION)",
  description: "شغلك أرقى من كل ده... ليه محدش يشوفه؟ استراتيجية تسويقية وتوثيق سينمائي 4K لنقل لاندسكيب وديع إلى فئة النخبة وجذب أصحاب الفلل والمطورين العقاريين.",
  keywords: [
    "Wadi3 Landscape",
    "وديع لاندسكيب",
    "لاندسكيب فلل",
    "ملاعب وحدائق",
    "تصوير سينمائي لاندسكيب",
    "SHIFT Growth Edition",
    "مقاول لاندسكيب"
  ],
  authors: [{ name: "SHIFT Agency" }, { name: "Wadi3 Landscape" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} style={{ fontFamily: "var(--font-cairo), 'Cairo', sans-serif" }}>
      <body className="min-h-screen bg-[#090e17] text-[#f8fafc] antialiased selection:bg-[#1E6E78] selection:text-white">
        {children}
      </body>
    </html>
  );
}
