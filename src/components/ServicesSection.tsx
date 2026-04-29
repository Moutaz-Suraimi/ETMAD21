import { useState } from "react";
import { services } from "@/data/services";
import { ServiceCategoryCard } from "./ServiceCategoryCard";
import { SubServiceDialog } from "./SubServiceDialog";

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = services.find((s) => s.id === activeId) ?? null;

  return (
    <section id="services" className="bg-gradient-hero py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-card/80 px-4 py-1.5 text-sm font-bold text-teal-deep backdrop-blur">
            خدماتنا
          </div>
          <h2 className="mt-4 text-3xl font-black text-foreground md:text-5xl">خدمات شاملة بين يديك</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">اختر الفئة المناسبة لمعاملتك واترك الباقي علينا</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((category) => (
            <ServiceCategoryCard key={category.id} category={category} onOpen={setActiveId} />
          ))}
        </div>
      </div>

      <SubServiceDialog category={active} onClose={() => setActiveId(null)} />
    </section>
  );
}
