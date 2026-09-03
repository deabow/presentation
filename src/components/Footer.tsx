"use client";

import React from "react";
import {
  PhoneIcon,
  MessageCircleIcon,
  BuildingIcon,
  UsersIcon,
  SparklesIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface FooterProps {
  setActiveTrack: (track: "villas" | "developers" | "strategy") => void;
  onOpenConsultation: () => void;
}

export default function Footer({ setActiveTrack }: FooterProps) {
  const ceoWhatsappUrl = `https://wa.me/201211050297?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وعاوز أبدأ التنفيذ مع SHIFT!"
  )}`;

  return (
    <footer className="border-t border-[#1e2d42] bg-[#070c14] pt-10 sm:pt-16 pb-20 sm:pb-14 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 border-b border-[#182436]">
          
          {/* Col 1: Brand & Edition Tag */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center font-black text-sm">
                S
              </div>
              <span className="text-base sm:text-lg font-black text-white">SHIFT AGENCY</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              استشارات النمو والتسويق الرقمي والإنتاج السينمائي، ملف مقدّم خصيصاً إلى <strong className="text-teal-300">Wadi3 Landscape</strong> في إصدار <strong className="text-white">GROWTH EDITION</strong>.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-teal-300">
              <SparklesIcon className="w-3.5 h-3.5 text-teal-400" />
              <span>توثيق سينمائي 4K • ميديا باينج موجّه</span>
            </div>
          </div>

          {/* Col 2: Villas Track */}
          <div className="space-y-2.5">
            <h5 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <UsersIcon className="w-3.5 h-3.5 text-teal-400" />
              <span>قطاع الفلل والأفراد</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("villas");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="hover:text-teal-300 transition-colors text-right cursor-pointer py-1 block"
                >
                  استهداف حدائق الفلل والقصور
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("villas");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="hover:text-teal-300 transition-colors text-right cursor-pointer py-1 block"
                >
                  ملاعب البادل والتنس الخاصة
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Commercial & Developers Track */}
          <div className="space-y-2.5">
            <h5 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <BuildingIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>الشركات والمطورين (B2B)</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("developers");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="hover:text-cyan-300 transition-colors text-right cursor-pointer py-1 block"
                >
                  لاندسكيب الكومباوندات السكنية
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("developers");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="hover:text-cyan-300 transition-colors text-right cursor-pointer py-1 block"
                >
                  ملاعب الأندية وعقود الصيانة
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & CEO WhatsApp */}
          <div className="space-y-2.5">
            <h5 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <MessageCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>تواصل مباشر مع وكالة SHIFT</span>
            </h5>
            <p className="text-xs text-slate-400">
              جاهزون لبدء تصوير أول مشروع فوري وترتيب الاجتماع التحضيري.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <a
                href={ceoWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:underline font-mono py-1"
              >
                <MessageCircleIcon className="w-3.5 h-3.5" />
                <span>واتساب الـ CEO: +20 121 105 0297</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500 text-center sm:text-right">
          <div>
            ملف استراتيجي خاص من <strong className="text-teal-300 font-bold">SHIFT AGENCY</strong> لصالح <strong className="text-white">Wadi3 Landscape</strong>
          </div>

          <div className="flex items-center gap-3">
            <span>SHIFT © 2026</span>
            <span>•</span>
            <span className="text-slate-400">GROWTH EDITION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
