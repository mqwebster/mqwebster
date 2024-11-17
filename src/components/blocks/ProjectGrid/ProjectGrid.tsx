import { ProjectGridInterface } from "@/types/blocks/ProjectGridInterface";
import ProjectCard from "../../atoms/ProjectCard";

function ProjectGrid({
  id,
  type,
  projectListCollection,
}: ProjectGridInterface) {
  return (
    <section className="w-full md:max-w-screen-xl z-0 px-8 py-8">
      <div className="w-full grid grid-cols-2 gap-8">
        {/* @ts-ignore */}
        {projectListCollection?.items.map((project) => {
          return (
            <div key={project.title}>
              <ProjectCard id={project.sys.id} type={type} {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectGrid;
