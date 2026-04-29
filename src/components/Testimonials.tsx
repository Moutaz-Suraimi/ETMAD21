import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "أحمد العتيبي",
    initial: "أ",
    text: "خدمة ممتازة وسرعة في إنجاز المعاملات، أنصح بالتعامل معهم بكل ثقة.",
    rating: 5,
  },
  {
    name: "فاطمة القحطاني",
    initial: "ف",
    text: "تعاملهم احترافي جداً. أنجزوا معاملتي في وقت قياسي والحمد لله.",
    rating: 5,
  },
  {
    name: "خالد الشمري",
    initial: "خ",
    text: "أفضل مكتب تعقيب تعاملت معه — محترف ومتعاون وأسعاره مناسبة.",
    rating: 5,
  },
  {
    name: "نورة السالم",
    initial: "ن",
    text: "رد فوري على واتساب وخدمة بجودة عالية. شكراً لفريق إعتماد.",
    rating: 5,
  },
  {
    name: "محمد الحربي",
    initial: "م",
    text: "أنهوا إجراءات قوى والجوازات في يومين فقط. تجربة رائعة!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-mint/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-card/80 px-4 py-1.5 text-sm font-bold text-teal-deep backdrop-blur">
            شهادات حقيقية
          </div>
          <h2 className="mt-4 text-3xl font-black text-gradient-teal md:text-5xl">آراء عملائنا</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            ثقة عملائنا هي أساس نجاحنا — اقرأ ماذا يقولون عن خدماتنا
          </p>
        </div>

        <div className="group relative overflow-hidden">
          <div
            className="animate-marquee flex w-max gap-5"
            style={{ animationDuration: "40s" }}
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <article
                key={`${t.name}-${idx}`}
                className="flex w-[320px] flex-shrink-0 flex-col gap-4 rounded-3xl bg-card p-6 text-right shadow-soft transition-shadow hover:shadow-card md:w-[360px]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-teal-light text-teal-light" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>

                <p className="flex-1 text-sm leading-relaxed text-foreground">"{t.text}"</p>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-teal font-extrabold text-primary-foreground">
                    {t.initial}
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5 font-extrabold text-foreground">
                      {t.name}
                      <BadgeCheck className="h-4 w-4 fill-teal-light text-card" />
                    </div>
                    <div className="text-xs text-muted-foreground">عميل موثّق</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
