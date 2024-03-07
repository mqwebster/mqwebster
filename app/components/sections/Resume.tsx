import ResumeItem from "../blocks/Resume/ResumeItem";
import { resumeData } from "../blocks/Resume/resumeData.js";

export function Resume() {
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
    <section id="#resume" className="w-full max-w-screen-xl z-0 py-16">
      <div className="">
        <h1 className="w-max mx-auto">My Experience...</h1>

        <div className="flex gap-10 relative">
          <nav className="min-w-44 h-full sticky top-[20vh]">
            <ul className="flex flex-col gap-8">
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
          </nav>

          <div className="flex flex-col gap-20">
            <div id="Education" className="border-b-2 border-blue-200">
              <h2>Education</h2>
              {educationElements}
            </div>

            <div id="Skills" className="border-b-2 border-blue-200">
              <h2>Skills</h2>
              {skillElements}
            </div>

            <div id="Experience" className="border-b-2 border-blue-200">
              <h2>Experience</h2>
              {experienceElements}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
