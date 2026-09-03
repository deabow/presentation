"use client";

import React, { useState } from "react";
import {
  CalculatorIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  SparklesIcon,
  BuildingIcon,
  UsersIcon,
  CheckCircle2Icon,
  SearchIcon,
  AwardIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

export default function StrategyCalculator() {
  const [contractsCount, setContractsCount] = useState<number>(15);
  const [avgDealValue, setAvgDealValue] = useState<number>(500); // thousands EGP
  const [disputeRiskRate] = useState<number>(0.12); // 12% probability of dispute without firm review

  // Calculated figures
  const totalExposure = contractsCount * avgDealValue * 1000;
  const estimatedPotentialLoss = Math.round(totalExposure * disputeRiskRate * 0.4); // 40% loss if breached
  const annualRetainerCost = 120000; // 120k EGP/year retainer baseline
  const estimatedSavings = Math.max(0, estimatedPotentialLoss - annualRetainerCost);
  const roiPercentage = Math.round((estimatedSavings / annualRetainerCost) * 100);

  return (
    <div className="py-12 space-y-16">
      
      {/* Overview Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-purple-500/30 relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>رؤية SHIFT AGENCY التقنية والتسويقية</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            لماذا كان من الضروري فصل الحملات ووقف حرق الميزانية؟
          </h3>
          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
            الدمج بين زبون الشركات (B2B) وزبون قضايا الأسرة (B2C) في صفحة واحدة أو حملة إعلانية واحدة كان يتسبب في تشتيت الزائر وضياع ميزانية جوجل، وخفض نسبة التحويل (Conversion Rate). كل فئة لها عقلية وسلوك وتكلفة مختلفة تماماً.
          </p>
        </div>
      </div>

      {/* Comparison Matrix Table (Section 1 in proposal) */}
      <div className="glass-panel rounded-3xl border border-[#271f4e] overflow-hidden shadow-xl">
        <div className="p-6 border-b border-[#231b46] bg-[#0c091d] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-black text-white">
              مقارنة استراتيجية: سكة الشركات (B2B) مقابل سكة الأسرة (B2C)
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              كيف صممنا التجربة لتناسب كل عقلية وتحقق أقصى ربحية ممكنة
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 self-start">
            مصفوفة SHIFT
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-[#231b46] bg-[#120e29] text-xs font-bold text-slate-300">
                <th className="p-4 sm:p-5 w-1/4">وجه المقارنة</th>
                <th className="p-4 sm:p-5 w-3/8 text-sky-400 bg-sky-500/5">
                  <span className="flex items-center gap-1.5">
                    <BuildingIcon className="w-4 h-4" />
                    سكة الشركات والمصانع (B2B)
                  </span>
                </th>
                <th className="p-4 sm:p-5 w-3/8 text-amber-400 bg-amber-500/5">
                  <span className="flex items-center gap-1.5">
                    <UsersIcon className="w-4 h-4" />
                    سكة قضايا الأسرة والأفراد (B2C)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e173e] text-xs sm:text-sm">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-white bg-[#0e0b21]/50">
                  دماغ وسلوك الزبون
                </td>
                <td className="p-4 sm:p-5 text-slate-300 bg-sky-500/[0.02]">
                  صاحب بيزنس عقلاني يبحث عن حماية أرباحه، استقرار عقوده، والوقاية من النزاعات قبل بدئها.
                </td>
                <td className="p-4 sm:p-5 text-slate-300 bg-amber-500/[0.02]">
                  زبون متوتر يمر بظرف عائلي طارئ، يبحث عن حل فوري وسرية تامة وشخص يطمئنه على حقوقه وأولاده.
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-white bg-[#0e0b21]/50">
                  صفحة الهبوط (Landing Page)
                </td>
                <td className="p-4 sm:p-5 text-slate-300 bg-sky-500/[0.02]">
                  تصميم فخم ومهيب، فيديو موجه من المستشار كمال (60 ثانية)، ونموذج تأهيل بيانات للشركات.
                </td>
                <td className="p-4 sm:p-5 text-slate-300 bg-amber-500/[0.02]">
                  صفحة خفيفة وسريعة التصفح، شات واتساب مباشر، اتصال بنقرة واحدة، وتعهد سرية بارز.
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-white bg-[#0e0b21]/50">
                  طريقة المزايدة في Google Ads
                </td>
                <td className="p-4 sm:p-5 text-slate-300 bg-sky-500/[0.02]">
                  استهداف دقيق لكلمات البحث ذات النية المؤسسية: (محامي شركات، تأسيس مصانع، صياغة عقود تجارية).
                </td>
                <td className="p-4 sm:p-5 text-slate-300 bg-amber-500/[0.02]">
                  استهداف كلمات البحث السريعة للباحثين عن حل مستعجل: (محامي طلاق، محامي خلع شاطر، نفقة).
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 sm:p-5 font-bold text-white bg-[#0e0b21]/50">
                  المصلحة والعائد المالي
                </td>
                <td className="p-4 sm:p-5 text-sky-300 font-semibold bg-sky-500/[0.04]">
                  عقود استشارات سنوية وقضايا تجارية كبرى (شغل البطة السمينة ذو العائد الضخم والمستمر).
                </td>
                <td className="p-4 sm:p-5 text-amber-300 font-semibold bg-amber-500/[0.04]">
                  سيولة نقدية سريعة، أتعاب فورية تدور عجلة المكتب باستمرار ومصروفات فورية.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive ROI & Retainer Calculator */}
      <div className="glass-panel p-8 rounded-3xl border border-purple-500/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 mb-1">
              <CalculatorIcon className="w-4 h-4" />
              <span>حاسبة القيمة والعائد للشركات والمصانع</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              احسب الوفر المالي لشركتك من الحماية القانونية السنوية
            </h4>
          </div>
          <span className="text-xs text-slate-400">
            مبنية على معدلات نزاعات العقود التجارية في السوق المصري
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Slider 1: Contracts Count */}
            <div className="p-5 rounded-2xl bg-[#090714] border border-[#231b46]">
              <div className="flex justify-between items-center mb-3 text-sm">
                <label className="font-bold text-slate-200">
                  عدد العقود السنوية للشركة (توريد، تشغيل، شراكة):
                </label>
                <span className="text-base font-black text-sky-400 font-mono">
                  {contractsCount} عقد
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="80"
                value={contractsCount}
                onChange={(e) => {
                  soundFx.playClick(400);
                  setContractsCount(Number(e.target.value));
                }}
                className="w-full accent-sky-400 cursor-pointer h-2 bg-[#1c1639] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>3 عقود</span>
                <span>40 عقد</span>
                <span>80 عقد</span>
              </div>
            </div>

            {/* Slider 2: Deal Value */}
            <div className="p-5 rounded-2xl bg-[#090714] border border-[#231b46]">
              <div className="flex justify-between items-center mb-3 text-sm">
                <label className="font-bold text-slate-200">
                  متوسط قيمة الصفقة أو العقد الواحد:
                </label>
                <span className="text-base font-black text-purple-400 font-mono">
                  {(avgDealValue * 1000).toLocaleString("ar-EG")} ج.م
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={avgDealValue}
                onChange={(e) => {
                  soundFx.playClick(450);
                  setAvgDealValue(Number(e.target.value));
                }}
                className="w-full accent-purple-500 cursor-pointer h-2 bg-[#1c1639] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>50 ألف ج.م</span>
                <span>1.2 مليون ج.م</span>
                <span>2.5 مليون ج.م</span>
              </div>
            </div>

          </div>

          {/* Output Display Column */}
          <div className="lg:col-span-6 glass-panel-cyan p-6 sm:p-8 rounded-3xl border border-sky-500/30 relative">
            <div className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-2">
              النتيجة التقديرية لحماية أصولك
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-xs sm:text-sm py-2 border-b border-[#211b43]">
                <span className="text-slate-400">إجمالي حجم التعاقدات السنوية المعرضة للخطر:</span>
                <span className="font-bold text-white font-mono">
                  {totalExposure.toLocaleString("ar-EG")} ج.م
                </span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm py-2 border-b border-[#211b43]">
                <span className="text-rose-400">الخسارة المحتملة من ثغرة واحدة غير مغلقة:</span>
                <span className="font-bold text-rose-400 font-mono">
                  {estimatedPotentialLoss.toLocaleString("ar-EG")} ج.م
                </span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm py-2 border-b border-[#211b43]">
                <span className="text-slate-400">تكلفة الاشتراك السنوي للاستشارات والحماية:</span>
                <span className="font-bold text-slate-300 font-mono">
                  {annualRetainerCost.toLocaleString("ar-EG")} ج.م
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <span className="text-xs font-bold text-emerald-400 block mb-1">
                صافي الوفر المالي المحقق لبيزنسك:
              </span>
              <div className="text-3xl font-black text-emerald-400 font-mono">
                +{estimatedSavings.toLocaleString("ar-EG")} ج.م
              </div>
              <span className="text-[11px] text-emerald-300/80 mt-1 inline-block">
                عائد استثمار قانوني تقديري (ROI): <strong>+{roiPercentage}%</strong>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* SHIFT Implementation 3-Step Workflow (Section 5 in proposal) */}
      <div>
        <div className="text-center mb-8">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            مراحل تسليم وتنفيذ الشغل (SHIFT Workflow)
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            خطة عمل واضحة بدون تعقيد لضمان تسليم الشغل في أسرع وقت وبأعلى جودة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-[#2b2255]">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-black flex items-center justify-center mb-4 shadow-lg shadow-purple-600/30">
              1
            </div>
            <h5 className="text-base font-bold text-white mb-2">تجهيز الصفحات والبيكسل</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              بناء صفحة الشركات `corporate` وصفحة الأسرة `family-law` وربط البيكسل وتراكينج التحويلات بدقة متناهية.
            </p>
            <div className="mt-4 text-[11px] text-purple-300 font-semibold">
              تيم البرمجة (SHIFT)
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#2b2255]">
            <div className="w-9 h-9 rounded-xl bg-sky-500 text-slate-950 font-black flex items-center justify-center mb-4 shadow-lg shadow-sky-500/30">
              2
            </div>
            <h5 className="text-base font-bold text-white mb-2">تصوير وإنتاج الفيديو</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              جلسة تصوير احترافية مع البوب كمال في المكتب، ومونتاج سريع بالهوية البنفسجية الفخمة لإبراز الثقل والهيبة.
            </p>
            <div className="mt-4 text-[11px] text-sky-400 font-semibold">
              تيم الميديا والإنتاج (SHIFT)
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#2b2255]">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 font-black flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
              3
            </div>
            <h5 className="text-base font-bold text-white mb-2">إطلاق الحملات وضبط المزايدة</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              تدشين الحملتين على Google Search وميتا كل حملة بكلماتها وميزانيتها وصفحتها، ووقف هدر الميزانيات السابقة.
            </p>
            <div className="mt-4 text-[11px] text-emerald-400 font-semibold">
              تيم الميديا باينج (SHIFT)
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
