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
}: {
  id: number;
  date?: string;
  title: string;
  location?: string;
  list?: Array<string>;
  section: string;
  skills?: Array<string>;
}) {
  const iconSelector = {
    Education: educationIcon,
    Experience: experienceIcon,
    Skills: skillIcon,
  };

  return (
    <div className="flex gap-5 mb-10 font-body type-preset-base">
      <div className="h-max rounded-full bg-blue-base p-3">
        <Image
          width={28}
          height={28}
          src={iconSelector[section]}
          alt="Resume Item Icon"
          className="invert"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        {date && <span className="">{date}</span>}

        <h3 className="font-title heading-5">{title}</h3>

        {location && <span className="text-blue-base">{location}</span>}

        {list && (
          <ul className="list-[circle] flex flex-col gap-3 ml-0 md:ml-8">
            {list.map((item, index) => {
              return <li key={`${section}-${title}-${index}`}>{item}</li>;
            })}
          </ul>
        )}

        {skills && (
          <ul className="mt-6 -ml-8 grid grid-cols-2 md:grid-cols-4 w-full gap-x-5 gap-y-10">
            {skills.map((skill, i) => {
              const url = skillsLogos[skill]?.url;
              return (
                <li
                  key={skill}
                  className="flex flex-col md:flew-row gap-4 items-center text-center grayscale hover:grayscale-0 hover:scale-110 transition-all duration-[200ms]"
                >
                  <Image
                    src={url}
                    alt={`${skill} Logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />

                  {skill}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
