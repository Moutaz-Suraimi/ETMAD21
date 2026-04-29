import { Phone, Clock, MessageCircle } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="bg-gradient-cta py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        {/* Text side */}
        <div className="text-right text-white">
          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            جاهزون لخدمتك
            <br />
            في أي وقت
          </h2>
          <p className="mt-4 text-white/85 md:text-lg">
            تواصل معنا مباشرة عبر واتساب وسنقوم بإنجاز معاملتك بأسرع وقت ممكن
          </p>
          <a
            href="https://wa.me/966598795336"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-teal-deep shadow-float transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" fill="currentColor" />
            تواصل عبر واتساب
          </a>
        </div>

        {/* Info cards */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 text-right text-white backdrop-blur-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-white/70">واتساب</div>
              <div dir="ltr" className="text-right font-extrabold">
                +966 59 879 5336
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 text-right text-white backdrop-blur-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
              <Clock className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-white/70">ساعات العمل</div>
              <div className="font-extrabold">السبت - الخميس | 8 ص - 10 م</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
