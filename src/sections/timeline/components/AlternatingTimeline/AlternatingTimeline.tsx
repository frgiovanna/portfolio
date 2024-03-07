import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography';
import { Connector, Dot, HorizontalLine } from './styles';
import { Text } from '../../../../shared/components/Text';
import { theme } from '../../../../shared/theme';

export const AlternatingTimeline = () => {
  return (
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <Dot />
          <Connector style={{ marginTop: '10px' }} />
        </TimelineSeparator>

        <TimelineContent sx={{ py: 0 }}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '8px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <Text variant="H2" color={theme.colors.twilight}>
                Ismart Online (2014 - 2016)
              </Text>
              <div style={{ maxWidth: '350px', textAlign: 'justify' }}>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                </Text>
              </div>
            </div>
            <HorizontalLine />
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <Connector />
          <Dot />
          <Connector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <Connector />
          <Dot />
          <Connector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
