import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { theme } from '@shared/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Image = styled.img`
  border-radius: ${theme.radii.md};
  object-fit: cover;
  height: 80px;
  width: 100%;
  box-shadow: ${theme.insetShadows.night};
  transition:
    filter ${theme.transitions.slow},
    transform ${theme.transitions.slow};

  @media (min-width: 1024px) {
    height: 160px;
  }
`;

interface ButtonProps {
  variant: 'primary' | 'secondary';
}

export const Button = styled.a<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radii.pill};
  padding: 6px 32px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
    background-color ${theme.transitions.default},
    border-color ${theme.transitions.default},
    box-shadow ${theme.transitions.default},
    color ${theme.transitions.default},
    transform ${theme.transitions.default};
  ${({ variant }) =>
    variant === 'primary'
      ? css`
          background: ${theme.gradients.brandSurface};
          color: ${theme.colors.cloud};
          box-shadow: ${theme.shadows.focus};
        `
      : css`
          color: ${theme.colors.evening};
          border: 2px solid ${theme.colors.evening};
        `}

  &:hover,
    &:active {
    background-color: ${theme.colors.morning};
    color: ${theme.colors.cloud};
    transform: translate3d(0, -2px, 0);
  }
  &:active {
    background-color: ${theme.colors.sky};
    color: ${theme.colors.cloud};
    transform: translate3d(0, 0, 0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:active {
      transform: none;
    }
  }
`;
