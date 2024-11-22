// @ts-nocheck
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PageHeroInterface } from "@/types/blocks/PageHeroInterface";

import { ProjectImage } from "../atoms/ProjectImage";
import Button from "../atoms/Button";

export const HeroParallax = ({ ...props }: PageHeroInterface) => {
  const firstRow = props.projectImageListCollection?.items.slice(0, 5);
  const secondRow = props.projectImageListCollection?.items.slice(5, 10);
  const thirdRow = props.projectImageListCollection?.items.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="overflow-x-clip antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header
        beforeText={props.beforeText}
        mainText={props.mainText}
        afterText={props.afterText}
        buttonText={props.buttonText}
        buttonLink={props.buttonLink}
        secondaryButtonText={props.secondaryButtonText}
        secondaryButtonLink={props.secondaryButtonLink}
      />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow?.map((project) => (
            <ProjectImage
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow?.map((project) => (
            <ProjectImage
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow?.map((project) => (
            <ProjectImage
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({
  beforeText = null,
  mainText,
  afterText,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <div className="md:max-w-screen-xl relative mx-auto mt-[20vh] px-8 w-full">
      {beforeText && (
        <span className="font-body type-preset-base">{beforeText}</span>
      )}
      <h1 className="font-title type-preset-1">{mainText}</h1>
      <p className="font-body type-preset-lg max-w-2xl">{afterText}</p>

      <div className="relative z-10 flex gap-4 mt-8 w-fit">
        {buttonText && buttonLink && (
          <Button text={buttonText} href={buttonLink} />
        )}
      </div>
    </div>
  );
};
