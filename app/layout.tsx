import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: 'University of Delta',
	description: "Explore the University of Delta's Virtual Campus",
	icons: {
		icon: [
			{
				url: '/uni-images/uni-logo.svg', // Your favicon.ico in the public directory or app directory
			},
			{
				url: '/uni-images/logo.png', // A general icon for modern browsers
				type: 'image/png',
				sizes: '32x32',
			},
		],
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
