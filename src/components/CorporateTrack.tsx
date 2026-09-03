"use client";

import React, { useState } from "react";
import {
  BuildingIcon,
  CheckCircle2Icon,
  SparklesIcon,
  AwardIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

export default function CorporateTrack() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    developerName: "",
    projectType: "كومباوند سكني مغلق",
    phone: "",
    approxArea: "5,000 - 20,000 متر مربع",
    needsDesign: "تصميم وتنفيذ متكامل",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/201220582340?text=${encodeURIComponent(
    `أهلاً م. وديع، بخصوص مشروع (${formData.projectName || "تطوير عقاري"})، مساحة (${formData.approxArea})، نحتاج دراسة عرض أسعار وسابقة الأعمال.`
  )}`;

  return (
    <div className="py-12 space-y-16">
      
      {/* Track Header */}
      <div className="glass-panel-navy p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-3">
              <BuildingIcon className="w-3.5 h-3.5" />
              <span>المسار الثاني: الشركات والمطورين العقاريين • High LTV Track</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              عقود المساحات الكبرى، الملاعب، والكومباوندات
            </h3>
            <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
              كومباوندات ومطورين عقاريين محتاجين لاند سكيب لمساحات واسعة ومستمرة، دي فرصة ذهبية لعلاقة عمل وعقود سنوية طويلة المدى بأرباح مستدامة.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="text-xs text-slate-400">طبيعة التعاقدات المستهدفة:</span>
            <span className="text-xl font-black text-cyan-300">عقود ملايين + استمرارية سنوية</span>
            <span className="text-[11px] text-teal-300 font-semibold bg-teal-500/10 px-2.5 py-1 rounded-lg border border-teal-500/25">
              High Lifetime Value (LTV)
            </span>
          </div>
        </div>
      </div>

      {/* 4 Pillars for Commercial / Developers */}
      <div>
        <div className="text-center mb-10">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            قدرات التنفيذ للمشاريع الكبرى والتطوير العقاري
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            جاهزية كاملة بالمعدات، المهندسين الميدانيين، وتوريد الخامات بأعلى كود بناء.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl border border-[#24344d] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
              <BuildingIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">لاندسكيب الكومباوندات</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              تشجير وتخطيط مساحات خضراء مفتوحة ترفع القيمة التسويقية للمشروع السكني وتسرع وتيرة بيع الوحدات.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] flex items-center gap-1.5 text-[11px] text-cyan-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-cyan-400" />
              <span>تسليم وفق الجدول الزمني للإنشاءات</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#24344d] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-4">
              <SparklesIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">إنشاء الملاعب والنوادي</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              ملاعب بادل، ملاعب كرة قدم معتمدة بنجيل صناعي وهيدروليكي وطبقات امتصاص صدمات بأعلى مقاييس الفيفا.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] flex items-center gap-1.5 text-[11px] text-teal-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
              <span>عمر افتراضي طويل وضمان معتمد</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#24344d] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">شبكات الري الذكي</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              محطات تحكم مركزية، ري بالتنقيط والرشاشات الأوتوماتيكية لتوفير 40% من استهلاك المياه للمساحات الشاسعة.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] flex items-center gap-1.5 text-[11px] text-indigo-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-indigo-400" />
              <span>وفر تشغيلي وصيانة مستدامة</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#24344d] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
              <AwardIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">عقود الصيانة السنوية</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              فرق دورية لمتابعة التسميد، القص، ومكافحة الآفات للحفاظ على ألق المشروع وخضرته طوال فصول السنة.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1d2d44] flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>راحة بال للمطور وإدارة الكومباوند</span>
            </div>
          </div>

        </div>
      </div>

      {/* Corporate B2B Lead Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-[#24344d]">
          <span className="text-xs font-bold text-cyan-400 block mb-2">🏢 طلب بروفايل الشركات</span>
          <h4 className="text-2xl font-black text-white mb-3">
            احصل على دراسة تفصيلية وعرض فني متكامل لمشروعك
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            سجل بيانات مشروعك أو الكومباوند وسيقوم م. وديع بإرسال سابقة الأعمال الفندقية والسكنية وترتيب اجتماع فني مباشر.
          </p>

          <ul className="space-y-3 text-xs text-slate-300 mb-6">
            <li className="flex items-center gap-2">
              <CheckCircle2Icon className="w-4 h-4 text-teal-400 shrink-0" />
              <span>مقايسات كميات تقديرية (BoQ) مسبقة مجاناً</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2Icon className="w-4 h-4 text-teal-400 shrink-0" />
              <span>مخططات 3D ورندر سينمائي قبل وضع أول شتلة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2Icon className="w-4 h-4 text-teal-400 shrink-0" />
              <span>فيديوهات 4K لمشاريع تم تسليمها بالفعل</span>
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-[#09121d] border border-[#1b2a3e] text-xs text-slate-400">
            📞 تواصل هاتفي مباشر مع م. وديع: <strong className="text-teal-300 font-mono">+20 122 058 2340</strong>
          </div>
        </div>

        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-cyan-500/30">
          <h4 className="text-xl font-black text-white mb-2">
            تسجيل بيانات المشروع لطلب المقايسة
          </h4>
          <p className="text-xs text-slate-400 mb-6">
            بياناتك سرية وسيتم استخدامها فقط لإعداد الدراسة الفنية.
          </p>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2Icon className="w-8 h-8" />
              </div>
              <h5 className="text-xl font-bold text-white">
                تم استلام بيانات مشروع ({formData.projectName}) بنجاح!
              </h5>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                جاري إعداد سابقة الأعمال والعرض الفني وسيتواصل م. وديع معك على رقم ({formData.phone}).
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
                >
                  <span>متابعة المحادثة على واتساب الآن 💬</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    اسم المشروع / الكومباوند *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: مشروع مروج السكني"
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09111c] border border-[#24344d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    الشركة المطورة / اسم المسؤول *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: شركة النماء للتطوير العقاري"
                    value={formData.developerName}
                    onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09111c] border border-[#24344d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    نوع المشروع
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09111c] border border-[#24344d] text-sm text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="كومباوند سكني مغلق">كومباوند سكني مغلق</option>
                    <option value="نادي رياضي أو ملاعب بادل">نادي رياضي أو ملاعب بادل</option>
                    <option value="قرية سياحية أو منتجع فندقي">قرية سياحية أو منتجع فندقي</option>
                    <option value="مبنى إداري أو مقر شركة">مبنى إداري أو مقر شركة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    رقم الهاتف (واتساب) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="012XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09111c] border border-[#24344d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  المساحة التقريبية للمشروع
                </label>
                <select
                  value={formData.approxArea}
                  onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#09111c] border border-[#24344d] text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="أقل من 2,000 متر مربع">أقل من 2,000 متر مربع</option>
                  <option value="2,000 - 5,000 متر مربع">2,000 - 5,000 متر مربع</option>
                  <option value="5,000 - 20,000 متر مربع">5,000 - 20,000 متر مربع</option>
                  <option value="أكثر من 20,000 متر مربع (مشاريع كبرى)">أكثر من 20,000 متر مربع (مشاريع كبرى)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-cyan-500 via-teal-600 to-[#1E6E78] text-white shadow-lg shadow-cyan-700/30 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>طلب سابقة الأعمال والمقايسة المبدئية</span>
                <ArrowLeftIcon className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
