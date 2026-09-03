"use client";

import React, { useState } from "react";
import {
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  MessageCircleIcon,
  VolumeIcon,
  VolumeXIcon,
  SparklesIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface HeaderProps {
  activeTrack: "villas" | "developers" | "strategy";
  setActiveTrack: (track: "villas" | "developers" | "strategy") => void;
  onOpenKickoff: () => void;
}

export default function Header({
  activeTrack,
  setActiveTrack,
  onOpenKickoff,
}: HeaderProps) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleTrackChange = (track: "villas" | "developers" | "strategy") => {
    soundFx.playTabSwitch();
    setActiveTrack(track);
  };

  const handleSoundToggle = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  const ceoWhatsappUrl = `https://wa.me/201211050297?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وعاوز أبدأ التنفيذ مع SHIFT!"
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#24344d]/80 bg-[#090e17]/95 backdrop-blur-2xl transition-all duration-300">
      
      {/* Desktop Context Announcement Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 text-xs border-b border-[#1b263b] bg-[#0d1522]/90 text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            CONFIDENTIAL CLIENT PITCH
          </span>
          <span className="font-semibold text-slate-300 text-[11px]">
            ملف استراتيجي خاص وموجّه من <strong className="text-white">SHIFT Agency</strong> إلى <strong className="text-teal-300">Wadi3 Landscape</strong>
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1 text-teal-300 font-semibold">
            <SparklesIcon className="w-3 h-3 text-teal-400" />
            <span><strong>SHIFT GROWTH EDITION</strong></span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">
            العميل: <strong className="text-white font-bold">م. وديع</strong>
          </span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        
        {/* Brand identity: SHIFT Agency presenting to Wadi3 */}
        <div 
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none" 
          onClick={() => handleTrackChange("villas")}
        >
          <div className="relative group shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#1E6E78] via-teal-500 to-cyan-400 p-0.5 shadow-md shadow-teal-500/20 group-active:scale-95 transition-all">
              <div className="w-full h-full bg-[#0c131f] rounded-[10px] flex items-center justify-center font-black text-white text-base sm:text-lg tracking-wider">
                S
              </div>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-xl font-black text-white tracking-tight leading-none">
                SHIFT
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                PITCH
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight mt-0.5">
              موجّه إلى: <strong className="text-teal-300">Wadi3</strong>
            </p>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center p-1.5 rounded-2xl bg-[#0e1624] border border-[#24344d]">
          <button
            onClick={() => handleTrackChange("villas")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTrack === "villas"
                ? "bg-gradient-to-r from-[#1E6E78] to-teal-500 text-white shadow-lg shadow-teal-700/30 scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <UsersIcon className="w-4 h-4" />
            <span>مسار الفلل (Fast Conversion)</span>
          </button>

          <button
            onClick={() => handleTrackChange("developers")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTrack === "developers"
                ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-lg shadow-cyan-600/30 scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BuildingIcon className="w-4 h-4" />
            <span>مسار المطورين (High LTV)</span>
          </button>

          <button
            onClick={() => handleTrackChange("strategy")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTrack === "strategy"
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <TrendingUpIcon className="w-4 h-4" />
            <span>ركائز خطة SHIFT 🚀</span>
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle (Mobile touch-friendly 40x40) */}
          <button
            onClick={handleSoundToggle}
            aria-label={soundEnabled ? "كتم المؤثرات الصوتية" : "تفعيل المؤثرات الصوتية"}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-[#24344d] bg-[#0c131f] text-slate-400 hover:text-teal-300 hover:border-teal-500/40 active:scale-90 transition-all flex items-center justify-center cursor-pointer shrink-0"
          >
            {soundEnabled ? (
              <VolumeIcon className="w-4 h-4 text-teal-400" />
            ) : (
              <VolumeXIcon className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Quick WhatsApp to SHIFT's CEO */}
          <a
            href={ceoWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playChime()}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-teal-500 via-[#1E6E78] to-cyan-500 text-white shadow-md shadow-teal-700/30 active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
          >
            <MessageCircleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">تواصل مع CEO وكالة SHIFT</span>
            <span className="sm:hidden font-black">واتساب الـ CEO</span>
          </a>
        </div>

      </div>

      {/* Mobile-First Segmented Pill Navigation Bar (Fixed touch-friendly segmented control) */}
      <div className="lg:hidden border-t border-[#1b263b] bg-[#0b121e]/95 p-1.5 overflow-x-auto no-scrollbar">
        <div className="grid grid-cols-3 gap-1 min-w-full">
          <button
            onClick={() => handleTrackChange("villas")}
            className={`py-2 px-1 rounded-xl text-[11px] font-black transition-all flex items-center justify-center gap-1 select-none active:scale-95 ${
              activeTrack === "villas"
                ? "bg-gradient-to-r from-[#1E6E78] to-teal-500 text-white shadow-md shadow-teal-700/40"
                : "text-slate-400 hover:text-white bg-white/[0.03]"
            }`}
          >
            <UsersIcon className="w-3 h-3 shrink-0" />
            <span>مسار الفلل</span>
          </button>

          <button
            onClick={() => handleTrackChange("developers")}
            className={`py-2 px-1 rounded-xl text-[11px] font-black transition-all flex items-center justify-center gap-1 select-none active:scale-95 ${
              activeTrack === "developers"
                ? "bg-gradient-to-r from-cyan-600 to-sky-500 text-white shadow-md shadow-cyan-600/40"
                : "text-slate-400 hover:text-white bg-white/[0.03]"
            }`}
          >
            <BuildingIcon className="w-3 h-3 shrink-0" />
            <span>مسار المطورين</span>
          </button>

          <button
            onClick={() => handleTrackChange("strategy")}
            className={`py-2 px-1 rounded-xl text-[11px] font-black transition-all flex items-center justify-center gap-1 select-none active:scale-95 ${
              activeTrack === "strategy"
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/40"
                : "text-slate-400 hover:text-white bg-white/[0.03]"
            }`}
          >
            <TrendingUpIcon className="w-3 h-3 shrink-0" />
            <span>خطة SHIFT</span>
          </button>
        </div>
      </div>

    </header>
  );
}
