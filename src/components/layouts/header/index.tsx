import Button from "@/components/shared/button";
import Navigation from "./navigation";
import { BsCart } from "react-icons/bs";
import Logo from "./logo";
import { BiUserCircle } from "react-icons/bi";
import { Avatar, Badge, Dropdown as DP, MenuProps, Space } from "antd";
import Hamburger from "./hamburger";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { removeUser } from "@/redux/slices/currentUser";

export default function Header() {
  const currentUser = useAppSelector((store) => store.currentUser);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [hamburger, setHamburger] = useState(false);

  const handleDeconnexion = () => {
    dispatch(removeUser());
    router.push("/");
  };

  const DropDown = ({ children }: { children: JSX.Element }) => {
    const items: MenuProps["items"] = [
      {
        label: (
          <Link href={"/"}>
            <span>Home</span>
          </Link>
        ),
        key: "0",
      },
      {
        label: (
          <Link href={"/seller/dashboard"}>
            <span>Dashboard</span>
          </Link>
        ),
        key: "0",
      },
      {
        type: "divider",
      },
      {
        label: <Link href={"/auth/signin"}><span onClick={handleDeconnexion}>Déconnexion</span></Link>,
        key: "3",
      },
    ];

    return (
      <DP menu={{ items }} trigger={["click", "hover"]}>
        {children}
      </DP>
    );
  };

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
          {currentUser.accessToken ? (
            <div className="flex items-center justify-center gap-4">
              <div className=" hover:text-deep-orange-400 text-black cursor-pointer">
                <Badge size="small" dot>
                  <BsCart className="transition-all text-lg" />
                </Badge>
              </div>
              <DropDown>
                <div className=" flex items-center justify-center gap-1 cursor-pointer">
                  <div className=" w-8 flex items-center justify-center font-semibold h-8 rounded-full bg-primary-color text-white">
                  {currentUser.user?.username.substring(0,1)}
                  </div>
                  <p className=" text-xs font-light">
                    {currentUser.user?.username}
                  </p>
                  <IoMdArrowDropdown className=" text-sm" />
                </div>
              </DropDown>
            </div>
          ) : (
            <div className=" flex items-center justify-center gap-3">
              <Link href={"/auth/signin"}>
                <Button type="primary" title="Connexion" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
