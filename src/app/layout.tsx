import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={inter.className}>
                {/* <Script id="firebase-sdk" type="module">
                    {`import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";var firebaseConfig = {apiKey: "AIzaSyCFrT1i7axsl67ic7Ll3bQVZFW5BwTKzG0",authDomain: "fg-organizer.firebaseapp.com",databaseURL: "https://fg-organizer-default-rtdb.firebaseio.com",projectId: "fg-organizer",storageBucket: "fg-organizer.appspot.com",messagingSenderId: "960923830810",appId: "1:960923830810:web:0aaedbcce81e21d0355fa3",measurementId: "G-N30D65845T"};var app = initializeApp(firebaseConfig);var analytics = getAnalytics(app);`}
                </Script> */}
                <main>{children}</main>
            </body>
        </html>
    );
}
