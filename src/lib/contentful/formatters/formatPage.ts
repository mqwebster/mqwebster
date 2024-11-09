import { PageInterface } from "@/types/PageInterface";
import { formatImage } from "./formatImage";

export function formatPage(page) {
  let formattedPage: PageInterface = {
    id: page.sys.id,
    title: page.title,
    slug: page.slug,
    description: page.description,
    image: formatImage(page.socialImage),
    pageHero: page.pageHero,
    pageContent: page.contentCollection.items,
  };

  return formattedPage;
}
