import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Destination Anywhere & Co. | Best Travel Agency in Ahmedabad",
  description:
    "Book International and Domestic tour packages with Sujal Soni. Your journey begins anywhere.",
  keywords: [
    "Travel Agency Gota",
    "Tour Packages Ahmedabad",
    "Flight Booking Sujal Soni",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
