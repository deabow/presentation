"use client";

import React, { useState, useEffect } from "react";
import {
  PlayIcon,
  PauseIcon,
  SparklesIcon,
  ShieldCheckIcon,
  FileTextIcon,
  PhoneIcon,
  VolumeIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface VideoScriptPlayerProps {
  onOpenConsultation: () => void;
}

const SCRIPT_STAGES = [
  {
    id: 1,
    start: 0,
    end: 20,
    title: "البداية واللسعة (The Hook)",
    badge: "00:00 - 00:20",
    color: "from-rose-500 to-red-600",
    border: "border-rose-500/30",
    tagColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    text: "«أكبر غلطة بيقع فيها صاحب البيزنس إنه بيفتكر المحامي دوره يجي بعد ما الفاس تقع في الراس.. في حين إن أكتر من 70% من خناقات الشركات وخسائر الفلوس كان ممكن تتقفل بسطر واحد مكتوب صح في العقد من الأول!»",
    summary: "صدمة المستمع بالحقيقة وتنبيهه إلى نزيف الأموال الخفي في الثغرات التعاقدية.",
  },
  {
    id: 2,
    start: 20,
    end: 40,
    title: "القيمة والتقل (Authority)",
    badge: "00:20 - 00:40",
    color: "from-sky-500 to-blue-600",
    border: "border-sky-500/30",
    tagColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    text: "«معانا في مؤسسة كمال أبو علي، إحنا بنوفر الحماية الكاملة لبيزنسك قبل ما المشكلة تبدأ.. من تظبيط العقود التجارية وتأسيس الكيان، لحد قفل القضايا العمالية والتجارية في المحاكم بأسرع وقت وأعلى كفاءة.»",
    summary: "إظهار ثقل وخبرة كمال أبو علي في تحصين الكيان وحسم القضايا في أسرع وقت.",
  },
  {
    id: 3,
    start: 40,
    end: 60,
    title: "القفلة والطلب (Call to Action)",
    badge: "00:40 - 00:60",
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/30",
    tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    text: "«أمّن شركتك وعقودك صح النهاردة.. سيب بيانات شركتك في الفورم عشان نحجزلك ميعاد استشارة ونقعد نراجع ملفاتك القانونية جوه المكتب.»",
    summary: "دعوة صريحة ومباشرة لحجز استشارة وفحص أوراق الشركة داخل المكتب.",
  },
];

export default function VideoScriptPlayer({
  onOpenConsultation,
}: VideoScriptPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Determine which stage is currently active based on currentTime
  const currentStageIndex =
    currentTime < 20 ? 0 : currentTime < 40 ? 1 : 2;
  const currentStage = SCRIPT_STAGES[currentStageIndex];

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
      }, 700); // slightly fast for engaging demo feel
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

  return (
    <section id="video-script" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold mb-3">
            <PlayIcon className="w-3.5 h-3.5 text-purple-400" />
            <span>سكريبت الفيديو الترويجي الموجه لأصحاب الشركات (B2B)</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            فيديو الشركات للبوب كمال{" "}
            <span className="text-gradient-purple">(60 ثانية تقفل ديل فوري)</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl mx-auto">
            مبني على سيكولوجية صناعة القرار لدى رجال الأعمال: إبراز الألم فوراً ثم إثبات القوة، يعقبهما استدعاء فوري للإجراء.
          </p>
        </div>

        {/* Video Player Mockup Container */}
        <div className="glass-panel rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl relative">
          
          {/* Top Mock Window Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-[#231b46] bg-[#090714]/80 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="mr-2 text-slate-400 font-mono">
                rec_kamal_abo_ali_corporate_60s.mp4
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <span className="hidden sm:inline font-mono">4K • 60 FPS • 16:9</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                SHIFT Production
              </span>
            </div>
          </div>

          {/* Player Screen Area */}
          <div className="p-6 sm:p-10 relative bg-gradient-to-b from-[#0e0c1f] via-[#090815] to-[#06060c]">
            
            {/* Visual Studio Setup Overlay */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              
              {/* Left Side: Animated Presenter Card */}
              <div className="w-full lg:w-5/12">
                <div className="relative rounded-2xl overflow-hidden border border-[#2b2255] bg-gradient-to-br from-[#120f2b] to-[#0c0a1a] p-6 text-center shadow-xl group">
                  {/* Subtle Background Badge */}
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-tr from-purple-600 via-indigo-600 to-sky-500 p-1 shadow-lg shadow-purple-500/30 flex items-center justify-center">
                    <div className="w-full h-full bg-[#0d0a1c] rounded-full flex items-center justify-center">
                      <span className="text-4xl select-none">⚖️</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-black text-white">المستشار كمال أبو علي</h4>
                  <p className="text-xs text-purple-300 font-semibold mb-3">
                    المحامي بالنقض ومستشار كبرى الشركات
                  </p>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[11px] font-bold mb-4">
                    <ShieldCheckIcon className="w-3.5 h-3.5" />
                    <span>هوية بصرية بنية وفخامة بنفسجية</span>
                  </div>

                  {/* Dynamic Audio Wave Bars (Active during playback) */}
                  <div className="flex items-center justify-center gap-1 h-8 px-4 py-1 rounded-xl bg-black/40 border border-[#261f4d]">
                    <span className={`w-1 bg-purple-500 rounded-full ${isPlaying ? "wave-bar-1" : "h-2"}`}></span>
                    <span className={`w-1 bg-sky-400 rounded-full ${isPlaying ? "wave-bar-2" : "h-4"}`}></span>
                    <span className={`w-1 bg-indigo-500 rounded-full ${isPlaying ? "wave-bar-3" : "h-3"}`}></span>
                    <span className={`w-1 bg-purple-400 rounded-full ${isPlaying ? "wave-bar-4" : "h-5"}`}></span>
                    <span className={`w-1 bg-cyan-400 rounded-full ${isPlaying ? "wave-bar-5" : "h-2"}`}></span>
                    <span className={`w-1 bg-purple-500 rounded-full ${isPlaying ? "wave-bar-1" : "h-3"}`}></span>
                    <span className="text-[10px] font-mono text-slate-400 mr-2">
                      {isPlaying ? "جاري الإلقاء والتأثير..." : "جاهز للتشغيل"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Dynamic Active Script Card */}
              <div className="w-full lg:w-7/12">
                <div className={`p-6 rounded-2xl border transition-all duration-500 bg-[#0d0b1d] ${currentStage.border} shadow-xl`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black px-3 py-1 rounded-full border ${currentStage.tagColor}`}>
                      {currentStage.badge} • {currentStage.title}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      مرحلة {currentStage.id} من 3
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-lg text-white font-bold leading-relaxed mb-4 min-h-[90px] flex items-center">
                    {currentStage.text}
                  </blockquote>

                  <div className="p-3 rounded-xl bg-[#14112b] border border-[#231b46] text-xs text-slate-300 flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{currentStage.summary}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Scrubber and Timeline Controls */}
            <div className="mt-8 pt-6 border-t border-[#1c1639]">
              
              {/* Progress Slider */}
              <div className="relative mb-4">
                <div className="h-2 w-full bg-[#1b1738] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 via-sky-400 to-emerald-400 transition-all duration-300"
                    style={{ width: `${(currentTime / 60) * 100}%` }}
                  ></div>
                </div>

                {/* Progress Thumb / Indicator */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg border-2 border-purple-600 transition-all pointer-events-none"
                  style={{ left: `${(currentTime / 60) * 100}%` }}
                ></div>
              </div>

              {/* Playback Controls & Timestamp Jumps */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Play/Pause Button + Time */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
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

                {/* Direct Stage Jump Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  {SCRIPT_STAGES.map((stage) => (
                    <button
                      key={stage.id}
                      onClick={() => jumpToStage(stage.start)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        currentStageIndex === stage.id - 1
                          ? "bg-[#251e4d] text-purple-300 border border-purple-500/50 scale-105"
                          : "bg-[#110e26] text-slate-400 hover:text-white border border-[#231b46]"
                      }`}
                    >
                      {stage.title.split(" ")[0]} ({stage.start}s)
                    </button>
                  ))}
                </div>

                {/* Trigger Lead Form Button */}
                <button
                  onClick={() => {
                    soundFx.playChime();
                    onOpenConsultation();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <FileTextIcon className="w-3.5 h-3.5" />
                  <span>تطبيق هذا العرض في مكتبك</span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
