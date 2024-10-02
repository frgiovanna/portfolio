import { Text } from '../../shared/components/Text';

import { Image, ContentWrapper, Wrapper, DescriptionWrapper, LinksWrapper } from './styles';
import { SocialMedia } from './components/SocialMedia';
import { Section } from '../../shared/components/Section';
import { useContentContext } from '../../shared/providers/ContentProvider';

export const Contact = () => {
  const {
    content: { contact, navbar },
  } = useContentContext();

  return (
    <Section background="fog" title={navbar.contact.label} id={navbar.contact.id}>
      <Wrapper>
        <ContentWrapper>
          <DescriptionWrapper>
            <Text>{contact.description}</Text>
          </DescriptionWrapper>

          <LinksWrapper>
            {contact.socialMedia.map((item) => (
              <SocialMedia key={item.image} {...item} />
            ))}
          </LinksWrapper>
        </ContentWrapper>
        <Image src="/png/avatar/waving-avatar.png" alt="waving avatar" />
      </Wrapper>
    </Section>
  );
};
