import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Charan",
  description: "Charan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
