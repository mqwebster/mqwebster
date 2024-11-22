import { ProjectCardInterface } from "@/types/atoms/ProjectCardInterface";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import getImage from "@/src/lib/contentful/getImage";

async function ProjectCard({
  id,
  gridType,
  title,
  plainbody,
  type,
  buttonText,
  buttonLink,
}: ProjectCardInterface) {
  const imageUrl = await getImage(id);

  const ThreeDCard = () => {
    return (
      <CardContainer className="">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <CardItem translateZ="50" className="type-preset-lg">
            {title}
          </CardItem>
          <CardItem as="p" translateZ="60" className="max-w-sm mt-2">
            {plainbody}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={`https:${imageUrl}`}
              height="1000"
              width="1000"
              className="w-full aspect-video object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
  };

  if (gridType === "3D Card") return <ThreeDCard />;

  if (gridType === "Featured Projects")
    return (
      <DirectionAwareHover imageUrl={`https:${imageUrl}`}>
        <p className={`type-preset-lg font-body font-bold`}>{title}</p>
      </DirectionAwareHover>
    );
}

export default ProjectCard;
