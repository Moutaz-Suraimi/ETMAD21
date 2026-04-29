import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PopularServices } from "@/components/PopularServices";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "إعتماد للتعقيب والخدمات العامة | إنجاز معاملاتك الحكومية" },
      {
        name: "description",
        content:
          "إعتماد — مكتب تعقيب محترف لإنجاز معاملات قوى، بلدي، مدد، التجارة، والجوازات بسرعة واحترافية. تواصل عبر واتساب.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <PopularServices />
        <ServicesSection />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
