import { styled } from 'styled-components';
import { theme } from '../../../../shared/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 30px;
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
  flex-direction: column;
  gap: 4px;
`;
