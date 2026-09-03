"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoScriptPlayer from "../components/VideoScriptPlayer";
import CorporateTrack from "../components/CorporateTrack";
import FamilyLawTrack from "../components/FamilyLawTrack";
import StrategyCalculator from "../components/StrategyCalculator";
import ConsultationModal from "../components/ConsultationModal";
import Footer from "../components/Footer";
import { soundFx } from "../components/SoundEffects";
import {
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "../components/Icons";

export default function Wadi3App() {
  const [activeTrack, setActiveTrack] = useState<"villas" | "developers" | "strategy">("villas");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const scrollToMedia = () => {
    const el = document.getElementById("media-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = `https://wa.me/201220582340?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وجاهز نبدأ التنفيذ!"
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#090e17] text-white selection:bg-[#1E6E78] selection:text-white relative">
      
      {/* 1. Header Navigation */}
      <Header
        activeTrack={activeTrack}
        setActiveTrack={setActiveTrack}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 2. Hero Section with dynamic Visual Hierarchy */}
      <main className="flex-1">
        <HeroSection
          activeTrack={activeTrack}
          setActiveTrack={setActiveTrack}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onScrollToMedia={scrollToMedia}
        />

        {/* 3. Media Showcase: Cinematic Before & After (4K) with Script Breakdown */}
        <VideoScriptPlayer />

        {/* 4. Active Track Section Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Divider with Track Title */}
          <div className="py-6 border-b border-[#1f2d40] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-slate-950 ${
                  activeTrack === "villas"
                    ? "bg-teal-400"
                    : activeTrack === "developers"
                    ? "bg-cyan-400"
                    : "bg-amber-400"
                }`}
              >
                {activeTrack === "villas" ? (
                  <UsersIcon className="w-5 h-5" />
                ) : activeTrack === "developers" ? (
                  <BuildingIcon className="w-5 h-5" />
                ) : (
                  <TrendingUpIcon className="w-5 h-5" />
                )}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {activeTrack === "villas" && "مسار الفلل والعملاء الأفراد (Fast Conversion)"}
                  {activeTrack === "developers" && "مسار الشركات والمطورين العقاريين (High LTV)"}
                  {activeTrack === "strategy" && "ركائز الاستراتيجية وحاسبة نمو الأعمال • SHIFT EDITION"}
                </h3>
                <p className="text-xs text-slate-400">
                  {activeTrack === "villas" && "حدائق وملاعب الفلل والقصور، الشلالات ومناطق الـ BBQ الخاصة"}
                  {activeTrack === "developers" && "عقود اللاندسكيب للكومباوندات، الملاعب الرياضية وعقود الصيانة المستمرة"}
                  {activeTrack === "strategy" && "التوثيق السينمائي 4K، الهوية البصرية المتكاملة، الإعلانات الممولة ونظام الاستقبال الفوري"}
                </p>
              </div>
            </div>

            {/* Quick Track Switch Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  soundFx.playTabSwitch();
                  setActiveTrack("villas");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTrack === "villas"
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                مسار الفلل
              </button>
              <button
                onClick={() => {
                  soundFx.playTabSwitch();
                  setActiveTrack("developers");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTrack === "developers"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                مسار المطورين
              </button>
              <button
                onClick={() => {
                  soundFx.playTabSwitch();
                  setActiveTrack("strategy");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTrack === "strategy"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                خطة SHIFT
              </button>
            </div>
          </div>

          {/* Conditional Rendering of Track Content */}
          {activeTrack === "villas" && <FamilyLawTrack />}

          {activeTrack === "developers" && <CorporateTrack />}

          {activeTrack === "strategy" && <StrategyCalculator />}

          {/* Bottom Dual-Track Cross Navigator Banner */}
          <div className="my-16 p-8 rounded-3xl glass-panel border border-[#223349] text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                استكشف خدمات Wadi3 الأخرى
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                {activeTrack === "villas"
                  ? "هل تدير مشروع تطوير عقاري أو كومباوند سياحي؟"
                  : "هل تريد تصميم أو تجديد حديقة وملعب فيلتك الخاصة؟"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeTrack === "villas"
                  ? "نوفر قسماً متخصصاً للمقايسات الكبرى، ملاعب الأندية، وتنسيق حدائق الكومباوندات بأعلى المواصفات الهندسية."
                  : "نوفر قسماً مخصصاً للفلل والقصور السكنية مع تشكيلات شلالات وإنارة ذكية وضمان شامل."}
              </p>
              <div>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack(activeTrack === "villas" ? "developers" : "villas");
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all hover:scale-105 shadow-lg ${
                    activeTrack === "villas"
                      ? "bg-cyan-500 text-slate-950 shadow-cyan-500/20 hover:bg-cyan-400"
                      : "bg-teal-500 text-slate-950 shadow-teal-500/20 hover:bg-teal-400"
                  }`}
                >
                  {activeTrack === "villas"
                    ? "الانتقال إلى مسار المطورين والشركات (High LTV) ←"
                    : "الانتقال إلى مسار الفلل والعملاء الأفراد (Fast Conversion) ←"}
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 5. Footer */}
      <Footer
        setActiveTrack={setActiveTrack}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 6. Interactive Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultTrack={activeTrack}
      />

      {/* 7. Floating Action Bar for Mobile & Instant WhatsApp Access */}
      <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2 sm:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundFx.playClick(800)}
          className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircleIcon className="w-6 h-6" />
        </a>

        <button
          onClick={() => {
            soundFx.playChime();
            setIsConsultationOpen(true);
          }}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-teal-500 to-[#1E6E78] text-white font-bold text-xs shadow-xl shadow-teal-700/40 flex items-center gap-2 cursor-pointer"
        >
          <PhoneIcon className="w-4 h-4" />
          <span>حجز معاينة</span>
        </button>
      </div>

    </div>
  );
}
