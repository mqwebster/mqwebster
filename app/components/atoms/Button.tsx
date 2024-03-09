"use client";
import { useState } from "react";
import Image from "next/image";

export default function Button({ icon, link, text, type }) {
  const [btnText, setBtnText] = useState(text);

  const btnContent = (
    <div className="group/button w-10 h-10 hover:w-40 overflow-clip flex items-center justify-between rounded-full border-0 hover:border-2 hover:border-r-0 border-blue-base">
      <span className="hidden group-hover/button:block mx-auto">{btnText}</span>
      <div className="max-w-10 max-h-10 p-2 rounded-full border-2 border-blue-base">
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
      var link = link.replace("mailto:", "");
      navigator.clipboard.writeText(link);

      setTimeout(() => {
        setBtnText(text);
      }, 2000);
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
