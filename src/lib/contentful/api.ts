/**
 * This class constructs GraphQL queries for blog posts, page content and other data
 * and calls out to the Contentful GraphQL API.
 *
 * Contentful GraphQL API docs:
 * https://www.contentful.com/developers/docs/references/graphql/
 *
 * Explore the GraphQL API in depth in the GraphiQL Playground:
 * https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={ACCESS_TOKEN}
 *
 */

import getPageDataBySlug from "./getPageDataBySlug";
import { formatPage } from "./formatters/formatPage";
import { PageInterface } from "@/types/PageInterface";

type PageVariant = "default";

export interface PageQueryInterface {
  slug: string;
  variant?: PageVariant;
  preview?: boolean;
}

export async function getPageDataFromContentful({
  slug,
  variant = "default",
  preview = false,
}: PageQueryInterface) {
  // If it is a default page, then there should be a corresponding Page Content model in
  // Contentful with page info
  if (variant == "default") {
    const page = await getPageDataBySlug({ slug, preview });

    // Checks for errors and formats
    var formattedPage: PageInterface = formatPage(page);
    // check to see if employee list is one of the blocks and add data there
    return formattedPage;
  }

  // If it is a post, we create the page interface data from the post content
  // if (variant == "post") {
  //   // Get the post data

  //   try {
  //     const post = await getPostBySlug(slug, { preview });
  //     const formattedPost: FullPostInterface = formatFullPost(post);
  //     let morePosts = await getMorePosts(formattedPost, { preview });

  //     const formattedPage: PageInterface = formatPostPage(
  //       formattedPost,
  //       morePosts
  //     );

  //     return formattedPage;
  //   } catch (e) {
  //     console.error("issue", e);
  //     return null;
  //   }
  // }
}
