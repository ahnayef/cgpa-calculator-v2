import type { Metadata } from 'next'
import { Tektur } from 'next/font/google'
import {Josefin_Sans} from "next/font/google"; 

import './globals.css'

const tektur = Tektur({ subsets: ['latin'] })

const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CGPA Calculator',
  description: 'Calculate your CGPA',
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
