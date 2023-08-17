import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.sky};

  @media (min-width: 1024px) {
    padding: 5% 12%;
    flex-direction: row;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 1024px) {
    background-color: ${theme.colors.morning};
    padding: 32px;
    gap: 32px;
    border-radius: 30px;
  }
`;

export const ContentWrapper = styled.div`
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    flex: 1;
    margin: 48px 10% 0 0;
  }
`;
