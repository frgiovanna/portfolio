import { Text } from '../../shared/components/Text';
import { useBreakpoints } from '../../shared/hooks/useBreakpoints';
import { LinkCard, LinkCardProps } from './components/LinkCard';
import { Wrapper, LinksWrapper, ContentWrapper } from './styles';

export const FindMe = () => {
  const { isDesktop } = useBreakpoints();

  const magazines: LinkCardProps[] = [
    { title: 'xpto1', description: 'Lorem Ipsum is simply dummy text of the', link: '#' },
    { title: 'xpto2', description: 'Lorem Ipsum is simply dummy text of the', link: '#' },
    { title: 'xpto3', description: 'Lorem Ipsum is simply dummy text of the', link: '#' },
    { title: 'xpto4', description: 'Lorem Ipsum is simply dummy text of the', link: '#' },
  ];

  return (
    <Wrapper>
      <ContentWrapper>
        <Text variant={isDesktop ? 'Huge' : 'Large'}>Find Me</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
      </ContentWrapper>
      <LinksWrapper>
        {magazines.map((magazine) => (
          <LinkCard {...magazine} />
        ))}
      </LinksWrapper>
    </Wrapper>
  );
};
