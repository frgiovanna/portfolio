import { Wrapper, Header, HeaderContent, Icon } from './styles';
import { Text } from '../../../../shared/components/Text';
import { theme } from '../../../../shared/theme';
import { Card } from '../../../../shared/components/Card';

interface SkillCardProps {
  title: string;
  level: string;
  description: string;
}

export const SkillCard = ({ title, level, description }: SkillCardProps) => {
  return (
    <Card>
      <Wrapper>
        <Header>
          <Icon />
          <HeaderContent>
            <Text variant="H2" color={theme.colors.night}>
              {title}
            </Text>
            <Text color={theme.colors.night}>{level}</Text>
          </HeaderContent>
        </Header>
        <Text>{description}</Text>
      </Wrapper>
    </Card>
  );
};
