import Image from "next/image";
import { portfolioData } from "../blocks/Portfolio/portfolioData";
import PortfolioItem from "../blocks/Portfolio/PortfolioItem";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { PinContainer } from "../ui/3d-pin";

export function Portfolio() {
  // const siteElements = portfolioData.sites.map((item) => {
  //   return <PortfolioItem key={`SiteItem-${item.id}`} {...item} />;
  // });
  // const projectElements = portfolioData.projects.map((item) => {
  //   return <PortfolioItem key={`ProjectItem-${item.id}`} {...item} />;
  // });

  const siteElements = portfolioData.sites.map((item) => {
    return (
      <CardContainer key={`SiteItem-${item.id}`} className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={item.image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
  });

  const projectElements = portfolioData.projects.map((item) => {
    return (
      <div
        key={`ProjectItem-${item.id}`}
        className="h-[40rem] w-full flex items-center justify-center "
      >
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    );
  });

  return (
    <section id="portfolio" className="w-full max-w-screen-xl z-0 py-16">
      <div className="">
        <h1 className="w-max mx-auto">Work Showcase...</h1>

        <div className="">
          <div className="">
            <h2>Sites</h2>

            <div className="">{siteElements}</div>
          </div>

          <div className="">
            <h2>Projects</h2>

            <div className="">{projectElements}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
