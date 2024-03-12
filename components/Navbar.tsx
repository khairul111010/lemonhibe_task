"use client";
import Image from "next/image";
import LogoWeb from "../public/logo_web.svg";
import MenuLogo from "../public/menu.svg";
import LogoMobile from "../public/logo_mobile.svg";
import { Menu, menuList } from "@/config/menu";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="text-primary h-[100px] py-8 font-medium text-lg">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="hidden md:block z-50">
          <Image src={LogoWeb} alt="React Logo" width={116} height={32} />
        </Link>
        <Link href={"/"} className="md:hidden z-50">
          <Image src={LogoMobile} alt="React Logo" width={60} height={16} />
        </Link>

        <div className="md:flex items-center gap-14 hidden">
          {menuList.map((item: Menu, index: number) => {
            return (
              <Link key={index} href={item.to}>
                {item.name}
              </Link>
            );
          })}
        </div>
        <div
          className={`absolute z-40 top-0 left-0 right-0 bottom-0 overflow-y-scroll w-screen h-screen bg-white pt-24 px-4 text-xl ${
            menu ? "flex flex-col" : "hidden"
          }`}
        >
          <div className="border-t">
            {menuList.map((item: Menu, index: number) => {
              return (
                <Link
                  className="block py-4 font-medium"
                  key={index}
                  href={item.to}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <Image
          src={MenuLogo}
          alt="React Logo"
          width={24}
          height={24}
          onClick={() => setMenu((prev) => !prev)}
          className="z-50 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
