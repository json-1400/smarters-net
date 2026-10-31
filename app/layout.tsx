import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { constructMetadata, generateStructuredDataGraph } from "@/lib/seo";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { createServerSideClient } from "@/lib/supabase";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerSideClient();
  const { data: { session } } = await supabase.auth.getSession();
  const jsonLd = generateStructuredDataGraph();

  return (
    <html lang="fr" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-100 bg-slate-950 min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        {children}
        <ChatWidget user={session?.user || null} />
      </body>
    </html>
  );
}
