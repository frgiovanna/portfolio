import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  background-color: ${theme.colors.morning};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 32px 48px;

  @media (min-width: 1024px) {
    padding: 5% 12%;
  }
`;

export const Image = styled.img`
  width: 456px;
  height: 456px;

  @media (min-width: 1024px) {
    padding-right: 100px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 1024px) {
    gap: 64px;
  }
`;
