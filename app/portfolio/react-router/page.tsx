"use client";
import github from "/public/icons/github-icon.png";
import Button from "@/app/components/atoms/Button";
import Main from "./Main.jsx";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        id="react-router"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <div className="flex flex-col">
          <div className="about-content w-full dark:bg-black pb-32">
            <h1 className="font-title type-preset-2 mb-10">
              React Router Tutorial
            </h1>

            <div className="w-max flex flex-col gap-2 font-title type-preset-4">
              <span>The Code...</span>
              <Button
                link="https://github.com/mqwebster/mqwebster/tree/main/app/portfolio/react-router"
                text="GitHub"
                icon={github}
                type="social"
              />
            </div>
          </div>

          <div className="w-full flex min-h-[60vh] rounded-lg overflow-hidden">
            <Main />
          </div>
        </div>
      </section>
    </main>
  );
}
