"use client";

import React, { useState } from "react";
import {
  UsersIcon,
  PhoneIcon,
  MessageCircleIcon,
  CheckCircle2Icon,
  SparklesIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

export default function FamilyLawTrack() {
  const [gardenStyle, setGardenStyle] = useState<string>("مودرن مع إضاءة خافتة");
  const [areaRange, setAreaRange] = useState<string>("200 - 500 متر");
  const [hasPool, setHasPool] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/201220582340?text=${encodeURIComponent(
    `أهلاً م. وديع، عندي فيلا وأريد معاينة حديقة مساحتها (${areaRange}) بستايل (${gardenStyle}).`
  )}`;

  return (
    <div className="py-12 space-y-16">
      
      {/* Track Header */}
      <div className="glass-panel-teal p-8 rounded-3xl border border-teal-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold mb-3">
              <UsersIcon className="w-3.5 h-3.5" />
              <span>المسار الأول: الفلل والعملاء الأفراد • Fast Conversion Track</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              حدائق وملاعب الفلل الخاصة: فخامة تحول بيتك لمنتجع
            </h3>
            <p className="text-slate-200 text-sm mt-2 max-w-2xl leading-relaxed">
              أصحاب الفلل بيحبوا يشوفوا النتيجة بعينهم. بنعرضلك سابقة أعمال وفيديوهات قبل وبعد 4K واضحة تبيّن الفرق الصريح بين الأرض الترابية والتحفة النهائية.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick(800)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircleIcon className="w-4 h-4" />
              <span>واتساب لمعاينة الفيلا 💬</span>
            </a>

            <a
              href="tel:+201220582340"
              onClick={() => soundFx.playClick(700)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#122030] text-teal-300 border border-teal-500/30 hover:bg-[#192c42] transition-all flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>اتصال مباشر: 01220582340</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Villa Pillars */}
      <div>
        <div className="text-center mb-10">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            تفاصيل تنفيذ الفلل التي تصنع الفارق
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            تصميم وتنفيذ يجمع بين جمال الطبيعة، هندسة الهاردسكيب، وأحدث أنظمة الإضاءة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">🏡</div>
            <h5 className="text-base font-bold text-white mb-2">حدائق الفلل والمساحات الخضراء</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              تنسيق النجيل الطبيعي والصناعي المستورد، نخيل واشنطونيا، شجيرات الزينة والزهور العطرية بتوزيع مدروس.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
              <span>ضمان سلامة التربة وتصريف المياه</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">🎾</div>
            <h5 className="text-base font-bold text-white mb-2">ملاعب بادل وتنس خاصة</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              إنشاء وتجهيز ملاعب بادل داخل حديقة الفيلا مع أرضيات زجاجية، إنارة LED قوية، وشبك بمواصفات احترافية.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
              <span>خصوصية ورياضة في منزلك</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">🌊</div>
            <h5 className="text-base font-bold text-white mb-2">الشلالات والبرجولات والـ BBQ</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              مناطق جلوس خارجية ومطابخ حديقة مفتوحة (BBQ Areas) مع شلالات جدارية وجلسات خشبية معالجة ضد الرطوبة والشمس.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
              <span>مساحة استرخاء فندقية متكاملة</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl mb-3">💡</div>
            <h5 className="text-base font-bold text-white mb-2">إضاءة ليلية دافئة وشبكات ري</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              توزيع إنارة أرضية وجدارية دافئة (Warm 3000K) تبرز جمال المزروعات ليلاً، مع ري أوتوماتيكي بتايمر ذكي.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] text-[11px] text-teal-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
              <span>تشغيل تلقائي بدون مجهود</span>
            </div>
          </div>

        </div>
      </div>

      {/* Instant 60-Second Villa Garden Estimator */}
      <div className="max-w-3xl mx-auto glass-panel p-8 rounded-3xl border border-teal-500/30 shadow-2xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold mb-2">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>طلب معاينة مجانية لحديقة فيلتك في 60 ثانية</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-white">
            حدد مواصفات حديقة أحلامك وسنتواصل معك فوراً
          </h4>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2Icon className="w-8 h-8" />
            </div>
            <h5 className="text-lg font-bold text-white">
              تم استلام طلب المعاينة لحديقتك بنجاح!
            </h5>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              سيتواصل م. وديع معك على رقم ({phone}) لترتيب موعد المعاينة الميدانية في الفيلا وعرض كتالوج التصاميم.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
              >
                <span>فتح المحادثة على واتساب الآن 💬</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleAssessmentSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                1. ما هو النمط المعماري المفضل لحديقتك؟
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {["مودرن مع إضاءة خافتة", "طبيعي وتروبيكال استوائي", "أندلسي كلاسيكي مع نوافير"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      soundFx.playClick(600);
                      setGardenStyle(item);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      gardenStyle === item
                        ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30"
                        : "bg-[#0a131f] text-slate-300 border border-[#21324a] hover:border-teal-500/40"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                2. المساحة التقريبية لحديقة الفيلا:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {["أقل من 200 متر", "200 - 500 متر", "500 - 1,000 متر", "أكثر من 1,000 متر"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      soundFx.playClick(650);
                      setAreaRange(item);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      areaRange === item
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/50"
                        : "bg-[#0a131f] text-slate-300 border border-[#21324a] hover:border-teal-500/40"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                3. رقم الهاتف أو الواتساب للتواصل وترتيب المعاينة *
              </label>
              <input
                type="tel"
                required
                placeholder="012XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0a131f] border border-[#21324a] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-teal-500 via-[#1E6E78] to-cyan-600 text-white shadow-lg shadow-teal-700/30 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>احجز موعد معاينة في الفيلا مجاناً</span>
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
