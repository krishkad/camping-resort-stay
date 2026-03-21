import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Pune Camps",
  description: "Pune Camps",
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
