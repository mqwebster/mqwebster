import data from "./data.js";

import Navbar from "@/src/app/portfolio/airbnb-clone/components/Navbar";
import Card from "@/src/app/portfolio/airbnb-clone/components/Card";
import Hero from "@/src/app/portfolio/airbnb-clone/components/Hero";

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
