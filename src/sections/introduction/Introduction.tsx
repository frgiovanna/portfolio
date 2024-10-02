import { Section } from '../../shared/components/Section';
import { Text } from '../../shared/components/Text';
import { useContentContext } from '../../shared/providers/ContentProvider';
import { Image, ContentWrapper, Wrapper, DescriptionWrapper } from './styles';

export const Introduction = () => {
  const {
    content: { introduction, navbar },
  } = useContentContext();

  return (
    <Section background="morning" id={navbar.home.id}>
      <Wrapper>
        <Image src="/png/avatar/smiling-avatar.png" alt="image" />
        <ContentWrapper>
          <Text variant="Huge">{introduction.title}</Text>
          <DescriptionWrapper>
            <Text>{introduction.description.lineOne}</Text>
            <Text>{introduction.description.lineTwo}</Text>
          </DescriptionWrapper>
        </ContentWrapper>
      </Wrapper>
    </Section>
  );
};
