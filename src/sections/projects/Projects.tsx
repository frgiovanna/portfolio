import { CardsWrapper } from './styles';
import ProjectCard from './components/ProjectCard';
import { Section } from '../../shared/components/Section';
import { useContentContext } from '../../shared/providers/ContentProvider';

export function Projects() {
  const {
    content: { projects },
  } = useContentContext();

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

  if (!projects) {
    return null;
  }

  return (
    <Section background="sky" title="Recent projects" id="projects">
      <CardsWrapper>
        {mockedContent.map((project) => (
          <ProjectCard {...project} />
        ))}
      </CardsWrapper>
    </Section>
  );
}
