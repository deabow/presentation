"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoScriptPlayer from "../components/VideoScriptPlayer";
import CorporateTrack from "../components/CorporateTrack";
import FamilyLawTrack from "../components/FamilyLawTrack";
import StrategyCalculator from "../components/StrategyCalculator";
import Footer from "../components/Footer";
import { soundFx } from "../components/SoundEffects";
import {
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  MessageCircleIcon,
} from "../components/Icons";

export default function Wadi3PitchDeck() {
  const [activeTrack, setActiveTrack] = useState<"villas" | "developers" | "strategy">("villas");

  const scrollToMedia = () => {
    const el = document.getElementById("media-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ceoWhatsappUrl = `https://wa.me/201211050297?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وعاوز أبدأ التنفيذ مع SHIFT!"
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#090e17] text-white selection:bg-[#1E6E78] selection:text-white relative pb-20 sm:pb-12">
      
      {/* 1. Header Navigation with Mobile-First Segmented Control */}
      <Header
        activeTrack={activeTrack}
        setActiveTrack={setActiveTrack}
        onOpenKickoff={() => window.open(ceoWhatsappUrl, "_blank")}
      />

      {/* 2. Hero Section: High-impact typography & direct value proposition */}
      <main className="flex-1">
        <HeroSection
          activeTrack={activeTrack}
          setActiveTrack={setActiveTrack}
          onOpenKickoff={() => window.open(ceoWhatsappUrl, "_blank")}
          onScrollToMedia={scrollToMedia}
        />

        {/* 3. Media Showcase: Cinematic 4K Before & After with touch-optimized interactive viewer */}
        <VideoScriptPlayer />

        {/* 4. Active Track Section Content */}
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          {/* Section Divider Bar */}
          <div className="py-4 sm:py-6 border-b border-[#1f2d40] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-slate-950 shrink-0 ${
                  activeTrack === "villas"
                    ? "bg-teal-400"
                    : activeTrack === "developers"
                    ? "bg-cyan-400"
                    : "bg-amber-400"
                }`}
              >
                {activeTrack === "villas" ? (
                  <UsersIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : activeTrack === "developers" ? (
                  <BuildingIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <TrendingUpIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </div>
              <div>
                <h3 className="text-base sm:text-2xl font-black text-white leading-tight">
                  {activeTrack === "villas" && "مسار الفلل والعملاء الأفراد (Fast Conversion)"}
                  {activeTrack === "developers" && "مسار الشركات والمطورين العقاريين (High LTV)"}
                  {activeTrack === "strategy" && "ركائز خطة SHIFT وحاسبة الأثر التسويقي"}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  {activeTrack === "villas" && "كيف سنقنع أصحاب الفلل بطلب المعاينة الفورية"}
                  {activeTrack === "developers" && "كيف سنبني الثقة لفتح عقود كبرى مع المطورين والكومباوندات"}
                  {activeTrack === "strategy" && "التوثيق 4K، الهوية، الإعلانات الممولة والاستقبال الفوري"}
                </p>
              </div>
            </div>

            {/* Desktop Quick Switch Pills (Hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-2">
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

          {/* Conditional Rendering */}
          {activeTrack === "villas" && <FamilyLawTrack />}

          {activeTrack === "developers" && <CorporateTrack />}

          {activeTrack === "strategy" && <StrategyCalculator />}

          {/* Cross Track Banner */}
          <div className="my-10 sm:my-16 p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-[#223349] text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs font-bold text-teal-400 uppercase tracking-wider">
                استكشاف المحاور المستهدفة
              </span>
              <h4 className="text-base sm:text-2xl font-black text-white">
                {activeTrack === "villas"
                  ? "تريد معرفة كيف سنستهدف كبار المطورين العقاريين؟"
                  : "تريد الاطلاع على استراتيجية استهداف أصحاب الفلل والقصور؟"}
              </h4>
              <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed">
                {activeTrack === "villas"
                  ? "SHIFT ستبني لك بروفايل شركات متقدم يؤهلك لدخول مناقصات الكومباوندات والمشاريع الكبرى."
                  : "سنطلق حملات موجهة جغرافياً لأصحاب الفلل في التجمع والشيخ زايد بمحتوى فيديو سريع الإغلاق."}
              </p>
              <div className="pt-1">
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack(activeTrack === "villas" ? "developers" : "villas");
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all active:scale-95 shadow-lg ${
                    activeTrack === "villas"
                      ? "bg-cyan-500 text-slate-950 shadow-cyan-500/20 hover:bg-cyan-400"
                      : "bg-teal-500 text-slate-950 shadow-teal-500/20 hover:bg-teal-400"
                  }`}
                >
                  {activeTrack === "villas"
                    ? "الانتقال إلى مسار الشركات والمطورين (High LTV) ←"
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
        onOpenConsultation={() => window.open(ceoWhatsappUrl, "_blank")}
      />

      {/* 6. Sticky Floating Kickoff Dock for Mobile & Desktop */}
      <div className="fixed bottom-3 left-3 right-3 sm:bottom-5 sm:left-auto sm:right-6 z-50 flex items-center justify-center sm:justify-end pointer-events-auto">
        <a
          href={ceoWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundFx.playChime()}
          className="w-full sm:w-auto px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl sm:rounded-full bg-gradient-to-r from-teal-500 via-[#1E6E78] to-cyan-500 text-white font-black text-xs sm:text-sm shadow-2xl shadow-teal-900/80 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer border border-teal-300/40 backdrop-blur-xl"
        >
          <span className="flex h-2.5 w-2.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300"></span>
          </span>
          <MessageCircleIcon className="w-4 h-4 shrink-0" />
          <span>بدء التنفيذ مع SHIFT (واتساب الـ CEO)</span>
        </a>
      </div>

    </div>
  );
}
