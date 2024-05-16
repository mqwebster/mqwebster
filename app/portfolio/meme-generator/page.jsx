"use client";
import github from "/public/icons/github-icon.png";
import Button from "@/app/components/atoms/Button";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        id="meme-generator"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <div className="flex flex-col">
          <div className="w-full dark:bg-black pb-32">
            <h1 className="font-title type-preset-2 mb-10">Meme Generator</h1>

            <div className="w-max flex flex-col gap-2 font-title type-preset-4">
              <span>The Code...</span>
              <Button
                link="https://github.com/mqwebster/mqwebster/tree/main/app/portfolio/meme-generator"
                text="GitHub"
                icon={github}
                type="social"
              />
            </div>
          </div>

          <div className="flex flex-col gap-16 pb-16 bg-purple-100 rounded-lg overflow-hidden">
            <Header />
            <Meme />
          </div>
        </div>
      </section>
    </main>
  );
}
