import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${theme.colors.sky};
  padding: 32px;

  @media (min-width: 1024px) {
    padding: 5% 12%;
    gap: 64px;
  }
`;