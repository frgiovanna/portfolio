import { styled } from 'styled-components';
import { theme } from '../../../../shared/theme';

export const Card = styled.div`
  background-color: ${theme.colors.fog};
  display: flex;
  align-items: center;
  padding: 16px 24px 16px 16px;
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
  margin-right: 24px;
`;

export const Wrapper = styled.div`
  margin-right: 24px;
`;
