import Image from "next/image";
import { skillsLogos } from "./skillsLogos";
import educationIcon from "/public/icons/education-icon.png";
import experienceIcon from "/public/icons/experience-icon.png";
import skillIcon from "/public/icons/skill-icon.png";

export default function ResumeItem({
  id,
  date,
  title,
  location,
  list,
  section,
  skills,
}) {
  const iconSelector = {
    Education: educationIcon,
    Experience: experienceIcon,
    Skills: skillIcon,
  };

  return (
    <div className="">
      <Image
        width={40}
        height={40}
        src={iconSelector[section]}
        alt="Resume Item Icon"
      />

      <div className="">
        {date && <span className="text-xs">{date}</span>}
        <h3>{title}</h3>
        {location && <span className="text-blue-base">{location}</span>}
        {list && (
          <ul className="">
            {list.map((item, index) => {
              return <li key={`${section}-${title}-${index}`}>{item}</li>;
            })}
          </ul>
        )}
      </div>

      {skills && (
        <ul>
          {skills.map((skill, i) => {
            skill.url = skillsLogos[i].url;
            return (
              <li key={skill.name}>
                <Image
                  src={skill.url}
                  alt={`${skill.name} Logo`}
                  width={48}
                  height={48}
                />
                {skill.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
