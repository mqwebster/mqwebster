"use client";
import { useState } from "react";
import github from "/public/icons/github-icon.png";
import Button from "@/app/components/atoms/Button";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  function toggle() {
    setDarkMode(!darkMode);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        id="light-dark-mode"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <div className="flex flex-col">
          <div className="w-full dark:bg-black pb-16">
            <h2 className="font-title type-preset-2 mb-10">
              Light - Dark Mode
            </h2>

            <div className="w-max flex flex-col gap-2 font-title type-preset-4">
              <span>The Code...</span>
              <Button
                link="https://github.com/mqwebster/mqwebster/tree/main/app/portfolio/light-dark-mode"
                text="GitHub"
                icon={github}
                type="social"
              />
            </div>
          </div>

          <div className="flex flex-col w-full h-[600px] m-auto bg-white rounded-md overflow-hidden">
            <Navbar isDark={darkMode} toggle={toggle} />
            <Card isDark={darkMode} />
          </div>
        </div>
      </section>
    </main>
  );
}
