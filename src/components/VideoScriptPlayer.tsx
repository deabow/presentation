"use client";

import React, { useState, useEffect } from "react";
import {
  PlayIcon,
  PauseIcon,
  SparklesIcon,
  ShieldCheckIcon,
  AwardIcon,
  CheckCircle2Icon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

const PHASES = [
  {
    id: 1,
    start: 0,
    end: 15,
    title: "المشكلة (الأرض قبل السحر)",
    badge: "00:00 - 00:15",
    color: "from-rose-500 to-amber-600",
    border: "border-rose-500/30",
    tagColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    content: "لقطات للأرض أو الملعب قبل التنفيذ، موثقة بجودة تصوير ضعيفة وغير مدروسة كما كانت من قبل في الفيديوهات القديمة.",
    note: "إظهار الفرق الحقيقي في القيمة اللي كانت بتضيع بسبب ضعف التوثيق.",
    cameraAngle: "لقطة أرضية واسعة • إضاءة خافتة • توثيق غير احترافي",
  },
  {
    id: 2,
    start: 15,
    end: 35,
    title: "التنفيذ (يد الخبرة)",
    badge: "00:15 - 00:35",
    color: "from-teal-500 to-cyan-600",
    border: "border-teal-500/40",
    tagColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    content: "لقطات من مراحل التصميم والزراعة والتشطيب وشبكات الري أثناء التنفيذ الفعلي بلمسة م. وديع.",
    note: "بناء الثقة عند المشاهد عن طريق إظهار الاحترافية في أدق تفاصيل الشغل.",
    cameraAngle: "Macro Focus • حركة درون سلسة • تفاصيل الخامات والزرع",
  },
  {
    id: 3,
    start: 35,
    end: 60,
    title: "النتيجة (الفخامة المستحقة)",
    badge: "00:35 - 01:00",
    color: "from-emerald-400 to-teal-500",
    border: "border-emerald-500/40",
    tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    content: "اللقطات السينمائية النهائية للملعب أو الحديقة بعد التنفيذ بجودة 4K وإضاءة مسائية مذهلة.",
    note: "تحويل المشاهد لعميل عن طريق نتيجة نهائية تبيع نفسها بنفسها دون حشو.",
    cameraAngle: "4K Drone Orbit • Cinematic Lighting • 60 FPS Smooth Flow",
  },
];

export default function VideoScriptPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // For Before & After interactive slider

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

  const whatsappUrl = `https://wa.me/201220582340?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وجاهز نبدأ التنفيذ!"
  )}`;

  return (
    <section id="media-showcase" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold mb-3">
            <SparklesIcon className="w-3.5 h-3.5 text-teal-400" />
            <span>توثيق التحول السينمائي لمشاريع وديع</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            توثيق التحول:{" "}
            <span className="text-gradient-teal">قبل التنفيذ وبعده</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl mx-auto">
            بدل ما الفيديوهات تظلم مستوى الشغل الممتاز، هنوثق كل مشروع بمعايير إعلانية 4K تحول المتابع لعميل جاهز للتعاقد.
          </p>
        </div>

        {/* Video Player & Comparison Frame */}
        <div className="glass-panel rounded-3xl border border-teal-500/30 overflow-hidden shadow-2xl relative">
          
          {/* Top Mock Window Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-[#1f2f45] bg-[#0a111c] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-teal-500/80 inline-block"></span>
              <span className="mr-2 text-slate-400 font-mono">
                wadi3_landscape_before_after_cinematic.mp4
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <span className="hidden sm:inline font-mono text-teal-300">
                4K • 60 FPS • 16:9
              </span>
              <span className="px-2.5 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-bold border border-teal-500/30">
                SHIFT PRODUCTION
              </span>
            </div>
          </div>

          {/* Player Screen Area */}
          <div className="p-6 sm:p-10 relative bg-gradient-to-b from-[#0c1422] via-[#09101b] to-[#070c14]">
            
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              
              {/* Left Side: Visual Interactive "Before & After" Simulator */}
              <div className="w-full lg:w-5/12">
                <div className="relative rounded-2xl overflow-hidden border border-[#24344d] bg-[#0c1626] p-5 text-center shadow-xl">
                  
                  {/* Interactive Before & After Visual Split Box */}
                  <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden select-none mb-4 border border-[#2d4261]">
                    
                    {/* AFTER Layer (Right/Under) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0c2e35] via-[#1E6E78] to-[#0d1e27] flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-4xl mb-2">🌴✨</span>
                      <span className="text-xs font-black px-2.5 py-1 rounded bg-teal-400 text-slate-950 shadow-md">
                        بعد: 4K Cinematic
                      </span>
                      <p className="text-[11px] text-teal-100 mt-2 font-medium">
                        نجيل طبيعي مخملي • إنارة ليلية خافتة • ممرات حجرية فاخرة
                      </p>
                    </div>

                    {/* BEFORE Layer (Left/Over clipped) */}
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-br from-[#2a261f] via-[#1d1912] to-[#12100c] flex flex-col items-center justify-center p-4 text-center border-r-2 border-amber-400 shadow-xl"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <span className="text-4xl mb-2">🚜🧱</span>
                      <span className="text-xs font-black px-2.5 py-1 rounded bg-amber-400 text-slate-950 shadow-md">
                        قبل: تصوير قديم
                      </span>
                      <p className="text-[11px] text-amber-200 mt-2 font-medium">
                        أرض ترابية غير ممهدة • تصوير موبايل ضعيف بدون إضاءة
                      </p>
                    </div>

                    {/* Draggable Divider Handle */}
                    <div
                      className="absolute inset-y-0 -ml-2 pointer-events-none flex items-center justify-center"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-white shadow-xl border-2 border-teal-500 flex items-center justify-center text-[10px] font-bold text-slate-900">
                        ↔
                      </div>
                    </div>
                  </div>

                  {/* Interactive Slider Input */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-300 font-bold">
                      <span>اسحب للمقارنة الحية:</span>
                      <span className="text-teal-400">
                        {sliderPosition > 50 ? "تركيز على النتيجة بعد" : "تركيز على الأرض قبل"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={sliderPosition}
                      onChange={(e) => {
                        soundFx.playClick(500);
                        setSliderPosition(Number(e.target.value));
                      }}
                      className="w-full accent-teal-400 cursor-pointer h-1.5 bg-[#172437] rounded-lg"
                    />
                  </div>

                  {/* Audio visualizer */}
                  <div className="mt-4 flex items-center justify-center gap-1.5 h-8 px-4 rounded-xl bg-black/40 border border-[#21324a]">
                    <span className={`w-1 bg-teal-400 rounded-full ${isPlaying ? "wave-bar-1" : "h-2"}`}></span>
                    <span className={`w-1 bg-cyan-300 rounded-full ${isPlaying ? "wave-bar-2" : "h-4"}`}></span>
                    <span className={`w-1 bg-teal-500 rounded-full ${isPlaying ? "wave-bar-3" : "h-3"}`}></span>
                    <span className={`w-1 bg-emerald-400 rounded-full ${isPlaying ? "wave-bar-4" : "h-5"}`}></span>
                    <span className={`w-1 bg-teal-400 rounded-full ${isPlaying ? "wave-bar-5" : "h-2"}`}></span>
                    <span className="text-[10px] font-mono text-slate-300 mr-2">
                      {isPlaying ? "جاري محاكاة العرض 4K..." : "جاهز للتشغيل"}
                    </span>
                  </div>

                </div>
              </div>

              {/* Right Side: Active Phase Breakdown */}
              <div className="w-full lg:w-7/12">
                <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-500 bg-[#0d1726] ${currentStage.border} shadow-2xl`}>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black px-3 py-1 rounded-full border ${currentStage.tagColor}`}>
                      {currentStage.badge} • {currentStage.title}
                    </span>
                    <span className="text-xs font-mono text-teal-300">
                      مرحلة {currentStage.id} من 3
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-white font-bold leading-relaxed mb-4 min-h-[75px] flex items-center">
                    {currentStage.content}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#1d2d44]">
                    <div className="p-3 rounded-xl bg-[#121e30] border border-[#243750] text-xs text-slate-300 flex items-center gap-2">
                      <SparklesIcon className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong>الهدف التسويقي:</strong> {currentStage.note}</span>
                    </div>

                    <div className="text-[11px] text-teal-300/90 font-mono">
                      🎬 زاوية الكاميرا: {currentStage.cameraAngle}
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Timeline Controls & Scrubber */}
            <div className="mt-8 pt-6 border-t border-[#1b2a3d]">
              
              {/* Progress Slider */}
              <div className="relative mb-4">
                <div className="h-2 w-full bg-[#172538] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 via-teal-400 to-emerald-400 transition-all duration-300"
                    style={{ width: `${(currentTime / 60) * 100}%` }}
                  ></div>
                </div>

                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg border-2 border-teal-500 transition-all pointer-events-none"
                  style={{ left: `${(currentTime / 60) * 100}%` }}
                ></div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1E6E78] to-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-700/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    {isPlaying ? (
                      <PauseIcon className="w-5 h-5" />
                    ) : (
                      <PlayIcon className="w-5 h-5" />
                    )}
                  </button>

                  <div className="font-mono text-sm">
                    <span className="text-white font-bold">{formatTime(currentTime)}</span>
                    <span className="text-slate-500"> / 01:00</span>
                  </div>
                </div>

                {/* Stage Jumps */}
                <div className="flex flex-wrap items-center gap-2">
                  {PHASES.map((phase) => (
                    <button
                      key={phase.id}
                      onClick={() => jumpToStage(phase.start)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        currentStageIndex === phase.id - 1
                          ? "bg-[#16273c] text-teal-300 border border-teal-500/60 scale-105"
                          : "bg-[#0c1422] text-slate-400 hover:text-white border border-[#203147]"
                      }`}
                    >
                      {phase.title.split(" ")[0]} ({phase.start}s)
                    </button>
                  ))}
                </div>

                {/* Direct Kickoff CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playChime()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30 hover:bg-teal-500/25 hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
                  <span>بدء تصوير مشروعي القادم 🎬</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
