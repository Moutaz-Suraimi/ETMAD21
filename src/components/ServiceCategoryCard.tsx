import { ChevronLeft } from "lucide-react";
import type { ServiceCategory } from "@/data/services";

type Props = {
  category: ServiceCategory;
  onOpen: (id: string) => void;
};

export function ServiceCategoryCard({ category, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={() => onOpen(category.id)}
      className="group flex flex-col overflow-hidden rounded-3xl bg-card text-right shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
    >
      {/* Logo area */}
      <div className="flex h-40 items-center justify-center bg-mint/40 p-4">
        <div className="flex h-24 w-32 items-center justify-center rounded-2xl bg-white p-3 shadow-card">
          <img
            src={category.logo}
            alt={category.name}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-extrabold text-foreground">{category.name}</h3>
        <p className="text-sm text-muted-foreground">{category.tagline}</p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs font-medium text-muted-foreground">
            {category.subServices.length} خدمة فرعية
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-transform group-hover:-translate-x-1">
            <ChevronLeft className="h-4 w-4" />
            عرض التفاصيل
          </span>
        </div>
      </div>
    </button>
  );
}
