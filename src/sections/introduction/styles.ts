import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  background-color: ${theme.colors.morning};
  height: calc(100vh - 84px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 456px;
  height: 456px;
`;
