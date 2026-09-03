"use client";

import React from "react";
import {
  ShieldCheckIcon,
  PhoneIcon,
  MessageCircleIcon,
  BuildingIcon,
  UsersIcon,
  AwardIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface FooterProps {
  setActiveTrack: (track: "b2b" | "b2c" | "strategy") => void;
  onOpenConsultation: () => void;
}

export default function Footer({ setActiveTrack, onOpenConsultation }: FooterProps) {
  return (
    <footer className="border-t border-[#231b46] bg-[#070611] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1c1639]">
          
          {/* Col 1: Brand & Agency Tag */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl select-none">🦆</span>
              <span className="text-lg font-black text-white">مشروع البطة السمينة</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              خطة تظبيط الشغل وفصل الحملات التسويقية والقانونية لمؤسسة المستشار <strong className="text-white">كمال أبو علي</strong> بالتعاون مع وكالة <strong className="text-purple-400">SHIFT AGENCY</strong>.
            </p>
            <div className="flex items-center gap-2 text-xs text-purple-300">
              <AwardIcon className="w-4 h-4 text-purple-400" />
              <span>خبرة قضائية تتجاوز 15 عاماً</span>
            </div>
          </div>

          {/* Col 2: Corporate Track Links */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <BuildingIcon className="w-4 h-4 text-sky-400" />
              <span>قطاع الشركات (B2B)</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("b2b");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sky-300 transition-colors text-right cursor-pointer"
                >
                  صياغة وتدقيق العقود التجارية
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("b2b");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sky-300 transition-colors text-right cursor-pointer"
                >
                  تأسيس المصانع والشركات
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("b2b");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-sky-300 transition-colors text-right cursor-pointer"
                >
                  عقود الاستشارات السنوية (Retainer)
                </button>
              </li>
              <li>
                <span className="text-slate-500 font-mono text-[11px]">
                  aboalilawfirm.com/corporate
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Family Law Track Links */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <UsersIcon className="w-4 h-4 text-amber-400" />
              <span>قضايا الأسرة والأفراد (B2C)</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("b2c");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-amber-300 transition-colors text-right cursor-pointer"
                >
                  دعاوى الخلع والطلاق السريع
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("b2c");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-amber-300 transition-colors text-right cursor-pointer"
                >
                  تحصيل النفقات والمصروفات المدرسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("b2c");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-amber-300 transition-colors text-right cursor-pointer"
                >
                  قضايا الحضانة والرؤية والولاية
                </button>
              </li>
              <li>
                <span className="text-slate-500 font-mono text-[11px]">
                  aboalilawfirm.com/family-law
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-emerald-400" />
              <span>التواصل ومواعيد المكتب</span>
            </h5>
            <p className="text-xs text-slate-400">
              المكتب متاح لاستقبال الموكلين وجلسات تدقيق العقود يومياً من 10 صباحاً حتى 9 مساءً.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <a
                href="tel:+201000000000"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 text-xs text-white hover:text-purple-300 transition-colors font-mono"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>+20 100 000 0000</span>
              </a>
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:underline"
              >
                <MessageCircleIcon className="w-3.5 h-3.5" />
                <span>شات واتساب المباشر</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Agency Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            تظبيط وتجهيز خطة البطة السمينة بواسطة:{" "}
            <strong className="text-purple-400 font-black">SHIFT AGENCY</strong>{" "}
            • برمجة ومواقع • تصوير وميديا • ميديا باينج وتقفيل ديلات
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">سياسة الخصوصية والسرية</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">ميثاق الشرف القانوني</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
