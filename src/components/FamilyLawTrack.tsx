"use client";

import React from "react";
import {
  UsersIcon,
  MessageCircleIcon,
  CheckCircle2Icon,
  SparklesIcon,
  PhoneIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

export default function FamilyLawTrack() {
  const ceoWhatsappUrl = `https://wa.me/201211050297?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وعاوز أبدأ التنفيذ مع SHIFT!"
  )}`;

  return (
    <div className="py-12 space-y-16">
      
      {/* Track Presentation Banner */}
      <div className="glass-panel-teal p-8 rounded-3xl border border-teal-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold mb-3">
              <UsersIcon className="w-3.5 h-3.5" />
              <span>المسار الأول: مسار الفلل والعملاء الأفراد • Fast Conversion</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              كيف سنستهدف أصحاب الفلل والقصور السكنية؟
            </h3>
            <p className="text-slate-200 text-sm mt-2 max-w-2xl leading-relaxed">
              أصحاب الفلل بيدوروا على تنفيذ حديقة أو ملعب خاص، وهيقتنعوا بسرعة لما يشوفوا نتيجة قبل وبعد بجودة تسويقية عالية من إنتاج SHIFT.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={ceoWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick(800)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircleIcon className="w-4 h-4" />
              <span>ابدأ هذا المسار مع SHIFT 💬</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Value Pillars for Villas */}
      <div>
        <div className="text-center mb-10">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            ماذا سنبرز في حملات أصحاب الفلل؟
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            صناعة محتوى يركز على الفخامة الملموسة وراحة البال التي يحصل عليها المالك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">🏡</div>
            <h5 className="text-base font-bold text-white mb-2">حدائق الفلل والقصور</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              تصوير زوايا واسعة بدرون 4K للنجيل، الأشجار، والزهور العطرية تبيّن كيف حوّلت الأرض الترابية لمنتجع شخصي.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
              <span>إبهار بصري فوري للعميل</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">🎾</div>
            <h5 className="text-base font-bold text-white mb-2">ملاعب البادل والتنس الخاصة</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              إبراز قدرتك على تنفيذ ملاعب بادل احترافية داخل حديقة الفيلا مع أرضيات زجاجية وإنارة ليلية.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
              <span>ميزة تنافسية عالية الربحية</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">🌊</div>
            <h5 className="text-base font-bold text-white mb-2">الشلالات والبرجولات والـ BBQ</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              توثيق لقطات سينمائية للمياه المنسابة ومناطق الجلوس المفتوحة توضح أسلوب الحياة الراقي.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
              <span>محتوى يثير رغبة الشراء الفوري</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">💡</div>
            <h5 className="text-base font-bold text-white mb-2">الإضاءة الليلية وشبكات الري</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              تصوير ليلي ساحر (Night-time Showcase) يظهر الحديقة بعد الغروب وكأنها لوحة فنية مضيئة.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
              <span>قيمة مضافة تضاعف طلب المعاينة</span>
            </div>
          </div>

        </div>
      </div>

      {/* Conversion Funnel Box */}
      <div className="glass-panel p-8 rounded-3xl border border-teal-500/30 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-bold">
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>سرعة تحويل العميل (Fast Conversion Funnel)</span>
        </div>
        <h4 className="text-2xl font-black text-white">
          من المشاهدة على السوشيال ميديا إلى المعاينة الميدانية في الفيلا
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
          العميل يشاهد فيديو قبل وبعد 4K ⬅️ ينبهر بمستوى Wadi3 ⬅️ يضغط على الإعلان مباشرة ⬅️ يستقبله نظام الرد الفوري في أقل من 15 دقيقة ⬅️ يتم حجز المعاينة الميدانية بدون مماطلة.
        </p>
        <div className="pt-2">
          <a
            href={ceoWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-teal-500 to-[#1E6E78] text-white hover:scale-105 transition-all shadow-lg"
          >
            <span>جاهز لتفعيل مسار الفلل؟ تواصل مع SHIFT الآن</span>
          </a>
        </div>
      </div>

    </div>
  );
}
