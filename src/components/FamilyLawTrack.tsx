"use client";

import React, { useState } from "react";
import {
  UsersIcon,
  PhoneIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  CheckCircle2Icon,
  ScaleIcon,
  SparklesIcon,
  LockIcon,
  ArrowLeftIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface FamilyLawTrackProps {
  onOpenConsultation: () => void;
}

export default function FamilyLawTrack({ onOpenConsultation }: FamilyLawTrackProps) {
  const [caseType, setCaseType] = useState<string>("طلاق أو خلع");
  const [urgency, setUrgency] = useState<string>("مستعجل جداً (خلال 24 ساعة)");
  const [step, setStep] = useState<number>(1);
  const [phone, setPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-16">
      
      {/* Track Header & Reassurance Banner */}
      <div className="glass-panel-gold p-8 rounded-3xl border border-amber-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
              <UsersIcon className="w-3.5 h-3.5" />
              <span>الحملة الثانية (سكة الأسرة والأفراد) • صفحة aboalilawfirm.com/family-law</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              سرية تامة وسرعة حاسمة في كافة قضايا محكمة الأسرة
            </h3>
            <p className="text-slate-300 text-sm mt-2 max-w-2xl">
              نراعي خصوصية وحساسية الموقف العائلي. فريق قانوني متمرس يضمن حقوقك المالية وحضانة أبنائك بأسرع وقت وبدون تعقيد.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/201000000000?text=أريد%20استشارة%20قانونية%20عاجلة%20بخصوص%20قضية%20أسرة"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick(800)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircleIcon className="w-4 h-4" />
              <span>واتساب فوري (سرية 100%)</span>
            </a>

            <a
              href="tel:+201000000000"
              onClick={() => soundFx.playClick(700)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>اتصال مباشر بالمكتب</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Specialized Family Law Pillars */}
      <div>
        <div className="text-center mb-10">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            خدمات متخصصة تراعي السرعة وتضمن الكرامة والحقوق
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            إجراءات سريعة أمام دوائر الأسرة والتسوية الودية، وتفادي الإطالة والمماطلة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
              <ScaleIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">دعاوى الخلع والطلاق</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              إنهاء إجراءات الخلع أو الطلاق للضرر والشقاق واستحكام الخلاف بأقصر مدة قضائية ممكنة.
            </p>
            <div className="mt-4 pt-3 border-t border-[#231b46] text-[11px] text-amber-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>إنجاز سريع وسرية مطلقة</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">قضايا النفقات والأجور</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              تحصيل نفقات الصغار، الزوجية، العدة والمتعة، ومصاريف العلاج والتعليم عن طريق التحريات الدقيقة.
            </p>
            <div className="mt-4 pt-3 border-t border-[#231b46] text-[11px] text-amber-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>إثبات الدخل الحقيقي للزوج</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
              <UsersIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">الحضانة والرؤية والولاية</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              حماية حق الأم في حضانة صغارها، استصدار الولاية التعليمية وأوامر المنع من السفر العاجلة.
            </p>
            <div className="mt-4 pt-3 border-t border-[#231b46] text-[11px] text-amber-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>مصلحة الصغير الفضلى أولاً</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
              <LockIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">قائمة المنقولات والمؤخر</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              دعاوى تبديد المنقولات الزوجية الجنائية والمدنية، وتحصيل مؤخر الصداق واسترداد كامل الحقوق.
            </p>
            <div className="mt-4 pt-3 border-t border-[#231b46] text-[11px] text-amber-300 font-semibold flex items-center gap-1">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>حفظ حقوق العفش والمصوغات</span>
            </div>
          </div>

        </div>
      </div>

      {/* Instant 60-Second Case Diagnostic Widget */}
      <div className="max-w-3xl mx-auto glass-panel p-8 rounded-3xl border border-amber-500/30 shadow-2xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-2">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>تشخيص سريع لموقفك القانوني في 60 ثانية</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-white">
            اعرف موقفك وحقوقك القانونية قبل اتخاذ أي خطوة
          </h4>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2Icon className="w-8 h-8" />
            </div>
            <h5 className="text-lg font-bold text-white">
              تم تسجيل طلب التشخيص العاجل
            </h5>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              سيتواصل معك مستشار قضايا الأسرة مباشرة عبر الواتساب على رقم ({phone}) لتقديم الرأي القانوني في سرية كاملة.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/201000000000?text=أهلاً%20مؤسسة%20كمال%20أبو%20علي،%20لقد%20أكملت%20تشخيص%20قضية%20(${caseType})%20وأريد%20الرد%20الفوري`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
              >
                <MessageCircleIcon className="w-4 h-4" />
                <span>فتح المحادثة على واتساب الآن</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleAssessmentSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                1. ما هو نوع القضية أو الاستشارة المطلوبة؟
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {["طلاق أو خلع", "نفقات ومصاريف", "حضانة ورؤية", "قائمة منقولات"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      soundFx.playClick(600);
                      setCaseType(item);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      caseType === item
                        ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                        : "bg-[#090714] text-slate-300 border border-[#231b46] hover:border-amber-500/40"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                2. مدى الاستعجال المطلوب:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "مستعجل جداً (خلال 24 ساعة)",
                  "أريد معرفة الإجراءات والتكاليف أولاً",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      soundFx.playClick(650);
                      setUrgency(item);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      urgency === item
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/50"
                        : "bg-[#090714] text-slate-300 border border-[#231b46] hover:border-amber-500/40"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                3. رقم الهاتف أو الواتساب للتواصل الآمن والسري *
              </label>
              <input
                type="tel"
                required
                placeholder="010XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <LockIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>نلتزم بالحفاظ الكامل على سرية الاسم والمعلومات وفق ميثاق الشرف القانوني.</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>احصل على الرأي القانوني السري الآن</span>
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
