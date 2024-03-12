"use client";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";

import download from "/public/icons/download-icon.png";
import email from "/public/icons/email-icon.png";
import github from "/public/icons/github-icon.png";
import linkedin from "/public/icons/linkedin-icon.png";
// import resume from "/public/files/resume.pdf";

export function Contact() {
  // const [visitors, setVisitors] = useState("");

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
    <section
      id="contact"
      className="w-full md:max-w-screen-xl z-0 px-8 pt-20 pb-40"
    >
      <div>
        <h2 className="font-title type-preset-2 mb-10">Get In Contact...</h2>
        <p className="font-body type-preset-base max-w-2xl">{`I'm currently open to work, and I'm always ready to learn!`}</p>

        <div className="flex gap-4 mt-20">
          {/* <Button link={resume} text="Resume" icon={download} type="resume" /> */}
          <Button
            link="mailto:marques.q.webster@gmail.com"
            text="Email"
            icon={email}
            type="email"
          />
          <Button
            link="https://www.linkedin.com/in/marques-webster/"
            text="LinkedIn"
            icon={linkedin}
            type="social"
          />
          <Button
            link="https://github.com/mqwebst2"
            text="GitHub"
            icon={github}
            type="social"
          />
        </div>

        {/* <div className="visitors">
          <p className="visitors-text">
            The number of visitors to this website is
          </p>
          <span id="visitors-count">{visitors}</span>
        </div> */}
      </div>
    </section>
  );
}
