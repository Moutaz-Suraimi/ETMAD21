import { MessageCircle, Menu } from "lucide-react";
import logoEitmad from "@/assets/logo-eitmad-main.jpg";

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 py-3 md:px-8 md:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-card/80 px-4 py-3 shadow-soft backdrop-blur-lg md:px-6">
        {/* Logo on the right (RTL) */}
        <div className="flex items-center gap-3">
          <img src={logoEitmad} alt="إعتماد" className="h-11 w-11 rounded-xl object-cover shadow-glow" />
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-teal-deep leading-none">إعتماد</span>
            <span className="text-[10px] text-muted-foreground leading-tight">للتعقيب والخدمات العامة</span>
          </div>
        </div>

        {/* WhatsApp + Menu on the left */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/966598795336"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-bold text-white shadow-soft transition-all hover:scale-105 hover:shadow-float"
          >
            <MessageCircle className="h-4 w-4" fill="currentColor" />
            <span>واتساب</span>
          </a>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-accent md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
