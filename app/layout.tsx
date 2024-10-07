import Header from "@/Components/Header";
import "./globals.css";
import { Libre_Baskerville } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Permanent_Marker } from "next/font/google";

//fonts
const Primary = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600", "800", "900"],
  variable: "--primary",
});
const Secondary = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--secondary",
});
const Third = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--third",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Primary.variable} antialiased overflow-hidden`}>
        <div>
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
