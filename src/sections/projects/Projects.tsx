import { useBreakpoints } from '../../shared/hooks/useBreakpoints';
import { Text } from '../../shared/components/Text';
import { Wrapper } from './styles';

export function Projects() {
  const { isDesktop } = useBreakpoints();

  const mockedContent = [
    {
      title: 'Donate',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: {
        mobile: 'https://placehold.co/260x70',
        desktop: 'https://placehold.co/440x180',
      },
      code: '#linkCodeHere',
      demo: '#linkDemoHere',
    },
  ];

  console.log(mockedContent);

  return (
    <Wrapper>
      <Text variant={isDesktop ? 'Huge' : 'Large'}>Recent projects</Text>
    </Wrapper>
  );
}
