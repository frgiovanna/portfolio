import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  max-width: 480px;
  padding: 28px 28px 28px 30px;
  border-left: 4px solid ${theme.colors.evening};
  border-radius: 0 24px 24px 0;
  background: rgba(255, 255, 255, 0.42);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.58);

  h2 {
    color: ${theme.colors.twilight};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 72px;
  }
`;
