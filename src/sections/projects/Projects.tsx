import { useBreakpoints } from '../../shared/hooks/useBreakpoints';
import { Text } from '../../shared/components/Text';
import { Wrapper } from './styles';
import { Carousel } from './components/Carousel/Carousel';

export const Projects = () => {
  const { isDesktop } = useBreakpoints();

  return (
    <Wrapper>
      <Text variant={isDesktop ? 'Huge' : 'Large'}>Recent projects</Text>
      <Carousel />
    </Wrapper>
  );
};
