import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 120px;
  }
`;

export const Image = styled.img`
  width: 100%;

  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
  align-self: center;
  margin-bottom: -32px;

  @media (min-width: 480px) {
    width: 320px;
    height: 320px;
  }

  @media (min-width: 1024px) {
    width: 360px;
    height: 360px;
    margin-bottom: unset;
  }
`;


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
