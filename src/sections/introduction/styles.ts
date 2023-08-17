import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  background-color: ${theme.colors.morning};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 10% 20%;
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
  gap: 32px;
`;
