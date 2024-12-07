import { ProjectGridInterface } from "@/types/blocks/ProjectGridInterface";
import ProjectCard from "../../atoms/ProjectCard";
import { BentoGrid } from "../../ui/bento-grid";

function ProjectGrid({
  id,
  type,
  projectListCollection,
}: ProjectGridInterface) {
  if (type === "Bento")
    return (
      <section className="w-full md:max-w-screen-xl z-0 px-8 pt-4 pb-8 md:py-8">
        <BentoGrid className="mx-auto">
          {/* @ts-ignore */}
          {projectListCollection?.items.map((project, i) => {
            return (
              <ProjectCard
                key={project.sys.id}
                gridType={type}
                id={project.sys.id}
                index={i}
                {...project}
              />
            );
          })}
        </BentoGrid>
      </section>
    );

  return (
    <section className="w-full md:max-w-screen-xl z-0 px-8 pt-4 pb-8 md:py-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* @ts-ignore */}
        {projectListCollection?.items.map((project, i) => {
          return (
            <div key={project.title}>
              <ProjectCard
                id={project.sys.id}
                gridType={type}
                index={i}
                {...project}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectGrid;
