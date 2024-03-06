export default function TimelineItem({
  id,
  year,
  title,
  description,
  quote,
  quoteAuthor,
}) {
  return (
    <div key={id} className="grid grid-cols-[1fr,160px,1fr] mb-16">
      <div className="ml-auto">{year}</div>

      <div className="flex justify-center">
        <div className="w-4 h-4 rounded-full bg-black dark:bg-white"></div>
      </div>

      <div className=" text-balance col-start-3">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="flex flex-col bg-gray-200 relative">
          <span>{quote}</span>
          <span className="text-blue-base">{quoteAuthor}</span>

          <div></div>
        </div>
      </div>
    </div>
  );
}
