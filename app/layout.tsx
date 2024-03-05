import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { Partytown } from "@builder.io/partytown/react";

export const metadata: Metadata = {
  title: "Next.js - Car Hub",
  description: "Discovery the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Partytown debug={true} forward={["dataLayer.push", "gtag"]} />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-TEMZC9BP9L");
             `,
          }}
        ></script>
      </head>
      <body className="relative">
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TEMZC9BP9L"
          type="text/partytown"
        ></script>
        {/* <GoogleAnalytics gaId="G-TEMZC9BP9L" /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
