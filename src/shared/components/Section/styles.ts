import styled from 'styled-components';
import { theme } from '../../theme';
import { Container as MuiContainer } from '@mui/material';

interface WrapperProps {
  background: keyof typeof theme.colors;
}

export const Wrapper = styled.section<WrapperProps>`
  background-color: ${({ background }) => theme.colors[background]};
  padding: 24px 0;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 64px 0;
  }
`;

export const Container = styled(MuiContainer)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    gap: 64px;
  }
`;
