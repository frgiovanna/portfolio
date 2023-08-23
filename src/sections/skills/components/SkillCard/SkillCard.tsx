import { Box, Header, HeaderContent, Icon } from './styles';
import { Text } from '../../../../shared/components/Text';
import { theme } from '../../../../shared/theme';

interface SkillCardProps {
  title: string;
  level: string;
  description: string;
}

export const SkillCard = ({ title, level, description }: SkillCardProps) => {
  return (
    <Box>
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
    </Box>
  );
};
