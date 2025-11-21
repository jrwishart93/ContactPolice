import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  weight: ["300", "500", "700"] 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  weight: ["400"] 
});

export const metadata: Metadata = {
  title: "ContactPolice.uk | Officer Directory",
  description: "Secure Public Contact Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#030305] text-white antialiased selection:bg-white/20`}>
        {children}
      </body>
    </html>
  );
}