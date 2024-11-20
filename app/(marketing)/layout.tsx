import { type Metadata } from 'next'

import { RootLayout } from '@/app/components/RootLayout'
import localFont from "next/font/local"

import '@/app/styles/tailwind.css'

const monaSans = localFont({
  src: "../fonts/Mona-Sans.var.woff2",
  variable: "--font-mona-sans",
  weight: "200 900",
})

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className={`${monaSans.variable} flex min-h-full flex-col`}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
