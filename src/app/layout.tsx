import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Clínica Dental Excellence - Tu Sonrisa, Nuestra Pasión",
  description:
    "Clínica dental moderna especializada en odontología general, estética dental, ortodoncia e implantes. Tecnología de vanguardia y atención personalizada. Dentistas certificados con años de experiencia en salud bucodental.",
  keywords:
    "dentista, clínica dental, odontología, estética dental, ortodoncia, implantes dentales, blanqueamiento dental, limpieza dental, endodoncia, periodoncia, odontología infantil, carillas dentales, coronas, puentes dentales, salud bucodental",
  authors: [{ name: "Dr. Carlos Méndez" }],
  creator: "Clínica Dental Excellence",
  publisher: "Clínica Dental Excellence",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.dental-excellence.com",
    siteName: "Clínica Dental Excellence",
    title: "Clínica Dental Excellence - Tu Sonrisa, Nuestra Pasión",
    description:
      "Clínica dental moderna con tecnología de vanguardia. Especialistas en estética dental, ortodoncia e implantes. Tu sonrisa en las mejores manos.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Dental Excellence - Centro Odontológico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental Excellence - Tu Sonrisa, Nuestra Pasión",
    description:
      "Clínica dental moderna especializada en estética dental, ortodoncia e implantes. Tecnología de vanguardia y atención personalizada.",
    images: ["/images/og-image.jpg"],
    creator: "@dental_excellence",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  alternates: {
    canonical: "https://www.dental-excellence.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://www.dental-excellence.com",
    name: "Clínica Dental Excellence",
    description:
      "Clínica dental moderna especializada en odontología general, estética dental, ortodoncia e implantes dentales.",
    url: "https://www.dental-excellence.com",
    telephone: "+52-555-000-0200",
    email: "contacto@dental-excellence.com",
    image: "https://www.dental-excellence.com/images/logo.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Reforma 567, Torre B, Piso 3",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      postalCode: "06600",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.4326,
      longitude: -99.1332,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/dentalexcellence",
      "https://www.instagram.com/dentalexcellence",
      "https://www.linkedin.com/company/dental-excellence",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Dentales",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Limpieza Dental",
            description: "Limpieza dental profunda y prevención",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Blanqueamiento Dental",
            description: "Blanqueamiento profesional para una sonrisa radiante",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Ortodoncia",
            description: "Tratamientos de ortodoncia con brackets e Invisalign",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Implantes Dentales",
            description: "Implantes dentales de última generación",
          },
        },
      ],
    },
  };

  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
