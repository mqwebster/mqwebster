import ResumeItem from "../blocks/Resume/ResumeItem";
import { resumeData } from "../blocks/Resume/resumeData.js";

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
  const skillElements = resumeData.Skills.map((item) => {
    return <ResumeItem key={`Skills-${item.id}`} section="Skills" {...item} />;
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
              {skillElements}
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
