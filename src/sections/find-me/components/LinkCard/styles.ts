import styled from '@emotion/styled';
import { theme } from '../../../../shared/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 30px;
`;

export const Icon = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    background-color: ${theme.colors.evening};
    border-radius: 30px;
    min-width: 60px;
    min-height: 60px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
