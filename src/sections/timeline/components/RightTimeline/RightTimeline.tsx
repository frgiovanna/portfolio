import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Connector, Dot } from '../../styles';
import Content from './Content';

interface RightTimelineProps {
  content: {
    title: string;
    description: string;
    duration: string;
  }[];
}
export default function RightTimeline({ content }: RightTimelineProps) {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {content.map(({ title, description, duration }, index) => {
        const isFirstItem = index === 0;
        const isLastItem = index === content.length - 1;

        return (
          <TimelineItem key={title}>
            <TimelineSeparator>
              <Dot />
              <Connector style={isFirstItem ? { marginTop: '10px' } : undefined} />
            </TimelineSeparator>
            <Content title={title} description={description} duration={duration} isLastItem={isLastItem} />
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
