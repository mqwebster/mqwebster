import { portfolioData } from "../blocks/Portfolio/portfolioData";
import PortfolioItem from "../blocks/Portfolio/PortfolioItem";

export function Portfolio() {
  const portfolioItems = portfolioData.map((item) => {
    return <PortfolioItem key={`SiteItem-${item.id}`} {...item} />;
  });

  return (
    <section id="portfolio" className="w-full max-w-screen-xl z-0 py-16">
      <div className="">
        <h1 className="w-max mx-auto">Work Showcase...</h1>

        <div className="">
          <div className="">
            <h2>Sites</h2>

            <div className="">{portfolioItems}</div>
          </div>

          <div className="">
            <h2>Projects</h2>

            <div className="">{portfolioItems}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
