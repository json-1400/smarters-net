import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { constructMetadata, generateStructuredDataGraph } from "@/lib/seo";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#020617',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateStructuredDataGraph();

  return (
    <html lang="fr" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-slate-50 dark:text-slate-100 dark:bg-slate-950 min-h-screen flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
