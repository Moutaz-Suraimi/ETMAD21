import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/966598795336"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-float transition-transform hover:scale-110"
      aria-label="تواصل عبر واتساب"
    >
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[11px] font-bold text-white">
        1
      </span>
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
      <MessageCircle className="relative h-6 w-6" fill="currentColor" />
    </a>
  );
}
