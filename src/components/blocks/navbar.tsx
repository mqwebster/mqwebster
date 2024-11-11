"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { link: "/", text: "Home" },
  { link: "/#about", text: "About" },
  { link: "/#portfolio", text: "Portfolio" },
  { link: "/#resume", text: "Resume" },
  { link: "/#contact", text: "Contact" },
];

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

  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.18, 0.2],
    ["#228ee800", "#228ee800", "#228ee8ff"]
  );
  const fgColor = useTransform(
    scrollYProgress,
    [0, 0.18, 0.2],
    ["#000000", "#000000", "#ffffff"]
  );

  return (
    <motion.nav
      id="navbar"
      style={{ backgroundColor: bgColor }}
      className={`w-full py-4 sticky top-0 z-50 ${
        menu ? "pr-4 !bg-blue-base" : "pr-0"
      }`}
    >
      <div className="flex justify-between items-center md:max-w-screen-xl px-8 mx-auto">
        <Link href={`/`}>
          <Image
            src="/images/MarquesWebster.png"
            alt="Marques Webster"
            width={60}
            height={60}
          />
        </Link>

        <div>
          <div
            className="flex items-center h-[48px] cursor-pointer"
            onClick={toggle}
          >
            <div className="relative flex flex-col justify-center items-end gap-2 w-[48px]">
              <motion.div
                style={{ backgroundColor: fgColor }}
                className={`w-2/3 h-1 dark:!bg-white rounded-lg transition-transform duration-500 ${
                  menu &&
                  "absolute -rotate-[405deg] origin-center top-0 !bg-white"
                }`}
              ></motion.div>
              <motion.div
                style={{ backgroundColor: fgColor }}
                className={`w-full h-1 dark:!bg-white rounded-lg transition-transform duration-500 ${
                  menu && " scale-0 bg-transparent !bg-white"
                }`}
              ></motion.div>
              <motion.div
                style={{ backgroundColor: fgColor }}
                className={`w-2/3 h-1 dark:!bg-white rounded-lg transition-transform duration-500 ${
                  menu &&
                  "absolute rotate-[405deg] origin-center bottom-0 !bg-white"
                }`}
              ></motion.div>
            </div>
          </div>

          {menu && (
            <div
              className={`absolute top-full left-0 w-full h-screen pb-16 overflow-scroll bg-blue-base blueScrollbar`}
            >
              <div className="flex justify-between items-center md:max-w-screen-xl px-8 mx-auto">
                <ul className="flex flex-col gap-2 type-preset-2 font-title text-white py-8">
                  {navItems.map((item) => {
                    return (
                      <li
                        key={item.text}
                        className="group/navItem flex flex-col w-fit"
                      >
                        <Link href={`${item.link}`} onClick={toggle}>
                          {item.text}
                        </Link>
                        <div
                          className={`h-3 w-0 rounded-lg group-hover/navItem:w-full bg-white transition-[width] duration-500`}
                        ></div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
