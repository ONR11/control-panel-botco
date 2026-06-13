import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Profile - Premium Stats & Analytics',
  description: 'View your Discord profile with advanced statistics, achievements, server history, and more.',
  keywords: ['Discord', 'Profile', 'Statistics', 'Analytics', 'Gaming'],
  authors: [{ name: 'ONR NEXUS' }],
  openGraph: {
    title: 'Discord Profile - Premium Stats & Analytics',
    description: 'View your Discord profile with advanced statistics, achievements, server history, and more.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#5865F2" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-discord-black via-discord-darker to-discord-black text-white`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
