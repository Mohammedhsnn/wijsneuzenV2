import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Historie Wandeltour Philippine',
  description: 'Ontdek het rijke verleden van de mosselstad tijdens deze sfeervolle historische wandeling langs monumenten en verhalen.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
