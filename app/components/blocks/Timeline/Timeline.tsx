import TimelineItem from "./TimelineItem";
import { timelineData } from "../../../data/timelineData.js";

export default function Timeline() {
  return (
    <div className="relative flex flex-col lg:items-center">
      {/* left-[calc(16%+1.375rem)] and lg:left-[calc(16%+4.375rem)] correlate to
      TimelineItem grid layout */}
      {/* +16% = TimelineItem left column width/Year */}
      {/* +1rem/4rem = Grid column gap */}
      {/* +.5rem = TimelineItem center column width/Dot */}
      {/* -.125rem = half of Timeline inner progress bar. Subtracted to move bar in line with middle of Grid center */}
      <div className="w-full grid grid-cols-[1rem, 1fr] md:grid-cols-3 gap-4 md:gap-16">
        <div className="col-span-1 flex md:justify-end ml-[0.375rem] md:ml-0 md:mr-[0.375rem]">
          <div className="tl-progress-bar bg-gray-200 w-1 h-full absolute top-0 -z-10 rounded-lg">
            <div className="bg-blue-base w-1 h-[54%] md:h-[55%] fixed top-0 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16 z-0">
        {timelineData.map((item) => {
          return <TimelineItem key={`${item.title}-${item.id}`} {...item} />;
        })}
      </div>
    </div>
  );
}
