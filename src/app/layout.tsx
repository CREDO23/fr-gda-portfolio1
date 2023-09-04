"use client";
import "./globals.css";
import { ConfigProvider } from "antd";
import { Poppins } from "next/font/google";
import { store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

const persistor = persistStore(store);

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
          <head></head>
          <body suppressHydrationWarning={true} className={poppins.className}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
          </body>
        </html>
      </ConfigProvider>
    </Provider>
  );
}
