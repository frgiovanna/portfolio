import styled from 'styled-components';
import { theme } from '../../theme';

interface WrapperProps {
  background: keyof typeof theme.colors;
}
export const Wrapper = styled.section<WrapperProps>`
  background-color: ${({background}) => theme.colors[background]};

  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 32px 32px 48px;

  @media (min-width: 1024px) {
    gap: 64px;
    padding: 5% 8%;
  }
`;
