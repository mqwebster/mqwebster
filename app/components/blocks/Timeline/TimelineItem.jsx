export default function TimelineItem({
  id,
  year,
  title,
  description,
  quote,
  quoteAuthor,
}) {
  return (
    <div key={id} className="grid grid-cols-3">
      <div className=" col-span-1">{year}</div>

      <div className="col-span-2">
        <div className="w-4 h-4 rounded-full bg-black"></div>
      </div>

      <div className="col-span-3">
        <h3>{title}</h3>
        <p>{description}</p>

        <div>
          <span>{quote}</span>
          <span>{quoteAuthor}</span>
        </div>
      </div>
    </div>
  );
}
