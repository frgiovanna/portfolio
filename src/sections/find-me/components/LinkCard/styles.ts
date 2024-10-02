import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 30px;
`;

export const Image = styled.img`
  width: 32px;

  @media (min-width: 1024px) {
    width: 48px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
