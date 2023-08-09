import { styled } from 'styled-components';
import { theme } from '../../shared/theme';

export const Wrapper = styled.section`
  background-color: ${theme.colors.morning};
  height: calc(100vh - 84px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 456px;
  height: 456px;
`;

export const Title = styled.h1`
  font-family: ${theme.fontFamily.abrilFatFace};
  font-size: 80px;
  line-height: 80px;
  font-weight: 400;
  color: ${theme.colors.night};
`;

export const Description = styled.p`
  color: ${theme.colors.night};
`;
