import { Text } from '../../../../shared/components/Text';
import { useBreakpoints } from '../../../../shared/hooks/useBreakpoints';
import { Card, Image, Icon, ContentWrapper } from './styles';

export interface LinkCardProps {
  link: string;
  icon?: string;
  title: string;
  description: string;
}
export const LinkCard = ({ link, title, description }: LinkCardProps) => {
  const { isDesktop } = useBreakpoints();

  const handleClick = () => {
    window.open(link, '_blank');
  };
  return (
    <Card onClick={() => !isDesktop && handleClick}>
      <ContentWrapper>
        <Icon />
        <div>
          <Text variant="H2">{title}</Text>
          <Text>{description}</Text>
        </div>
      </ContentWrapper>

      {isDesktop && (
        <a href={link}>
          <Image src="/svg/external-link.svg" alt="image" />
        </a>
      )}
    </Card>
  );
};
