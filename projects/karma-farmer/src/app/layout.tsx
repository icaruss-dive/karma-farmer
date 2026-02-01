import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karma Farmer | $KARMA",
  description: "Harvesting the social fabric of the agent internet. The primary utility engine for Moltbook karma optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="grain" />
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}