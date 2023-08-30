"use client";

import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children,
  showHeader = true,
  showFooter = true,
  noScroll = false,
}: {
  children: JSX.Element;
  showHeader?: boolean;
  showFooter?: boolean;
  noScroll?: boolean;
}) {
  return (
    <div
      className={` ${
        noScroll ? " overflow-hidden" : "overflow-auto no-scrollbar"
      }  h-screen  items-center justify-center  w-screen  gap-5`}
    >
      {showHeader && <Header />}
      <div className="w-full">{children}</div>
      {showFooter && <Footer />}
    </div>
  );
}
