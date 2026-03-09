import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/ui/Providers'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyBusiness - Platform Bisnis Modern',
  description: 'Platform all-in-one untuk mengembangkan bisnis kamu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={geist.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}