import styled from '@emotion/styled';
import { theme } from '../../theme';

interface WrapperProps {
  shadow: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  background-color: ${theme.colors.cloud};
  padding: 16px;
  border-radius: 30px;
  ${({ shadow }) => shadow && 'box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1)'};
`;
