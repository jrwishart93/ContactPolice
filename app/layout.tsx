import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
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
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#030305] text-white antialiased selection:bg-white/20`}
      >
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <footer className="border-t border-white/10 bg-black/40">
            <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
              <span className="block text-white/60">
                © {new Date().getFullYear()} ContactPolice. This tool is not an official Police Scotland website and must not be
                used to report crime. Call 999 in an emergency, or 101 for non-emergencies.
              </span>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="underline decoration-white/30 underline-offset-4 hover:text-white">
                  Privacy Notice
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
