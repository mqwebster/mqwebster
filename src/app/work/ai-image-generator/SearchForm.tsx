"use client";
import { useState } from "react";
import Image from "next/image";

export default function SearchForm() {
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
    <section
      id="ai-image-generator"
      className="w-full md:max-w-screen-xl z-0 px-8 py-16"
    >
      <div className="grid place-items-start md:place-items-center">
        <h2 className="font-title heading-3 mb-4">What Can You Imagine?</h2>

        <div
          id="result"
          className="flex justify-center items-center aspect-square max-w-[512px] w-full bg-[#3a3a43] text-white body-base font-body rounded-md"
        >
          {image ? (
            <Image src={image} alt="Generated image" width={512} height={512} />
          ) : (
            "Image will appear here"
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start md:items-center max-w-[512px] w-full mt-8"
        >
          <label htmlFor="prompt" className="body-base font-body">
            Prompt
          </label>
          <textarea
            name="prompt"
            maxLength={160}
            className="w-full h-[100px] my-[10px] text-black rounded-md"
          ></textarea>

          <div className="w-full mt-4">
            <button
              className={
                "w-full rounded-lg border border-black bg-transparent text-white dark:border-white relative group transition duration-200"
              }
            >
              <div className="px-10 py-3">
                <div className="rounded-lg absolute -bottom-2 right-2 bg-blue-base group-hover:bg-blue-dark h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                <div className="relative flex items-center justify-center">
                  <span>Generat{isLoading ? "ing... " : "e"}</span>
                  <span
                    className={`${
                      isLoading
                        ? "block animate-spin-slow duration-[2s]"
                        : "hidden"
                    }`}
                  >
                    🧠
                  </span>
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
