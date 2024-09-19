import { Card } from '../../../../shared/components/Card';
import { Text } from '../../../../shared/components/Text';
import { Wrapper, Image, Icon, ContentWrapper } from './styles';

export interface LinkCardProps {
  link: string;
  icon?: string;
  title: string;
  description: string;
}
export const LinkCard = ({ link, title, description }: LinkCardProps) => {
  return (
    <Card>
      <Wrapper>
        <Icon />
        <ContentWrapper>
          <Text variant="H2">{title}</Text>
          <Text>{description}</Text>
        </ContentWrapper>

        <a href={link}>
          <Image src="/svg/external-link.svg" alt="image" />
        </a>
      </Wrapper>
    </Card>
  );
};
