"use client";

import React, { useState } from "react";
import {
  BuildingIcon,
  ShieldCheckIcon,
  FileTextIcon,
  CheckCircle2Icon,
  SparklesIcon,
  AwardIcon,
  ArrowLeftIcon,
  LockIcon,
} from "./Icons";
import { soundFx } from "./SoundEffects";

interface CorporateTrackProps {
  onOpenConsultation: () => void;
}

export default function CorporateTrack({ onOpenConsultation }: CorporateTrackProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    position: "مدير تنفيذي / CEO",
    phone: "",
    companySize: "10-50 موظف (متوسطة)",
    serviceType: "مراجعة وصياغة عقود تجارية",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-16">
      
      {/* Track Header & Strategy Context */}
      <div className="glass-panel-cyan p-8 rounded-3xl border border-sky-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold mb-3">
              <BuildingIcon className="w-3.5 h-3.5" />
              <span>الحملة الأولى (سكة الشركات والمصانع) • صفحة aboalilawfirm.com/corporate</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              حماية وتأسيس الشركات وصياغة العقود التجارية
            </h3>
            <p className="text-slate-300 text-sm mt-2 max-w-2xl">
              تستهدف أصحاب البيزنس والشركاء ومديري المصانع. التركيز هنا على حماية الأرباح، منع الثغرات، والاشتراكات السنوية الثابتة (شغل البطة السمينة).
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="text-xs text-slate-400">نموذج التكلفة المستهدف:</span>
            <span className="text-xl font-black text-sky-400">عقود استشارات سنوية + كبار العملاء</span>
            <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              High Lifetime Value (LTV)
            </span>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars of Corporate Legal Protection */}
      <div>
        <div className="text-center mb-10">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            الركائز القانونية لحماية وتوسيع استثماراتك
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            صممت خصيصاً لتفادي النزاعات ومحاصرة أي مطامع قبل أن تكلف الشركة ملايين الجنيهات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 hover:border-sky-500/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileTextIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">صياغة وتدقيق العقود</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              تحصين عقود التوريد، التوزيع، الشراكة، والتوكيلات ببند تحكيم وشروط جزائية لا يمكن الطعن عليها.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1f193d] flex items-center gap-1.5 text-[11px] text-sky-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-sky-400" />
              <span>إغلاق 100% من الثغرات</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 hover:border-sky-500/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BuildingIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">تأسيس المصانع والشركات</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              استخراج السجل التجاري، البطاقة الضريبية، تراخيص التنمية الصناعية، وتأسيس شركات الأموال والأشخاص.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1f193d] flex items-center gap-1.5 text-[11px] text-indigo-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-indigo-400" />
              <span>كيان قانوني متين من اليوم الأول</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 hover:border-sky-500/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">القضايا والنزاعات العمالية</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              لوائح عمل داخلية معتمدة من مكتب العمل، عقود موظفين مؤمنة تمنع الابتزاز العمالي والقضايا الكيدية.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1f193d] flex items-center gap-1.5 text-[11px] text-purple-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-purple-400" />
              <span>حماية سر العمل والملكية الفكرية</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 hover:border-sky-500/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <AwardIcon className="w-6 h-6" />
            </div>
            <h5 className="text-base font-bold text-white mb-2">عقود الاستشارة السنوية</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              محاميك الخاص معك في كل مفاوضة واجتماع مجلس إدارة، وحضور جلسات المحاكم الاقتصادية دون فواتير مفاجئة.
            </p>
            <div className="mt-4 pt-3 border-t border-[#1f193d] flex items-center gap-1.5 text-[11px] text-emerald-300 font-semibold">
              <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400" />
              <span>راحة بال واستقرار تنفيذي كامل</span>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive High-Ticket Corporate Lead Form (Section 2 & 3 in Proposal) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Value Proposition Box */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-[#2e235a] relative">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
            <SparklesIcon className="w-5 h-5" />
          </div>
          <h4 className="text-2xl font-black text-white mb-3">
            جلسة تدقيق قانوني مجانية لأول 3 عقود في شركتك
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            سجل بيانات مؤسستك وسيقوم المستشار كمال أبو علي أو كبير مستشاري قطاع الشركات بالاتصال بك لترتيب جلسة فحص داخل مقرنا أو عبر الفيديو.
          </p>

          <ul className="space-y-3 text-xs text-slate-300 mb-8">
            <li className="flex items-center gap-2">
              <CheckCircle2Icon className="w-4 h-4 text-sky-400 shrink-0" />
              <span>فحص الثغرات المالية والقانونية التي تستنزف أرباحك</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2Icon className="w-4 h-4 text-sky-400 shrink-0" />
              <span>مراجعة مدى التوافق مع أحدث قوانين الاستثمار والعمل المصرية</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2Icon className="w-4 h-4 text-sky-400 shrink-0" />
              <span>اتفاقية عدم إفصاح رسمية (NDA) قبل تسليم أي أوراق</span>
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-[#090714] border border-[#211a43] flex items-center gap-3">
            <LockIcon className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-[11px] text-slate-400">
              <strong className="text-white block font-bold">حماية وسرية تامة</strong>
              جميع الوثائق والبيانات مشفرة ولا يتم مشاركتها إطلاقاً مع أي طرف ثالث.
            </div>
          </div>
        </div>

        {/* The Corporate Lead Generation Form */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-sky-500/30">
          <h4 className="text-xl font-black text-white mb-2">
            طلب جلسة استشارة وفحص عقود المؤسسة
          </h4>
          <p className="text-xs text-slate-400 mb-6">
            يرجى ملء بيانات شركتك وسنتواصل معك خلال أقل من ساعتي عمل.
          </p>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2Icon className="w-8 h-8" />
              </div>
              <h5 className="text-xl font-bold text-white">
                تم استلام طلب شركتك بنجاح!
              </h5>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                يقوم فريق المكتب بمراجعة البيانات، وسيقوم المستشار القانوني بالاتصال برقم ({formData.phone || "المسجل"}) لتأكيد موعد الجلسة.
              </p>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setSubmitted(false);
                }}
                className="mt-4 px-6 py-2 rounded-xl text-xs font-bold text-sky-300 border border-sky-500/30 hover:bg-sky-500/10 transition-all cursor-pointer"
              >
                إرسال استفسار إضافي
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    اسم الشركة / المصنع *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: شركة الأمل للصناعات الهندسية"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    اسم المفوض أو المسؤول *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: أ. محمد عبد الرحمن"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    المسمى الوظيفي
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="رئيس مجلس الإدارة">رئيس مجلس الإدارة / Partner</option>
                    <option value="مدير تنفيذي / CEO">مدير تنفيذي / CEO</option>
                    <option value="مدير عام / GM">مدير عام / GM</option>
                    <option value="مدير الشؤون القانونية">مدير الشؤون القانونية</option>
                    <option value="مؤسس / صاحب البيزنس">مؤسس / صاحب البيزنس</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    رقم الهاتف المباشر (واتساب) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    حجم الشركة الحالي
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="أقل من 10 موظفين (ناشئة)">أقل من 10 موظفين (ناشئة)</option>
                    <option value="10-50 موظف (متوسطة)">10 - 50 موظف (متوسطة)</option>
                    <option value="50-200 موظف (كبيرة)">50 - 200 موظف (كبيرة)</option>
                    <option value="أكثر من 200 موظف (مصنع / مجموعة)">أكثر من 200 موظف (مصنع / مجموعة)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    المشكلة أو الخدمة المطلوبة
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="مراجعة وصياغة عقود تجارية">مراجعة وصياغة عقود تجارية</option>
                    <option value="نزاع قضائي أو محكمة اقتصادية">نزاع قضائي أو محكمة اقتصادية</option>
                    <option value="قضايا عمالية ومكتب العمل">قضايا عمالية ومكتب العمل</option>
                    <option value="تأسيس شركة أو مصنع جديد">تأسيس شركة أو مصنع جديد</option>
                    <option value="طلب استشارة سنوية (Retainer)">طلب استشارة سنوية (Retainer)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  تفاصيل سريعة عن المشكلة (اختياري)
                </label>
                <textarea
                  rows={3}
                  placeholder="اكتب نبذة مختصرة عن النزاع أو التحدي الحالي..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#090714] border border-[#261f4d] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>تأكيد طلب جلسة فحص العقود في المكتب</span>
                <ArrowLeftIcon className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
