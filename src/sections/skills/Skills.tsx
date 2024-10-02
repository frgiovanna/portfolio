import { Section } from '../../shared/components/Section';
import { useContentContext } from '../../shared/providers/ContentProvider';
import { Category } from './components/Category';
import { CardsWrapper } from './styles';

export const Skills = () => {
  const {
    content: { skills, navbar },
  } = useContentContext();

  return (
    <Section background="morning" title={navbar.skills.label} id={navbar.skills.id}>
      <CardsWrapper>
        {skills.categories.map((category) => (
          <Category {...category} />
        ))}
      </CardsWrapper>
    </Section>
  );
};
