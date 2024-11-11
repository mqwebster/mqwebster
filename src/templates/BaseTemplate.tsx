import dynamic from "next/dynamic";

import { PageInterface } from "@/types/PageInterface";

import PageHero from "../components/blocks/PageHero/PageHero";
import Navbar from "../components/blocks/navbar";
import Footer from "../components/blocks/footer";
const ProjectGrid = dynamic(
  () => import("@/src/components/blocks/ProjectGrid/ProjectGrid")
);
const SectionHeader = dynamic(
  () => import("@/src/components/blocks/SectionHeader/SectionHeader")
);

function BaseTemplate({ ...props }: PageInterface) {
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
        <PageHero {...props.pageHero} />

        <div className="flex flex-col items-center justify-between">
          {props.pageContentCollection.items.map((block, i) =>
            getComponent(block, i)
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BaseTemplate;
