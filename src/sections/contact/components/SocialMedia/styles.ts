import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-width: 0;
  padding: 12px;
  border-radius: ${theme.radii.lg};
  background: ${theme.surfaces.cloud};
  box-shadow: ${theme.insetShadows.cloud};
  transition: transform 220ms ease;

  &:hover {
    transform: translate3d(6px, 0, 0);
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: ${theme.radii.md};
  padding: 10px;
  background: ${theme.gradients.softContact};
  box-shadow: ${theme.shadows.sm};
`;

export const Link = styled.a`
  display: block;
  width: 100%;
  text-decoration: none;
  border-radius: ${theme.radii.lg};

  &:focus-visible {
    outline: 3px solid rgba(29, 99, 166, 0.38);
    outline-offset: 6px;
  }
`;
