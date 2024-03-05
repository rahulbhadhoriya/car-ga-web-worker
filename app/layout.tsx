
import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: 'Next.js - Car Hub',
  description: 'Discovery the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <GoogleAnalytics gaId="G-TEMZC9BP9L" />
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
