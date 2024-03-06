"use client";
import { useState } from "react";
import Image from "next/image";

export default function Button({ icon, link, text, type }) {
  const [btnText, setBtnText] = useState(text);

  const btnContent = (
    <div>
      <span className="btn-text">{btnText}</span>
      <div className="btn-img">
        <Image src={icon} alt="Button Icon" />
      </div>
    </div>
  );

  function emailBtn() {
    function copyEmail() {
      setBtnText("Copied!");
      const link = link.replace("mailto:", "");
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
