import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${theme.colors.fog};
  padding: 32px;

  @media (min-width: 1024px) {
    padding: 5% 12%;
    gap: 62px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 72px;
  }
`;
