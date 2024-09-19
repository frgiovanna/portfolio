import { styled } from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 120px;
  }
`;

export const Image = styled.img`
  width: 360px;
  height: 360px;

  @media (min-width: 1024px) {
    padding-right: 100px;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 64px;
`;
