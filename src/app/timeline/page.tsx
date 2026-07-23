import { events } from "../../content/events";
import { TimelineExplorer } from "@/components/timeline/TimelineExplorer";

export default function Timeline() {
  return <TimelineExplorer events={events} />;
}

