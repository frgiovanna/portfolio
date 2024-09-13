import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Connector, Dot } from '../../styles';
import Content from './Content';

export default function RightTimeline() {
  const mockedContent = {
    title: 'Ismart online (2013 - 2015)',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
  };

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
      <TimelineItem>
        <TimelineSeparator>
          <Dot />
          <Connector style={{ marginTop: '10px' }} />
        </TimelineSeparator>
        <Content {...mockedContent} />
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <Dot />
          <Connector />
        </TimelineSeparator>
        <Content {...mockedContent} />
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <Dot />
          <Connector />
        </TimelineSeparator>
        <Content {...mockedContent} />
      </TimelineItem>
    </Timeline>
  );
}
