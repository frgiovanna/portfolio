import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '@shared/theme';

const waveFloat = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(1deg);
  }

  50% {
    transform: translate3d(0, -10px, 0) rotate(-1deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 180px;
  }
`;

export const Image = styled.img`
  width: min(280px, 78vw);
  margin: -8px auto -28px;
  padding: 0;
  filter: ${theme.shadows.image};
  animation: ${waveFloat} 6.5s ease-in-out infinite;

  @media (min-width: 480px) {
    width: 320px;
  }

  @media (min-width: 1024px) {
    width: 440px;
    margin-bottom: unset;
    padding: unset;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 520px;

  h1 {
    background: ${theme.gradients.darkText};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (min-width: 1024px) {
    gap: 48px;
    max-width: unset;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;

  @media (min-width: 1024px) {
    gap: 32px;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px 20px 20px 22px;
  border-left: ${theme.borders.accentLeft};
  border-radius: 0 ${theme.radii.lg} ${theme.radii.lg} 0;
  background: ${theme.surfaces.cloud};
  box-shadow: ${theme.insetShadows.cloudStrong};
`;
