import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: fit-content;
  gap: 32px;
  margin-top: 24px;

  @media (min-width: 1024px) {
    background-color: ${theme.colors.morning};
    padding: 32px;
    gap: 32px;
    border-radius: 30px;
    margin-top: 0;
  }
`;

export const ContentWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    gap: 64px;
    flex: 1;
    margin: 8px 10% 0 0;
  }
`;
