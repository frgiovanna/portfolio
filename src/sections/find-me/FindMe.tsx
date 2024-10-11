import { Section } from '@shared/components/Section';
import { Text } from '@shared/components/Text';
import { useContentContext } from '@shared/providers/ContentProvider';
import { LinkCard } from './components/LinkCard';
import { Wrapper, LinksWrapper, ContentWrapper, DescriptionWrapper } from './styles';

export const FindMe = () => {
  const {
    content: { findMe, navbar },
  } = useContentContext();

  return (
    <Section background="sky" id={navbar.findMe.id}>
      <Wrapper>
        <ContentWrapper>
          <Text variant="Large">{navbar.findMe.label}</Text>
          <DescriptionWrapper>
            <Text>{findMe.description.lineOne}</Text>
            <Text>{findMe.description.lineTwo}</Text>
            <Text>{findMe.description.lineThree}</Text>
          </DescriptionWrapper>
        </ContentWrapper>
        <LinksWrapper>
          {findMe.magazines.map((magazine) => (
            <LinkCard {...magazine} />
          ))}
        </LinksWrapper>
      </Wrapper>
    </Section>
  );
};
