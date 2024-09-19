import styled from 'styled-components';
import { theme } from '../../theme';

interface WrapperProps {
  background: keyof typeof theme.colors;
}

export const Wrapper = styled.section<WrapperProps>`
  background-color: ${({ background }) => theme.colors[background]};
  padding: 32px 0;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 64px 0;
  }
`;
