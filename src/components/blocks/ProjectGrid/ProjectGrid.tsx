import { ProjectGridInterface } from "@/types/blocks/ProjectGridInterface";
import ProjectCard from "../../atoms/ProjectCard";
import { BentoGrid, BentoGridItem } from "../../ui/bento-grid";

function ProjectGrid({
  id,
  type,
  projectListCollection,
}: ProjectGridInterface) {
  return (
    <section className="w-full md:max-w-screen-xl z-0 px-8 py-8">
      {type === "Bento" ? (
        <div>
          <BentoGrid className="mx-auto">
            {/* @ts-ignore */}
            {projectListCollection?.items.map((item, i) => {
              return (
                <BentoGridItem
                  key={item.sys.id}
                  id={item.sys.id}
                  title={item.title}
                  description={item.description}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              );
            })}
          </BentoGrid>
        </div>
      ) : (
        <div className="w-full grid grid-cols-2 gap-8">
          {/* @ts-ignore */}
          {projectListCollection?.items.map((project) => {
            return (
              <div key={project.title}>
                <ProjectCard id={project.sys.id} gridType={type} {...project} />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default ProjectGrid;
