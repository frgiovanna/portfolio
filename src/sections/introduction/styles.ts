import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 456px;
  height: 456px;

  @media (min-width: 1024px) {
    padding-right: 100px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 1024px) {
    gap: 64px;
  }
`;
