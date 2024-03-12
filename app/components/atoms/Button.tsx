"use client";
import { useState } from "react";
import Image from "next/image";

export default function Button({ icon, link, text, type }) {
  const [btnText, setBtnText] = useState(text);

  const btnContent = (
    <div className="group relative w-12 h-12 hover:w-40 overflow-clip flex items-center justify-between rounded-full border-2 hover:border-r-0 border-blue-base transition-[width] duration-[800ms] pr-10 font-body type-preset-base">
      <span className="hidden group-hover:block mx-auto">{btnText}</span>
      <div className="buttonImage group-hover:rotate-[360deg] absolute right-0 transition-transform duration-[800ms] w-12 h-12 p-3 rounded-full border-0 group-hover:border-2 border-blue-base">
        <Image
          src={icon}
          alt="Button Icon"
          className="object-contain dark:invert"
        />
      </div>
    </div>
  );

  function emailBtn() {
    function copyEmail() {
      setBtnText("Copied!");
      const newLink = link.replace("mailto:", "");
      navigator.clipboard.writeText(newLink);

      setTimeout(() => {
        setBtnText(text);
      }, 4000);
    }

    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          copyEmail();
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          {btnContent}
        </a>
      </button>
    );
  }

  function resumeBtn() {
    function download() {
      setBtnText("Downloaded!");
      setTimeout(() => {
        setBtnText(text);
      }, 2000);
    }
    return (
      <button onClick={download}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          download="Marques-Webster-Resume"
        >
          {btnContent}
        </a>
      </button>
    );
  }

  function buttonType(type) {
    return (
      {
        email: emailBtn(),
        resume: resumeBtn(),
      }[type] || (
        <button>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {btnContent}
          </a>
        </button>
      )
    );
  }

  return buttonType(type);
}
