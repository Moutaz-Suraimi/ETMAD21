import { X, ArrowLeft, Share2, MessageCircle, Lightbulb, Copy, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import type { ServiceCategory } from "@/data/services";

type Props = {
  category: ServiceCategory | null;
  onClose: () => void;
};

type PendingSub = { title: string; description: string };

export function SubServiceDialog({ category, onClose }: Props) {
  const [tone, setTone] = useState<"formal" | "short">("formal");
  const [confirmSub, setConfirmSub] = useState<PendingSub | null>(null);
  const [confirmTone, setConfirmTone] = useState<"formal" | "short">("formal");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (category) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setConfirmSub(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [category]);

  if (!category) return null;

  const buildMessage = (title: string, description: string, t: "formal" | "short") =>
    t === "formal"
      ? `السلام عليكم ورحمة الله وبركاته 👋\n\nأرغب بالاستفسار عن الخدمة التالية من *${category.name}*:\n• الخدمة الرئيسية: ${category.name}\n• الخدمة الفرعية: ${title}\n• الوصف: ${description}`
      : `مرحبا، أبي خدمة: ${title} (${category.name})`;

  const waLink = (msg: string) =>
    `https://wa.me/966598795336?text=${encodeURIComponent(msg)}`;

  const previewMsg = confirmSub
    ? buildMessage(confirmSub.title, confirmSub.description, confirmTone)
    : "";

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/40 backdrop-blur-sm md:items-center md:p-6">
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl bg-background shadow-float md:rounded-3xl">
        {/* Header gradient */}
        <div className="relative bg-gradient-header p-6 text-white md:p-8">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
          >
            <X className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/25"
          >
            رجوع <ArrowLeft className="h-3.5 w-3.5" />
          </button>

          <div className="mt-10 flex items-start justify-between gap-4">
            <div className="flex-1 text-right">
              <h2 className="text-2xl font-black md:text-3xl">{category.name}</h2>
              <p className="mt-1.5 text-sm text-white/80 md:text-base">{category.tagline}</p>

              <div className="mt-5 flex items-center justify-end gap-2">
                <div className="inline-flex items-center rounded-full bg-white/15 p-1 backdrop-blur">
                  <button
                    onClick={() => setTone("short")}
                    className={`rounded-full px-4 py-1 text-xs font-bold transition-all ${
                      tone === "short" ? "bg-white text-teal-deep" : "text-white/80"
                    }`}
                  >
                    مختصرة
                  </button>
                  <button
                    onClick={() => setTone("formal")}
                    className={`rounded-full px-4 py-1 text-xs font-bold transition-all ${
                      tone === "formal" ? "bg-white text-teal-deep" : "text-white/80"
                    }`}
                  >
                    رسمية
                  </button>
                </div>
                <span className="text-xs text-white/80">:صيغة الرسالة</span>
              </div>
            </div>

            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-card">
              <img src={category.logo} alt={category.name} className="h-full w-full object-contain" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{category.subServices.length} خدمة</span>
            <h3 className="text-lg font-extrabold text-foreground md:text-xl">الخدمات الفرعية</h3>
          </div>

          <div className="mb-5 flex items-center gap-2 rounded-xl bg-mint/60 p-3.5 text-right text-sm text-teal-deep">
            <span className="flex-1">اضغط على أي خدمة لإرسال طلبك عبر واتساب، أو استخدم زر المشاركة لنسخ الرابط</span>
            <Lightbulb className="h-4 w-4 flex-shrink-0 text-gold" />
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {category.subServices.map((sub) => (
              <button
                key={sub.title}
                type="button"
                onClick={() => {
                  setConfirmTone(tone);
                  setConfirmSub({ title: sub.title, description: sub.description });
                }}
                className="group flex items-center gap-3 rounded-2xl bg-card p-4 text-right shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard?.writeText(`${window.location.href}#${encodeURIComponent(sub.title)}`);
                  }}
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-teal-deep"
                  aria-label="مشاركة"
                >
                  <Share2 className="h-4 w-4" />
                </span>

                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <h4 className="font-extrabold text-foreground">{sub.title}</h4>
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white p-0.5 shadow-soft">
                      <img src={category.logo} alt="" className="h-full w-full object-contain" />
                    </div>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{sub.description}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-whatsapp">
                    اطلب عبر واتساب
                    <MessageCircle className="h-3.5 w-3.5" fill="currentColor" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 rounded-2xl bg-mint/40 p-5 text-center">
            <p className="text-sm font-medium text-teal-deep">لم تجد ما تبحث عنه؟ تواصل معنا مباشرة</p>
            <a
              href="https://wa.me/966598795336"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-2.5 text-sm font-bold text-white shadow-soft transition-all hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" />
              استشارة مجانية
            </a>
          </div>
        </div>
      </div>

      {/* Confirmation modal — matches reference screenshot */}
      {confirmSub && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm"
          onClick={() => setConfirmSub(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-3xl bg-background shadow-float animate-scale-in"
          >
            {/* Header */}
            <div className="relative bg-gradient-header p-6 text-white">
              <button
                onClick={() => setConfirmSub(null)}
                className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30"
                aria-label="إغلاق"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="pr-2 text-right">
                <h3 className="text-xl font-black md:text-2xl">تأكيد إرسال الطلب</h3>
                <p className="mt-1 text-sm text-white/80">سيتم فتح واتساب برسالة جاهزة</p>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 md:p-6">
              {/* Info banner */}
              <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-mint/50 p-4 text-right text-sm text-teal-deep">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="leading-relaxed">
                  عند الضغط على إرسال، سيتم فتح تطبيق واتساب تلقائياً مع الرسالة الجاهزة أدناه — كل ما عليك هو الضغط على زر الإرسال داخل واتساب.
                </p>
              </div>

              {/* Tone switcher */}
              <div className="mt-5">
                <h4 className="mb-2 text-right text-sm font-extrabold text-foreground">صيغة الرسالة</h4>
                <div className="grid grid-cols-2 gap-2 rounded-2xl bg-mint/40 p-1.5">
                  <button
                    onClick={() => setConfirmTone("formal")}
                    className={`rounded-xl py-3 text-center transition-all ${
                      confirmTone === "formal"
                        ? "bg-card text-teal-deep shadow-soft"
                        : "text-muted-foreground"
                    }`}
                  >
                    <div className="text-sm font-extrabold">رسمية</div>
                    <div className="mt-0.5 text-[11px] opacity-70">مفضّلة</div>
                  </button>
                  <button
                    onClick={() => setConfirmTone("short")}
                    className={`rounded-xl py-3 text-center transition-all ${
                      confirmTone === "short"
                        ? "bg-card text-teal-deep shadow-soft"
                        : "text-muted-foreground"
                    }`}
                  >
                    <div className="text-sm font-extrabold">مختصرة</div>
                    <div className="mt-0.5 text-[11px] opacity-70">سريعة</div>
                  </button>
                </div>
              </div>

              {/* Preview */}
              <div className="mt-5">
                <h4 className="mb-2 text-right text-sm font-extrabold text-foreground">معاينة الرسالة</h4>
                <div className="rounded-2xl border-r-4 border-primary bg-mint/40 p-4 text-right text-sm leading-relaxed text-foreground whitespace-pre-line">
                  {previewMsg}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col-reverse items-center justify-between gap-3 md:flex-row">
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(waLink(previewMsg));
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-deep transition-opacity hover:opacity-80"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? "تم النسخ" : "نسخ الرابط"}
                </button>

                <a
                  href={waLink(previewMsg)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setConfirmSub(null)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-extrabold text-white shadow-float transition-all hover:scale-[1.02] md:w-auto"
                >
                  <MessageCircle className="h-4 w-4" fill="currentColor" />
                  فتح واتساب وإرسال
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
