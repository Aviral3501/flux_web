import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
// import { ThemeProvider } from "@/components/themes";


const manrope = Manrope({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Flux",
  description: "Experience video sharing reimagined. Flux is a real-time collaborative platform where creators connect, share, and enhance their content with AI-powered tools. Create, collaborate, and inspire together.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
       <html lang="en" >
      <body
        className={`${manrope.className} bg-[#171717]`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
    </ClerkProvider>
   
  );
}
