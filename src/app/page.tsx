import { draftMode } from "next/headers";
import { client, previewClient } from "@/src/lib/client";
import { PageInterface } from "@/types/PageInterface";
import BaseTemplate from "../templates/BaseTemplate";

export default async function Page() {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const landingPageData = await gqlClient.Page({ preview, locale: "en-US" });
  // @ts-ignore
  const page: PageInterface = landingPageData.pageCollection?.items[0];

  return <BaseTemplate {...page} />;
}
