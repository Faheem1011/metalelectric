import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://metalectricpk.com"),
  title: { default: "Metalectrics | Power You Can Rely On | LiFePO4 Batteries Pakistan", template: "%s | Metalectrics" },
  description: "Pakistan's premier manufacturer of high-capacity Alpha Ampere LiFePO4 lithium battery packs for residential solar inverters, home UPS systems, and electric mobility. 8,000+ deep cycles, 15-year service life.",
  keywords: ["LiFePO4 battery Pakistan", "Alpha Ampere", "solar battery Pakistan", "lithium battery", "24V battery", "51.2V battery"],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Metalectrics",
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
