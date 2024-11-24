import getImage from "@/src/lib/contentful/getImage";
import { ProjectCardInterface } from "@/types/atoms/ProjectCardInterface";
import ThreeDCard from "../ui/3d-card";
import { BentoGridItem } from "../ui/bento-grid";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

async function ProjectCard({ ...props }: ProjectCardInterface) {
  const imageUrl = await getImage(props.id);

  if (props.gridType === "3D Card")
    return (
      <ThreeDCard
        title={props.title}
        plainbody={props.plainbody}
        imageUrl={imageUrl}
      />
    );

  if (props.gridType === "Bento")
    return (
      <BentoGridItem
        key={props.id}
        id={props.id}
        title={props.title}
        description={props.plainbody}
        type={props.type}
        imageUrl={`https:${imageUrl}`}
        className={props.index % 3 === 0 ? "md:col-span-2" : ""}
      />
    );

  if (props.gridType === "Featured Projects")
    return (
      <DirectionAwareHover imageUrl={`https:${imageUrl}`}>
        <p className={`type-preset-lg font-body font-bold`}>{props.title}</p>
      </DirectionAwareHover>
    );
}

export default ProjectCard;
