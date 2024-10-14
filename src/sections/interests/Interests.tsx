import { Text } from '@shared/components/Text';

import { Block, ContentWrapper } from './styles';
import { Section } from '@shared/components/Section';
import { useContentContext } from '@shared/providers/ContentProvider';

export const Interests = () => {
  const {
    content: { interests, navbar },
  } = useContentContext();

  return (
    <Section background="fog" title={navbar.interests.label} id={navbar.interests.id}>
      <ContentWrapper>
        {interests.items.map(({ title, description }) => (
          <Block key={title}>
            <Text variant="H2" color="evening">
              {title}
            </Text>
            <Text>{description}</Text>
          </Block>
        ))}
      </ContentWrapper>
    </Section>
  );
};
