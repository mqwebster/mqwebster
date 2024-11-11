import { ProjectImageInterface } from "./ProjectImageInterface";

export interface PageHeroInterface {
  sys: { id: string };
  type: "Default" | "Macbook Scroll" | "Projects List";
  beforeText?: string;
  mainText: string;
  afterText?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  projectImageListCollection?: Array<ProjectImageInterface>;
}
