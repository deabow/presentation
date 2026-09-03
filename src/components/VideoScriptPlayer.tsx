"use client";

import React, { useState, useEffect } from "react";
import {
  PlayIcon,
  PauseIcon,
  SparklesIcon,
  MessageCircleIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

const PHASES = [
  {
    id: 1,
    start: 0,
    end: 15,
    title: "المشكلة (الأرض قبل السحر)",
    shortTitle: "المشكلة",
    badge: "00:00 - 00:15",
    border: "border-rose-500/30",
    tagColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    content: "لقطات للأرض أو الملعب قبل التنفيذ، موثقة بجودة تصوير ضعيفة وغير مدروسة كما كانت من قبل",
    note: "إظهار الفرق الحقيقي في القيمة اللي كانت بتضيع بسبب ضعف التوثيق",
    cameraAngle: "لقطة واسعة • إضاءة خافتة • توثيق يظلم شغلك",
  },
  {
    id: 2,
    start: 15,
    end: 35,
    title: "التنفيذ (يد الخبرة)",
    shortTitle: "التنفيذ",
    badge: "00:15 - 00:35",
    border: "border-teal-500/40",
    tagColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    content: "لقطات من مراحل التصميم والزراعة والتشطيب أثناء التنفيذ الفعلي",
    note: "بناء الثقة عند المشاهد عن طريق إظهار الاحترافية في مراحل الشغل",
    cameraAngle: "Macro Lens 4K • زوايا درامية تركز على دقة الحرفة",
  },
  {
    id: 3,
    start: 35,
    end: 60,
    title: "النتيجة (الفخامة المستحقة)",
    shortTitle: "النتيجة",
    badge: "00:35 - 01:00",
    border: "border-emerald-500/40",
    tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    content: "اللقطات السينمائية النهائية للملعب أو الحديقة بعد التنفيذ بجودة 4K",
    note: "تحويل المشاهد لعميل عن طريق نتيجة نهائية تبيع نفسها بنفسها",
    cameraAngle: "4K Drone Orbit • إضاءة ليلية دافئة مذهلة",
  },
];

export default function VideoScriptPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentStageIndex =
    currentTime < 15 ? 0 : currentTime < 35 ? 1 : 2;
  const currentStage = PHASES[currentStageIndex];

  // Playback timer simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 60) {
            setIsPlaying(false);
            soundFx.playChime();
            return 60;
          }
          return prev + 1;
        });
      }, 650);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    soundFx.playClick(650);
    if (currentTime >= 60) {
      setCurrentTime(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const jumpToStage = (startTime: number) => {
    soundFx.playClick(800);
    setCurrentTime(startTime);
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const ceoWhatsappUrl = `https://wa.me/201211050297?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وعاوز أبدأ التنفيذ مع SHIFT!"
  )}`;

  return (
    <section id="media-showcase" className="py-10 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[11px] sm:text-xs font-bold mb-2 sm:mb-3">
            <SparklesIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>رؤية وتجهيز فريق ميديا وكالة SHIFT</span>
          </div>
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white px-2">
            احنا هنوثقلك التحول:{" "}
            <span className="text-gradient-teal block sm:inline mt-1 sm:mt-0">
              قبل التنفيذ وبعده
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl mx-auto leading-relaxed px-2">
            ده السيناريو الإعلاني اللي فريق تصوير ومونتاج SHIFT هينفذه في كل مشروع جديد لـ Wadi3 Landscape عشان نخلي العميل ينبهر ويطلب التعاقد فوراً.
          </p>
        </div>

        {/* Video Player & Comparison Frame */}
        <div className="glass-panel rounded-2xl sm:rounded-3xl border border-teal-500/30 overflow-hidden shadow-2xl relative">
          
          {/* Top Mock Window Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border-b border-[#1f2f45] bg-[#0a111c] text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shrink-0"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500/80 shrink-0"></span>
              <span className="mr-1.5 text-slate-400 font-mono truncate text-[10px] sm:text-xs">
                shift_production_4k.mp4
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[9px] sm:text-[10px] font-bold border border-teal-500/30">
                4K • SHIFT Production
              </span>
            </div>
          </div>

          {/* Screen Area */}
          <div className="p-4 sm:p-8 lg:p-10 relative bg-gradient-to-b from-[#0c1422] via-[#09101b] to-[#070c14]">
            
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch lg:items-center">
              
              {/* Left Side: Before & After Visual Simulator (Touch Optimized) */}
              <div className="w-full lg:w-5/12">
                <div className="relative rounded-2xl overflow-hidden border border-[#24344d] bg-[#0c1626] p-3.5 sm:p-5 text-center shadow-xl">
                  
                  {/* Visual Split Box */}
                  <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden select-none mb-3 border border-[#2d4261] touch-none">
                    
                    {/* AFTER Layer (SHIFT 4K Production) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0c2e35] via-[#1E6E78] to-[#0d1e27] flex flex-col items-center justify-center p-3 text-center">
                      <span className="text-3xl sm:text-4xl mb-1">🌴✨</span>
                      <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 rounded bg-teal-400 text-slate-950 shadow-md">
                        بعد: تصوير SHIFT السينمائي 4K
                      </span>
                      <p className="text-[10px] sm:text-[11px] text-teal-100 mt-1 font-medium">
                        نجيل مخملي • إضاءة ليلية دافئة • ممرات حجرية
                      </p>
                    </div>

                    {/* BEFORE Layer (Old Mobile Footage) */}
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-br from-[#2a261f] via-[#1d1912] to-[#12100c] flex flex-col items-center justify-center p-3 text-center border-r-2 border-amber-400 shadow-xl"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <span className="text-3xl sm:text-4xl mb-1">🚜🧱</span>
                      <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 rounded bg-amber-400 text-slate-950 shadow-md">
                        قبل: تصوير الموبايل القديم
                      </span>
                      <p className="text-[10px] sm:text-[11px] text-amber-200 mt-1 font-medium">
                        أرض ترابية غير واضحة • جودة تظلم شغلك
                      </p>
                    </div>

                    {/* Handle */}
                    <div
                      className="absolute inset-y-0 -ml-3 pointer-events-none flex items-center justify-center"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-white shadow-xl border-2 border-teal-500 flex items-center justify-center text-[10px] font-bold text-slate-900">
                        ↔
                      </div>
                    </div>
                  </div>

                  {/* Slider & Quick Jump Buttons */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] sm:text-[11px] text-slate-300 font-bold">
                      <span>اسحب للمقارنة الحية:</span>
                      <span className="text-teal-400">
                        {sliderPosition > 50 ? "عرض النتيجة بعد" : "عرض الأرض قبل"}
                      </span>
                    </div>

                    {/* Large touch range slider */}
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={sliderPosition}
                      onChange={(e) => {
                        soundFx.playClick(500);
                        setSliderPosition(Number(e.target.value));
                      }}
                      className="w-full accent-teal-400 cursor-pointer h-2 bg-[#172437] rounded-lg"
                    />

                    {/* Quick tap pills for mobile fingers */}
                    <div className="flex justify-between gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          soundFx.playClick(400);
                          setSliderPosition(20);
                        }}
                        className="flex-1 py-1 px-2 rounded-lg bg-[#141f30] text-[10px] font-bold text-amber-300 border border-amber-500/20 active:scale-95"
                      >
                        ركّز على قبل 🚜
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          soundFx.playClick(450);
                          setSliderPosition(80);
                        }}
                        className="flex-1 py-1 px-2 rounded-lg bg-[#141f30] text-[10px] font-bold text-teal-300 border border-teal-500/20 active:scale-95"
                      >
                        ركّز على بعد ✨
                      </button>
                    </div>
                  </div>

                  {/* Equalizer */}
                  <div className="mt-3 flex items-center justify-center gap-1.5 h-7 px-3 rounded-xl bg-black/40 border border-[#21324a]">
                    <span className={`w-1 bg-teal-400 rounded-full ${isPlaying ? "wave-bar-1" : "h-1.5"}`}></span>
                    <span className={`w-1 bg-cyan-300 rounded-full ${isPlaying ? "wave-bar-2" : "h-3"}`}></span>
                    <span className={`w-1 bg-teal-500 rounded-full ${isPlaying ? "wave-bar-3" : "h-2"}`}></span>
                    <span className={`w-1 bg-emerald-400 rounded-full ${isPlaying ? "wave-bar-4" : "h-4"}`}></span>
                    <span className={`w-1 bg-teal-400 rounded-full ${isPlaying ? "wave-bar-5" : "h-1.5"}`}></span>
                    <span className="text-[9px] font-mono text-slate-300 mr-1.5">
                      {isPlaying ? "محاكاة العرض 4K..." : "جاهز للتشغيل"}
                    </span>
                  </div>

                </div>
              </div>

              {/* Right Side: Active Phase Details */}
              <div className="w-full lg:w-7/12">
                <div className={`p-4 sm:p-6 lg:p-7 rounded-2xl border transition-all duration-500 bg-[#0d1726] ${currentStage.border} shadow-2xl`}>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] sm:text-xs font-black px-2.5 py-0.5 sm:py-1 rounded-full border ${currentStage.tagColor}`}>
                      {currentStage.badge} • {currentStage.title}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-teal-300 shrink-0">
                      مرحلة {currentStage.id} من 3
                    </span>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-white font-bold leading-relaxed mb-3 min-h-[60px] flex items-center">
                    {currentStage.content}
                  </p>

                  <div className="space-y-2 pt-2.5 border-t border-[#1d2d44]">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#121e30] border border-[#243750] text-[11px] sm:text-xs text-slate-300 flex items-center gap-2">
                      <SparklesIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                      <span><strong>الهدف التسويقي لـ SHIFT:</strong> {currentStage.note}</span>
                    </div>

                    <div className="text-[10px] sm:text-[11px] text-teal-300/90 font-mono">
                      🎬 زاوية التصوير: {currentStage.cameraAngle}
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Timeline Controls & Scrubber */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1b2a3d]">
              
              <div className="relative mb-3 sm:mb-4">
                <div className="h-2 w-full bg-[#172538] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 via-teal-400 to-emerald-400 transition-all duration-300"
                    style={{ width: `${(currentTime / 60) * 100}%` }}
                  ></div>
                </div>

                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-lg border-2 border-teal-500 transition-all pointer-events-none"
                  style={{ left: `${(currentTime / 60) * 100}%` }}
                ></div>
              </div>

              {/* Player Bottom Actions */}
              <div className="flex flex-col gap-3">
                
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#1E6E78] to-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-700/30 active:scale-95 transition-all cursor-pointer shrink-0"
                    >
                      {isPlaying ? (
                        <PauseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <PlayIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>

                    <div className="font-mono text-xs sm:text-sm">
                      <span className="text-white font-bold">{formatTime(currentTime)}</span>
                      <span className="text-slate-500"> / 01:00</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-teal-300 font-bold hidden sm:block">
                    {currentStage.shortTitle}
                  </div>
                </div>

                {/* 3 Mobile-Optimized Grid Phase Buttons */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {PHASES.map((phase) => (
                    <button
                      key={phase.id}
                      onClick={() => jumpToStage(phase.start)}
                      className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center active:scale-95 ${
                        currentStageIndex === phase.id - 1
                          ? "bg-[#16273c] text-teal-300 border border-teal-500/60 shadow-md"
                          : "bg-[#0c1422] text-slate-400 hover:text-white border border-[#203147]"
                      }`}
                    >
                      <span>{phase.shortTitle}</span>
                      <span className="text-[9px] opacity-70 font-mono">({phase.start}s)</span>
                    </button>
                  ))}
                </div>

                {/* Full-width CTA on Mobile */}
                <a
                  href={ceoWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playChime()}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center mt-1"
                >
                  <MessageCircleIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>اعتماد خطة التصوير السينمائي مع SHIFT 🎬</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
