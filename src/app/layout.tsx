import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TopWin | صنایع درب و پنجره دوجداره UPVC",
  description: "تولید و اجرای پنجره‌های دوجداره و سه‌جداره اختصاصی UPVC با بالاترین استاندارد عایق‌بندی صوتی و حرارتی، پروفیل‌های ۵ کاناله و یراق‌آلات آلمانی. عایق آرامش، انتخاب هوشمندانه.",
  keywords: [
    "تاپ وین",
    "TopWin",
    "پنجره دوجداره",
    "پنجره upvc",
    "پنجره سه جداره",
    "پروفیل ۵ کاناله",
    "قیمت پنجره دوجداره",
    "تعویض پنجره بدون تخریب",
    "شیشه دوجداره گاز آرگون",
  ],
  authors: [{ name: "صنایع تاپ‌وین TopWin" }],
  creator: "TopWin Industries",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://topwin.ir",
    title: "TopWin | صنایع درب و پنجره دوجداره UPVC",
    description: "عایق آرامش، انتخاب هوشمندانه. پنجره‌های دوجداره مدرن با ۱۰ سال ضمانت کتبی طلایی.",
    siteName: "TopWin",
    images: [
      {
        url: "/images/topwin-logo.jpg",
        width: 800,
        height: 800,
        alt: "لوگوی رسمی تاپ‌وین TopWin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TopWin | صنایع پنجره دوجداره UPVC",
    description: "تولید و اجرای پنجره‌های دوجداره مدرن و عایق صوتی و حرارتی.",
    images: ["/images/topwin-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "صنایع پنجره دوجداره تاپ‌وین TopWin",
    image: "https://topwin.ir/images/topwin-logo.jpg",
    description: "تولیدکننده تخصصی درب و پنجره دوجداره و سه‌جداره UPVC و شیشه‌های صنعتی گاز آرگون.",
    telephone: "+982188884444",
    address: {
      "@type": "PostalAddress",
      streetAddress: "سعادت‌آباد، میدان کاج، مجتمع اداری سرو",
      addressLocality: "تهران",
      addressRegion: "تهران",
      addressCountry: "IR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.78,
      longitude: 51.37,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html lang="fa" dir="rtl" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-cyan-500 selection:text-black bg-[#070a0f] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
