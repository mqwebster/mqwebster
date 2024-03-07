import Image, { StaticImageData } from "next/image";
import { skillsLogos } from "./skillsLogos";
import educationIcon from "/public/icons/education-icon.png";
import experienceIcon from "/public/icons/experience-icon.png";
import skillIcon from "/public/icons/skill-icon.png";

interface skillsInterface {
  name: string;
  url;
}

export default function ResumeItem({
  id,
  date,
  title,
  location,
  list,
  section,
  skills,
}: {
  id: number;
  date?: string;
  title: string;
  location?: string;
  list?: Array<string>;
  section: string;
  skills?: Array<skillsInterface>;
}) {
  const iconSelector = {
    Education: educationIcon,
    Experience: experienceIcon,
    Skills: skillIcon,
  };

  return (
    <div className="flex gap-5 mb-10">
      <div className="">
        <Image
          width={40}
          height={40}
          src={iconSelector[section]}
          alt="Resume Item Icon"
          className="dark:invert"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        {date && <span className="text-xs">{date}</span>}

        <h3>{title}</h3>

        {location && <span className="text-blue-base">{location}</span>}

        {list && (
          <ul className="list-[circle] flex flex-col gap-3 ml-8">
            {list.map((item, index) => {
              return <li key={`${section}-${title}-${index}`}>{item}</li>;
            })}
          </ul>
        )}

        {skills && (
          <ul className="ml-4 grid grid-cols-4 w-full gap-x-5 gap-y-10">
            {skills.map((skill, i) => {
              skill.url = skillsLogos[i].url;
              return (
                <li key={skill.name} className="flex gap-4 items-center">
                  <Image
                    src={skill.url}
                    alt={`${skill.name} Logo`}
                    width={48}
                    height={48}
                    className="max-h-12 object-contain"
                  />

                  {skill.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
