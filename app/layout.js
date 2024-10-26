import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tre Sverige - exempelsida med Contentful',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
