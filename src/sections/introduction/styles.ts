import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
`;

export const Image = styled.img`
  width: 456px;
  height: 456px;

  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));

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
