import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '@shared/theme';

const float = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(-1deg);
  }

  50% {
    transform: translate3d(0, -12px, 0) rotate(1deg);
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 18px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: auto;
  margin-top: 24px;
  gap: 24px;
  padding-bottom: 32px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    min-height: min(470px, calc(100svh - 250px));
    margin-top: 0;
    gap: 0;
    padding-bottom: 0;
  }
`;

export const Image = styled.img`
  position: relative;
  z-index: 1;
  display: block;
  width: min(220px, 58vw);
  filter: ${theme.shadows.image};

  @media (min-width: 1024px) {
    width: 410px;
    padding-right: 40px;
    animation: ${float} 6s ease-in-out infinite;
    filter: ${theme.shadows.imageLarge};
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 680px;
  animation: ${fadeUp} 640ms cubic-bezier(0.22, 1, 0.36, 1) both;

  h1 {
    max-width: 11ch;
    background: ${theme.gradients.brandText};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-wrap: balance;
  }

  @media (min-width: 1024px) {
    gap: 48px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
  padding: 18px 18px 18px 20px;
  border-left: ${theme.borders.accentLeft};
  border-radius: 0 ${theme.radii.lg} ${theme.radii.lg} 0;
  background: ${theme.surfaces.cloudLight};
  box-shadow: ${theme.insetShadows.cloud};
`;
