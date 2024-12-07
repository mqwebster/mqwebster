"use client";
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
          <div className="flex flex-col gap-16 pb-16 bg-purple-100 rounded-lg overflow-hidden">
            <Header />
            <Meme />
          </div>
        </div>
      </section>
    </main>
  );
}
