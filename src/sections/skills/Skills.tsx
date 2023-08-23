import { Text } from '../../shared/components/Text';
import { useBreakpoints } from '../../shared/hooks/useBreakpoints';
import { SkillCard } from './components/SkillCard';
import { CardsWrapper, Wrapper } from './styles';

export const Skills = () => {
  const { isDesktop } = useBreakpoints();

  const skills = [
    { title: 'Skill 1', level: 'Advanced', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry' },
    { title: 'Skill 2', level: 'Advanced', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry' },
    { title: 'Skill 3', level: 'Advanced', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry' },
    { title: 'Skill 4', level: 'Advanced', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry' },
    { title: 'Skill 5', level: 'Advanced', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry' },
    { title: 'Skill 4', level: 'Advanced', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry' },
  ];

  return (
    <Wrapper>
      <Text variant={isDesktop ? 'Huge' : 'Large'}>Skills</Text>
      <CardsWrapper>
        {skills.map((skill) => (
          <SkillCard {...skill} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};
