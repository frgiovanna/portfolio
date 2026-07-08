import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@shared/theme';

interface LinkProps {
  isActive: boolean;
}

export const Link = styled.a<LinkProps>`
  position: relative;
  text-decoration: none;
  color: ${theme.colors.night};
  padding: 10px 12px;
  border-radius: ${theme.radii.pill};
  font-size: 15px;
  font-weight: 700;
  transition:
    background-color ${theme.transitions.default},
    color ${theme.transitions.default},
    transform ${theme.transitions.default};

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${theme.surfaces.lightStrong};
      color: ${theme.colors.twilight};

      &::after {
        transform: scaleX(1);
      }
    `}

  &::after {
    content: '';
    position: absolute;
    right: 14px;
    bottom: 7px;
    left: 14px;
    height: 2px;
    border-radius: ${theme.radii.pill};
    background: ${theme.gradients.brandLine};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 220ms ease;
  }

  &:hover {
    background-color: ${theme.surfaces.lightGlass};
    transform: translate3d(0, -1px, 0);

    &::after {
      transform: scaleX(1);
    }

    &:active {
      color: ${theme.colors.twilight};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }

    &:hover {
      transform: none;
    }
  }
`;
