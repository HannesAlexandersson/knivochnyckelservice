import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"]
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: ["400"]

});

export const metadata: Metadata = {
  title: "Munkebäcks kniv och nyckelservice",
  description: "Ge dina knivar ett nytt liv!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
