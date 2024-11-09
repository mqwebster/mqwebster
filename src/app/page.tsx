import { draftMode } from "next/headers";

import { client, previewClient } from "@/src/lib/client";

import { PageInterface } from "@/types/PageInterface";

import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Resume } from "./sections/Resume";
import { Portfolio } from "./sections/Portfolio";
import { Contact } from "./sections/Contact";

export default async function Page() {
  const { isEnabled: preview } = draftMode();
  const gqlClient = preview ? previewClient : client;

  const landingPageData = await gqlClient.Page({ preview });
  const page: PageInterface = landingPageData.pageCollection?.items[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Home />

      <About />

      <Portfolio />

      <Resume />

      <Contact />
    </main>
  );
}
