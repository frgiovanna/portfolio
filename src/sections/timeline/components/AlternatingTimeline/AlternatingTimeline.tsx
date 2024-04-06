import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Connector, Dot } from './styles';
import { Content } from './Content';

export const AlternatingTimeline = () => {
  const mockedContent = {
    title: 'Ismart online (2013 - 2015)',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
  };
  return (
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <Dot />
          <Connector style={{ marginTop: '10px' }} />
        </TimelineSeparator>
        <Content position="left" {...mockedContent} />
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <Connector />
          <Dot />
          <Connector />
        </TimelineSeparator>
        <Content position="right" {...mockedContent} />
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <Connector />
          <Dot />
          <Connector />
        </TimelineSeparator>
        <Content position="left" {...mockedContent} />
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <Connector />
          <Dot />
          <Connector />
        </TimelineSeparator>
        <Content position="right" {...mockedContent} />
      </TimelineItem>
    </Timeline>
  );
};
