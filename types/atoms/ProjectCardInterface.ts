import { ContentfulImageInterface } from "@/types/ContentfulImageInterface";

export interface ProjectCardInterface {
  id: string;
  title: string;
  plainbody?: string;
  image: ContentfulImageInterface;
  buttonText: string;
  buttonLink: string;
}
