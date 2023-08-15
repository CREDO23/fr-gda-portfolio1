"use client"
import './globals.css'
import { ConfigProvider } from "antd";
import { Poppins } from "next/font/google";
import {Provider} from 'react-redux'
import {  store } from '@/redux/store';


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
    <Provider store={store}>

    <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#ff5722",
        colorError: "#FE4D4F",
      },
    }}
    >
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
    </ConfigProvider>
    </Provider>
  )
}
