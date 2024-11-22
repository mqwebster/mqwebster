import { ContentfulImageInterface } from "@/types/ContentfulImageInterface";

export interface ProjectCardInterface {
  id: string;
  gridType: "3D Card" | "Bento" | "Featured Projects";
  title: string;
  plainbody?: string;
  type?: "Design System" | "Project" | "Site";
  image: ContentfulImageInterface;
  buttonText: string;
  buttonLink: string;
}
