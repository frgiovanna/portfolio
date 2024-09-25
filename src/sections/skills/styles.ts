import styled from '@emotion/styled';

export const CardsWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (min-width: 1024px) {
    gap: 64px;
  }
`;
