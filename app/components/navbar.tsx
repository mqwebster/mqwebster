"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function toggle() {
    setMenu(!menu);
  }

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menu]);

  const navItems = [
    { link: "#home", text: "Home" },
    { link: "#about", text: "About" },
    { link: "#resume", text: "Resume" },
    { link: "#portfolio", text: "Portfolio" },
    { link: "#contact", text: "Contact" },
  ];
  return (
    <nav
      id="navbar"
      className={`max-h-[112px] w-full py-4 bg-blue-base sticky top-0 z-50`}
    >
      <div className="mx-auto flex justify-between items-center md:max-w-screen-xl px-8">
        <Image
          src="/MarquesWebster.png"
          alt="Marques Webster"
          width={72}
          height={72}
        />

        <div>
          <div
            className="flex lg:hidden items-center h-[60px] cursor-pointer"
            onClick={toggle}
          >
            <div className="relative flex flex-col justify-center items-end gap-2 w-[60px]">
              <div
                className={`w-2/3 h-1 bg-white rounded-lg transition-all duration-500 ${
                  menu && "absolute -rotate-[405deg] origin-center top-0"
                }`}
              ></div>
              <div
                className={`w-full h-1 bg-white rounded-lg transition-all duration-500 ${
                  menu && " scale-0 bg-transparent"
                }`}
              ></div>
              <div
                className={`w-2/3 h-1 bg-white rounded-lg transition-all duration-500 ${
                  menu && "absolute rotate-[405deg] origin-center bottom-0"
                }`}
              ></div>
            </div>
          </div>

          <ul className="hidden lg:flex flex-row gap-4 text-white">
            {navItems.map((item) => {
              return (
                <li
                  key={item.text}
                  className="group/navItem flex flex-col gap-1"
                >
                  <Link href={item.link}>{item.text}</Link>
                  <div className="h-[3px] w-0 rounded-lg group-hover/navItem:w-full bg-white transition-[width] duration-500"></div>
                </li>
              );
            })}
          </ul>

          {menu && (
            <div
              className={`absolute top-[100%] left-0 w-full overflow-hidden`}
            >
              <ul className="flex lg:hidden flex-col gap-4 w-full h-[100vh] text-white bg-blue-base p-8">
                {navItems.map((item) => {
                  return (
                    <li key={item.text} onClick={toggle}>
                      <Link href={item.link}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
