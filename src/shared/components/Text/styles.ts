import styled from 'styled-components';
import { theme } from '../../theme';

type Props = { color?: string };

export const Huge = styled.h1<Props>`
  margin: 0;
  font-family: ${theme.fontFamily.abrilFatFace};
  font-size: 80px;
  line-height: 80px;
  font-weight: 400;
  color: ${({ color }) => color || theme.colors.night};
`;

export const Large = styled.h1<Props>`
  margin: 0;
  font-family: ${theme.fontFamily.abrilFatFace};
  font-size: 64px;
  line-height: 80px;
  color: ${({ color }) => color || theme.colors.night};
`;

export const H1 = styled.h1<Props>`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: ${({ color }) => color || theme.colors.night};
`;

export const H2 = styled.h2<Props>`
  margin: 0;
  font-size: 20.8px;
  font-weight: 600;
  color: ${({ color }) => color || theme.colors.night};
`;

export const H3 = styled.h3<Props>`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ color }) => color || theme.colors.dawn};
`;

export const Body = styled.p<Props>`
  margin: 0;
  color: ${({ color }) => color || theme.colors.dawn};
`;
