import type { Metadata } from 'next'
import { DM_Sans, Jost } from 'next/font/google'
import '@/styles/styles.scss'
import { WishlistProvider } from '@/context/WishlistContext'

const jost = Jost({ subsets: ['latin'], variable: '--font-jost' })
const dmsans = DM_Sans({ subsets: ['latin'], variable: '--font-dmsans' })

export const metadata: Metadata = {
  title: 'GlampHub',
  description: 'Listing Glamping Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jost.variable} ${dmsans.variable}`}>
      <head>
        {/* ✅ FlatIcons CDN - Correctly placed */}
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"
        />
      </head>
      <body className={jost.className}>
        <WishlistProvider>{children}</WishlistProvider>
      </body>
    </html>
  )
}
