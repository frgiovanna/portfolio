import { Card } from '../../../../shared/components/Card';
import { Text } from '../../../../shared/components/Text';
import { Wrapper, Icon, ContentWrapper } from './styles';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

export interface LinkCardProps {
  link: string;
  icon?: string;
  title: string;
  description: string;
}
export const LinkCard = ({ link, title, description }: LinkCardProps) => {
  return (
    <Card shadow={false}>
      <Wrapper>
        <Icon />
        <ContentWrapper>
          <Text variant="H2">{title}</Text>
          <Text>{description}</Text>
        </ContentWrapper>

        <a href={link}>
          <LaunchRoundedIcon color="secondary" sx={{ fontSize: '24px' }} />
        </a>
      </Wrapper>
    </Card>
  );
};
