import { Image, Link, Wrapper } from './styles';
import { Text } from '../../../../shared/components/Text';
import { theme } from '../../../../shared/theme';

interface SocialMideaProps {
  link: string;
  image: string;
  title: string;
  subtitle?: string;
}

export const SocialMedia = ({ link, image, title, subtitle }: SocialMideaProps) => {
  return (
    <Link href={link}>
      <Wrapper>
        <Image src={image} alt={title} />
        <div>
          <Text color={theme.colors.night} variant="H3">
            {title}
          </Text>
          <Text>{subtitle}</Text>
        </div>
      </Wrapper>
    </Link>
  );
};
