import { Text } from '../../../../shared/components/Text';
import { SkillCard } from '../SkillCard';
import { SkillsWrapper, Wrapper } from './styles';

interface CategoryProps {
  title: string;
  skills: {
    title: string;
    image?: string;
  }[];
}

export function Category({ title, skills }: CategoryProps) {
  return (
    <Wrapper>
      <Text variant="H2" color="night">
        {title}
      </Text>
      <SkillsWrapper>
        {skills.map((skill) => (
          <SkillCard {...skill} />
        ))}
      </SkillsWrapper>
    </Wrapper>
  );
}
