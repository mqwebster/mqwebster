"use client";
import { useState } from "react";
import PortfolioPageHeader from "@/app/components/blocks/Portfolio/PortfolioPageHeader";
import Image from "next/image";

export default function Page() {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/image-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: formData.get("prompt"),
        }),
      });

      if (res.ok) {
        const { image } = await res.json();
        setImage(image);
      } else {
        const err = await res.text();
        alert(err);
        console.error(err);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        id="ai-image-generator"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <PortfolioPageHeader
          title="OpenAI Image Generator"
          githubLink="https://github.com/mqwebster/mqwebster/tree/main/app/portfolio/ai-image-generator"
        />

        <div className="grid place-items-center">
          <h2 className="font-title type-preset-3">AI Image Generator</h2>

          <div
            id="result"
            className="flex justify-center items-center aspect-square max-w-[512px] w-full bg-[#3a3a43] text-white"
          >
            {image ? (
              <Image
                src={image}
                alt="Generated image"
                width={512}
                height={512}
              />
            ) : (
              "Image will appear here"
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center max-w-[512px] w-full mt-8"
          >
            <label htmlFor="prompt">Prompt</label>
            <textarea
              name="prompt"
              maxLength={160}
              className="w-full h-[100px] my-[10px] text-black"
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-4 w-full h-[50px] bg-[#1b1b1e] text-white border-none rounded-md mb-[50px] hover:bg-[#2b2b2e] disabled:bg-gray-400"
            >
              <span>Generat{isLoading ? "ing... " : "e"}</span>
              <span
                className={`${
                  isLoading ? "block animate-spin-slow duration-[2s]" : "hidden"
                }`}
              >
                🧠
              </span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
