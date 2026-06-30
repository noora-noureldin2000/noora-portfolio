import type { Metadata } from "next";
import {
  Playfair_Display,
  DM_Sans,
  Lora,
  Titillium_Web,
} from "next/font/google";
import { Suspense } from "react";
import "@/styles/globals.css";
import "@/styles/app/landing.css";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { ThemeProviders } from "@/providers/ThemeProvider";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics";
import { WebVitals } from "@/components/shared/WebVitals";

// Landing page
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-titillium",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://noora-noureldin.vercel.app",
  ),
  title: {
    default: "Noora Noureldin — Medical Writer & Clinical Research Professional",
    template: "%s | Noora Noureldin",
  },
  description:
    "Licensed Pharmacist, Clinical Nutritionist (MSc), and published medical writer with Q1/Q2 journal publications. Specializing in medical writing, biostatistics, research synthesis, and exam prep.",
  keywords: [
    "medical writer",
    "clinical pharmacy instructor",
    "scientific researcher",
    "pharmacist",
    "clinical nutritionist",
    "medical writing",
    "biostatistics",
    "SPSS data analysis",
    "academic writing",
    "manuscript preparation",
    "Prometric exam preparation",
  ],
  authors: [{ name: "Noora Mohamed Noureldin Ibrahim" }],
  creator: "Noora Noureldin",
  publisher: "Noora Noureldin",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Noora Noureldin",
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
      className={`
        ${playfairDisplay.variable}
        ${dmSans.variable}
        ${lora.variable}
        ${titilliumWeb.variable}
      `}
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Noora Noureldin" />
      </head>
      <body className={`antialiased ${dmSans.className}`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <WebVitals />
        <ReactQueryProvider>
          <ErrorBoundary>
            <ThemeProviders>
              <CookieConsent />
              {children}
              <Toaster
                position="top-right"
                richColors
                duration={4000}
                expand={false}
                closeButton
                toastOptions={{
                  style: {
                    fontSize: "14px",
                    padding: "12px 16px",
                  },
                  className: "sonner-toast",
                  closeButton: true,
                }}
              />
            </ThemeProviders>
          </ErrorBoundary>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
