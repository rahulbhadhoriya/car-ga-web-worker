import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer, WorkerComponent } from "@/components";
import { initGA } from "@/utils/ga";
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
        <WorkerComponent gaId={"G-TEMZC9BP9L"} callBack={initGA} />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
