"use client";
import { useEffect, useState } from "react";

import download from "@/public/icons/download-icon.png";
import email from "@/public/icons/email-icon.png";
import github from "@/public/icons/github-icon.png";
import linkedin from "@/public/icons/linkedin-icon.png";

import Button from "@/src/components/atoms/Button";

export default function Footer() {
  const [visitors, setVisitors] = useState("");

  // useEffect(() => {
  //   const apiURL =
  //     "https://rty7kmnenc.execute-api.us-east-2.amazonaws.com/api/siteViewCount";

  //   fetch(apiURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setVisitors(data.body);
  //     });
  // }, []);

  return (
    <footer
      id="footer"
      className="w-full md:max-w-screen-xl z-0 px-8 pt-20 pb-40 mx-auto"
    >
      <div>
        <h2 className="font-title type-preset-2 mb-10">Get In Contact...</h2>
        <p className="font-body type-preset-base max-w-2xl">{`I'm currently open to work, and I'm always ready to learn!`}</p>

        <div className="flex flex-col md:flex-row gap-4 mt-20">
          <Button href={"/files/resume.pdf"} text="Resume" />
          <Button href="mailto:contact@mqwebster.com" text="Email" />
          <Button
            href="https://www.linkedin.com/in/mqwebster/"
            text="LinkedIn"
          />
          <Button href="https://github.com/mqwebster" text="GitHub" />
        </div>

        <div className="mt-16 flex flex-col gap-2">
          <p className="font-body type-preset-base">
            The number of visitors to this website is
          </p>
          <span
            id="visitors-count"
            className="font-bold type-preset-4 text-blue-base"
          >
            {visitors}
          </span>
        </div>
      </div>
    </footer>
  );
}
