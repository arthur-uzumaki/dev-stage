import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'devstage',
}

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-[url(/background.png)] bg-gray-900 bg-top bg-no-repeat text-gray-100 antialiased md:bg-right-top">
        <main className="mx-auto max-w-[1240px] px-5 py-8 md:py-0 ">
          {children}
        </main>
      </body>
    </html>
  )
}
