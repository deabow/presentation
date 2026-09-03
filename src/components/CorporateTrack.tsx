"use client";

import React from "react";
import {
  BuildingIcon,
  CheckCircle2Icon,
  SparklesIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

export default function CorporateTrack() {
  const ceoWhatsappUrl = `https://wa.me/201211050297?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وعاوز أبدأ التنفيذ مع SHIFT!"
  )}`;

  return (
    <div className="py-6 sm:py-12 space-y-8 sm:space-y-16">
      
      {/* Track Presentation Banner - Mobile Optimized */}
      <div className="glass-panel-navy p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-bold mb-2 sm:mb-3">
              <BuildingIcon className="w-3.5 h-3.5 shrink-0" />
              <span>المسار الثاني: مسار الشركات والمطورين العقاريين • High LTV</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
              كيف سنفتح لك أبواب الكومباوندات والمشاريع الكبرى؟
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              كومباوندات ومطورين عقاريين محتاجين لاند سكيب لمساحات كبيرة ومستمرة، دي فرصة لعلاقة عمل وعقود طويلة المدى. احنا في SHIFT هنبني لك بروفايل وحملات تجعل المطور يثق في قدرتك على استلام المساحات الضخمة.
            </p>
          </div>

          <div className="pt-2 md:pt-0 shrink-0">
            <a
              href={ceoWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick(800)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-lg shadow-cyan-500/30 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircleIcon className="w-4 h-4 shrink-0" />
              <span>تفعيل مسار المطورين مع SHIFT 💬</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Pillars for Developers */}
      <div>
        <div className="text-center mb-6 sm:mb-10">
          <h4 className="text-lg sm:text-2xl font-black text-white">
            عناصر القوة التي سنقدّمها لمجالس إدارة المطورين
          </h4>
          <p className="text-[11px] sm:text-sm text-slate-400 mt-1">
            صياغة بروفايل وحملات B2B تخاطب عقلية مديري المشاريع وصناع القرار.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          
          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-[#24344d] active:scale-[0.99] transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3 sm:mb-4">
              <BuildingIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h5 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">لاندسكيب الكومباوندات السكنية</h5>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              إظهار خبرة Wadi3 في تنسيق وتوزيع المساحات الخضراء المفتوحة التي ترفع القيمة البيعية للمشروع العقاري.
            </p>
            <div className="mt-3 pt-2.5 border-t border-[#1d2d44] flex items-center gap-1.5 text-[10px] sm:text-[11px] text-cyan-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>التزام بالجدول الزمني لتسليم المراحل</span>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-[#24344d] active:scale-[0.99] transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-3 sm:mb-4">
              <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h5 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">ملاعب الأندية والمنشآت الرياضية</h5>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              توثيق ملاعب بادل وملاعب قدم معتمدة بنجيل صناعي وهيدروليكي وطبقات امتصاص صدمات عالمية.
            </p>
            <div className="mt-3 pt-2.5 border-t border-[#1d2d44] flex items-center gap-1.5 text-[10px] sm:text-[11px] text-teal-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>مواصفات تضمن كفاءة الاستخدام التجاري</span>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-[#24344d] active:scale-[0.99] transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-3 sm:mb-4">
              <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h5 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">أنظمة الري المركزي الذكي</h5>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              محطات ري أوتوماتيكية متطورة توفر 40% من مياه الري للمساحات الشاسعة وتقلل تكلفة التشغيل والصيانة.
            </p>
            <div className="mt-3 pt-2.5 border-t border-[#1d2d44] flex items-center gap-1.5 text-[10px] sm:text-[11px] text-indigo-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>ميزة استدامة تهم كل مطور عقاري</span>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-[#24344d] active:scale-[0.99] transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-3 sm:mb-4">
              <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h5 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">عقود الصيانة الدورية المستمرة</h5>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              تسويق فرق الصيانة والمتابعة الدورية للحفاظ على رونق المشروعات طوال العام واستدامة الإيرادات للشركة.
            </p>
            <div className="mt-3 pt-2.5 border-t border-[#1d2d44] flex items-center gap-1.5 text-[10px] sm:text-[11px] text-amber-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>علاقات عمل سنوية طويلة المدى</span>
            </div>
          </div>

        </div>
      </div>

      {/* B2B Strategic Opportunity Box */}
      <div className="glass-panel-navy p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-500/30 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-[10px] sm:text-xs font-bold">
          <BuildingIcon className="w-3.5 h-3.5" />
          <span>القيمة الإجمالية للعميل (High LTV Strategy)</span>
        </div>
        <h4 className="text-lg sm:text-2xl font-black text-white">
          مشروع تطوير عقاري واحد يمكن أن يمثل نقلة سنوية كاملة لأعمالك
        </h4>
        <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
          المطورون العقاريون يبحثون دوماً عن مقاول لاندسكيب يمتلك سابقة أعمال مصورة باحترافية توحي بالثقة والانضباط. في SHIFT، سنبني لك هذه الواجهة لتكون الخيار الأول في مناقصاتهم ومشاريعهم.
        </p>
        <div className="pt-2">
          <a
            href={ceoWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 to-teal-600 text-white active:scale-95 transition-all shadow-lg"
          >
            <span>ناقش استراتيجية المطورين مع CEO وكالة SHIFT</span>
          </a>
        </div>
      </div>

    </div>
  );
}
