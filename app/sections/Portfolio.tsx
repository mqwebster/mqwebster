import { PortfolioDropdown } from "../components/blocks/Portfolio/PortfolioDropdown";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full md:max-w-screen-xl z-0 px-8 py-16"
    >
      <div className="">
        <h2 className="font-title type-preset-2 mb-10">The What...</h2>

        <div className="flex flex-col gap-10">
          <PortfolioDropdown category="sites" isOpen={true} />

          <PortfolioDropdown
            category="design systems"
            body="Artifacts from recent projects I’ve worked on. Take a look at what I’ve put together."
            isOpen={false}
          />

          <PortfolioDropdown category="projects" isOpen={false} />
        </div>
      </div>
    </section>
  );
}
