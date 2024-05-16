"use client";
import PortfolioPageHeader from "@/app/components/blocks/Portfolio/PortfolioPageHeader";
import App from "./App";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        id="notes-app"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <div className="flex flex-col">
          <PortfolioPageHeader
            title="Notes App"
            githubLink="https://github.com/mqwebster/mqwebster/tree/main/app/portfolio/react-router"
          />

          <div className="bg-white text-black w-full rounded-lg overflow-hidden">
            <App />
          </div>
        </div>
      </section>
    </main>
  );
}
