import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
// import { SessionProvider } from "next-auth/react";
// import { auth } from "@/auth";
import { metadata } from "@/components/seo/metadata";
import { jsonLdData } from "@/components/seo/jsonLD";

const inter = Inter({  subsets: ["latin"] });

export { metadata };
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  // const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://ieltsstrategies101.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* <SessionProvider session={session}> */}
              {children}
          <Toaster />
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
