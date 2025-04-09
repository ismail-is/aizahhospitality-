import type { Metadata } from 'next'
import { DM_Sans, Jost } from 'next/font/google'
import '@/styles/styles.scss'
import { WishlistProvider } from '@/context/WishlistContext'

const jost = Jost({ subsets: ['latin'] })
const dmsans = DM_Sans({ subsets: ['latin'] })

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
    <WishlistProvider>
      <html lang="en">
      <link
    rel="stylesheet"
    href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"
  />
        <body className={jost.className}>{children}</body>
      </html>
    </WishlistProvider>
  )
}
