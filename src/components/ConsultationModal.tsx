"use client";

import React, { useState, useEffect } from "react";
import {
  XIcon,
  CheckCircle2Icon,
  SparklesIcon,
  PhoneIcon,
  MessageCircleIcon,
  BuildingIcon,
  UsersIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: "villas" | "developers" | "strategy";
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultTrack = "villas",
}: ConsultationModalProps) {
  const [track, setTrack] = useState<"villas" | "developers">(
    defaultTrack === "developers" ? "developers" : "villas"
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultTrack === "developers") {
      setTrack("developers");
    } else {
      setTrack("villas");
    }
  }, [defaultTrack]);

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
    `أهلاً م. وديع، اسمي: ${name || "عميل"}، أريد حجز موعد معاينة بخصوص: (${
      track === "villas" ? "حديقة فيلا / ملعب خاص" : "مشروع تطوير عقاري / كومباوند"
    }). الهاتف: ${phone}. التفاصيل: ${projectDetails || "جاهز للبدء"}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl glass-panel-teal rounded-3xl border border-teal-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
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
            <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">
              تم تسجيل طلب المعاينة بنجاح!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              شكراً لتواصلك يا أ. {name || "الفاضل"}. سيتواصل معك م. وديع شخصياً على رقم ({phone}) لترتيب موعد المعاينة الميدانية.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/201220582340?text=${whatsappMessage}`}
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
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 border border-[#24344d] hover:bg-white/5 transition-all cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold mb-2">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>معاينة وتصميم لاندسكيب احترافي</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                حجز موعد معاينة مع م. وديع
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                اختر نوع مشروعك وسيتم التنسيق معك لتحديد موعد الزيارة وعرض المقترحات.
              </p>
            </div>

            {/* Track Selector */}
            <div className="grid grid-cols-2 gap-3 mb-6 p-1 rounded-2xl bg-[#09111c] border border-[#24344d]">
              <button
                type="button"
                onClick={() => {
                  soundFx.playTabSwitch();
                  setTrack("villas");
                }}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  track === "villas"
                    ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <UsersIcon className="w-4 h-4" />
                <span>حدائق وملاعب الفلل</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundFx.playTabSwitch();
                  setTrack("developers");
                }}
                className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  track === "developers"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <BuildingIcon className="w-4 h-4" />
                <span>مشاريع وتطوير عقاري</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-right">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  الاسم الكريم *
                </label>
                <input
                  type="text"
                  required
                  placeholder="أدخل اسمك"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080f19] border border-[#24344d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  رقم الهاتف (واتساب) للتواصل *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="012XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080f19] border border-[#24344d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  موقع ومساحة الحديقة أو المشروع التقريبية
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    track === "villas"
                      ? "مثال: فيلا في التجمع الخامس، مساحة الحديقة 350 متر مع حمام سباحة..."
                      : "مثال: كمبوند سكني في الشيخ زايد، مساحة اللاندسكيب 10 آلاف متر..."
                  }
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-[#080f19] border border-[#24344d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-teal-500 via-[#1E6E78] to-cyan-500 text-white shadow-lg shadow-teal-700/30 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer"
              >
                تأكيد طلب المعاينة الميدانية
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
