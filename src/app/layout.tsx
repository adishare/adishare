import "./globals.css";

import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
import SplashCursor from "@/components/reactbits/SplashCursor/SplashCursor";
import StickyHeader from "@/components/sticky-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "adishare | Fullstack Developer",
	description:
		"Portfolio and showcase of my work as a fullstack developer. Explore my projects, expertise, and get in touch for collaborations.",
	keywords: [
		"adishare",
		"Fathul Qorib Alaudit",
		"portfolio",
		"fullstack developer",
		"web development",
		"frontend developer",
		"UI/UX",
		"mobile developer",
		"react developer",
		"nextjs developer",
		"nodejs developer",
		"tailwindcss developer",
		"typescript developer",
	],
	authors: [{ name: "adishare" }],
	creator: "adishare",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://adishare.github.io",
		title: "adishare | Fullstack Developer",
		description:
			"Portfolio and showcase of my work as a fullstack developer. Explore my projects, expertise, and get in touch for collaborations.",
		siteName: "adishare",
		images: [
			{
				url: "https://adishare.github.io/og-image.jpg", // Add your OG image
				width: 1200,
				height: 630,
				alt: "adishare - Fullstack Developer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "adishare | Fullstack Developer",
		description:
			"Portfolio and showcase of my work as a fullstack developer. Explore my projects, expertise, and get in touch for collaborations.",
		creator: "@adishare",
		images: ["https://adishare.github.io/twitter-image.jpg"], // Add your Twitter image
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "https://adishare.github.io",
	},
	metadataBase: new URL("https://adishare.github.io"),
	applicationName: "adishare Portfolio",
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	// themeColor: [
	// 	{ media: "(prefers-color-scheme: light)", color: "white" },
	// 	{ media: "(prefers-color-scheme: dark)", color: "black" },
	// ],
	// viewport: {
	// 	width: "device-width",
	// 	initialScale: 1,
	// 	maximumScale: 1,
	// },
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	// verification: {
	// 	google: "your-google-site-verification", // Add your Google Search Console verification code
	// },
};

// Add JSON-LD structured data
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Fathul Qorib Alaudit",
	url: "https://adishare.github.io",
	jobTitle: "Fullstack Developer",
	sameAs: [
		"https://github.com/adishare",
		"https://twitter.com/adishare",
		"https://www.linkedin.com/in/fathulqorib",
		"https://www.instagram.com/adishare",
		"https://www.facebook.com/adishare",
	],
	knowsAbout: [
		"Web Development",
		"React",
		"Next.js",
		"Node.js",
		"TypeScript",
		"TailwindCSS",
		"UI/UX Design",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
					rel="stylesheet"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${inter.variable} antialiased bg-background text-foreground`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
					disableTransitionOnChange
				>
					<TooltipProvider>
						<Toaster />
						<StickyHeader />
						{children}
						<ContactSection />
						<Footer />
						<SplashCursor />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
