import type { Metadata } from "next";
import { Inter, Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({ 
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marwan Musa | Software & AI Engineer",
  description: "Portfolio website of Marwan Musa, a Software & AI Engineer with expertise in ML/DL systems, data science, and software engineering.",
};

/**
 * Root layout component for the application
 * @param children - Child components to render within the layout
 * @returns JSX element representing the root layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${roboto.variable} ${jetbrainsMono.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
