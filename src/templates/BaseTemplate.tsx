import dynamic from "next/dynamic";

import { PageInterface } from "@/types/PageInterface";

import PageHero from "../components/blocks/PageHero/PageHero";
import Navbar from "../components/blocks/navbar";
import { PageHeroInterface } from "@/types/blocks/PageHero/PageHeroInterface";
const ProjectGrid = dynamic(
  () => import("@/src/components/blocks/ProjectGrid/ProjectGrid")
);
const SectionHeader = dynamic(
  () => import("@/src/components/blocks/SectionHeader/SectionHeader")
);

function BaseTemplate({
  id,
  title,
  slug,
  description,
  image,
  pageHero,
  pageContentCollection,
}: PageInterface) {
  const getComponent = (entry: any, index) => {
    const typename = entry.__typename;

    const componentMap = {
      ProjectGrid: (entry) => <ProjectGrid key={index} {...entry} />,
      SectionHeader: (entry) => <SectionHeader key={index} {...entry} />,
    };

    return typename in componentMap ? componentMap[typename](entry) : null;
  };

  return (
    <>
      <Navbar />

      <main>
        <PageHero {...pageHero} />

        <div className="flex flex-col items-center justify-between">
          {pageContentCollection.items.map((block, i) =>
            getComponent(block, i)
          )}
        </div>
      </main>
    </>
  );
}

export default BaseTemplate;
