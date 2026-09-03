"use client";

import React, { useState } from "react";
import {
  SparklesIcon,
  CheckCircle2Icon,
  TrendingUpIcon,
  MessageCircleIcon,
  AwardIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

const STRATEGY_PILLARS = [
  {
    num: 1,
    title: "توثيق سينمائي: قبل وبعد",
    tag: "فرق يبان بالعين",
    tagColor: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    description:
      "هنعيد تصوير كل مشروع جديد لـ Wadi3 بمعايير تسويقية عالية توضح الفرق الحقيقي بين الأرض قبل وبعد، بدل الاعتماد على توثيق ضعيف بيقلل من قيمة الشغل الحقيقي.",
    result: "فيديوهات 4K تجعل عميل الفلل أو الكومباوند يثق في النتيجة قبل أي كلام.",
  },
  {
    num: 2,
    title: "تصميم هوية بصرية متكاملة",
    tag: "احترافية من أول نظرة",
    tagColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    description:
      "SHIFT هتبني هوية Wadi3 على السوشيال ميديا والموقع بشكل يعكس مستوى شغل لاند سكيب راقي ومحترف، بدل ما تفضل الهوية أضعف من التنفيذ الحقيقي.",
    result: "انطباع بصري فخم يليق بحجم خبرتك ويضعك في صدارة المنافسين.",
  },
  {
    num: 3,
    title: "حملات تسويق ممولة وموجهة",
    tag: "عملاء جادين فقط",
    tagColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    description:
      "هنستهدف أصحاب الفلل والمشاريع الجادة اللي بيدوروا فعليًا على مقاول لاند سكيب موثوق، بدل الاعتماد على التوصية فقط.",
    result: "تدفق متواصل لأكثر من 15 عميل مؤهل شهرياً في المدن الجديدة.",
  },
  {
    num: 4,
    title: "نظام استقبال وتقييم الفرص",
    tag: "صفر فرص ضايعة",
    tagColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    description:
      "هنضمن الرد السريع على كل استفسار جديد وتصنيفه، بحيث لا تضيع فرصة بيع واحدة بسبب التأخير في الرد.",
    result: "استجابة فورية في أقل من 15 دقيقة لتحويل الاستفسارات لتعاقدات سريعة.",
  },
];

export default function StrategyCalculator() {
  const [inquiriesPerMonth, setInquiriesPerMonth] = useState<number>(20);
  const [conversionBoost, setConversionBoost] = useState<number>(65);

  const ceoWhatsappUrl = `https://wa.me/201211050297?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وعاوز أبدأ التنفيذ مع SHIFT!"
  )}`;

  const calculatedConversions = Math.round((inquiriesPerMonth * conversionBoost) / 100);

  const handleCopyLink = () => {
    soundFx.playChime();
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("تم نسخ رابط العرض بنجاح لمشاركته مع فريق العمل.");
    }
  };

  return (
    <div className="py-6 sm:py-12 space-y-8 sm:space-y-16">
      
      {/* Pitch Value Proposition Intro */}
      <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-teal-500/30 relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[11px] sm:text-xs font-bold mb-2 sm:mb-3">
            <SparklesIcon className="w-3.5 h-3.5 shrink-0" />
            <span>خطة عمل وكالة SHIFT الموجهة خصيصاً لـ Wadi3</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
            كيف ستحوّل وكالة SHIFT جودة تنفيذك إلى براند يطلبك بالاسم؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
            الفرق بين المقاول اللي شغال بالمعارف والتوصيات غير المنتظمة، وبين البراند اللي أصحاب الفلل والشركات بيتمنوا يتعاقدوا معاه، هو <strong className="text-teal-300">منظومة التسويق والتوثيق البصري اللي بنقدّمهالك في SHIFT</strong>.
          </p>
        </div>
      </div>

      {/* The 4 Strategy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
        {STRATEGY_PILLARS.map((pillar) => (
          <div
            key={pillar.num}
            className="glass-panel p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#24344d] active:scale-[0.99] transition-all relative group"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#132337] border border-[#243750] text-teal-300 font-black flex items-center justify-center text-sm sm:text-base">
                0{pillar.num}
              </span>
              <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:py-1 rounded-full border ${pillar.tagColor}`}>
                {pillar.tag}
              </span>
            </div>

            <h4 className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2.5">
              {pillar.title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-4">
              {pillar.description}
            </p>

            <div className="pt-2.5 border-t border-[#1a283b] flex items-center gap-1.5 text-[11px] sm:text-xs text-teal-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{pillar.result}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Value Proposition & Growth Simulator */}
      <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-teal-500/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-teal-400 mb-1">
              <TrendingUpIcon className="w-3.5 h-3.5" />
              <span>محاكاة الأثر التسويقي المباشر</span>
            </div>
            <h4 className="text-lg sm:text-2xl font-black text-white">
              القيمة المضافة لحملات SHIFT على أعمال Wadi3
            </h4>
          </div>
          <span className="text-[10px] sm:text-xs text-slate-400">
            توقع حجم الفرص المباشرة والتحويل السريع
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#09111c] border border-[#24344d]">
              <div className="flex justify-between items-center mb-2.5 text-xs sm:text-sm">
                <label className="font-bold text-slate-200">
                  عدد الاستفسارات الشهرية المستهدفة:
                </label>
                <span className="text-sm sm:text-base font-black text-teal-300 font-mono">
                  {inquiriesPerMonth} استفسار
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                value={inquiriesPerMonth}
                onChange={(e) => {
                  soundFx.playClick(400);
                  setInquiriesPerMonth(Number(e.target.value));
                }}
                className="w-full accent-teal-400 cursor-pointer h-2 bg-[#172538] rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>10</span>
                <span>30</span>
                <span>50</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#09111c] border border-[#24344d]">
              <div className="flex justify-between items-center mb-2.5 text-xs sm:text-sm">
                <label className="font-bold text-slate-200">
                  نسبة اقتناع العميل بعد رؤية 4K:
                </label>
                <span className="text-sm sm:text-base font-black text-cyan-300 font-mono">
                  {conversionBoost}%
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="90"
                step="5"
                value={conversionBoost}
                onChange={(e) => {
                  soundFx.playClick(450);
                  setConversionBoost(Number(e.target.value));
                }}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-[#172538] rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>30%</span>
                <span>60%</span>
                <span>90%</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 glass-panel-teal p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-teal-500/40">
            <div className="text-[10px] sm:text-xs font-bold text-teal-300 uppercase tracking-wider mb-2">
              الأثر المتوقع مع منظومة SHIFT
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-[#21384a]">
                <span className="text-slate-300">الفرص الجديدة المؤهلة شهرياً:</span>
                <span className="font-bold text-white font-mono">
                  +{inquiriesPerMonth} عميل جاد
                </span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-[#21384a]">
                <span className="text-slate-300">معاينات ومشاريع مؤكدة شهرياً:</span>
                <span className="font-bold text-teal-300 font-mono">
                  +{calculatedConversions} مشروع
                </span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-[#21384a]">
                <span className="text-slate-300">سرعة الرد والمتابعة:</span>
                <span className="font-bold text-cyan-300 font-mono">
                  &lt; 15 دقيقة
                </span>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-center">
              <span className="text-[11px] font-bold text-emerald-300 block mb-0.5">
                النتيجة الاستراتيجية:
              </span>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                شغلك هيبيع نفسه بنفسه
              </div>
              <span className="text-[10px] sm:text-[11px] text-emerald-200/80 mt-1 inline-block">
                العملاء أصحاب الفلل هما اللي هيتواصلوا معاك
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Action Kickoff Section */}
      <div className="glass-panel p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-teal-500/40 text-center relative overflow-hidden bg-gradient-to-br from-[#0e1d2c] via-[#0b1724] to-[#070e17] shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-3.5 sm:space-y-4 relative z-10">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center mx-auto text-2xl sm:text-3xl shadow-lg">
            🚀
          </div>

          <h4 className="text-xl sm:text-4xl font-black text-white">
            جاهز نبدأ التنفيذ مع SHIFT؟
          </h4>

          <p className="text-xs sm:text-base text-slate-200 leading-relaxed max-w-xl mx-auto">
            احنا جاهزين نبدأ نحول شغلك لعرض تسويقي يجيب عملاء بنفسه. تواصل معانا مباشرة على الواتساب علشان نتفق على أول خطوة.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={ceoWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playChime()}
              className="w-full sm:w-auto px-6 py-4 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm bg-gradient-to-r from-teal-500 via-[#1E6E78] to-cyan-500 text-white shadow-xl shadow-teal-700/40 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircleIcon className="w-4 h-4 shrink-0" />
              <span>بدء التنفيذ عبر واتساب الـ CEO مباشرة</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm text-slate-200 border border-[#24344d] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <AwardIcon className="w-4 h-4 text-teal-400 shrink-0" />
              <span>حفظ ومشاركة هذا العرض كمرجع</span>
            </button>
          </div>

          <div className="pt-2 text-[11px] sm:text-xs text-slate-400">
            رقم واتساب CEO وكالة SHIFT المباشر: <span className="text-teal-300 font-mono font-bold">+20 121 105 0297</span>
          </div>
        </div>
      </div>

    </div>
  );
}
