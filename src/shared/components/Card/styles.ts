import styled from '@emotion/styled';
import { theme } from '../../theme';

interface WrapperProps {
  shadow: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  overflow: hidden;
  background:
    ${theme.gradients.card},
    ${theme.colors.cloud};
  border: ${theme.borders.subtle};
  border-radius: ${theme.radii.xl};
  padding: 18px;
  transition:
    box-shadow ${theme.transitions.slow},
    transform ${theme.transitions.slow},
    border-color ${theme.transitions.slow};
  ${({ shadow }) => shadow && `box-shadow: ${theme.shadows.card}`};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${theme.gradients.cardHover};
    opacity: 0;
    pointer-events: none;
    transition: opacity 280ms ease;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(254, 159, 159, 0.46);
    box-shadow: ${theme.shadows.cardHover};
    transform: translate3d(0, -4px, 0);

    &::before {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;
