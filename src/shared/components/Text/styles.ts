import styled from 'styled-components';
import { theme } from '../../theme';

type Props = { color?: keyof typeof theme.colors; fontSize?: string; lineHeight?: string };

export const Huge = styled.h1<Props>`
  margin: 0;
  font-family: ${theme.fontFamily.abrilFatFace};
  font-size: ${({ fontSize }) => fontSize || '64px'};
  line-height: ${({ lineHeight }) => lineHeight || '64px'};
  font-weight: 400;
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.night)};

  @media (min-width: 1024px) {
    font-size: ${({ fontSize }) => fontSize || '80px'};
    line-height: ${({ lineHeight }) => lineHeight || '80px'};
  }
`;

export const Large = styled.h1<Props>`
  margin: 0;
  font-family: ${theme.fontFamily.abrilFatFace};
  font-size: ${({ fontSize }) => fontSize || '56px'};
  line-height: ${({ lineHeight }) => lineHeight || '56px'};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.night)};

  @media (min-width: 1024px) {
    font-size: ${({ fontSize }) => fontSize || '64px'};
    line-height: ${({ lineHeight }) => lineHeight || '64px'};
  }
`;

export const H1 = styled.h1<Props>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '24px'};
  line-height: ${({ lineHeight }) => lineHeight || '24px'};
  font-weight: 500;
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.night)};
`;

export const H2 = styled.h2<Props>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '20px'};
  line-height: ${({ lineHeight }) => lineHeight || '20px'};
  font-weight: 500;
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.night)};
`;

export const H3 = styled.h3<Props>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: ${({ lineHeight }) => lineHeight || '16px'};
  font-weight: 500;
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.dawn)};
`;

export const Body = styled.p<Props>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  line-height: ${({ lineHeight }) => lineHeight || '16px'};
  font-weight: 400;
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.dawn)};
`;
