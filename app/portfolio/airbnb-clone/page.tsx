"use client";
import github from "/public/icons/github-icon.png";
import Button from "@/app/components/atoms/Button";
import data from "./data.js";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";

export default function Page() {
  const dataElements = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        id="airbnb-clone"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16 mb-40"
      >
        <div className="flex flex-col">
          <div className="w-full dark:bg-black pb-16">
            <h2 className="font-title type-preset-2 mb-10">Airbnb Clone</h2>

            <div className="w-max flex flex-col gap-2 font-title type-preset-4">
              <span>The Code...</span>
              <Button
                link="https://github.com/mqwebster/mqwebster/tree/main/app/portfolio/airbnb-clone"
                text="GitHub"
                icon={github}
                type="social"
              />
            </div>
          </div>

          <div className="flex flex-col w-full m-auto bg-white rounded-md overflow-hidden">
            <Navbar />

            <Hero />

            <div className="flex gap-[20px] overflow-x-auto px-[80px] pb-[40px]">
              {dataElements}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
