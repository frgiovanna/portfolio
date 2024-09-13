import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  background-color: ${theme.colors.fog};

  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 32px 32px 48px;

  @media (min-width: 1024px) {
    gap: 64px;
    padding: 5% 12%;
  }
`;

export const Dot = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: ${theme.colors.evening};
  width: 24px;
  height: 24px;
`;


export const Connector = styled.div`
  background-color: ${theme.colors.morning};
  width: 24px;
  flex-grow: 1;
`;
