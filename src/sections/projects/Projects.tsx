import { useBreakpoints } from '../../shared/hooks/useBreakpoints';
import { Text } from '../../shared/components/Text';
import { CardsWrapper, Wrapper } from './styles';
import ProjectCard from './components/ProjectCard';

export function Projects() {
  const { isDesktop } = useBreakpoints();

  const mockedContent = [
    {
      title: 'Donate',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://placehold.co/440x180',
      code: '#linkCodeHere',
      demo: '#linkDemoHere',
    },

    {
      title: 'Donate',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://placehold.co/440x180',
      code: '#linkCodeHere',
      demo: '#linkDemoHere',
    },
    {
      title: 'Donate',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://placehold.co/440x180',
      code: '#linkCodeHere',
      demo: '#linkDemoHere',
    },
    {
      title: 'Donate',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://placehold.co/440x180',
      code: '#linkCodeHere',
      demo: '#linkDemoHere',
    },
  ];

  console.log(mockedContent);

  return (
    <Wrapper>
      <Text variant={isDesktop ? 'Huge' : 'Large'}>Recent projects</Text>
      <CardsWrapper>
        {mockedContent.map((project) => (
          <ProjectCard {...project} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
}
