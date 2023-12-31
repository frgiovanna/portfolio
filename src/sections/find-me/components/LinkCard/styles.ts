import { styled } from 'styled-components';
import { theme } from '../../../../shared/theme';

export const Card = styled.div`
  background-color: ${theme.colors.fog};
  display: flex;
  align-items: center;
  padding: 16px 24px 16px 16px;
  border-radius: 30px;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;

export const Icon = styled.div`
  background-color: ${theme.colors.evening};
  min-width: 60px;
  min-height: 60px;
  border-radius: 30px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
