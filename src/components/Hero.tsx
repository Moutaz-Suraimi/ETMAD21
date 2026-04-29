import { ArrowDown, Award, ShieldCheck, Zap } from "lucide-react";
import { serviceLogos } from "@/data/services";
import logoEitmad from "@/assets/logo-eitmad-main.jpg";

const orbitIcons = [
  { label: "قوى", logo: serviceLogos.qiwa },
  { label: "بلدي", logo: serviceLogos.balady },
  { label: "مدد", logo: serviceLogos.mudad },
  { label: "تجارة", logo: serviceLogos.moc },
  { label: "جوازات", logo: serviceLogos.passports },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.6 0.13 175 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6 0.13 175 / 0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Availability badge */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-sm font-medium text-teal-deep shadow-soft backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-whatsapp" />
            </span>
            متاحون الآن – رد فوري عبر واتساب
          </div>
        </div>

        {/* Orbit animation */}
        <div className="mb-10 flex justify-center">
          <div
            className="relative h-[22rem] w-[22rem] md:h-[28rem] md:w-[28rem]"
            style={{ ["--orbit-r" as never]: "min(48%, 200px)" }}
          >
            {/* Orbit ring — single circular path */}
            <div className="absolute inset-6 rounded-full border border-dashed border-primary/30 animate-pulse-ring" />
            <div className="absolute inset-20 rounded-full border border-dashed border-primary/15" />

            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-32 w-32 animate-float-slow md:h-40 md:w-40">
                <div className="absolute inset-0 rounded-3xl bg-gradient-teal opacity-30 blur-2xl" />
                <img
                  src={logoEitmad}
                  alt="إعتماد"
                  className="relative h-full w-full rounded-3xl object-cover shadow-float"
                />
              </div>
            </div>

            {/* All 5 icons evenly distributed on one orbit (72° apart) */}
            <div className="absolute inset-0 animate-spin-slow">
              {orbitIcons.map((icon, i) => {
                const angle = (i * 360) / orbitIcons.length;
                return (
                  <div
                    key={icon.label}
                    className="absolute left-1/2 top-1/2 h-0 w-0"
                    style={{ transform: `rotate(${angle}deg) translateY(calc(-1 * var(--orbit-r)))` }}
                  >
                    <div
                      className="animate-spin-slow-reverse"
                      style={{ transform: `translate(-50%, -50%) rotate(${-angle}deg)` }}
                    >
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card p-2 shadow-card animate-pulse-soft md:h-16 md:w-16"
                        title={icon.label}
                      >
                        <img src={icon.logo} alt={icon.label} className="h-full w-full object-contain" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-black text-gradient-teal md:text-6xl">إعتماد</h1>
          <h2 className="mt-2 text-2xl font-bold text-teal-deep md:text-3xl">للتعقيب والخدمات العامة</h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            نتولى معاملاتك الحكومية بسرعة واحترافية – قوى، التجارة، مدد، بلدي، الجوازات
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-8 py-3.5 text-base font-bold text-primary-foreground shadow-float transition-all hover:scale-105 hover:shadow-glow"
            >
              استعرض الخدمات
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { icon: Zap, title: "خلال ساعات", desc: "إنجاز سريع" },
            { icon: ShieldCheck, title: "100%", desc: "موثوق" },
            { icon: Award, title: "+10 سنوات", desc: "خبرة" },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col items-center gap-2 rounded-2xl bg-card/80 p-5 text-center shadow-soft backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-teal-deep transition-colors group-hover:bg-gradient-teal group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-extrabold text-foreground">{title}</div>
              <div className="text-sm text-muted-foreground">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
