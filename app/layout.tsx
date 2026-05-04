import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles.css";

import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Stephen Skasko | Web Developer Portfolio",
    description: "Portfolio of Stephen Skasko | Web Developer specializing in UI-focused development, backend-connected features, and data-driven solutions.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Cursor />

                <Header />

                <main className="page">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}