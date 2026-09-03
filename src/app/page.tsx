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
  ShieldCheckIcon,
} from "../components/Icons";

export default function FatDuckApp() {
  const [activeTrack, setActiveTrack] = useState<"b2b" | "b2c" | "strategy">("b2b");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const scrollToVideo = () => {
    const el = document.getElementById("video-script");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#06060c] text-white selection:bg-purple-600 selection:text-white relative">
      
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
          onScrollToVideo={scrollToVideo}
        />

        {/* 3. Interactive Video Script Breakdown (60s Hook / Authority / CTA) */}
        <VideoScriptPlayer
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 4. Active Track Section Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Divider with Track Title */}
          <div className="py-6 border-b border-[#231b46] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-slate-950 ${
                  activeTrack === "b2b"
                    ? "bg-sky-400"
                    : activeTrack === "b2c"
                    ? "bg-amber-400"
                    : "bg-purple-500 text-white"
                }`}
              >
                {activeTrack === "b2b" ? (
                  <BuildingIcon className="w-5 h-5" />
                ) : activeTrack === "b2c" ? (
                  <UsersIcon className="w-5 h-5" />
                ) : (
                  <TrendingUpIcon className="w-5 h-5" />
                )}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {activeTrack === "b2b" && "تفاصيل مسار الشركات والمصانع (Corporate)"}
                  {activeTrack === "b2c" && "تفاصيل مسار قضايا الأسرة والأفراد (Family Law)"}
                  {activeTrack === "strategy" && "لوحة المقارنة وحاسبة العائد وخطة SHIFT"}
                </h3>
                <p className="text-xs text-slate-400">
                  {activeTrack === "b2b" && "نظام الحماية الوقائية للبيزنس وصياغة العقود والاستشارات السنوية"}
                  {activeTrack === "b2c" && "استجابة فورية وحفظ كامل للحقوق والسرية التامة"}
                  {activeTrack === "strategy" && "استراتيجية وقف حرق الميزانية وتوجيه الحملات الإعلانية في مكانها الصحيح"}
                </p>
              </div>
            </div>

            {/* Quick Track Switch Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  soundFx.playTabSwitch();
                  setActiveTrack("b2b");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTrack === "b2b"
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                سكة الشركات
              </button>
              <button
                onClick={() => {
                  soundFx.playTabSwitch();
                  setActiveTrack("b2c");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTrack === "b2c"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                سكة الأسرة
              </button>
              <button
                onClick={() => {
                  soundFx.playTabSwitch();
                  setActiveTrack("strategy");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTrack === "strategy"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                الخطة والحاسبة
              </button>
            </div>
          </div>

          {/* Conditional Rendering of Track Content */}
          {activeTrack === "b2b" && (
            <CorporateTrack
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          )}

          {activeTrack === "b2c" && (
            <FamilyLawTrack
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          )}

          {activeTrack === "strategy" && <StrategyCalculator />}

          {/* Bottom Dual-Track Cross Navigator Banner */}
          <div className="my-16 p-8 rounded-3xl glass-panel border border-[#2b2255] text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                استكشف المسار الموازي
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                {activeTrack === "b2b"
                  ? "هل تبحث عن استشارة شخصية أو عائلية؟"
                  : "هل تدير شركة أو مصنعاً وتريد حماية استثماراتك؟"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeTrack === "b2b"
                  ? "نوفر قسماً مستقلاً متخصصاً في قضايا الأحوال الشخصية ومحكمة الأسرة بأعلى درجات السرية والسرعة."
                  : "نوفر قسماً متخصصاً للشركات وصياغة العقود وحماية الاستثمارات وتأسيس الكيانات القانونية."}
              </p>
              <div>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack(activeTrack === "b2b" ? "b2c" : "b2b");
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all hover:scale-105 shadow-lg ${
                    activeTrack === "b2b"
                      ? "bg-amber-500 text-slate-950 shadow-amber-500/20 hover:bg-amber-400"
                      : "bg-sky-500 text-slate-950 shadow-sky-500/20 hover:bg-sky-400"
                  }`}
                >
                  {activeTrack === "b2b"
                    ? "الانتقال إلى سكة قضايا الأسرة (B2C) ←"
                    : "الانتقال إلى سكة الشركات والمصانع (B2B) ←"}
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

      {/* 7. Floating Action Bar for Mobile & Instant Access */}
      <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2 sm:hidden">
        <a
          href="https://wa.me/201000000000"
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
          className="px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs shadow-xl shadow-purple-600/40 flex items-center gap-2 cursor-pointer"
        >
          <PhoneIcon className="w-4 h-4" />
          <span>استشارة فورية</span>
        </button>
      </div>

    </div>
  );
}
