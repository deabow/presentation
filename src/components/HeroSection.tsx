"use client";

import React from "react";
import {
  SparklesIcon,
  PlayIcon,
  MessageCircleIcon,
  AwardIcon,
  UsersIcon,
  BuildingIcon,
  CheckCircle2Icon,
  TrendingUpIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface HeroSectionProps {
  activeTrack: "villas" | "developers" | "strategy";
  setActiveTrack: (track: "villas" | "developers" | "strategy") => void;
  onOpenKickoff: () => void;
  onScrollToMedia: () => void;
}

export default function HeroSection({
  activeTrack,
  setActiveTrack,
  onOpenKickoff,
  onScrollToMedia,
}: HeroSectionProps) {
  const ceoWhatsappUrl = `https://wa.me/201211050297?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وعاوز أبدأ التنفيذ مع SHIFT!"
  )}`;

  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10 pb-12 sm:pb-16 lg:py-20">
      {/* Background Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[220px] sm:h-[360px] bg-[#1E6E78]/22 blur-[90px] sm:blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[250px] sm:w-[450px] h-[180px] sm:h-[250px] bg-teal-400/12 blur-[70px] sm:blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop Track Pills (Hidden on mobile since segmented control is in Header) */}
        <div className="hidden lg:flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-[#0d1624] border border-[#24344d] shadow-xl">
            <button
              onClick={() => {
                soundFx.playTabSwitch();
                setActiveTrack("villas");
              }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTrack === "villas"
                  ? "bg-gradient-to-r from-[#1E6E78] to-teal-500 text-white shadow-md shadow-teal-700/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <UsersIcon className="w-3.5 h-3.5" />
              <span>مسار الفلل والأفراد (Fast Conversion)</span>
            </button>

            <button
              onClick={() => {
                soundFx.playTabSwitch();
                setActiveTrack("developers");
              }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTrack === "developers"
                  ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-md shadow-cyan-600/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BuildingIcon className="w-3.5 h-3.5" />
              <span>مسار الشركات والمطورين (High LTV)</span>
            </button>

            <button
              onClick={() => {
                soundFx.playTabSwitch();
                setActiveTrack("strategy");
              }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTrack === "strategy"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>استراتيجية SHIFT</span>
            </button>
          </div>
        </div>

        {/* Agency Hero Pitch to Wadi3 */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-[11px] sm:text-xs font-bold mb-4 sm:mb-6 shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>عرض مقدّم من SHIFT إلى Wadi3 Landscape</span>
          </div>

          {/* Main Headline - Mobile Optimized Sizing */}
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-tight sm:leading-tight mb-4 sm:mb-6 tracking-tight">
            شغلك أرقى من كل ده...{" "}
            <span className="text-gradient-teal block mt-1 sm:mt-2">
              احنا في SHIFT جاهزين نخلي الكل يشوفه
            </span>
          </h2>

          {/* Pain Point & Value Statement */}
          <p className="text-xs sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto font-medium px-1 sm:px-0">
            كل يوم بيعدي، فيه عملاء بيدوروا على مقاول لاند سكيب بمستوى Wadi3 بالظبط وما بيلاقوهوش. <strong className="text-teal-300">احنا في SHIFT شايفين إن الفرق مش في جودة تنفيذك، الفرق إن حد لسه ما قدملكش الأداة اللي تخلي شغلك يوصل للناس الصح.</strong>
          </p>

          {/* Direct CTA Buttons - Thumb Reachable */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href={ceoWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playChime()}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl font-black text-xs sm:text-sm bg-gradient-to-r from-teal-500 via-[#1E6E78] to-cyan-500 text-white shadow-xl shadow-teal-700/30 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircleIcon className="w-4 h-4 shrink-0" />
              <span>جاهز نبدأ التنفيذ؟ تواصل مع CEO وكالة SHIFT</span>
            </a>

            <button
              onClick={() => {
                soundFx.playClick(600);
                onScrollToMedia();
              }}
              className="w-full sm:w-auto px-5 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm text-slate-200 border border-[#24344d] bg-[#0c131f]/90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                <PlayIcon className="w-3 h-3" />
              </div>
              <span>شاهد كيف سنصنع التحول لمشاريعك (4K)</span>
            </button>
          </div>

          {/* Trust Guarantees by SHIFT (Mobile friendly layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-[11px] sm:text-xs text-slate-300 pt-3 border-t border-[#1b263b]/70 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-white/[0.02]">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>إنتاج سينمائي بمعدات 4K</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-white/[0.02]">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>استهداف لأصحاب الفلل والمشاريع</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-white/[0.02]">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>نظام فوري: صفر فرص ضايعة</span>
            </div>
          </div>

        </div>

        {/* 3 Bento-Grid Metric Cards - Mobile First Stacking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 mt-10 sm:mt-16">
          
          <div className="glass-panel-teal p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-teal-500/30">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-bold text-teal-300">النمو المستهدف</span>
              <TrendingUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
            </div>
            <div className="text-2xl sm:text-4xl font-black text-white mb-1">
              +15
            </div>
            <div className="text-xs sm:text-sm font-bold text-teal-200 mb-1">
              عملاء محتملين شهريًا
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              من خلال تمويل ممول واستهداف صحيح لأصحاب الفلل والمشاريع.
            </p>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#24344d]">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-bold text-sky-300">الإنتاج البصري</span>
              <AwardIcon className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
            </div>
            <div className="text-xl sm:text-3xl font-black text-white mb-1">
              4K Cinematic
            </div>
            <div className="text-xs sm:text-sm font-bold text-sky-200 mb-1">
              جودة الإنتاج البصري
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              تصوير سينمائي يعكس فخامة تنفيذك الحقيقي على الأرض.
            </p>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#24344d]">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-bold text-amber-300">الاستجابة الفورية</span>
              <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-4xl font-black text-white mb-1">
              &lt; 15 د
            </div>
            <div className="text-xs sm:text-sm font-bold text-amber-200 mb-1">
              سرعة الرد على الاستفسارات
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              نظام استقبال فوري يضمن عدم ضياع فرصة بيع واحدة.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
