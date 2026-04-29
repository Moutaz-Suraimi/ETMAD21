import logoEitmad from "@/assets/logo-eitmad-main.jpg";

export function Footer() {
  return (
    <footer className="bg-teal-deep py-8 text-center text-white/80">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-3">
          <img src={logoEitmad} alt="إعتماد" className="h-16 w-16 rounded-2xl object-cover shadow-float" />
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-white">إعتماد</span>
            <span className="text-xs">للتعقيب والخدمات العامة</span>
          </div>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
