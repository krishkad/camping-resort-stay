import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Serenity Wilderness",
  description: "Serenity Wilderness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
