import type { Metadata, Viewport } from "next";
import { AnalyticsProvider } from "@/components/analytics-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: "Preethi Suresh - Product Design Portfolio",
    template: "%s | Preethi Suresh"
  },
  description:
    "A dark, immersive product design portfolio for Preethi Suresh featuring UX work, AI product explorations, MotivOS, and RUX.AI Design.",
  keywords: [
    "Preethi Suresh",
    "product design portfolio",
    "UX design",
    "AI product design",
    "MotivOS",
    "RUX.AI Design"
  ],
  openGraph: {
    title: "Preethi Suresh - Product Design Portfolio",
    description: "UX, product strategy, design systems, and AI product experiments.",
    type: "website",
    siteName: "Preethi Suresh"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
