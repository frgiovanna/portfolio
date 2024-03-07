import { useBreakpoints } from '../../shared/hooks/useBreakpoints';
import { Text } from '../../shared/components/Text';
import { Wrapper } from './styles';
import { AlternatingTimeline } from './components/AlternatingTimeline/AlternatingTimeline';

export const Timeline = () => {
  const { isDesktop } = useBreakpoints();

  return (
    <Wrapper>
      <Text variant={isDesktop ? 'Huge' : 'Large'}>Timeline</Text>
      <AlternatingTimeline />
    </Wrapper>
  );
};
