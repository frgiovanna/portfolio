import styled from 'styled-components';
import { theme } from '../../theme';

type Props = { color?: string };

export const Huge = styled.h1<Props>`
  margin: 0;
  font-family: ${theme.fontFamily.abrilFatFace};
  font-size: 64px;
  line-height: 64px;
  font-weight: 400;
  color: ${({ color }) => color || theme.colors.night};

  @media (min-width: 1024px) {
    font-size: 80px;
    line-height: 80px;
  }
`;

export const Large = styled.h1<Props>`
  margin: 0;
  font-family: ${theme.fontFamily.abrilFatFace};
  font-size: 56px;
  line-height: 56px;
  color: ${({ color }) => color || theme.colors.night};

  @media (min-width: 1024px) {
    font-size: 64px;
    line-height: 64px;
  }
`;

export const H1 = styled.h1<Props>`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${({ color }) => color || theme.colors.night};
`;

export const H2 = styled.h2<Props>`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: ${({ color }) => color || theme.colors.night};
`;

export const H3 = styled.h3<Props>`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({ color }) => color || theme.colors.dawn};
`;

export const Body = styled.p<Props>`
  margin: 0;
  color: ${({ color }) => color || theme.colors.dawn};
`;
