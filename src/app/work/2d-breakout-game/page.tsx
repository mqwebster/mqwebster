import { draftMode } from "next/headers";
import { client, previewClient } from "@/src/lib/client";
import { PageInterface } from "@/types/PageInterface";
import BaseTemplate from "@/src/templates/BaseTemplate";
import Canvas from "./Canvas";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  try {
    const landingPageData = await gqlClient.Page({
      slug: "/work/2d-breakout-game",
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
    title: "2D Breakout Game | Marques Q. Webster",
    description:
      "I'm a Frontend Software Engineer and Designer that loves to build human-centered and dynamic experiences.",
  };
}

export default async function Page() {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const landingPageData = await gqlClient.Page({
    slug: "/work/2d-breakout-game",
    preview,
    locale: "en-US",
  });
  // @ts-ignore
  const page: PageInterface = landingPageData.pageCollection?.items[0];

  return (
    <BaseTemplate {...page}>
      <Canvas />
    </BaseTemplate>
  );
}
