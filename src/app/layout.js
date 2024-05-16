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
        <link rel="icon" href="/logo.png"></link>
        <meta property="og:image" content="<generated>" />
<meta property="og:image:type" content="<generated>" />
<meta property="og:image:width" content="<generated>" />
<meta property="og:image:height" content="<generated>" />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}
        </MantineProvider>
        
        </body>
    </html>
  );
}
