import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HireHub - Campus Internship & Placement Portal',
  description: 'A comprehensive campus-centric internship and placement management platform for students, recruiters, and administrators.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`${inter.className} h-full`}>
        {children}
      </body>
    </html>
  )
}
