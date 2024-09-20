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
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 1024px) {
    background-color: ${theme.colors.morning};
    padding: 24px;
    gap: 24px;
    border-radius: 30px;
    margin-top: 0;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
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
