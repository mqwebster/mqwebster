import { portfolioData } from "../blocks/Portfolio/portfolioData";
import PortfolioItem from "../blocks/Portfolio/PortfolioItem";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full md:max-w-screen-xl z-0 px-8 py-16"
    >
      <div className="">
        <h2 className="font-title type-preset-2 mb-10">The What...</h2>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="font-title type-preset-3">Sites</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 my-16">
              {portfolioData["sites"].map((item, index) => {
                return (
                  <div key={`SiteItem-${index}_${item.title}`}>
                    <PortfolioItem key={`SiteItem-${item.title}`} {...item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
