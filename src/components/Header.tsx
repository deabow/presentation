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
    <header className="sticky top-0 z-50 w-full border-b border-[#24344d]/70 bg-[#090e17]/90 backdrop-blur-xl transition-all duration-300">
      {/* Top Context Announcement Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs border-b border-[#1b263b] bg-[#0d1522]/80 text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            CONFIDENTIAL CLIENT PITCH
          </span>
          <span className="font-semibold text-slate-300">
            ملف استراتيجي خاص وموجّه من <strong className="text-white">SHIFT Agency</strong> إلى <strong className="text-teal-300">Wadi3 Landscape</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-teal-300 font-semibold">
            <SparklesIcon className="w-3.5 h-3.5 text-teal-400" />
            <span>إصدار النمو: <strong>SHIFT GROWTH EDITION</strong></span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">
            العميل المستهدف: <strong className="text-white font-bold">م. وديع</strong>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand identity: SHIFT Agency presenting to Wadi3 */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTrackChange("villas")}>
          <div className="relative group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#1E6E78] via-teal-500 to-cyan-400 p-0.5 shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0c131f] rounded-[10px] flex items-center justify-center font-black text-white text-lg tracking-wider">
                S
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black text-white tracking-tight">
                SHIFT <span className="text-teal-400 text-sm font-semibold">AGENCY</span>
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-500/15 text-teal-300 border border-teal-500/30">
                PITCH DECK
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              عرض استراتيجي مقدّم إلى: <span className="text-teal-300 font-semibold">Wadi3 Landscape</span>
            </p>
          </div>
        </div>

        {/* Dynamic Track Switcher Tabs */}
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
        <div className="flex items-center gap-2.5">
          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            title={soundEnabled ? "كتم المؤثرات الصوتية" : "تفعيل المؤثرات الصوتية"}
            className="p-2.5 rounded-xl border border-[#24344d] bg-[#0c131f] text-slate-400 hover:text-teal-300 hover:border-teal-500/40 transition-all cursor-pointer"
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
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-teal-500 via-[#1E6E78] to-cyan-500 text-white shadow-lg shadow-teal-700/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <MessageCircleIcon className="w-4 h-4" />
            <span>تواصل مع CEO وكالة SHIFT</span>
          </a>
        </div>
      </div>

      {/* Mobile Track Switcher */}
      <div className="lg:hidden flex items-center justify-around px-3 py-2 border-t border-[#1b263b] bg-[#0b121e]">
        <button
          onClick={() => handleTrackChange("villas")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTrack === "villas"
              ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30"
              : "text-slate-400"
          }`}
        >
          مسار الفلل
        </button>
        <button
          onClick={() => handleTrackChange("developers")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTrack === "developers"
              ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30"
              : "text-slate-400"
          }`}
        >
          مسار المطورين
        </button>
        <button
          onClick={() => handleTrackChange("strategy")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            activeTrack === "strategy"
              ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
              : "text-slate-400"
          }`}
        >
          خطة SHIFT
        </button>
      </div>
    </header>
  );
}
