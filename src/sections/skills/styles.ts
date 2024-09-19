import { styled } from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (min-width: 1024px) {
    gap: 64px;
  }
`;
