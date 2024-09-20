import { Section } from '../../shared/components/Section';
import { SkillCard } from './components/SkillCard';
import { CardsWrapper } from './styles';

export const Skills = () => {
  const skills = [
    {
      title: 'Skill 1',
      level: 'Advanced',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry',
    },
    {
      title: 'Skill 2',
      level: 'Advanced',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry',
    },
    {
      title: 'Skill 3',
      level: 'Advanced',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry',
    },
    {
      title: 'Skill 4',
      level: 'Advanced',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry',
    },
    {
      title: 'Skill 5',
      level: 'Advanced',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry',
    },
    {
      title: 'Skill 4',
      level: 'Advanced',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry printing and typesetting industry',
    },
  ];

  return (
    <Section background="morning" title="Skills" id="skills">
      <CardsWrapper>
        {skills.map((skill) => (
          <SkillCard {...skill} />
        ))}
      </CardsWrapper>
    </Section>
  );
};
