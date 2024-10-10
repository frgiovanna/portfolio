import { TimelineContent } from '@mui/lab';
import { Text } from '../../../../shared/components/Text';
import { TitleWrapper } from '../AlternatingTimeline/styles';

interface ContentProps {
  title: string;
  description: string;
  duration: string;
  isLastItem: boolean;
}
export default function Content({ title, description, duration, isLastItem }: ContentProps) {
  return (
    <TimelineContent
      sx={{ pt: 0, mb: !isLastItem ? '32px' : undefined, gap: '16px', display: 'flex', flexDirection: 'column' }}
    >
      <TitleWrapper>
        <Text variant="H2" color="twilight">
          {title}
        </Text>
        <Text color="twilight">{duration}</Text>
      </TitleWrapper>
      <Text>{description}</Text>
    </TimelineContent>
  );
}
