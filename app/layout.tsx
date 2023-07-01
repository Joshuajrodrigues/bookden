import Header from "@/components/Header";
import "./globals.css";
import { Josefin_Slab } from "next/font/google";

const josefinSlab = Josefin_Slab({ weight:['500','200','100'],subsets:['latin'] });

export const metadata = {
  title: "Bookden",
  description: "Lets read books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`p-3 m-2 ${josefinSlab.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
