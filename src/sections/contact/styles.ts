import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 180px;
  }
`;

export const Image = styled.img`
  width: 100%;

  margin-bottom: -32px;

  @media (min-width: 480px) {
    width: 320px;
    height: 320px;
  }

  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
    margin-bottom: unset;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;


export const DescriptionWrapper = styled.div`
  max-width: 400px;
`;
