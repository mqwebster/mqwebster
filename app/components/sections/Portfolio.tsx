import { portfolioData } from "../blocks/Portfolio/portfolioData";
import PortfolioItem from "../blocks/Portfolio/PortfolioItem";

export function Portfolio() {
  // const portfolioItems = portfolioData.map((item) => {
  //   return <PortfolioItem key={`SiteItem-${item.id}`} {...item} />;
  // });

  return (
    <section
      id="portfolio"
      className="w-full md:max-w-screen-xl z-0 px-8 py-16"
    >
      <div className="">
        <h1 className="w-max mx-auto">Work Showcase...</h1>

        {/* <div className="">
          <div className="">
            <h2>Sites</h2>

            <div className="">{portfolioItems}</div>
          </div>

          <div className="">
            <h2>Projects</h2>

            <div className="">{portfolioItems}</div>
          </div>
        </div> */}

        <div>
          <div>
            <h3>Sites</h3>
            {portfolioData
              .filter((item) => item.type == "site")
              .map((item) => {
                return (
                  <div
                    key={`SiteItem-${item.id}`}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 my-16"
                  >
                    <PortfolioItem key={`SiteItem-${item.id}`} {...item} />
                  </div>
                );
              })}
          </div>

          <div>
            <h3>Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 my-16">
              {portfolioData
                .filter((item) => item.type == "project")
                .map((item, index) => {
                  return (
                    <div key={`SiteItem-${item.id}`} className="">
                      <PortfolioItem key={`SiteItem-${item.id}`} {...item} />
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
