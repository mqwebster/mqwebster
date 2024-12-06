import App from "./App";
import { draftMode } from "next/headers";
import { client, previewClient } from "@/src/lib/client";
import { PageInterface } from "@/types/PageInterface";
import BaseTemplate from "@/src/templates/BaseTemplate";

export default async function Page() {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const landingPageData = await gqlClient.Page({
    slug: "/work/notes-app",
    preview,
    locale: "en-US",
  });
  // @ts-ignore
  const page: PageInterface = landingPageData.pageCollection?.items[0];

  return (
    <BaseTemplate {...page}>
      <section
        id="notes-app"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <div className="flex flex-col">
          <div className="relative bg-white text-black w-full rounded-lg overflow-hidden">
            <App />
          </div>
        </div>
      </section>
    </BaseTemplate>
  );
}
