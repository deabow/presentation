"use client";

import React, { useState } from "react";
import {
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  PhoneIcon,
  MessageCircleIcon,
  VolumeIcon,
  VolumeXIcon,
  ShieldCheckIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface HeaderProps {
  activeTrack: "b2b" | "b2c" | "strategy";
  setActiveTrack: (track: "b2b" | "b2c" | "strategy") => void;
  onOpenConsultation: () => void;
}

export default function Header({
  activeTrack,
  setActiveTrack,
  onOpenConsultation,
}: HeaderProps) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleTrackChange = (track: "b2b" | "b2c" | "strategy") => {
    soundFx.playTabSwitch();
    setActiveTrack(track);
  };

  const handleSoundToggle = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#231b46]/70 bg-[#06060c]/85 backdrop-blur-xl transition-all duration-300">
      {/* Top micro-announcement bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 text-xs border-b border-[#1c1639] bg-[#0c0a1a]/60 text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            متاحون للاستشارات الفورية
          </span>
          <span>مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1 text-purple-300">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-purple-400" />
            معتمدة لدى نقابة المحامين ومحاكم الاستئناف
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">
            تصميم وتنفيذ استراتيجية: <strong className="text-purple-400 font-bold">SHIFT AGENCY</strong>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={() => handleTrackChange("b2b")}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-purple-600/20 group-hover:shadow-purple-600/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0c0a1a] rounded-[10px] flex items-center justify-center">
                <span className="text-xl select-none">🦆</span>
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black text-white tracking-tight">
                مشروع البطة السمينة
              </h1>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                PRO MAX
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              العميل: <span className="text-purple-300 font-semibold">البوب كمال أبو علي</span>
            </p>
          </div>
        </div>

        {/* Dynamic Track Switcher Tabs (Micro-interaction Centerpiece) */}
        <nav className="hidden lg:flex items-center p-1.5 rounded-2xl bg-[#0e0c1f] border border-[#261f4d] shadow-inner">
          <button
            onClick={() => handleTrackChange("b2b")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTrack === "b2b"
                ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BuildingIcon className="w-4 h-4" />
            <span>سكة الشركات والمصانع (B2B)</span>
          </button>

          <button
            onClick={() => handleTrackChange("b2c")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTrack === "b2c"
                ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/25 scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <UsersIcon className="w-4 h-4" />
            <span>سكة قضايا الأسرة (B2C)</span>
          </button>

          <button
            onClick={() => handleTrackChange("strategy")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTrack === "strategy"
                ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-600/30 scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <TrendingUpIcon className="w-4 h-4" />
            <span>الخطة والاستراتيجية 📊</span>
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            title={soundEnabled ? "كتم المؤثرات الصوتية" : "تفعيل المؤثرات الصوتية"}
            className="p-2.5 rounded-xl border border-[#261f4d] bg-[#0c0a1a] text-slate-400 hover:text-purple-300 hover:border-purple-500/40 transition-all cursor-pointer"
          >
            {soundEnabled ? (
              <VolumeIcon className="w-4 h-4 text-purple-400" />
            ) : (
              <VolumeXIcon className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Quick WhatsApp */}
          <a
            href="https://wa.me/201000000000?text=أهلاً%20مؤسسة%20كمال%20أبو%20علي،%20أريد%20استشارة%20قانونية%20عاجلة"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick(750)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:scale-105 transition-all duration-200"
          >
            <MessageCircleIcon className="w-4 h-4" />
            <span>واتساب مباشر</span>
          </a>

          {/* Primary CTA Button */}
          <button
            onClick={() => {
              soundFx.playChime();
              onOpenConsultation();
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <PhoneIcon className="w-4 h-4 animate-bounce" />
            <span>احجز استشارة فورية</span>
          </button>
        </div>
      </div>

      {/* Mobile Track Switcher (visible on small screens) */}
      <div className="lg:hidden flex items-center justify-around px-3 py-2 border-t border-[#1c1639] bg-[#080712]">
        <button
          onClick={() => handleTrackChange("b2b")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTrack === "b2b"
              ? "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30"
              : "text-slate-400"
          }`}
        >
          سكة الشركات
        </button>
        <button
          onClick={() => handleTrackChange("b2c")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTrack === "b2c"
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
              : "text-slate-400"
          }`}
        >
          سكة الأسرة
        </button>
        <button
          onClick={() => handleTrackChange("strategy")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTrack === "strategy"
              ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
              : "text-slate-400"
          }`}
        >
          خطة SHIFT
        </button>
      </div>
    </header>
  );
}
