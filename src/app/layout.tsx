import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });

// "only light" tells phone browsers not to force-darken the page; the .dark class handles the dark theme itself.
export const viewport: Viewport = {
  colorScheme: "only light",
};

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} enableColorScheme={false}>
          {/* Soft colour behind everything so the glass navbar always has something to bend */}
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="blob absolute -left-32 -top-24 h-[34rem] w-[34rem] animate-drift rounded-full blur-3xl" style={{ background: "rgb(var(--blob-a))" }} />
            <div className="blob absolute -right-40 top-1/3 h-[30rem] w-[30rem] animate-drift rounded-full blur-3xl [animation-delay:-8s]" style={{ background: "rgb(var(--blob-b))" }} />
            <div className="blob absolute -bottom-40 left-1/4 h-[28rem] w-[28rem] animate-drift rounded-full blur-3xl [animation-delay:-15s]" style={{ background: "rgb(var(--blob-c))" }} />
          </div>
          <RevealObserver />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
