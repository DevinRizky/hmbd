import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "HMBD Purwokerto · Kabinet Aradhana",
    template: "%s · HMBD Purwokerto",
  },
  description: "Situs resmi Himpunan Mahasiswa Bisnis Digital Telkom University Purwokerto Kabinet Aradhana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-canvas font-sans tracking-normal text-body">
        <ThemeProvider>
          <Navbar />
          <main className="relative z-0 min-h-[50vh] bg-canvas">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
