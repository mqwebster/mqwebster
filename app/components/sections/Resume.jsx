import Image from "next/image";
import ResumeItem from "../blocks/Resume/ResumeItem";
import { resumeData } from "../blocks/Resume/resumeData.js";
import { skillsLogos } from "../blocks/Resume/skillsLogos";
import skillIcon from "/public/icons/skill-icon.png";

export default function Resume() {
  const educationElements = resumeData.Education.map((item) => {
    return (
      <ResumeItem key={`Education-${item.id}`} section="Education" {...item} />
    );
  });
  const experienceElements = resumeData.Experience.map((item) => {
    return (
      <ResumeItem
        key={`Experience-${item.id}`}
        section="Experience"
        {...item}
      />
    );
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
      <li key={skill.name}>
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
    <section id="#resume" className="w-full max-w-screen-xl z-0">
      <div className="">
        <h1>My Experience...</h1>

        <div className="">
          <div className="">
            <ul className="">
              <li>
                <a href="#Education">Education</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Experience">Experience</a>
              </li>
            </ul>
          </div>

          <div className="">
            <div id="Education" className="">
              <h2>Education</h2>
              {educationElements}
            </div>

            <div id="Skills" className="">
              <h2>Skills</h2>

              <div className="">
                <div className="">
                  <Image src={skillIcon} alt="Resume Item Icon" />
                </div>

                <div className="">
                  <h3>Interpersonal Skills</h3>
                  <ul className="">
                    <li>Detail-oriented work ethic</li>
                    <li>Employee resource management</li>
                    <li>
                      Enthusiastic synergy-focused approach to collaboration
                    </li>
                    <li>Project management</li>
                    <li>Solution based communication skills</li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="">
                  <Image src={skillIcon} alt="Resume Item Icon" />
                </div>

                <div className="">
                  <h3>Technical Compentencies</h3>
                  <ul className="">{skillsElement}</ul>
                </div>
              </div>
            </div>

            <div id="Experience" className="">
              <h2>Experience</h2>

              {experienceElements}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
