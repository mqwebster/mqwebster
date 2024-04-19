import Image from "next/image";
import quoteIcon from "/public/icons/quote-icon.png";

export default function TimelineItem({
  id,
  year,
  title,
  description,
  quote,
  quoteAuthor,
}: {
  id: number;
  year: string;
  title: string;
  description: string;
  quote: string;
  quoteAuthor: string;
}) {
  return (
    <div
      className={`grid grid-cols-[1rem, 1fr] md:grid-cols-3 gap-4 md:gap-16 mb-16 relative font-body type-preset-base`}
    >
      {/* <div className="h-full">
      </div> */}

      <div className="w-full col-start-1 col-span-1 flex relative">
        <div className="w-full h-max flex justify-between items-center sticky top-1/2">
          <span className="font-bold type-preset-2 hidden md:block">
            {year}
          </span>
          <div className="w-4 h-4 rounded-full bg-black dark:bg-white mt-4 md:mt-0"></div>
        </div>
      </div>

      <div className="text-balance col-start-2 col-span-2 flex flex-col gap-8 md:mt-2">
        <div>
          <span className="font-bold type-preset-2 block md:hidden mb-4">
            {year}
          </span>
          <h3 className="font-title type-preset-3 mb-5">{title}</h3>
          <p>{description}</p>
        </div>

        <div className="flex flex-col gap-2 bg-gray-200 relative p-6 rounded-lg">
          <span className="text-black">{quote}</span>
          <span className="text-blue-base">{quoteAuthor}</span>

          <div className="absolute -top-6 -right-4 dark:invert">
            <Image src={quoteIcon} alt="" width={60} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
