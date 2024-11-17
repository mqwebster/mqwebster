import { ContentfulImageInterface } from "@/types/ContentfulImageInterface";

export interface ProjectCardInterface {
  id: string;
  type: "3D Card" | "Bento" | "Featured Projects";
  title: string;
  plainbody?: string;
  image: ContentfulImageInterface;
  buttonText: string;
  buttonLink: string;
}
