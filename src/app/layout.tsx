"use client"
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@material-tailwind/react";
import { ConfigProvider } from "antd";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#ff5722",
        colorError: "#FE4D4F",
      },
    }}
  >
    <ThemeProvider>
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
    </ThemeProvider>
    </ConfigProvider>
  )
}
