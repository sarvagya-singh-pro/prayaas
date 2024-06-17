import { Inter } from "next/font/google";
import "./globals.css";
import { createTheme, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Praayas",
  description: "Praayas is a community of passionate students, attempting to make the world around them a better place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" sizes="any" href="/logo.ico"/>
        <meta name="description" content = "Prayaas is a non profit community service club that enables unfortunate people get support and help "/>
        <meta name = "keywords" content = "Non-profit, help, student-run, support,help"/>
        <meta property="og:title" content="Prayaas" />
        <meta property="og:description" content="Prayaas is a student run  community service non-profit based in bokaro join and help improve our city for better "/>
        <meta property="og:image" content="https://i.ibb.co/kybh2h2/Whats-App-Image-2024-06-18-at-00-47-28-d4d7f497.jpg" />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}
        </MantineProvider>
        
        </body>
    </html>
  );
}
