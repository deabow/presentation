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

export default function Footer({ setActiveTrack, onOpenConsultation }: FooterProps) {
  const whatsappUrl = `https://wa.me/201220582340?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وجاهز نبدأ التنفيذ!"
  )}`;

  return (
    <footer className="border-t border-[#1e2d42] bg-[#070c14] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#182436]">
          
          {/* Col 1: Brand & Edition Tag */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl select-none">🌿</span>
              <span className="text-lg font-black text-white">Wadi3 Landscape</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              تصميم وتنفيذ لاندسكيب الفلل والملاعب الفاخرة، بالتعاون مع وكالة <strong className="text-teal-300">SHIFT AGENCY</strong> في إصدار <strong className="text-white">GROWTH EDITION</strong>.
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-300">
              <SparklesIcon className="w-4 h-4 text-teal-400" />
              <span>توثيق سينمائي 4K • تنفيذ هندسي معتمد</span>
            </div>
          </div>

          {/* Col 2: Villas Track */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <UsersIcon className="w-4 h-4 text-teal-400" />
              <span>قطاع الفلل والأفراد</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("villas");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-teal-300 transition-colors text-right cursor-pointer"
                >
                  لاندسكيب حدائق الفلل والقصور
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("villas");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-teal-300 transition-colors text-right cursor-pointer"
                >
                  ملاعب بادل وتنس خاصة داخل الفيلا
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("villas");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-teal-300 transition-colors text-right cursor-pointer"
                >
                  شلالات وبرجولات ومناطق BBQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Commercial & Developers Track */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <BuildingIcon className="w-4 h-4 text-cyan-400" />
              <span>الشركات والمطورين (B2B)</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("developers");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-cyan-300 transition-colors text-right cursor-pointer"
                >
                  لاندسكيب الكومباوندات السكنية
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("developers");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-cyan-300 transition-colors text-right cursor-pointer"
                >
                  ملاعب الأندية الرياضية المعتمدة
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playTabSwitch();
                    setActiveTrack("developers");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-cyan-300 transition-colors text-right cursor-pointer"
                >
                  عقود الصيانة الدورية وشبكات الري
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Phone */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-emerald-400" />
              <span>التواصل مع م. وديع</span>
            </h5>
            <p className="text-xs text-slate-400">
              متاحون للمعاينة الميدانية في القاهرة الكبرى، الشيخ زايد، التجمع الخامس والمدن الجديدة.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <a
                href="tel:+201220582340"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 text-xs text-white hover:text-teal-300 transition-colors font-mono"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-teal-400" />
                <span>+20 122 058 2340</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:underline"
              >
                <MessageCircleIcon className="w-3.5 h-3.5" />
                <span>واتساب مباشر (رد سريع &lt; 15 د)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            تنفيذ وتطوير استراتيجية الهوية بواسطة:{" "}
            <strong className="text-teal-300 font-bold">SHIFT AGENCY</strong> • تكنولوجيا وميديا باينج وتوثيق سنمائي
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Wadi3 Landscape © 2026</span>
            <span>•</span>
            <span className="text-slate-400">SHIFT GROWTH EDITION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
