import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insight.",
  description: "Amazon product scraper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/insight-logo.png" />
      </head>
      <body class={inter.class}>{children}</body>
    </html>
  );
}
