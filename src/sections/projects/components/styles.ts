import { css, styled } from 'styled-components';
import { theme } from '../../../shared/theme';

export const Card = styled.section`
  background-color: ${theme.colors.fog};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Image = styled.img`
  border-radius: 30px;
  object-fit: cover;
  height: 80px;
  width: 100%;

  @media (min-width: 1024px) {
    height: 160px;
  }
`;

interface ButtonProps {
  variant: 'primary' | 'secondary';
}

export const Button = styled.a<ButtonProps>`
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 6px 32px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  ${({ variant }) =>
    variant === 'primary'
      ? css`
          background-color: ${theme.colors.evening};
          color: ${theme.colors.cloud};
        `
      : css`
          color: ${theme.colors.evening};
          border: 2px solid ${theme.colors.evening};
        `}

  &:hover,
          &:focus {
    background-color: ${theme.colors.morning};
    color: ${theme.colors.cloud};
  }
  &:active {
    background-color: ${theme.colors.sky};
    color: ${theme.colors.cloud};
  }
`;