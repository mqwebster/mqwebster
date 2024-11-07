import { ContentfulImageInterface } from "./ContentfulImageInterface";
import { PageHeroInterface } from "./PageHero/PageHeroInterface";

export interface PageInterface {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: ContentfulImageInterface;
  pageHero: PageHeroInterface;
  pageContent: any;
}
