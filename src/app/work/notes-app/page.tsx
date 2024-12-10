import App from "./App";
import { draftMode } from "next/headers";
import { client, previewClient } from "@/src/lib/client";
import { PageInterface } from "@/types/PageInterface";
import BaseTemplate from "@/src/templates/BaseTemplate";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  try {
    const landingPageData = await gqlClient.Page({
      slug: "/work/notes-app",
      preview,
      locale: "en-US",
    });

    // @ts-ignore
    const page: PageInterface = landingPageData.pageCollection?.items[0];

    if (page) {
      return {
        title: page.title,
        description: page.description,
        openGraph: {
          title: page.title,
          description: page.description,
          images: page.image ? [{ url: page.image.url }] : [],
        },
        twitter: {
          title: page.title,
          description: page.description,
          images: page.image ? [{ url: page.image.url }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Failed to generate metadata:", error);
  }

  // Fallback metadata if page data is not available
  return {
    title: "Notes App | Marques Q. Webster",
    description:
      "I'm a Frontend Software Engineer and Designer that loves to build human-centered and dynamic experiences.",
  };
}

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
