import Image from "next/image";
import educationIcon from "/public/icons/education-icon.png";
import experienceIcon from "/public/icons/experience-icon.png";

export default function ResumeItem({
  id,
  date,
  title,
  location,
  list,
  section,
}) {
  const iconSelector = section === "Education" ? educationIcon : experienceIcon;

  return (
    <div className="">
      <Image width={48} height={48} src={iconSelector} alt="Resume Item Icon" />

      <div className="">
        <span className="">{date}</span>
        <h3>{title}</h3>
        <span className="">{location}</span>
        {list && (
          <ul className="">
            {list.map((item) => {
              return <li key={id}>{item}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
