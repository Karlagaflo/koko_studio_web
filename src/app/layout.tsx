import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Koko Studio | Descarga la App Oficial",
  description: "Descarga la aplicación oficial de Koko Studio para Android (APK) e iOS. Agenda tus citas de uñas, cejas, pestañas y belleza de forma rápida y sencilla.",
  keywords: ["koko studio", "reserva de citas", "manicure", "pedicure", "uñas", "pestanas", "cejas", "app koko studio", "descarga apk"],
  openGraph: {
    title: "Koko Studio | Descarga la App Oficial",
    description: "Agenda tus citas de belleza y uñas al instante. Descarga el APK oficial para Android e instalador para iOS.",
    type: "website",
    locale: "es_PE",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable} h-full antialiased`}>
      <body className="font-sans bg-zinc-950 text-zinc-100 min-h-full flex flex-col selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
