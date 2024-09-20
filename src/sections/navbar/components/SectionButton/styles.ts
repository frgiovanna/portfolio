import styled from 'styled-components';
import { theme } from '../../../../shared/theme';

export const Link = styled.a`
  text-decoration: none;
  color: ${theme.colors.night};
  padding: 12px;
  border-radius: 30px;
  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.light};

    &:active {
      color: ${theme.colors.twilight};
    }
  }
`;
