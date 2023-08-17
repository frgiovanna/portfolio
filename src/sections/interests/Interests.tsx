import { useBreakpoints } from '../../shared/hooks/useBreakpoints';
import { Text } from '../../shared/components/Text';

import { Block, ContentWrapper, Wrapper } from './styles';
import { theme } from '../../shared/theme';

export const Interests = () => {
  const { isDesktop } = useBreakpoints();

  return (
    <Wrapper>
      <Text variant={isDesktop ? 'Huge' : 'Large'}>Interests</Text>
      <ContentWrapper>
        <Block>
          <Text variant="H2" color={theme.colors.evening}>
            Liderança
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap{' '}
          </Text>
        </Block>
        <Block>
          <Text variant="H2" color={theme.colors.evening}>
            Liderança
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap{' '}
          </Text>
        </Block>
      </ContentWrapper>
    </Wrapper>
  );
};
