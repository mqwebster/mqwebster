"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { link: "/", text: "Home" },
  { link: "/resume", text: "Resume" },
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
    ["#228ee800", "#228ee800", "#228ee8c4"]
  );
  const fgColor = useTransform(
    scrollYProgress,
    [0, 0.18, 0.2],
    ["#000000", "#000000", "#ffffff"]
  );
  const bgBlur = useTransform(
    scrollYProgress,
    [0, 0.18, 0.2],
    ["blur(0)", "blur(0)", "blur(12px)"]
  );

  return (
    <nav
      id="navbar"
      className={`w-full pt-4 sticky top-0 z-50 ${
        menu ? "" : "bg-gradient-to-b from-[#f0f0f0] dark:from-black from-10%"
      }`}
    >
      <motion.div
        style={{
          backgroundColor: menu ? "transparent" : bgColor,
          backdropFilter: bgBlur,
          WebkitBackdropFilter: bgBlur,
        }}
        className={`nav-container relative z-10 flex justify-between items-center md:max-w-screen-xl px-8 py-2 mx-1 lg:mx-auto rounded-lg ${
          menu && "!backdrop-blur-none"
        }`}
      >
        <Link href={`/`}>
          <Image
            src="/images/MarquesWebster.png"
            alt="Marques Webster"
            width={48}
            height={48}
          />
        </Link>
        <div
          className="flex items-center h-[48px] cursor-pointer"
          onClick={toggle}
        >
          <div className="relative flex flex-col justify-center items-end gap-[0.125rem] w-[40px]">
            <motion.div
              style={{ backgroundColor: fgColor }}
              className={`w-full h-[0.125rem] dark:!bg-white rounded-lg transition-all duration-300 ${
                menu &&
                "absolute -rotate-[225deg] origin-center top-0 !bg-white"
              }`}
            ></motion.div>
            <div className={`w-full h-[0.125rem] bg-transparent`}></div>
            <motion.div
              style={{ backgroundColor: fgColor }}
              className={`w-full h-[0.125rem] dark:!bg-white rounded-lg transition-all duration-300 ${
                menu &&
                "absolute rotate-[225deg] origin-center bottom-0 !bg-white"
              }`}
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {menu && (
        <div
          className={`absolute top-0 left-0 z-0 w-full h-screen pt-[96px] pb-16 overflow-scroll bg-blue-base bg-opacity-[0.77] backdrop-blur-lg blueScrollbar`}
        >
          <div className="flex justify-between items-center md:max-w-screen-xl px-8 mx-auto">
            <ul className="flex flex-col gap-2 heading-1 font-title text-white py-8">
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
                      className={`h-1 w-0 rounded-lg group-hover/navItem:w-full bg-white transition-[width] duration-500`}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
