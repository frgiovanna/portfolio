import { TimelineContent } from '@mui/lab';
import { Text } from '../../../../shared/components/Text';

interface ContentProps {
  title: string;
  description: string;
  duration: string;
  isLastItem: boolean;
}
export default function Content({ title, description, duration, isLastItem }: ContentProps) {
  return (
    <TimelineContent
      sx={{ pt: 0, mb: !isLastItem ? '32px' : undefined, gap: '8px', display: 'flex', flexDirection: 'column' }}
    >
      <Text variant="H2" color="twilight">
        {title} <span style={{ fontSize: '16px' }}>{duration}</span>
      </Text>
      <Text>{description}</Text>
    </TimelineContent>
  );
}
