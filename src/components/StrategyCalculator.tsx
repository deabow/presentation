"use client";

import React, { useState } from "react";
import {
  SparklesIcon,
  CheckCircle2Icon,
  CalculatorIcon,
  TrendingUpIcon,
  UsersIcon,
  BuildingIcon,
  PhoneIcon,
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
      "الفيديوهات القديمة كانت بتوثق شغل ممتاز بجودة تصوير ضعيفة، وده بيقلل من قيمته في عين العميل. هنعيد تصوير كل مشروع جديد بمعايير تسويقية عالية توضح الفرق الحقيقي بين الأرض قبل وبعد.",
    result: "فيديوهات 4K تجعل العميل يثق في النتيجة قبل توقيع العقد.",
  },
  {
    num: 2,
    title: "تصميم هوية بصرية متكاملة",
    tag: "احترافية من أول نظرة",
    tagColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    description:
      "بناء هوية Wadi3 على السوشيال ميديا والموقع بشكل يعكس مستوى شغل لاند سكيب راقي ومحترف، بدل ما تفضل الهوية أضعف من التنفيذ الحقيقي على الأرض.",
    result: "انطباع أولي فخم يضع Wadi3 في فئة مقاولي النخبة.",
  },
  {
    num: 3,
    title: "حملات تسويق ممولة وموجهة",
    tag: "عملاء جادين فقط",
    tagColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    description:
      "استهداف أصحاب الفلل والمشاريع الجادة اللي بيدوروا فعليًا على مقاول لاند سكيب موثوق في مناطق التجمع، زايد، والشروق، بدل الاعتماد على التوصيات والمعارف فقط.",
    result: "تدفق مستمر للعملاء (+15 فرصة جديدة شهرياً).",
  },
  {
    num: 4,
    title: "نظام استقبال وتقييم الفرص",
    tag: "صفر فرص ضايعة",
    tagColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    description:
      "ضمان الرد السريع على كل استفسار جديد وتصنيفه فوراً، بحيث لا تضيع فرصة بيع واحدة بسبب التأخير في الرد، مع متابعة احترافية حتى إتمام التعاقد.",
    result: "سرعة استجابة في أقل من 15 دقيقة ترفع نسبة الإغلاق (Closing).",
  },
];

export default function StrategyCalculator() {
  const [projectsCount, setProjectsCount] = useState<number>(4);
  const [avgProjectValue, setAvgProjectValue] = useState<number>(350); // thousands EGP

  const totalMonthlyVolume = projectsCount * avgProjectValue * 1000;
  const totalAnnualVolume = totalMonthlyVolume * 12;
  const growthRate = 2.4; // 240% increase in deal size & qualified leads with 4K branding

  const whatsappUrl = `https://wa.me/201220582340?text=${encodeURIComponent(
    "أهلاً، اطلعت على خطة الهوية بتاعة Wadi3 وجاهز نبدأ التنفيذ!"
  )}`;

  return (
    <div className="py-12 space-y-16">
      
      {/* Strategy Intro */}
      <div className="glass-panel p-8 rounded-3xl border border-teal-500/30 relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>خطة SHIFT GROWTH EDITION لمضاعفة أعمال وديع لاندسكيب</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            ركائز الاستراتيجية الأربعة لنقل Wadi3 لفئة مقاولي النخبة
          </h3>
          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
            الفرق بين المقاول اللي شغال بالمعارف والصدفة، وبين البراند اللي أصحاب الفلل والشركات بيتمنوا يتعاقدوا معاه، هو <strong className="text-teal-300">طريقة العرض والتوثيق والوصول المدروس</strong>.
          </p>
        </div>
      </div>

      {/* 4 Strategy Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STRATEGY_PILLARS.map((pillar) => (
          <div
            key={pillar.num}
            className="glass-panel p-7 rounded-3xl border border-[#24344d] hover:border-teal-500/50 transition-all duration-300 relative group hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-2xl bg-[#132337] border border-[#243750] text-teal-300 font-black flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                0{pillar.num}
              </span>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${pillar.tagColor}`}>
                {pillar.tag}
              </span>
            </div>

            <h4 className="text-xl font-bold text-white mb-2.5">
              {pillar.title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {pillar.description}
            </p>

            <div className="pt-3 border-t border-[#1a283b] flex items-center gap-2 text-xs text-teal-300 font-semibold">
              <CheckCircle2Icon className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{pillar.result}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Growth Simulator */}
      <div className="glass-panel p-8 rounded-3xl border border-teal-500/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 mb-1">
              <CalculatorIcon className="w-4 h-4" />
              <span>محاكاة نمو التعاقدات والأعمال</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              حاسبة نمو مشاريع Wadi3 مع استراتيجية SHIFT
            </h4>
          </div>
          <span className="text-xs text-slate-400">
            مبنية على استهداف أصحاب الفلل بالمدن الجديدة
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-5 rounded-2xl bg-[#09111c] border border-[#24344d]">
              <div className="flex justify-between items-center mb-3 text-sm">
                <label className="font-bold text-slate-200">
                  عدد المشاريع المستهدفة شهرياً (فلل / ملاعب):
                </label>
                <span className="text-base font-black text-teal-300 font-mono">
                  {projectsCount} مشاريع
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={projectsCount}
                onChange={(e) => {
                  soundFx.playClick(400);
                  setProjectsCount(Number(e.target.value));
                }}
                className="w-full accent-teal-400 cursor-pointer h-2 bg-[#172538] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>مشروع واحد</span>
                <span>8 مشاريع</span>
                <span>15 مشروع</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#09111c] border border-[#24344d]">
              <div className="flex justify-between items-center mb-3 text-sm">
                <label className="font-bold text-slate-200">
                  متوسط قيمة المشروع أو الحديقة:
                </label>
                <span className="text-base font-black text-cyan-300 font-mono">
                  {(avgProjectValue * 1000).toLocaleString("ar-EG")} ج.م
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="1500"
                step="50"
                value={avgProjectValue}
                onChange={(e) => {
                  soundFx.playClick(450);
                  setAvgProjectValue(Number(e.target.value));
                }}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-[#172538] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>100 ألف ج.م</span>
                <span>750 ألف ج.م</span>
                <span>1.5 مليون ج.م</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 glass-panel-teal p-6 sm:p-8 rounded-3xl border border-teal-500/40">
            <div className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-2">
              العائد التقديري بعد إطلاق الهوية والتوثيق 4K
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-xs sm:text-sm py-2 border-b border-[#21384a]">
                <span className="text-slate-300">حجم الأعمال الشهري المستهدف:</span>
                <span className="font-bold text-white font-mono">
                  {totalMonthlyVolume.toLocaleString("ar-EG")} ج.م
                </span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm py-2 border-b border-[#21384a]">
                <span className="text-slate-300">حجم الأعمال السنوي المتوقع:</span>
                <span className="font-bold text-teal-300 font-mono">
                  {totalAnnualVolume.toLocaleString("ar-EG")} ج.م
                </span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm py-2 border-b border-[#21384a]">
                <span className="text-slate-300">الفرص الشهرية المؤهلة (Leads):</span>
                <span className="font-bold text-cyan-300 font-mono">
                  +15 عميل جاد شهرياً
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center">
              <span className="text-xs font-bold text-emerald-300 block mb-1">
                تأثير التوثيق الفاخر على سرعة إتمام الصفقات:
              </span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                مضاعفة التحويل 2.4x
              </div>
              <span className="text-[11px] text-emerald-200/80 mt-1 inline-block">
                العميل يتخذ قرار التعاقد فور رؤية الفيديو قبل وبعد
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Action Kickoff Banner (User Specification) */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-teal-500/40 text-center relative overflow-hidden bg-gradient-to-br from-[#0e1d2c] via-[#0b1724] to-[#070e17]">
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center mx-auto text-2xl">
            🚀
          </div>
          <h4 className="text-2xl sm:text-4xl font-black text-white">
            جاهز نبدأ التنفيذ؟
          </h4>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            شوف إزاي شغلك يتحول لعرض تسويقي يجيب عملاء بنفسه. تقدر تحجز جلسة فورية أو نتواصل مباشرة على الواتساب.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playChime()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-teal-500 via-[#1E6E78] to-cyan-500 text-white shadow-xl shadow-teal-700/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircleIcon className="w-5 h-5" />
              <span>تواصل واتساب مع م. وديع الآن</span>
            </a>

            <a
              href="tel:+201220582340"
              onClick={() => soundFx.playClick()}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-sm text-slate-200 border border-[#24344d] hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-4 h-4 text-teal-400" />
              <span>اتصال هاتفي: 01220582340</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
