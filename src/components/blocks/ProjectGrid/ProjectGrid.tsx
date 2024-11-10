import { ProjectGridInterface } from "@/types/blocks/ProjectGridInterface";
import ProjectCard from "../../atoms/ProjectCard";

function ProjectGrid({ id, projectListCollection }: ProjectGridInterface) {
  return (
    <section id="about" className="w-full md:max-w-screen-xl z-0 px-8 py-16">
      <div className="w-full grid grid-cols-2 gap-4">
        {/* @ts-ignore */}
        {projectListCollection?.items.map((project) => {
          return (
            <div key={project.title}>
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectGrid;
