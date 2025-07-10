import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="font-serif">
      <Navigation />
      <main className="w-full">{children}</main>
      <Footer />
    </main>
  );
};

export default RootLayout;
