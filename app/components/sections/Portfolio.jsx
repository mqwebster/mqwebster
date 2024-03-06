import { portfolioData } from "../blocks/Portfolio/portfolioData";
import PortfolioItem from "../blocks/Portfolio/PortfolioItem";

export default function Portfolio() {
  const siteElements = portfolioData.sites.map((item) => {
    return <PortfolioItem key={`SiteItem-${item.id}`} {...item} />;
  });
  const projectElements = portfolioData.projects.map((item) => {
    return <PortfolioItem key={`ProjectItem-${item.id}`} {...item} />;
  });

  return (
    <section id="portfolio" className="w-full max-w-screen-xl z-0">
      <div className="">
        <h1>Work Showcase...</h1>

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
