"use client";
import { useState } from "react";
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
        className="w-full md:max-w-screen-xl z-0 px-8 py-16 mb-40"
      >
        <div className="flex flex-col">
          <div className="flex flex-col w-full m-auto bg-white rounded-md overflow-hidden">
            <Navbar isDark={darkMode} toggle={toggle} />
            <Card isDark={darkMode} />
          </div>
        </div>
      </section>
    </main>
  );
}
