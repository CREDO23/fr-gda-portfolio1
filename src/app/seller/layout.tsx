"use client";
import { ReactNode } from "react";
import Layout from "@/components/layouts";
import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";


export default function DashboardLayout ({children} : {children : ReactNode}) {
    const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <Layout noScroll showFooter={false}>
      <main className="w-screen relative bg-primary-color/10 h-screen overflow-hidden flex-wrap flex">
        <div
          className={`h-full transition-all ${
            collapse ? " w-16" : "w-64"
          } bg-primary-color/10`}
        >
          <div
            className={`w-full transition-all cursor-pointer  px-3 h-20 text-2xl flex items-center ${
              collapse ? "justify-center" : "justify-end"
            } font-light text-black`}
          >
            <div
              onClick={() => setCollapse(!collapse)}
              className=" h-10 w-10 flex items-center justify-center border border-gray-400 text-gray-400 rounded"
            >
              {collapse ? <BiRightArrow /> : <BiLeftArrow />}
            </div>
          </div>
        </div>
        <header
          className={`h-20 transition-all ${
            collapse ? "w-[calc(100%-4rem)]" : "w-[calc(100%-16rem)]"
          } bg-primary-color/10`}
        ></header>
        <div
          className={` transition-all absolute top-20 ${
            collapse
              ? " left-16 w-[calc(100%-4rem)]"
              : "left-64 w-[calc(100%-16rem)]"
          }  h-[calc(100%-5rem)] bg-white`}
        >
          {children}
        </div>
      </main>
    </Layout>
  );
}