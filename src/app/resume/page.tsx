import { draftMode } from "next/headers";
import { client, previewClient } from "@/src/lib/client";
import { PageInterface } from "@/types/PageInterface";
import BaseTemplate from "@/src/templates/BaseTemplate";
import Resume from "@/src/components/blocks/Resume/Resume";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  try {
    const landingPageData = await gqlClient.Page({
      slug: "/resume",
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
    title: "Resume | Marques Q. Webster",
    description:
      "I'm a dynamic and mission-driven Software Engineer with expertise in frontend development, user-centered design, and secure coding practices. I'm highly skilled in driving continuous improvement in public sector and civic tech projects.",
  };
}

export default async function Page() {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const landingPageData = await gqlClient.Page({
    slug: "/resume",
    preview,
    locale: "en-US",
  });
  // @ts-ignore
  const page: PageInterface = landingPageData.pageCollection?.items[0];

  return (
    <BaseTemplate {...page}>
      <Resume />
    </BaseTemplate>
  );
}
