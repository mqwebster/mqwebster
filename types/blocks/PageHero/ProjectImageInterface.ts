import { ContentfulImageInterface } from "@/types/ContentfulImageInterface";

export interface ProjectImageInterface {
  id: string;
  title: string;
  link?: string;
  image: ContentfulImageInterface;
  newTab: boolean;
}
