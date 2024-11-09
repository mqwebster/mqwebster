"use client";
// @ts-ignore
import PortfolioPageHeader from "@/src/components/blocks/Portfolio/PortfolioPageHeader.jsx";
import data from "./data.js";

import Navbar from "./components/Navbar/index.jsx";
import Card from "./components/Card/index.jsx";
import Hero from "./components/Hero/index.jsx";

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
          <PortfolioPageHeader
            title="Airbnb Clone"
            githubLink="https://github.com/mqwebster/mqwebster/tree/main/app/portfolio/airbnb-clone"
          />

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
