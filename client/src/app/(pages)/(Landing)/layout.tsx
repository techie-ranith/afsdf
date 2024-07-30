import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import { getServerSession } from "next-auth";
import SessionProvider  from "@/components/layouts/other/sessionprovider";
import Navbar from "@/components/layouts/LandingPage/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recruitwise",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <SessionProvider session={session} >
        {children}
        </SessionProvider>
        </body>
    </html>
  );
}
