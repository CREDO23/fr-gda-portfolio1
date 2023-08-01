import Button from "@/components/design/button";
import Navigation from "./navigation";
import { BsCart } from "react-icons/bs";
import Logo from "./logo";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { Avatar, Badge } from "antd";
import Hamburger from "./hamburger";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  const isLoged = true;

  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      {hamburger && (
        <div className=" md:hidden absolute w-screen h-screen backdrop-blur-md bg-white/30 z-10"></div>
      )}
      <div className={`w-full sticky top-0 z-20 bg-white shadow md:h-16 `}>
        <div className=" bg-white flex items-center px-4 w-full backdrop-blur-md md:hidden h-14">
          <p className=" font-semibold text-xl">LOGO</p>
          <Hamburger hamburger={hamburger} setHamburger={setHamburger} />
        </div>
        <div
          className={`gap-6 ${
            hamburger ? "flex" : "hidden"
          } md:gap-3 text-sm md:text-base flex-col md:flex-row md:flex items-center justify-center md:justify-between  p-4`}
        >
          <div className="hidden md:block">
            <Logo />
          </div>

          <div className="">
            <Navigation hamburger={hamburger} setHamburger={setHamburger} />
          </div>
          {isLoged ? (
            <div className="flex items-center justify-center gap-4">
              <div className=" hover:text-deep-orange-400 cursor-pointer">
                <Badge size="small" dot>
                  <BsCart className="transition-all text-lg" />
                </Badge>
              </div>
              <div className=" hover:text-deep-orange-400 cursor-pointer">
                <Badge size="small" dot>
                  <MdOutlineNotificationsNone className="transition-all text-xl" />
                </Badge>
              </div>
              <div className=" flex items-center justify-center gap-1 cursor-pointer">
                <Avatar
                  className="flex items-center justify-center"
                  icon={<BiUserCircle />}
                />
                <p className=" text-xs font-light">Thierry</p>
                <IoMdArrowDropdown className=" text-sm" />
              </div>
            </div>
          ) : (
            <div className=" flex items-center justify-center gap-3">
              <p className=" cursor-pointer hover:text-deep-orange-400 text-sm">
                Login
              </p>
              <div>
                <Button type="primary" title="Get started" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
