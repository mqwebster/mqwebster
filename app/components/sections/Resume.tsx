import Link from "next/link";
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
    <section id="#resume" className="w-full md:max-w-screen-xl z-0 px-8 py-16">
      <div className="">
        <h2 className="font-title type-preset-2 mb-10">The How...</h2>

        <div className="flex flex-col md:flex-row gap-10 relative">
          <nav className="z-50 flex items-center md:min-w-44 h-full sticky top-[120px] md:top-[20vh] bg-gray-200 text-black p-4 md:p-8 rounded-lg font-body type-preset-base">
            <ul className="w-max mx-auto md:mx-0 flex flex-wrap md:flex-col items-center md:items-start justify-center gap-x-10 gap-4 md:gap-8">
              <li className="group/resumeSection flex flex-col gap-1">
                <Link href="/#Education">Education</Link>
                <div className="h-[3px] w-0 rounded-lg group-hover/resumeSection:w-full bg-blue-base transition-[width] duration-500"></div>
              </li>
              <li className="group/resumeSection flex flex-col gap-1">
                <Link href="/#Skills">Skills</Link>
                <div className="h-[3px] w-0 rounded-lg group-hover/resumeSection:w-full bg-blue-base transition-[width] duration-500"></div>
              </li>
              <li className="group/resumeSection flex flex-col gap-1">
                <Link href="/#Experience">Experience</Link>
                <div className="h-[3px] w-0 rounded-lg group-hover/resumeSection:w-full bg-blue-base transition-[width] duration-500"></div>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-20">
            <div id="Education" className="border-b-2 border-blue-200">
              <h3 className="font-title type-preset-3 mb-8">Education</h3>
              {educationElements}
            </div>

            <div id="Skills" className="border-b-2 border-blue-200">
              <h3 className="font-title type-preset-3 mb-8">Skills</h3>
              {skillElements}
            </div>

            <div id="Experience" className="border-b-2 border-blue-200">
              <h3 className="font-title type-preset-3 mb-8">Experience</h3>
              {experienceElements}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
