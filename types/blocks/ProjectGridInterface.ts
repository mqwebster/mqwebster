import { ProjectCardInterface } from "../atoms/ProjectCardInterface";

export interface ProjectGridInterface {
  id: string;
  type: "3D Card" | "Bento" | "Featured Projects";
  projectListCollection: Array<ProjectCardInterface>;
}
