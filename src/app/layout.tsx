import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import StructuredData from '@/components/shared/StructuredData'
import '@/styles/globals.css'

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] })

// Define metadata for the application
export const metadata: Metadata = {
    title: 'VerseWell - Discover and Share God\'s Word',
    description: 'A modern Bible app that helps you discover, explore, and share God\'s Word with powerful search and easy sharing features.',
    keywords: ['Bible app', 'Bible study', 'Bible search', 'Bible sharing', 'Scripture', 'Christian app'],
    authors: [{ name: 'VerseWell' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://versewell.app',
        siteName: 'VerseWell',
        title: 'VerseWell - Discover and Share God\'s Word',
        description: 'A modern Bible app that helps you discover, explore, and share God\'s Word with powerful search and easy sharing features.'
    }
}

// Root layout component that wraps all pages
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} transition-colors duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
                <ThemeProvider>
                    <StructuredData />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
} 
