import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gerald Gundani - Energy & Power Systems Engineer",
  description:
    "Award-winning Energy and Power Systems Engineer advancing renewable energy integration across Africa. Specializing in solar PV, BESS, and sustainable power solutions.",
  keywords: ["Gerald Gundani", "Energy Engineer", "Solar Engineer", "Renewable Energy", "Zimbabwe", "BESS", "Solar PV"],
  authors: [{ name: "Anesu Ndoro" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon-light-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
