import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const Poppins_font = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HajatinID",
  description: "Hajatin ID is a digital platform that connects clients with event vendors, streamlining planning and execution. It offers vendor search, price comparison, integrated payments, and event management tools, providing a modern solution for event organizing in the digital era.",
  authors : {
    name : "Hajatin Indonesia",
    url: "https://hajatin.id/",
  },
  keywords: ["Event Organizer", "Event Management", "Event Planning", "Event Vendor"],
  icons:{
    icon: "https://hajatin.id/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "HajatinID",
    description:
      "Hajatin ID is a digital platform that connects clients with event vendors, streamlining planning and execution. It offers vendor search, price comparison, integrated payments, and event management tools, providing a modern solution for event organizing in the digital era.",
    siteName: "Hajatin Indonesia",
    images: [
      {
        url: "https://www.hajatin.id/photo.png",
        alt: "Hajatin - Wujudkan hajatmu bersama hajatin",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${Poppins_font.variable} `}>
        {children}
      </body>
    </html>
  );
}
