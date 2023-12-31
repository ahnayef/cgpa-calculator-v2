import type { Metadata } from 'next'
import { Tektur } from 'next/font/google'
import {Josefin_Sans} from "next/font/google"; 

import './globals.css'

// const tektur = Tektur({ subsets: ['latin'] })

const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CGPA Calculator',
  description: 'Calculate your CGPA with ease',
  authors: [{ name: "AHNayef", url: "https://ahnayef.t.me" }],
  keywords: ["CGPA", "Calculate", "GPA", "Grade", "Point", "Average", "Calculator", "CGPA Calculator", "GPA Calculator", "Grade Calculator", "Point Calculator"],
  metadataBase: new URL("https://calcg.vercel.app/"),
  themeColor: "#232530",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: true,
  },

  manifest: '/manifest.json',
  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/favicon.ico" },
  ],


  openGraph: {
    url: 'https://calcg.vercel.app/',
    siteName: 'CGPA Calculator',
    images: [
      {
        url: 'https://raw.githubusercontent.com/ahnayef/cgpa-calculator-v2/main/app/assets/meta.png',
        width: 1280,
        height: 640,
        alt: 'Meta Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    creator: "_AHNayef_",
    images: [
      {
        url: 'https://raw.githubusercontent.com/ahnayef/cgpa-calculator-v2/main/app/assets/meta.png',
        width: 1280,
        height: 640,
        alt: 'Meta Image',
      },
    ],
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  )
}
