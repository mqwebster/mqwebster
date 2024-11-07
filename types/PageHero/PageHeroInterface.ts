import { ProjectImageInterface } from "./ProjectImageInterface";

export interface PageHeroInterface {
  id: string;
  type: string;
  beforeText?: string;
  mainText: string;
  afterText?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  projectImageList: Array<ProjectImageInterface>;
}
