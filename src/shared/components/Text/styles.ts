import styled from '@emotion/styled';
import { theme } from '../../theme';

type Props = {
  color?: keyof typeof theme.colors;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
  textDecoration?: string;
};

export const Huge = styled.h1<Props>`
  margin: 0;
  font-family: ${theme.fontFamily.abrilFatFace};
  font-size: ${({ fontSize }) => fontSize || 'clamp(56px, 14vw, 72px)'};
  line-height: ${({ lineHeight }) => lineHeight || '0.96'};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.night)};

  @media (min-width: 1024px) {
    font-size: ${({ fontSize }) => fontSize || '88px'};
    line-height: ${({ lineHeight }) => lineHeight || '0.94'};
  }
`;

export const Large = styled.h1<Props>`
  margin: 0;
  font-family: ${theme.fontFamily.abrilFatFace};
  font-size: ${({ fontSize }) => fontSize || '48px'};
  line-height: ${({ lineHeight }) => lineHeight || '0.98'};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.night)};

  @media (min-width: 480px) {
    font-size: ${({ fontSize }) => fontSize || '56px'};
    line-height: ${({ lineHeight }) => lineHeight || '0.98'};
  }

  @media (min-width: 1024px) {
    font-size: ${({ fontSize }) => fontSize || '68px'};
    line-height: ${({ lineHeight }) => lineHeight || '0.98'};
  }
`;

export const H1 = styled.h1<Props>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '28px'};
  line-height: ${({ lineHeight }) => lineHeight || '36px'};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.night)};
`;

export const H2 = styled.h2<Props>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '22px'};
  line-height: ${({ lineHeight }) => lineHeight || '30px'};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.night)};
`;

export const H3 = styled.h3<Props>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: ${({ lineHeight }) => lineHeight || '22px'};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.night)};
`;

export const Body = styled.p<Props>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: ${({ lineHeight }) => lineHeight || '27px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.dawn)};
  text-decoration: ${({ textDecoration }) => textDecoration || 'none'};
`;
