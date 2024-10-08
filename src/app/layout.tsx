import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const jetbrains = JetBrains_Mono({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Saihaj Brar",
  description: "Saihaj Brar's personal website.",
  icons: ['/favicon.ico']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en">
      <body
        className={`${jetbrains.className} bg-[#F5F5F5]`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
