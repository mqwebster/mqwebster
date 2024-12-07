"use client";
import { useEffect, useState } from "react";
import Button from "@/src/components/atoms/Button";

export default function Footer() {
  const [visitors, setVisitors] = useState("");

  useEffect(() => {
    const apiURL =
      "https://rty7kmnenc.execute-api.us-east-2.amazonaws.com/api/siteViewCount";

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setVisitors(data.body);
      });
  }, []);

  return (
    <footer
      id="footer"
      className="w-full md:max-w-screen-xl z-0 px-8 pt-20 pb-40 mx-auto"
    >
      <div>
        <h2 className="font-title heading-2">Get In Contact...</h2>
        <p className="body-lg font-body py-4 max-w-2xl">{`I'm currently open to work, and I'm always ready to learn!`}</p>

        <div className="flex flex-col md:flex-row gap-4 mt-10 md:mt-20">
          <Button
            href={
              "https://assets.ctfassets.net/vvji94wwc94s/2i1QoCtd7LEfP7nYNNbFCU/f661156c42d65d0abde1f106d196d06e/MQWebsterResume.pdf"
            }
            text="Resume"
          />
          <Button href="mailto:contact@mqwebster.com" text="Email" />
          <Button
            href="https://www.linkedin.com/in/mqwebster/"
            text="LinkedIn"
          />
          <Button href="https://github.com/mqwebster" text="GitHub" />
        </div>

        <div className="mt-16 flex flex-col gap-2">
          <p className="font-body body-base">
            The number of visitors to this website is
          </p>
          <span
            id="visitors-count"
            className="font-title heading-3 text-blue-base"
          >
            {visitors}
          </span>
        </div>
      </div>
    </footer>
  );
}
