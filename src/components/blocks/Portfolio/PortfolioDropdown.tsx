import { portfolioData } from "@/src/app/data/portfolioData";
import PortfolioItem from "./PortfolioItem";

export const PortfolioDropdown = ({
  category,
  body = null,
  isOpen,
}: {
  category: string;
  body?: string;
  isOpen: boolean;
}) => {
  const categoryWords = category.split(" ");
  for (let i = 0; i < categoryWords.length; i++) {
    categoryWords[i] =
      categoryWords[i][0].toUpperCase() + categoryWords[i].substring(1);
  }
  const capitalCategory = categoryWords.join(" ");

  return (
    <details className="group" open={isOpen}>
      <summary className="flex justify-between items-center pr-4 list-none border-b-2 border-blue-200 cursor-pointer">
        <h3 className="font-title type-preset-3">{capitalCategory}</h3>

        <ArrowIcon />
      </summary>

      {body && <p className="mt-5">{body}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 my-16">
        {portfolioData[category].map((item, index) => {
          return (
            <div key={`PortfolioItem-${index}_${item.title}`}>
              <PortfolioItem {...item} />
            </div>
          );
        })}
      </div>
    </details>
  );
};

const ArrowIcon = () => {
  return (
    <div className="flex flex-col justify-start items-center w-3 h-3 relative">
      <div className="w-full h-[2px] bg-black dark:bg-blue-200 absolute -rotate-45 origin-top-right rounded-lg ml-[0.1875rem] group-open:ml-0 group-open:-translate-x-[0.375rem] group-open:translate-y-[0.375rem] transition-all duration-500 delay-0"></div>

      <div className="w-full h-[2px] bg-black dark:bg-blue-200 absolute rotate-45 origin-top-left rounded-lg mr-[0.1875rem] group-open:mr-0 group-open:translate-x-[0.375rem] group-open:translate-y-[0.375rem] transition-all duration-500 delay-100"></div>
    </div>
  );
};
