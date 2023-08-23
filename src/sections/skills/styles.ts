import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  background-color: ${theme.colors.morning};

  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 32px 32px 48px;

  @media (min-width: 1024px) {
    gap: 64px;
    padding: 5% 12%;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (min-width: 1024px) {
    gap: 64px;
  }
`;
