import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Venigalla",
  description:
    "Vivek Venigalla — Math & Computer Science at the University of Georgia. Projects, research, and experience in quantitative computing, physics simulation, and software engineering.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <Background />
        {children}
      </body>
    </html>
  );
}
