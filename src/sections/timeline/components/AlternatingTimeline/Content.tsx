import TimelineContent from '@mui/lab/TimelineContent';
import { ContentWrapper, HorizontalLine, TextWrapper } from './styles';
import { Text } from '../../../../shared/components/Text';
import { theme } from '../../../../shared/theme';

interface ContentProps {
  position: 'left' | 'right';
  title: string;
  description: string;
  duration: string;
  isMobile?: boolean;
}
export const Content = ({ position, title, description, duration }: ContentProps) => {
  return (
    <TimelineContent sx={{ py: 0 }}>
      <ContentWrapper position={position}>
        <TextWrapper>
          <Text variant="H2" color={theme.colors.twilight}>
            {title} <span style={{ fontSize: '16px' }}>{duration}</span>
          </Text>
          <div style={{ textAlign: 'justify' }}>
            <Text>{description}</Text>
          </div>
        </TextWrapper>

        <HorizontalLine />
      </ContentWrapper>
    </TimelineContent>
  );
};
