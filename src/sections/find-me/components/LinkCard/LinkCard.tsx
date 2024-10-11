import { Card } from '@shared/components/Card';
import { Text } from '@shared/components/Text';
import { Wrapper, Image, ContentWrapper } from './styles';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

interface LinkCardProps {
  link: string;
  icon?: string;
  title: string;
  headline: string;
  image: string;
}
export const LinkCard = ({ link, title, headline, image }: LinkCardProps) => {
  return (
    <Card shadow={false}>
      <Wrapper>
        <Image src={image} />
        <ContentWrapper>
          <Text variant="H2">{title}</Text>
          <Text fontWeight={600}>{headline}</Text>
        </ContentWrapper>

        <a href={link} target="_blank">
          <LaunchRoundedIcon color="info" sx={{ fontSize: '24px' }} />
        </a>
      </Wrapper>
    </Card>
  );
};
