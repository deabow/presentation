"use client";

import React from "react";
import {
  UsersIcon,
  MessageCircleIcon,
  CheckCircle2Icon,
  SparklesIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

export default function FamilyLawTrack() {
  const ceoWhatsappUrl = `https://wa.me/201211050297?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وعاوز أبدأ التنفيذ مع SHIFT!"
  )}`;

  return (
    <div className="py-6 sm:py-12 space-y-8 sm:space-y-16">
      
      {/* Track Presentation Banner - Mobile Optimized */}
      <div className="glass-panel-teal p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-teal-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-[11px] sm:text-xs font-bold mb-2 sm:mb-3">
              <UsersIcon className="w-3.5 h-3.5 shrink-0" />
              <span>المسار الأول: مسار الفلل والعملاء الأفراد • Fast Conversion</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
              كيف سنستهدف أصحاب الفلل والقصور السكنية؟
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              أصحاب الفلل بيدوروا على تنفيذ حديقة أو ملعب خاص، وهيقتنعوا بسرعة لما يشوفوا نتيجة قبل وبعد بجودة تسويقية عالية من إنتاج SHIFT.
            </p>
          </div>

          <div className="pt-2 md:pt-0 shrink-0">
            <a
              href={ceoWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick(800)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircleIcon className="w-4 h-4 shrink-0" />
              <span>ابدأ هذا المسار مع SHIFT 💬</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Value Pillars for Villas */}
      <div>
        <div className="text-center mb-6 sm:mb-10">
          <h4 className="text-lg sm:text-2xl font-black text-white">
            ماذا سنبرز في حملات أصحاب الفلل؟
          </h4>
          <p className="text-[11px] sm:text-sm text-slate-400 mt-1">
            صناعة محتوى يركز على الفخامة الملموسة وراحة البال التي يحصل عليها المالك.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          
          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-teal-500/20 active:scale-[0.99] transition-all">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🏡</div>
            <h5 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">حدائق الفلل والقصور</h5>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              تصوير زوايا واسعة بدرون 4K للنجيل، الأشجار، والزهور العطرية تبيّن كيف حوّلت الأرض الترابية لمنتجع شخصي.
            </p>
            <div className="mt-3 pt-2.5 border-t border-[#1d2d44] text-[10px] sm:text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>إبهار بصري فوري للعميل</span>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-teal-500/20 active:scale-[0.99] transition-all">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎾</div>
            <h5 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">ملاعب البادل والتنس الخاصة</h5>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              إبراز قدرتك على تنفيذ ملاعب بادل احترافية داخل حديقة الفيلا مع أرضيات زجاجية وإنارة ليلية.
            </p>
            <div className="mt-3 pt-2.5 border-t border-[#1d2d44] text-[10px] sm:text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>ميزة تنافسية عالية الربحية</span>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-teal-500/20 active:scale-[0.99] transition-all">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🌊</div>
            <h5 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">الشلالات والبرجولات والـ BBQ</h5>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              توثيق لقطات سينمائية للمياه المنسابة ومناطق الجلوس المفتوحة توضح أسلوب الحياة الراقي.
            </p>
            <div className="mt-3 pt-2.5 border-t border-[#1d2d44] text-[10px] sm:text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>محتوى يثير رغبة الشراء الفوري</span>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-teal-500/20 active:scale-[0.99] transition-all">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💡</div>
            <h5 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">الإضاءة الليلية وشبكات الري</h5>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              تصوير ليلي ساحر يظهر الحديقة بعد الغروب كأنها منتجع فندقي مضيء.
            </p>
            <div className="mt-3 pt-2.5 border-t border-[#1d2d44] text-[10px] sm:text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>قيمة مضافة تضاعف طلب المعاينة</span>
            </div>
          </div>

        </div>
      </div>

      {/* Conversion Funnel Box */}
      <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-teal-500/30 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-[10px] sm:text-xs font-bold">
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>سرعة تحويل العميل (Fast Conversion Funnel)</span>
        </div>
        <h4 className="text-lg sm:text-2xl font-black text-white">
          من المشاهدة على السوشيال ميديا إلى المعاينة الميدانية في الفيلا
        </h4>
        
        {/* Step-by-step pill chain for mobile readability */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[10px] sm:text-xs text-slate-200">
          <div className="p-2.5 rounded-xl bg-[#0e1726] border border-[#20324c]">
            <span className="text-teal-400 font-bold block mb-1">1. إبهار</span>
            فيديو قبل وبعد 4K
          </div>
          <div className="p-2.5 rounded-xl bg-[#0e1726] border border-[#20324c]">
            <span className="text-teal-400 font-bold block mb-1">2. ضغطة</span>
            تواصل مباشر
          </div>
          <div className="p-2.5 rounded-xl bg-[#0e1726] border border-[#20324c]">
            <span className="text-teal-400 font-bold block mb-1">3. رد فوري</span>
            خلال &lt; 15 دقيقة
          </div>
          <div className="p-2.5 rounded-xl bg-[#0e1726] border border-[#20324c]">
            <span className="text-teal-400 font-bold block mb-1">4. إغلاق</span>
            معاينة في الفيلا
          </div>
        </div>

        <div className="pt-2">
          <a
            href={ceoWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-teal-500 to-[#1E6E78] text-white active:scale-95 transition-all shadow-lg"
          >
            <span>جاهز لتفعيل مسار الفلل؟ تواصل مع SHIFT الآن</span>
          </a>
        </div>
      </div>

    </div>
  );
}
