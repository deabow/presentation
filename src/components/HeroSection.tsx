"use client";

import React from "react";
import {
  ShieldCheckIcon,
  PlayIcon,
  FileTextIcon,
  PhoneIcon,
  AwardIcon,
  SparklesIcon,
  BuildingIcon,
  UsersIcon,
  CheckCircle2Icon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface HeroSectionProps {
  activeTrack: "b2b" | "b2c" | "strategy";
  setActiveTrack: (track: "b2b" | "b2c" | "strategy") => void;
  onOpenConsultation: () => void;
  onScrollToVideo: () => void;
}

export default function HeroSection({
  activeTrack,
  setActiveTrack,
  onOpenConsultation,
  onScrollToVideo,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      {activeTrack === "b2b" && (
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[250px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none transition-all duration-700"></div>
      )}
      {activeTrack === "b2c" && (
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[250px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none transition-all duration-700"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Track Selection Pills in Hero Header */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 p-1 rounded-full bg-[#120f26] border border-[#2b2255] shadow-lg">
            <button
              onClick={() => {
                soundFx.playTabSwitch();
                setActiveTrack("b2b");
              }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTrack === "b2b"
                  ? "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <BuildingIcon className="w-3.5 h-3.5" />
              <span>قطاع الشركات (B2B)</span>
            </button>

            <button
              onClick={() => {
                soundFx.playTabSwitch();
                setActiveTrack("b2c");
              }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTrack === "b2c"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <UsersIcon className="w-3.5 h-3.5" />
              <span>قضايا الأسرة (B2C)</span>
            </button>

            <button
              onClick={() => {
                soundFx.playTabSwitch();
                setActiveTrack("strategy");
              }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTrack === "strategy"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>استراتيجية SHIFT</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content per Active Track */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <SparklesIcon className="w-4 h-4 text-purple-400" />
            <span>
              {activeTrack === "b2b" && "الحملة الأولى: سكة المصانع والشركات الكبرى"}
              {activeTrack === "b2c" && "الحملة الثانية: سكة قضايا الأسرة والأفراد المستعجلة"}
              {activeTrack === "strategy" && "خطة فض حرق الميزانية وتظبيط الاستهداف في جوجل"}
            </span>
          </div>

          {/* Main Hero Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-tight mb-6 tracking-tight">
            {activeTrack === "b2b" && (
              <>
                حماية قانونية متكاملة لبيزنسك{" "}
                <span className="text-gradient-cyan block mt-2">
                  وتحصين عقودك واستثماراتك
                </span>
              </>
            )}
            {activeTrack === "b2c" && (
              <>
                سرية تامة وسرعة حاسمة{" "}
                <span className="text-gradient-gold block mt-2">
                  في إنهاء كافة قضايا محكمة الأسرة
                </span>
              </>
            )}
            {activeTrack === "strategy" && (
              <>
                مشروع البطة السمينة:{" "}
                <span className="text-gradient-purple block mt-2">
                  خطة تظبيط الشغل وفصل الحملات
                </span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
            {activeTrack === "b2b" && (
              <>
                أكثر من <strong className="text-sky-400">70% من خسائر وخناقات الشركات</strong> كان يمكن تفاديها بسطر واحد مكتوب صح في العقد من الأول. مؤسسة <span className="text-white font-bold">كمال أبو علي</span> تحمي الكيان وتغلق الثغرات قبل أن تقع الفأس في الرأس.
              </>
            )}
            {activeTrack === "b2c" && (
              <>
                نعلم حساسية الموقف العائلي وصعوبة الإجراءات. نضمن لك <strong className="text-amber-400">سرية كاملة بنسبة 100%</strong> وسرعة فائقة في تحصيل النفقات، دعاوى الطلاق والخلع، وقضايا الحضانة والرؤية.
              </>
            )}
            {activeTrack === "strategy" && (
              <>
                هنقسم الميزانية لحملتين منفصلين تماماً، كل واحدة ليها لاندنج بيدج ودنيتها عشان نوقف حرق الفلوس على الفاضي ونجيب زبون البطة السمينة ذو القيمة العالية.
              </>
            )}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={() => {
                soundFx.playChime();
                onOpenConsultation();
              }}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95 ${
                activeTrack === "b2b"
                  ? "bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 text-slate-950 shadow-cyan-500/30 hover:shadow-cyan-500/50"
                  : activeTrack === "b2c"
                  ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-950 shadow-amber-500/30 hover:shadow-amber-500/50"
                  : "bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 text-white shadow-purple-600/30 hover:shadow-purple-600/50"
              }`}
            >
              {activeTrack === "b2b" ? (
                <>
                  <FileTextIcon className="w-5 h-5" />
                  <span>طلب فحص عقود شركتك مجاناً</span>
                </>
              ) : activeTrack === "b2c" ? (
                <>
                  <PhoneIcon className="w-5 h-5" />
                  <span>تحدث مع مستشار الأسرة الآن</span>
                </>
              ) : (
                <>
                  <SparklesIcon className="w-5 h-5" />
                  <span>بدء تطبيق استراتيجية SHIFT</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                soundFx.playClick(500);
                onScrollToVideo();
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-sm sm:text-base text-slate-200 border border-[#2b2255] bg-[#0c0a1a]/80 hover:bg-[#161233] hover:border-purple-500/40 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <div className="w-7 h-7 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlayIcon className="w-3.5 h-3.5" />
              </div>
              <span>شاهد سكريبت فيديو البوب (60 ثانية)</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-2 border-t border-[#1c1639]/60 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
              <span>استشارات موثقة رسمياً</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
              <span>سرية تامة وتشفير للمعلومات</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
              <span>مقابلة مباشرة مع كمال أبو علي</span>
            </div>
          </div>

        </div>

        {/* Live Metrics Grid (Visual Hierarchy Accent) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          <div className="glass-panel p-5 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-purple-300">وقاية تعاقدية</span>
              <ShieldCheckIcon className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">
              +70%
            </div>
            <p className="text-xs text-slate-400">
              من نزاعات الشركاء يتم إغلاقها مسبقاً قبل وصولها للمحكمة
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-sky-300">سجل الخبرة</span>
              <AwardIcon className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">
              +15 سنة
            </div>
            <p className="text-xs text-slate-400">
              ترافع ومرافعة في المحاكم الاقتصادية والمدنية ومحاكم الأسرة
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-emerald-300">نسبة النجاح</span>
              <CheckCircle2Icon className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">
              98.4%
            </div>
            <p className="text-xs text-slate-400">
              نسبة الأحكام الإيجابية والتسويات الودية لصالح الموكلين
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-300">سرعة الاستجابة</span>
              <PhoneIcon className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">
              &lt; 5 د
            </div>
            <p className="text-xs text-slate-400">
              متوسط سرعة الرد على طلبات واستفسارات الواتساب العاجلة
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
