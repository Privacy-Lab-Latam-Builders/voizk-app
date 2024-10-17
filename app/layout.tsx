import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voizk Biometric Auth Test",
  description: "Remove Big Tech from your biometric print construction and authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
