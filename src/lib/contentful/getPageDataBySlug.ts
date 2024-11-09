import { PageQueryInterface } from "./api";
import PAGE_FIELDS from "./graphql_fragments/PAGE_FIELDS";
import callContentful from "./callContentful";

export default async function getPageDataBySlug({
  slug,
  preview = false,
}: PageQueryInterface) {
  const variables = { slug, preview };
  const query = `query GetPageBySlug($slug: String!) {
      pageContentCollection(limit: 1, where: {slug: $slug}, preview:  ${
        preview ? "true" : "false"
      }) {
        total
        items {
          ${PAGE_FIELDS}
        }
      }
    }`;
  const response = await callContentful(query, variables, { preview });
  // console error this
  if ("errors" in response) {
    console.error(response);
    return null;
  }
  if (!response.data.pageContentCollection.items) return null;
  const page = response.data.pageContentCollection.items.pop();
  return page;
}
