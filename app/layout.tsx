import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const APP_NAME = "ChatSphere";
const APP_DEFAULT_TITLE = "ChatSphere - Secure & Instant Messaging";
const APP_TITLE_TEMPLATE = "%s - ChatSphere";
const APP_DESCRIPTION =
  "ChatSphere is a secure and instant messaging platform that enables seamless communication with end-to-end encryption, real-time messaging, group chats, and media sharing. Stay connected anytime, anywhere.";
const APP_KEYWORDS =
  "chat app, messaging platform, real-time chat, encrypted messaging, group chat, instant messaging, ChatSphere";
const APP_AUTHOR = "John Loyd Belen";
const APP_URL = "https://chat-application-git-main-jol0os-projects.vercel.app/";
const APP_IMAGE =
  "https://res.cloudinary.com/dcd63yljq/image/upload/v1740406809/480212741_926916922615406_1367666440992063838_n-removebg-preview_m0ftpd.png";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description:
    "ChatSphere provides secure and real-time messaging with group chats, media sharing, and encrypted communication.",
  icons: {
    icon: "/icontab.png",
    shortcut: "/icontab.png",
    apple: "/icontab.png",
  },
  keywords:
    "chat app, secure messaging, ChatSphere, real-time chat, encrypted conversations",
  authors: [{ name: APP_AUTHOR }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ChatSphere - Secure Messaging",
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: "ChatSphere - Instant & Secure Messaging",
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: [
      {
        url: APP_IMAGE,
        width: 1200,
        height: 630,
        alt: "ChatSphere Messaging App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatSphere - Instant & Secure Messaging",
    description: APP_DESCRIPTION,
    images: APP_IMAGE,
  },
  other: {
    'schema:software': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: APP_NAME,
      description: APP_DESCRIPTION,
      applicationCategory: "CommunicationApplication",
      operatingSystem: "Web",
      url: APP_URL,
      image: APP_IMAGE,
      keywords: APP_KEYWORDS,
    }),
    'schema:organization': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ChatSphere",
      url: APP_URL,
      logo: APP_IMAGE,
      description: "A secure and real-time messaging platform for seamless communication.",
    })
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <Head>
          <link rel="icon" href="/icontab.png" />
          <link rel="icon" type="image/png" href="/icontab.png" />
        </Head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}