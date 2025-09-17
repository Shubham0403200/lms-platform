// src/seo/metadata.ts
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'IELTS Strategies 101',
    template: '%s | IELTS Strategies 101',
  },
  description: 'Master the IELTS exam with strategies, tips, and tools from IELTS Strategies 101. Learn smarter, score higher.',
  keywords: [
    'ielts strategies',
    'ielts preparation',
    'ielts practice',
    'ielts tips',
    'ielts exam help',
    'ielts Speaking practice',
    'ielts Reading tips',
    'ielts Writing strategies',
    'ielts Listening hacks',
    'ielts online course',
    'Free ielts practice',
    'ielts vocabulary',
    'ielts grammar',
    'Learn English for ielts',
    'English speaking practice',
    'ielts band 9 tips',
    'ielts academic tips',
    'ielts general training tips',
    'How to crack ielts',
    'ielts study plan',
    'ielts coaching',
    'ielts mentor',
    'ielts mock test',
    'ielts sample answers',
    'ielts cue cards',
    'ielts Speaking Part 1 2 3',
    'ielts Writing Task 1 2',
  ],
  authors: [{ name: 'IELTS Strategies 101', url: siteUrl }],
  creator: 'IELTS Strategies 101',
  openGraph: {
    title: 'IELTS Strategies 101',
    description: 'Master IELTS with expert strategies, lessons, and AI tools. Learn English and achieve your dream score.',
    url: siteUrl,
    siteName: 'IELTS Strategies 101',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'IELTS Strategies 101 - Master IELTS with Expert Help',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IELTS Strategies 101',
    description: 'IELTS exam preparation made simple and effective with strategies, tips, and mock test lessons.',
    creator: '@ieltsstrategies101',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
