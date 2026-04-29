import { Rocket } from "lucide-react";
import { popularServices } from "@/data/services";

export function PopularServices() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-bold text-teal-deep">
            <Rocket className="h-4 w-4" />
            الأكثر طلباً
          </div>
          <h2 className="mt-4 text-3xl font-black text-foreground md:text-4xl">خدماتنا الأكثر طلباً</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {popularServices.map((service) => (
            <a
              key={service}
              href="https://wa.me/966598795336"
              className="group flex items-center justify-between gap-3 rounded-2xl bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="flex h-3 w-3 flex-shrink-0 animate-pulse-dot rounded-full bg-whatsapp" />
              <div className="flex flex-1 items-center justify-end gap-3">
                <span className="text-right font-bold text-foreground">{service}</span>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-teal text-primary-foreground shadow-soft">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm0 16H5V9h14v11z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
