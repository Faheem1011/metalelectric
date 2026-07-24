import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://metalectricpk.com"),
  title: { default: "Metalectrics | Premium LiFePO₄ Lithium Energy Systems Pakistan", template: "%s | Metalectrics" },
  description: "Pakistan's leading manufacturer of high-performance LiFePO4 solar batteries, motorcycle batteries, and custom lithium energy systems. Alpha Ampere brand — 8000 cycles, 15-year lifespan.",
  keywords: ["LiFePO4 battery Pakistan", "Alpha Ampere", "solar battery Pakistan", "lithium battery", "51.2V battery", "motorcycle battery", "Metalectrics"],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Metalectrics PK",
    url: "https://metalectricpk.com",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
