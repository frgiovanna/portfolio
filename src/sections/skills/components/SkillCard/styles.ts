import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;

  &:hover img {
    transform: rotate(-4deg) scale(1.06);
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${theme.radii.sm};
  padding: 7px;
  background: ${theme.gradients.card};
  box-shadow: ${theme.shadows.sm};
  transition: transform 220ms ease;
`;
