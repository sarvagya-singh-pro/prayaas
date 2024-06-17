import { Inter } from "next/font/google";
import "./globals.css";
import { createTheme, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" sizes="any" href="/logo.ico"/>
        <meta name="description" content = "Prayaas is a non profit community service club that enables unfortunate people get support and help "/>
        <meta name = "keywords" content = "Non-profit, help, student-run, support,help"/>
        <meta property="og:title" content="Prayaas" />
        <meta property="og:description" content="Prayaas is a student run  community service non-profit based in bokaro join and help improve our city for better "/>
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Prayaas" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:video" content="/video.mp4" />
        <meta property="og:url" content="https://www.prayaas.org.in/" />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}
        </MantineProvider>
        
        </body>
    </html>
  );
}
