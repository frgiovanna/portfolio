import { Text } from '../../../../shared/components/Text';
import { useBreakpoints } from '../../../../shared/hooks/useBreakpoints';
import { Card, Image, Icon, Wrapper } from './styles';

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
      <Icon />
      <Wrapper>
        <Text variant="H2">{title}</Text>
        <Text>{description}</Text>
      </Wrapper>
      {isDesktop && (
        <a href={link}>
          <Image src="/svg/external-link.svg" alt="image" />
        </a>
      )}
    </Card>
  );
};
