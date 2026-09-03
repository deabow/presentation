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
    <section className="relative overflow-hidden pt-10 pb-16 lg:py-20">
      {/* Background Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#1E6E78]/18 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[250px] bg-teal-400/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic Track Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
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
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs sm:text-sm font-bold mb-6 shadow-sm">
            <SparklesIcon className="w-4 h-4 text-teal-400" />
            <span>عرض مقدّم من SHIFT إلى Wadi3 Landscape • انطلاق الهوية</span>
          </div>

          {/* Main Headline verbatim */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-tight mb-6 tracking-tight">
            شغلك أرقى من كل ده...{" "}
            <span className="text-gradient-teal block mt-2">
              احنا في SHIFT جاهزين نخلي الكل يشوفه
            </span>
          </h2>

          {/* Pain Point & Value Statement verbatim */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
            كل يوم بيعدي، فيه عملاء بيدوروا على مقاول لاند سكيب بمستوى Wadi3 بالظبط وما بيلاقوهوش. <strong className="text-teal-300">احنا في SHIFT شايفين إن الفرق مش في جودة تنفيذك، الفرق إن حد لسه ما قدملكش الأداة اللي تخلي شغلك يوصل للناس الصح.</strong>
          </p>

          {/* Direct CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={ceoWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playChime()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-teal-500 via-[#1E6E78] to-cyan-500 text-white shadow-xl shadow-teal-700/40 hover:shadow-teal-600/60 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircleIcon className="w-5 h-5" />
              <span>جاهز نبدأ التنفيذ مع SHIFT؟ تواصل مع الـ CEO</span>
            </a>

            <button
              onClick={() => {
                soundFx.playClick(600);
                onScrollToMedia();
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-sm sm:text-base text-slate-200 border border-[#24344d] bg-[#0c131f]/90 hover:bg-[#152336] hover:border-teal-500/40 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <div className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlayIcon className="w-3.5 h-3.5" />
              </div>
              <span>شاهد كيف سنصنع التحول لمشاريعك (4K)</span>
            </button>
          </div>

          {/* Trust Guarantees by SHIFT */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-3 border-t border-[#1b263b]/70 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <CheckCircle2Icon className="w-4 h-4 text-teal-400" />
              <span>تصوير سينمائي بمعدات 4K سينمائية</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2Icon className="w-4 h-4 text-teal-400" />
              <span>استهداف موجه لأصحاب الفلل والمشاريع الكبرى</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2Icon className="w-4 h-4 text-teal-400" />
              <span>نظام استقبال فوري يضمن صفر فرص ضايعة</span>
            </div>
          </div>

        </div>

        {/* 3 Bento-Grid Metric Cards verbatim */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          
          <div className="glass-panel-teal p-6 rounded-3xl border border-teal-500/30 hover:border-teal-500/60 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-teal-300">النمو المستهدف</span>
              <TrendingUpIcon className="w-5 h-5 text-teal-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-2">
              +15
            </div>
            <div className="text-sm font-bold text-teal-200 mb-1">
              عملاء محتملين شهريًا
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              من خلال تمويل ممول واستهداف صحيح لأصحاب الفلل والمشاريع.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-[#24344d] hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-sky-300">الإنتاج البصري</span>
              <AwardIcon className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white mb-2">
              4K Cinematic
            </div>
            <div className="text-sm font-bold text-sky-200 mb-1">
              جودة الإنتاج البصري
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              تصوير سينمائي يعكس فخامة تنفيذك الحقيقي على الأرض.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-[#24344d] hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-300">الاستجابة الفورية</span>
              <SparklesIcon className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-2">
              &lt; 15 د
            </div>
            <div className="text-sm font-bold text-amber-200 mb-1">
              سرعة الرد على الاستفسارات
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              نظام استقبال فوري يضمن عدم ضياع فرصة بيع واحدة.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
