import { Wrapper, Image } from './styles';
import { Text } from '@shared/components/Text';
import { Card } from '@shared/components/Card';

interface SkillCardProps {
  title: string;
  image?: string;
}

export const SkillCard = ({ title, image }: SkillCardProps) => {
  return (
    <Card>
      <Wrapper>
        <Image src={image} alt={`${title} logo`} />
        <Text variant="H3" color="night">
          {title}
        </Text>
      </Wrapper>
    </Card>
  );
};
