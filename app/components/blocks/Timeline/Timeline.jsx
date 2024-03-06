import TimelineItem from "./TimelineItem";
import { timelineData } from "./timelineData.js";

export default function Timeline() {
  return (
    <div>
      {/* <div className="bg-gray-200 w-1 h-full absolute top-0">
        <div className="bg-blue-300 w-1 h-1/2 fixed bottom-1/2"></div>
      </div> */}

      {timelineData.map((item) => {
        return <TimelineItem key={item.id} {...item} />;
      })}
    </div>
  );
}
