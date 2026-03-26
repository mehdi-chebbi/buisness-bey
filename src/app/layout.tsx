import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business Bey | Coffee Shop in L'Aouina, Tunisia",
  description:
    "Welcome to Business Bey - Your cozy coffee spot in L'Aouina, Tunisia. Premium coffee, warm atmosphere, and unforgettable moments.",
  icons: {
    icon: "/logo.svg", // also fix path (see below)
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Business Bey | Coffee Shop in L'Aouina, Tunisia",
    description:
      "Welcome to Business Bey - Your cozy coffee spot in L'Aouina, Tunisia.",
    url: "https://business-bey.kubemate.dev",
    siteName: "Business Bey",
    images: [
      {
        url: "/images/logo.jpg", // ⚠️ IMPORTANT (see next section)
        width: 512,
        height: 512,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
