import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrainsmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrainsmono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
