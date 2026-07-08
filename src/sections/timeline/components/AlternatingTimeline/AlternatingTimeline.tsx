import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Content } from './Content';
import { Connector, Dot, TimelineEnd, TimelineStart } from '../../styles';

interface AlternatingTimelineProps {
  content: {
    title: string;
    description: string;
    duration: string;
  }[];
}

export const AlternatingTimeline = ({ content }: AlternatingTimelineProps) => {
  return (
    <Timeline position="alternate-reverse" id="alternating-timeline">
      {content.map(({ title, description, duration }, index) => {
        const isFirstItem = index === 0;
        const isLastItem = index === content.length - 1;
        const isLeftContent = index % 2 === 0;

        return (
          <TimelineItem key={title}>
            <TimelineSeparator>
              {isFirstItem ? <TimelineStart /> : <Connector />}
              <Dot />
              {isLastItem ? <TimelineEnd /> : <Connector />}
            </TimelineSeparator>
            <Content
              position={isLeftContent ? 'left' : 'right'}
              title={title}
              description={description}
              duration={duration}
            />
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
