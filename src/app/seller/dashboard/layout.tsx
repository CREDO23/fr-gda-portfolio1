"use client";
import { ReactNode } from "react";
import Layout from "@/components/layouts";
import { useState } from "react";
import Link from "next/link";
import { BiSolidDashboard, BiCollapseHorizontal } from "react-icons/bi";
import { AiFillShop } from "react-icons/ai";
import { FaProductHunt, FaUserAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { current } from "@reduxjs/toolkit";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const menus = [
    {
      title: "Dashboard",
      icon: <BiSolidDashboard />,
      path: "/seller/dashboard",
    },
    { title: "Shops", icon: <AiFillShop />, path: "/seller/dashboard/shops" },
    {
      title: "Products",
      icon: <FaProductHunt />,
      path: "/seller/dashboard/products",
    },
    { title: "Profil", icon: <FaUserAlt />, path: "/seller/dashboard/profile" },
  ];

  const currentPath = usePathname();
  const [collapse, setCollapse] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>("Dashboard");

  return (
    <Layout noScroll showFooter={false}>
      <main className="w-screen relative bg-white h-screen overflow-hidden flex-wrap flex">
        <div
          className={`h-full overflow-hidden transition-all ${
            collapse ? " w-16" : "w-64"
          }  bg-primary-color/5`}
        >
          {collapse ? (
            <div className=" w-full  h-20 flex items-center justify-center">
              <div className="h-14 flex items-center justify-center bg-slate-500 w-14 rounded-full">
                User
              </div>
            </div>
          ) : (
            <div className=" flex flex-col items-center gap-5 p-3 ">
              <div className=" flex items-center justify-center w-44 h-44 bg-slate-500 rounded-full">
                user
              </div>
              <div className=" font-light flex items-center justify-center flex-col">
                <span className=" font-medium">Thierry Bakera</span>
                <span className=" text-sm">bakerathierry@gmail.com</span>
              </div>
            </div>
          )}

          <ul className={` ${collapse ? "p-[.5rem]" : "p-4"}`}>
            {menus.map((item) => {
              return (
                <li onClick={() => setMenu(item.title)} key={item.title}>
                  <Link
                    className={`flex items-center gap-4 cursor-pointer ${
                      collapse
                        ? "p-[.5rem] flex items-center justify-center"
                        : "px-[1rem] py-[.5rem]"
                    }  rounded-lg my-4 ${
                      currentPath == item.path
                        ? " text-white bg-primary-color"
                        : "text-black  hover:bg-primary-color/5"
                    }  `}
                    href={`${item.path}`}
                  >
                    <span className=" text-xl">{item.icon}</span>
                    {!collapse && (
                      <span className=" text-lg font-light">{item.title}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <header
          className={`h-20 transition-all ${
            collapse ? "w-[calc(100%-4rem)]" : "w-[calc(100%-16rem)]"
          } bg-primary-color/5`}
        >
          <div
            className={` inline-flex transition-all cursor-pointer h-full  p-3 text-2xl items-center font-light text-black`}
          >
            <div
              onClick={() => setCollapse(!collapse)}
              className=" h-10 w-10 flex items-center justify-center border border-primary-color/50 text-primary-color/50 rounded"
            >
              <BiCollapseHorizontal />
            </div>
          </div>
        </header>
        <div
          className={` transition-all absolute top-20 ${
            collapse
              ? " left-16 w-[calc(100%-4rem)]"
              : "left-64 w-[calc(100%-16rem)]"
          }  h-[calc(100%-5rem)] border border-primary-color/50 p-[1.5rem] rounded-tl-3xl`}
        >
          {children}
        </div>
      </main>
    </Layout>
  );
}
