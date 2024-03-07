import TimelineItem from "./TimelineItem";
import { timelineData } from "./timelineData.js";

export default function Timeline() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="tl-progress-bar bg-gray-200 w-1 h-full absolute top-0 -z-10">
        <div className="bg-blue-base w-1 h-1/2 fixed top-0 rounded-b-lg"></div>
      </div>

      <div className="flex flex-col gap-16 z-0">
        {timelineData.map((item) => {
          return <TimelineItem key={`${item.title}-${item.id}`} {...item} />;
        })}
      </div>
    </div>
  );
}
