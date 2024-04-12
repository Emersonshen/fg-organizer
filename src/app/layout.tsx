import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "FG-Organizer",
    description: "FG-Organizer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gray-light bg-none">
                <main>{children}</main>
            </body>
        </html>
    );
}
