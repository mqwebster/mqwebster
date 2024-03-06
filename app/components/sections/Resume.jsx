import Image from "next/image";
import ResumeItem from "../blocks/Resume/ResumeItem";
import { resumeData } from "../blocks/Resume/resumeData.js";
import { skillsLogos } from "../blocks/Resume/skillsLogos";
import skillIcon from "/public/icons/skill-icon.png";

export default function Resume() {
  const educationElements = resumeData.Education.map((item) => {
    return <ResumeItem key={item.id} section="Education" {...item} />;
  });
  const experienceElements = resumeData.Experience.map((item) => {
    return <ResumeItem key={item.id} section="Experience" {...item} />;
  });

  const skills = [
    { id: 1, name: "CSS", url: "" },
    { id: 2, name: "Figma", url: "" },
    { id: 3, name: "GitHub", url: "" },
    { id: 4, name: "HTML", url: "" },
    { id: 5, name: "JavaScript", url: "" },
    { id: 6, name: "NPM", url: "" },
    { id: 7, name: "Prettier", url: "" },
    { id: 8, name: "PWA", url: "" },
    { id: 9, name: "React", url: "" },
    { id: 10, name: "Vite", url: "" },
    { id: 11, name: "Webflow", url: "" },
    { id: 12, name: "WordPress", url: "" },
  ];
  const skillsElement = skills.map((skill, i) => {
    skill.url = skillsLogos[i].url;
    return (
      <li key={skill.id}>
        <Image
          src={skill.url}
          alt={`${skill.name} Logo`}
          className="hard-skills__icon"
        />
        {skill.name}
      </li>
    );
  });

  return (
    <section id="#resume">
      <div>Resume section</div>
    </section>
  );
}
