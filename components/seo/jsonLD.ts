// src/seo/jsonLd.ts
export const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'IELTS Strategies 101',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://ieltsstrategies101.vercel.app',
  description: 'Free IELTS strategies, tips, and tools to help you learn English and ace the exam. Perfect for students, professionals, and test-takers worldwide.',
  logo: `${process.env.NEXT_PUBLIC_APP_URL || 'https://ieltsstrategies101.vercel.app'}/logo.png`,
  sameAs: [
    'https://www.youtube.com/@ielts-strategies101',
    'https://www.instagram.com/ieltsstrategies101',
  ],
  founder: {
    '@type': 'Person',
    name: 'Shubham Awasthi',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://ieltsstrategies101.vercel.app',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  educationalCredentialAwarded: 'IELTS Band Score Improvement',
};
