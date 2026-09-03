"use client";

import React, { useState, useEffect } from "react";
import {
  XIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  PhoneIcon,
  MessageCircleIcon,
  BuildingIcon,
  UsersIcon,
  LockIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: "b2b" | "b2c" | "strategy";
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultTrack = "b2b",
}: ConsultationModalProps) {
  const [track, setTrack] = useState<"b2b" | "b2c">(
    defaultTrack === "b2c" ? "b2c" : "b2b"
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [caseSummary, setCaseSummary] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultTrack === "b2c") {
      setTrack("b2c");
    } else {
      setTrack("b2b");
    }
  }, [defaultTrack]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        soundFx.playClick(300);
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `أهلاً مؤسسة كمال أبو علي، اسمي: ${name || "عميل"}، أريد استشارة بخصوص: (${
      track === "b2b" ? "شركات وعقود تجارية" : "قضايا ومحكمة الأسرة"
    }). الهاتف: ${phone}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Card */}
      <div
        className="relative w-full max-w-xl glass-panel rounded-3xl border border-purple-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Glow Accent */}
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-purple-600/15 blur-3xl rounded-full pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick(350);
            onClose();
          }}
          aria-label="إغلاق النافذة"
          className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">
              تم تسجيل حجز الاستشارة بنجاح!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              شكراً لتواصلك يا أ. {name || "الفاضل"}. سيتواصل معك مستشار المكتب على رقم ({phone}) خلال دقائق لمراجعة التفاصيل.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/201000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircleIcon className="w-4 h-4" />
                <span>متابعة على واتساب الآن</span>
              </a>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 border border-[#2c2253] hover:bg-white/5 transition-all cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold mb-2">
                <ShieldCheckIcon className="w-3.5 h-3.5" />
                <span>استشارة قانونية فورية وموثقة</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                حجز موعد استشارة مع فريق المستشار كمال أبو علي
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                حدد نوع القضية وسيقوم المتخصص المعني بالتواصل معك بأعلى درجات السرية.
              </p>
            </div>

            {/* Track Selector Inside Modal */}
            <div className="grid grid-cols-2 gap-3 mb-6 p-1 rounded-2xl bg-[#0a0818] border border-[#261f4d]">
              <button
                type="button"
                onClick={() => {
                  soundFx.playTabSwitch();
                  setTrack("b2b");
                }}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  track === "b2b"
                    ? "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <BuildingIcon className="w-4 h-4" />
                <span>قطاع الشركات (B2B)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundFx.playTabSwitch();
                  setTrack("b2c");
                }}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  track === "b2c"
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <UsersIcon className="w-4 h-4" />
                <span>قضايا الأسرة (B2C)</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-right">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  الاسم بالكامل *
                </label>
                <input
                  type="text"
                  required
                  placeholder="أدخل اسمك الكريم"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  رقم الهاتف للتواصل المباشر *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  موضوع الاستشارة بإيجاز
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    track === "b2b"
                      ? "مثال: مراجعة عقد توريد أو نزاع مع شريك..."
                      : "مثال: استفسار عن إجراءات الخلع وحضانة الأطفال..."
                  }
                  value={caseSummary}
                  onChange={(e) => setCaseSummary(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <LockIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>بياناتك محمية تماماً ولا يطلع عليها إلا المحامي المختص.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 text-white shadow-lg shadow-purple-600/30 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer"
              >
                تأكيد حجز الاستشارة الفورية
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
