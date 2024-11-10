import { ContentfulImageInterface } from "./ContentfulImageInterface";
import { PageHeroInterface } from "./blocks/PageHero/PageHeroInterface";

export interface PageInterface {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: ContentfulImageInterface;
  pageHero: PageHeroInterface;
  pageContentCollection: any;
}
