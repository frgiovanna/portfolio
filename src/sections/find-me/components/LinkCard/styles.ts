import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: ${theme.radii.xl};

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    flex: 0 0 auto;
    border-radius: ${theme.radii.pill};
    background: ${theme.surfaces.skyGlass};
    transition:
      background-color ${theme.transitions.default},
      transform ${theme.transitions.default};
  }

  &:hover a {
    background: ${theme.colors.sky};
    transform: translate3d(2px, -2px, 0);
  }

  &:hover > img {
    transform: scale(1.08);
  }

  @media (min-width: 1024px) {
    gap: 16px;

    a {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Image = styled.img`
  width: 28px;
  border-radius: ${theme.radii.sm};
  background: ${theme.colors.cloud};
  box-shadow: ${theme.shadows.sm};
  transition: transform 220ms ease;

  @media (min-width: 1024px) {
    width: 48px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  min-width: 0;

  h2 {
    font-size: 18px;
    line-height: 24px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1024px) {
    gap: 6px;

    h2 {
      font-size: 22px;
      line-height: 30px;
    }

    p {
      font-size: 16px;
      line-height: 27px;
    }
  }
`;
