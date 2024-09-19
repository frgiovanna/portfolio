import styled from 'styled-components';
import { theme } from '../../../../shared/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Icon = styled.div`
  background-color: ${theme.colors.evening};
  min-width: 60px;
  min-height: 60px;
  border-radius: 30px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
