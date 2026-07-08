import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const HorizontalLine = styled.div`
  background: rgba(254, 159, 159, 0.48);
  margin-top: 12px;
  height: 3px;
  flex: 1;
  border-radius: ${theme.radii.pill};
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
  gap: 16px;
  flex: 3;
  padding: 22px;
  border-radius: ${theme.radii.xl};
  background: rgba(255, 255, 255, 0.5);
  border: ${theme.borders.cloud};
  box-shadow: 0 16px 36px rgba(16, 55, 94, 0.06);
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
