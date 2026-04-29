import { Briefcase, Building2, Store, Wallet, BookUser, LucideIcon } from "lucide-react";
// Note: uploaded file names didn't match their contents — remap here.
// logo-balady.jpg → Saudi Business Center (MOC)
// logo-moc.jpg → Balady palm
// logo-qiwa.jpg ↔ logo-passports.jpg were swapped
import logoQiwa from "@/assets/logo-passports.jpg";
import logoMoc from "@/assets/logo-balady.jpg";
import logoBalady from "@/assets/logo-moc.jpg";
import logoMudad from "@/assets/logo-mudad.jpg";
import logoPassports from "@/assets/logo-qiwa.jpg";

export type SubService = {
  title: string;
  description: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  tagline: string;
  brand: string;
  brandColor: string;
  logo: string;
  icon: LucideIcon;
  subServices: SubService[];
};

export const serviceLogos = {
  qiwa: logoQiwa,
  moc: logoMoc,
  balady: logoBalady,
  mudad: logoMudad,
  passports: logoPassports,
};

export const popularServices = [
  "سكليف أعذار طبية",
  "فحوصات طبية معتمدة",
  "إقامة + جوازات + هنقر ستيشن + رخصة القيادة",
  "ختم دفتر تطعيمات الأطفال",
  "لقاحات كوفيد-19 وغيرها",
  "شهادات صحية بلدي",
  "تجديد استمارة بدون فحص",
];

export const services: ServiceCategory[] = [
  {
    id: "qiwa",
    name: "منصة قوى",
    tagline: "جميع خدمات منصة قوى وحل مشاكلها باحترافية",
    brand: "QIWA",
    brandColor: "#1e3a8a",
    icon: Briefcase,
    logo: logoQiwa,
    subServices: [
      { title: "تسجيل منشأة جديدة في منصة قوى", description: "تأسيس وتسجيل المنشآت الجديدة في المنصة" },
      { title: "إصدار تأشيرات عمل", description: "استخراج تأشيرات العمل للمنشآت" },
      { title: "نقل موظف وافد", description: "إجراءات نقل خدمات الموظفين الوافدين" },
      { title: "توظيف سعودي (نطاقات)", description: "رفع نسبة التوطين وتحسين النطاق" },
      { title: "إصدار وتجديد رخص العمل", description: "إصدار وتجديد رخص العمل بسرعة" },
      { title: "تصحيح مهنة أو تغييرها", description: "تعديل المهن وتصحيحها رسمياً" },
      { title: "إدارة عقود عمل الموظفين", description: "توثيق وإدارة عقود العمل" },
      { title: "إنهاء فترة الإشعار", description: "إنهاء فترة الإشعار للموظفين" },
      { title: "إضافة مواقع المنشأة", description: "تسجيل وإضافة فروع ومواقع جديدة" },
      { title: "شطب منشأة", description: "شطب المنشآت من السجلات الرسمية" },
      { title: "فك نسبة نقل عامل", description: "فك القيود على نقل العمالة" },
      { title: "توحيد كروت العمل 100%", description: "توحيد كروت العمل بنسبة كاملة" },
      { title: "تخفيض المقابل المالي", description: "إجراءات تخفيض رسوم المقابل المالي" },
      { title: "تبديل الرصيد للنقل", description: "تبديل الرصيد لخدمات نقل العمالة" },
      { title: "من ملغي إلى تم السداد", description: "تحويل حالة الفواتير من ملغي إلى مسدد" },
      { title: "حل جميع مشاكل قوى", description: "حلول شاملة لكل مشاكل منصة قوى" },
    ],
  },
  {
    id: "moc",
    name: "المركز السعودي للأعمال ووزارة التجارة",
    tagline: "كافة خدمات السجلات التجارية والأسماء التجارية",
    brand: "SBC",
    brandColor: "#0f3a5f",
    icon: Store,
    logo: logoMoc,
    subServices: [
      { title: "إصدار سجل تجاري لمؤسسة فردية", description: "استخراج سجل تجاري جديد للمؤسسات الفردية" },
      { title: "تعديل السجل التجاري", description: "تعديل النشاط، رأس المال، العنوان، والاسم التجاري" },
      { title: "حجز الاسم التجاري لمدة 60 يوم", description: "حجز اسم تجاري بشكل رسمي" },
      { title: "الاستعلام عن حالة طلب الاسم التجاري", description: "متابعة حالة الأسماء التجارية المحجوزة" },
      { title: "طباعة إفادة تجارية", description: "إصدار وطباعة الإفادات التجارية" },
      { title: "شطب سجل تجاري لمؤسسة فردية", description: "شطب السجلات التجارية للمؤسسات" },
      { title: "نقل ملكية السجل التجاري", description: "إجراءات نقل ملكية السجلات التجارية" },
      { title: "طباعة سجل تجاري وسجل الأنشطة", description: "طباعة السجلات التجارية وسجلات الأنشطة" },
    ],
  },
  {
    id: "balady",
    name: "منصة بلدي",
    tagline: "خدمات الشهادات الصحية والرخص البلدية",
    brand: "بلدي",
    brandColor: "#2d7a3e",
    icon: Building2,
    logo: logoBalady,
    subServices: [
      { title: "إصدار شهادة صحية", description: "استخراج الشهادات الصحية للعاملين" },
      { title: "تجديد شهادة صحية", description: "تجديد الشهادات الصحية بسهولة" },
      { title: "إصدار رخصة بلدي", description: "إصدار رخص بلدية جديدة للأنشطة" },
      { title: "تجديد رخصة بلدي", description: "تجديد الرخص البلدية بسرعة" },
    ],
  },
  {
    id: "mudad",
    name: "منصة مدد",
    tagline: "الاشتراك في مدد وحل ملاحظات حماية الأجور",
    brand: "MUDAD",
    brandColor: "#1e3a8a",
    icon: Wallet,
    logo: logoMudad,
    subServices: [
      { title: "الاشتراك في منصة مدد", description: "تسجيل المنشآت في منصة مدد" },
      { title: "إزالة ملاحظات حماية الأجور 100%", description: "حل ملاحظات حماية الأجور بشكل كامل" },
    ],
  },
  {
    id: "passports",
    name: "إدارة الجوازات",
    tagline: "جميع خدمات الجوازات والإقامات والتأشيرات",
    brand: "الجوازات",
    brandColor: "#8b6914",
    icon: BookUser,
    logo: logoPassports,
    subServices: [
      { title: "مؤقت منتهي", description: "تجديد التأشيرات المؤقتة المنتهية" },
      { title: "مؤقت ساري بوكالة", description: "تجديد المؤقت الساري عن طريق وكالة" },
      { title: "إصدار إقامة كفيل كبير", description: "إصدار إقامة جديدة للكفيل البالغ" },
      { title: "تجديد إقامة كفيل كبير", description: "تجديد إقامة الكفيل البالغ" },
      { title: "إصدار إقامة كفيل طفل", description: "إصدار إقامة جديدة للطفل" },
      { title: "تجديد إقامة كفيل طفل", description: "تجديد إقامة الطفل" },
      { title: "خروج وعودة", description: "إصدار تأشيرات خروج وعودة" },
      { title: "خروج نهائي ساري", description: "إصدار خروج نهائي للتأشيرات السارية" },
      { title: "نقل معلومات جواز", description: "نقل بيانات الجواز إلى جواز جديد" },
      { title: "نقل معلومات جوازين", description: "نقل بيانات جوازين دفعة واحدة" },
      { title: "نقل مهني مربوط", description: "نقل المهن المربوطة بقيود" },
      { title: "تعديل مهن", description: "تعديل المهن في الإقامات والجوازات" },
    ],
  },
];
