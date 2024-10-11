import TimelineContent from '@mui/lab/TimelineContent';
import { ContentWrapper, HorizontalLine, TextWrapper, TitleWrapper } from './styles';
import { Text } from '@shared/components/Text';

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
          <TitleWrapper>
            <Text variant="H2" color="twilight">
              {title}
            </Text>
            <Text color="twilight">{duration}</Text>
          </TitleWrapper>
          <div style={{ textAlign: 'justify' }}>
            <Text>{description}</Text>
          </div>
        </TextWrapper>

        <HorizontalLine />
      </ContentWrapper>
    </TimelineContent>
  );
};
