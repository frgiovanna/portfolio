import { TimelineContent } from '@mui/lab';
import { theme } from '../../../../shared/theme';
import { Text } from '../../../../shared/components/Text';

interface ContentProps {
  title: string;
  description: string;
  isLastItem: boolean;
}
export default function Content({ title, description, isLastItem }: ContentProps) {
  return (
    <TimelineContent sx={{ pt: 0, mb: !isLastItem ? '32px' : undefined, gap: '8px', display: 'flex', flexDirection: 'column' }}>
      <Text variant="H2" color={theme.colors.twilight}>
        {title}
      </Text>
      <Text>{description}</Text>
    </TimelineContent>
  );
}
