import styled from 'styled-components';
import { theme } from '../../../../shared/theme';

export const Dot = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: ${theme.colors.evening};
  width: 24px;
  height: 24px;
`;

export const Connector = styled.div`
  background-color: ${theme.colors.morning};
  width: 24px;
  flex-grow: 1;
`;

export const HorizontalLine = styled.div`
  background-color: ${theme.colors.evening};
  margin-top: 12px;
  height: 1px;
  flex: 1;
`;

export const ContentWrapper = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  gap: 8px;

  flex-direction: ${({ position }) => (position === 'right' ? 'row-reverse' : 'row')};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 3;
`;
