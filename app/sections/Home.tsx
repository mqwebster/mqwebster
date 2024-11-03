"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export function Home() {
  return (
    <section className="overflow-clip w-full z-0 pb-40">
      <HeroParallax products={products}>
        <Header />
      </HeroParallax>
    </section>
  );
}

export const Header = () => {
  return (
    <div className="md:max-w-screen-xl relative mx-auto mt-[20vh] px-8 w-full">
      <span className="font-body type-preset-base">{`Hey, I'm...`}</span>
      <h1 className="font-title type-preset-1">Marques Webster</h1>
      <p className="font-body type-preset-lg max-w-2xl">
        {`And I'm a Frontend Software Engineer and Desinger that loves to build user-centered and dynamic experiences.`}
      </p>
    </div>
  );
};

export const products = [
  {
    title: "Mozilla 2D Breakout Game",
    link: "/portfolio/2d-breakout-game",
    thumbnail: "/images/home-cta/2D Breakout Game.jpg",
    newWindow: false,
  },
  {
    title: "Nava PBC 2023 DEI Report",
    link: "https://navapbc.com/dei",
    thumbnail: "/images/home-cta/2023 DEI Report.jpg",
  },
  {
    title: "Nava PBC 2023 Public Benefit Report",
    link: "https://navapbc.com/public-benefit-reports/2023",
    thumbnail: "/images/home-cta/2023 PBR.jpg",
  },
  {
    title: "Nava PBC 2024 Public Benefit Report",
    link: "https://navapbc.com/public-benefit-reports/2024",
    thumbnail: "/images/home-cta/2024 PBR.jpg",
  },
  {
    title: "Airbnb Experiences Clone",
    link: "/portfolio/airbnb-clone",
    thumbnail: "/images/home-cta/Airbnb Experiences Clone.jpg",
    newWindow: false,
  },
  {
    title: "Breath'g Vegan Design System",
    link: "https://www.figma.com/file/GRf8PC942RFdQhgeDIyRPw/Breath'g-Vegan-Design-System?type=design&t=ejG9jcaijtIXE1xa-6",
    thumbnail: "/images/home-cta/Breath'g Vegan Design System Cover.jpg",
  },
  {
    title: "Breath'g Vegan",
    link: "https://breathgvegan.com",
    thumbnail: "/images/home-cta/Breath'g Vegan.jpg",
  },
  {
    title: "Nava PBC Insights Filtering System",
    link: "https://navapbc.com/insights",
    thumbnail: "/images/home-cta/Insights Filtering System.jpg",
  },
  {
    title: "Light-Dark Mode",
    link: "/portfolio/light-dark-mode",
    thumbnail: "/images/home-cta/Light-Dark Mode.jpg",
    newWindow: false,
  },
  {
    title: "Marques Q. Webster Portfolio",
    link: "https://github.com/mqwebster/mqwebster",
    thumbnail: "/images/home-cta/Marques Q Webster Portfolio.jpg",
  },
  {
    title: "Meme Generator",
    link: "/portfolio/meme-generator",
    thumbnail: "/images/home-cta/Meme Generator.jpg",
    newWindow: false,
  },
  {
    title: "Nava Labs",
    link: "https://navapbc.com/nava-labs",
    thumbnail: "/images/home-cta/Nava Labs.jpg",
  },
  {
    title: "Notes App",
    link: "/portfolio/notes-app",
    thumbnail: "/images/home-cta/Notes App.jpg",
    newWindow: false,
  },
  {
    title: "Partnership For Resilience Design System",
    link: "https://www.figma.com/file/IiVKbpHuk7baoWxlboh5lF/P4R-Design-System?type=design&t=ejG9jcaijtIXE1xa-6",
    thumbnail: "/images/home-cta/P4R Design System Cover.jpg",
  },
  {
    title: "Paper Trails",
    link: "https://paper-trails-dev.vercel.app",
    thumbnail: "/images/home-cta/Paper Trails.jpg",
  },
  {
    title: "React Router Tutorial",
    link: "/portfolio/react-router",
    thumbnail: "/images/home-cta/React Router Tutorial.jpg",
    newWindow: false,
  },
  {
    title: "Tenzies Game",
    link: "/portfolio/tenzies-dice-game",
    thumbnail: "/images/home-cta/Tenzies Game.jpg",
    newWindow: false,
  },
  // {
  //   title: "Travel Journal",
  //   link: "/portfolio/travel-journal",
  //   thumbnail: "/images/home-cta/Travel Journal.jpg",
  //   newWindow: false,
  // },
  {
    title: "Your Career Tapestry Design System",
    link: "https://www.figma.com/file/THMNO5iyDufQBgz68GJKMX/Your-Career-Tapestry-Design-System?type=design&t=ejG9jcaijtIXE1xa-6",
    thumbnail: "/images/home-cta/YCT Design System Cover.jpg",
  },
  {
    title: "Your Career Tapestry",
    link: "https://yctapestry.com",
    thumbnail: "/images/home-cta/Your Career Tapestry.jpg",
  },
];
