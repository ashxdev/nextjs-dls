import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import localFont from "next/font/local"

import '@/styles/tailwind.css'

const monaSans = localFont({
  src: "../../fonts/Mona-Sans.var.woff2",
  variable: "--font-mona-sans",
  weight: "200 900",
})

export const metadata: Metadata = {
  title: {
    template: '%s - Dance Line Studio',
    default: 'Dance Line Studio — перша справді сучасна студія танців в Ужгороді',
  },
  description: "Dance Line Studio — перша справді сучасна студія танців в Ужгороді. Танці для всіх: хіп-хоп, хай хілс, кей-поп, соціальні танці, бачата, контемпорарі. Розкрийте свій потенціал разом із нами!"
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
