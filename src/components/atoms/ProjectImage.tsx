import { motion, MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ProjectImageInterface } from "@/types/atoms/ProjectImageInterface";

export const ProjectImage = ({
  project,
  translate,
}: {
  project: ProjectImageInterface;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/project h-96 w-[30rem] relative flex-shrink-0 hover:shadow-xl"
    >
      <Link
        href={project.link}
        target={project.newTab ? "_blank" : ""}
        className="block group-hover/project:shadow-2xl"
      >
        <Image
          src={project.image.url}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-md"
          alt={project.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/project:opacity-80 bg-black pointer-events-none rounded-md"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/project:opacity-100 text-white">
        {project.title}
      </h2>
    </motion.div>
  );
};
