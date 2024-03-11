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
    <div className="grid gap-4 md:gap-16 grid-cols-[16%,max-content,1fr] md:grid-cols-[1fr,max-content,1fr] mb-16">
      <div className="md:ml-auto">{year}</div>

      <div className="flex justify-center">
        <div className="w-4 h-4 rounded-full bg-black dark:bg-white"></div>
      </div>

      <div className="text-balance col-start-3 flex flex-col gap-8">
        <div>
          <h3 className="mb-4">{title}</h3>
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
